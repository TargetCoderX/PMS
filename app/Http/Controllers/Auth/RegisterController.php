<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\SendPasswordToUser;
use App\Models\Language;
use App\Models\TimeZone;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Laravel\Sanctum\PersonalAccessToken;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth.Register');
    }

    public function saveUserData(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:20',
            'last_name' => 'required|string|max:20',
            'email' => 'required|email|unique:users|max:50',
            'phone' => 'required|numeric|digits:10',
            'address' => 'required|string|max:100',
            'job_title' => 'required|string|max:20',
        ]);
        $generateRandomPassword = Str::random(8);
        try {
            $user = User::create([
                'name' => ucfirst(trim($request->first_name)) . ' ' . ucfirst(trim($request->last_name)),
                'first_name' => ucfirst(trim($request->first_name)),
                'last_name' => ucfirst(trim($request->last_name)),
                'email' => trim($request->email),
                'phone' => trim($request->phone),
                'address' => ucfirst(trim($request->address)),
                'job_title' => ucfirst(trim($request->job_title)),
                'role' => 'organization-admin',
                'password' => Hash::make($generateRandomPassword),
            ]);

            $generateToken = $user->createToken('auth_token')->plainTextToken;
            Mail::to($user->email)->send(new SendPasswordToUser($generateToken, $user));
            return redirect()->route('login')->with([
                'status' => 'success',
                'message' => 'User created successfully, Check your email for the verification link.'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }

    public function verifyEmail($token)
    {
        $accessToken = PersonalAccessToken::findToken($token);
        if (!$accessToken) {
            return redirect('/')->with([
                'status' => 'error',
                'message' => 'Invalid or expired verification link.'
            ]);
        }
        $user = $accessToken->tokenable;
        if (!$user->email_verified_at) {
            $user->email_verified_at = now();
            $user->save();
        }
        $languages = Language::all();
        $timezones = TimeZone::all();

        return Inertia::render('Auth/ChangePassword', ['user' => $user, 'token' => $token])->with([
            'status' => 'success',
            'message' => 'Your email has been verified. Please reset your password.'
        ]);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'password' => ['required', 'confirmed', 'min:8', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'],
        ]);
        $accessToken = PersonalAccessToken::findToken($request->token);
        if (!$accessToken) {
            return redirect('/')->with([
                'status' => 'error',
                'message' => 'Invalid or expired verification link.'
            ]);
        }
        $user = $accessToken->tokenable;
        $user->password = Hash::make($request->password);
        $user->save();
        $accessToken->delete();
        return redirect()->route('login')->with([
            'status' => 'success',
            'message' => 'Password created successfully.'
        ]);
    }
}

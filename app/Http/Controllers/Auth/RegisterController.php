<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\SendPasswordToUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Support\Str;

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
                'name' => ucfirst($request->first_name) . ' ' . ucfirst($request->last_name),
                'first_name' => ucfirst($request->first_name),
                'last_name' => ucfirst($request->last_name),
                'email' => $request->email,
                'phone' => $request->phone,
                'address' => ucfirst($request->address),
                'job_title' => ucfirst($request->job_title),
                'password' => Hash::make($generateRandomPassword),
                'role' => 'organization-admin',
            ]);
            Mail::to($user->email)->send(new SendPasswordToUser($generateRandomPassword, $user));
            return redirect()->route('/login')->with([
                'status' => 'success',
                'message' => 'User created successfully, Check your email for the password.'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }
}

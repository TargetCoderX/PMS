<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index(){
        return Inertia::render('Auth.Register');
    }

    public function saveUserData(Request $request){
        $request->validate([
          'first_name' => 'required|string|max:20',
          'last_name' => 'required|string|max:20',
          'email' => 'required|email|unique:users|max:50',
          'phone' => 'required|numeric|max:20',
          'address' => 'required|string|max:20',
          'job_title' => 'required|string|max:20',
        ]);
    }
}

<?php

namespace App\Http\Controllers\PMS;

use App\Http\Controllers\Controller;
use App\Models\Currency;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $currencies = Currency::all();
        return Inertia::render('PMS/Project/Project', compact('currencies'));
    }

    public function store(Request $request)
    {
        return redirect()->back()->with([
            'status' => 'success',
            'message' => 'Project added successfully',
        ]);
    }
}

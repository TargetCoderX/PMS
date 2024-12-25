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
        $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required|string|in:active,completed,on hold,archived',
            'priority' => 'required|string|in:low,medium,high,critical',
            'budget' => 'required|integer|min:0',
            'currency' => 'required|string|exists:currencies,code',
            'start_date' => 'required|date|before_or_equal:end_date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'duration' => 'required|integer|min:0',
            'project_type' => 'required|string|in:internal,client,r&d',
            'visibility' => 'required|string|in:private,public',
        ]);
        return redirect()->back()->with([
            'status' => 'success',
            'message' => 'Project added successfully',
        ]);
    }
}

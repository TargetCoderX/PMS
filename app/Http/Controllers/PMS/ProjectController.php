<?php

namespace App\Http\Controllers\PMS;

use App\Http\Controllers\Controller;
use App\Models\Currency;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $currencies = Currency::all();
        $getAllProjectsAccroadingStatus = Project::where('organization_id', Auth::user()->organization_id)
            ->get()
            ->groupBy('status');
        return Inertia::render('PMS/Project/Project', compact('getAllProjectsAccroadingStatus', 'currencies'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'status' => 'required|string|in:active,completed,on hold,archived',
            'priority' => 'required|string|in:low,medium,high,critical',
            'budget' => 'required|integer|min:0',
            'currency_id' => 'required|string|exists:currencies,id',
            'start_date' => 'required|date|before_or_equal:end_date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'duration' => 'required|integer|min:0',
            'project_type' => 'required|string|in:internal,client,r&d',
            'visiblity' => 'required|string|in:private,public',
        ]);
        $data['start_date'] = date('Y-m-d', strtotime($request->start_date));
        $data['end_date'] = date('Y-m-d', strtotime($request->end_date));
        $data['organization_id'] = Auth::user()->organization_id;
        $data['created_by'] = Auth::id();
        try {
            Project::create($data);
            return redirect()->back()->with([
                'status' => 'success',
                'message' => 'Project added successfully',
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->withInput()->with([
                'status' => 'danger',
                'message' => 'Error adding project: ' . $e->getMessage(),
            ]);
        }
    }
}

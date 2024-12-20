<?php

namespace App\Http\Controllers\PMS;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\TimeZone;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    public function addOrganization()
    {
        $timezones = TimeZone::all();
        $languages = Language::all();
        return Inertia::render('Auth/AddOrganization', compact('timezones', 'languages'));
    }
}

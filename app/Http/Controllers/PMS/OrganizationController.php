<?php

namespace App\Http\Controllers\PMS;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Organization;
use App\Models\TimeZone;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    public function addOrganization()
    {
        $timezones = TimeZone::all();
        $languages = Language::all();
        return Inertia::render('Auth/AddOrganization', compact('timezones', 'languages'));
    }

    public function storeOrganization(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'domain' => 'required|unique:organizations',
            'phone' => 'nullable|numeric',
            'address' => 'nullable',
            'city' => 'nullable',
            'country' => 'required',
            'industry' => 'nullable',
            'website' => 'nullable',
            'registration_number' => 'nullable',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'time_zone' => 'required',
            'language_preference' => 'required',
        ]);
        try {
            $logoData = $request->file('logo');
            $request->merge(['status' => 'active', 'created_by' => Auth::user()->id]);
            $organizationResponse = Organization::create($request->only([
                'name',
                'domain',
                'phone',
                'address',
                'city',
                'country',
                'industry',
                'website',
                'registration_number',
                'time_zone',
                'language_preference',
                'status',
                'created_by',
                'state',
            ]));

            if ($logoData) {
                $logoName = time() . '-' . $organizationResponse->id . '.' . $logoData->getClientOriginalExtension();
                $logoPath = $logoData->storeAs('images/organization', $logoName, 'public');
                $organizationResponse->logo = "/storage/" . $logoPath . '/' . $logoName;
                $organizationResponse->save();
            }
            $user = User::find(Auth::user()->id);
            $user->is_organization_added = Config::get('constants.organization_added');
            $user->save();
            return response()->json(['message' => 'Organization created successfully'], 200);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}

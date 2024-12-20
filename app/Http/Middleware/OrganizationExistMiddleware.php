<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

class OrganizationExistMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::user()->is_organization_added == 0 && Route::currentRouteName() != 'organization.add-organization') {
            return redirect()->route('organization.add-organization');
        } elseif (Auth::user()->is_organization_added == 0 && Route::currentRouteName() == 'organization.add-organization') {
            return $next($request);
        } elseif (Auth::user()->is_organization_added == 1) {
            if (Route::currentRouteName() == 'organization.add-organization') {
                return redirect()->route('dashboard.index');
            } else {
                return $next($request);
            }
        }
    }
}

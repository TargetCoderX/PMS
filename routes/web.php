<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\PMS\DashboardController;
use App\Http\Controllers\PMS\OrganizationController;
use App\Http\Controllers\PMS\ProjectController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\OrganizationExistMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
    /* return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]); */
});

Route::controller(RegisterController::class)->group(function () {
    Route::get('register', 'index')->name('register');
    Route::post('save-user-data', 'saveUserData')->name('save-user-data');
    Route::get('verify-email/{token}', 'verifyEmail')->name('verify-email');
    Route::post('change-password', 'changePassword')->name('password.change');
});

Route::middleware(['auth', OrganizationExistMiddleware::class])->group(function () {
    Route::controller(DashboardController::class)->as('dashboard.')->prefix('dashboard')->group(function () {
        Route::get('/', 'dashboard')->name('index');
    });

    Route::controller(OrganizationController::class)->as('organization.')->prefix('organization')->group(function () {
        Route::get('/', 'addOrganization')->name('add-organization');
        Route::post('/store', 'storeOrganization')->name('store')->withoutMiddleware(OrganizationExistMiddleware::class);
    });

    Route::controller(ProjectController::class)->as('project.')->prefix('project')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/store', 'store')->name('store');
    });
});

/* Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
}); */

require __DIR__ . '/auth.php';

<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;


// Root route 
Route::get('/',fn()=>inertia('Landing/Welcome'));

// <---- Landing page route ---->

Route::get('/home',fn()=>inertia('Landing/Welcome'))
        ->name('landing.home');
// Route the contact
Route::get('/contact',fn()=>inertia('Landing/Contact'))
       ->name('landing.contact');
// Route the courses
Route::get('/courses',fn()=>inertia('Landing/Course'))
       ->name('landing.course');
// Route the about
Route::get('/about',fn()=>inertia('Landing/About'))
       ->name('landing.about');

// <---- End of landing page route ---->

// <---- Admin page route ---->

Route::middleware(['auth','verified'])->group(function (){
  // Dashboard Route
  Route::get('/dashboard',fn()=>inertia('Admin/User/UserManage'))
        ->name('admin.dashboard');
});

// <---- End of admin page route ---->

// <---- Profile route ---->
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// <---- End of profile route ---->

require __DIR__.'/auth.php';

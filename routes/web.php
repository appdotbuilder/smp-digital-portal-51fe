<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\SpmbController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page with school portal
Route::get('/', [HomeController::class, 'index'])->name('home');

// Public pages
Route::get('/profil', function () {
    return Inertia::render('profil/index');
})->name('profil');

Route::get('/akademik', function () {
    return Inertia::render('akademik/index');
})->name('akademik');

Route::get('/kesiswaan', function () {
    return Inertia::render('kesiswaan/index');
})->name('kesiswaan');

Route::get('/galeri', function () {
    return Inertia::render('galeri/index');
})->name('galeri');

Route::get('/kontak', function () {
    return Inertia::render('kontak/index');
})->name('kontak');

// News routes
Route::get('/berita', [NewsController::class, 'index'])->name('news.index');
Route::get('/berita/{news}', [NewsController::class, 'show'])->name('news.show');

// SPMB routes
Route::controller(SpmbController::class)->group(function () {
    Route::get('/spmb', 'index')->name('spmb.index');
    Route::get('/spmb/daftar', 'create')->name('spmb.create');
    Route::post('/spmb', 'store')->name('spmb.store');
    Route::get('/spmb/{registrationNumber}', 'show')->name('spmb.show');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

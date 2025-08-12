<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSpmbRegistrationRequest;
use App\Models\SpmbRegistration;
use Inertia\Inertia;

class SpmbController extends Controller
{
    /**
     * Display SPMB information page.
     */
    public function index()
    {
        return Inertia::render('spmb/index');
    }

    /**
     * Show the registration form.
     */
    public function create()
    {
        return Inertia::render('spmb/register');
    }

    /**
     * Store a new registration.
     */
    public function store(StoreSpmbRegistrationRequest $request)
    {
        $registration = SpmbRegistration::create($request->validated());

        return redirect()->route('spmb.show', $registration->registration_number)
            ->with('success', 'Pendaftaran berhasil! Nomor registrasi Anda: ' . $registration->registration_number);
    }

    /**
     * Show registration details.
     */
    public function show(string $registrationNumber)
    {
        $registration = SpmbRegistration::where('registration_number', $registrationNumber)
            ->firstOrFail();

        return Inertia::render('spmb/show', [
            'registration' => $registration,
        ]);
    }
}
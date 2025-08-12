<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSpmbRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'student_name' => 'required|string|max:255',
            'student_email' => 'required|email|unique:spmb_registrations,student_email',
            'student_phone' => 'required|string|max:20',
            'gender' => 'required|in:laki-laki,perempuan',
            'birth_date' => 'required|date|before:today',
            'birth_place' => 'required|string|max:255',
            'address' => 'required|string',
            'previous_school' => 'required|string|max:255',
            'parent_name' => 'required|string|max:255',
            'parent_phone' => 'required|string|max:20',
            'parent_occupation' => 'nullable|string|max:255',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'student_name.required' => 'Nama siswa wajib diisi.',
            'student_email.required' => 'Email siswa wajib diisi.',
            'student_email.email' => 'Format email tidak valid.',
            'student_email.unique' => 'Email sudah pernah digunakan untuk pendaftaran.',
            'student_phone.required' => 'Nomor HP siswa wajib diisi.',
            'gender.required' => 'Jenis kelamin wajib dipilih.',
            'birth_date.required' => 'Tanggal lahir wajib diisi.',
            'birth_date.before' => 'Tanggal lahir tidak valid.',
            'birth_place.required' => 'Tempat lahir wajib diisi.',
            'address.required' => 'Alamat wajib diisi.',
            'previous_school.required' => 'Asal sekolah wajib diisi.',
            'parent_name.required' => 'Nama orang tua wajib diisi.',
            'parent_phone.required' => 'Nomor HP orang tua wajib diisi.',
        ];
    }
}
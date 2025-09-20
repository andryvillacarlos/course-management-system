<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherStoreRequest extends FormRequest
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
            'name' => 'required|string',
            'email' => 'required|email|unique:teachers,email',
            'password' => 'required|string|min:8|max:20|confirmed',
            'password_confirmation' => 'required|string|min:8|max:20',
            ];
    }

    
    public function messages(): array
    {
        return [
            'name.required' => 'The name field is required.',
            'name.string'   => 'The name must be a valid string.',
            'name.max'      => 'The name must not be greater than 255 characters.',

            'email.required' => 'The email field is required.',
            'email.email'    => 'Please enter a valid email address.',
            'email.unique'   => 'This email is already registered.',
            'email.min'      => 'The email must be at least 15 characters long.',
            'email.max'      => 'The email must not exceed 25 characters.',

            'password.required' => 'The password field is required.',
            'password.string'   => 'The password must be a valid string.',
            'password.min'      => 'The password must be at least 8 characters long.',
            'password.max'      => 'The password must not exceed 20 characters.',

            'password_confirmation.required' => 'The confirm password field is required.',
            'password_confirmation.string'   => 'The confirm password must be a valid string.',
            'password_confirmation.min'      => 'The confirm password must be at least 8 characters long.',
            'password_confirmation.max'      => 'The confirm password must not exceed 20 characters.',
        ];
    }
}

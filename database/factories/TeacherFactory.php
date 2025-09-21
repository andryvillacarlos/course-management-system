<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Generate a random password (8–12 chars)
        $plainPassword = $this->faker->password(8, 12);

        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => Hash::make($plainPassword), // store as hashed
            'role' => $this->faker->randomElement(['student', 'teacher']),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\SpmbRegistration;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SpmbRegistration>
 */
class SpmbRegistrationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $genders = ['laki-laki', 'perempuan'];
        $statuses = ['pending', 'verified', 'accepted', 'rejected'];
        
        return [
            'student_name' => $this->faker->name(),
            'student_email' => $this->faker->unique()->safeEmail(),
            'student_phone' => '08' . $this->faker->numerify('##########'),
            'gender' => $this->faker->randomElement($genders),
            'birth_date' => $this->faker->dateTimeBetween('-15 years', '-12 years'),
            'birth_place' => $this->faker->city(),
            'address' => $this->faker->address(),
            'previous_school' => 'SD ' . $this->faker->company(),
            'parent_name' => $this->faker->name(),
            'parent_phone' => '08' . $this->faker->numerify('##########'),
            'parent_occupation' => $this->faker->jobTitle(),
            'status' => $this->faker->randomElement($statuses),
        ];
    }
}
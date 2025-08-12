<?php

namespace Database\Factories;

use App\Models\Extracurricular;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Extracurricular>
 */
class ExtracurricularFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(2, true),
            'description' => $this->faker->paragraph(),
            'advisor' => $this->faker->name() . ', S.Pd.',
            'schedule' => $this->faker->randomElement([
                'Senin, 15:30 - 17:00',
                'Selasa & Kamis, 14:00 - 15:30',
                'Rabu, 15:00 - 16:30',
                'Jumat, 14:30 - 16:00',
            ]),
            'achievements' => $this->faker->sentence(),
            'is_active' => $this->faker->boolean(90),
        ];
    }
}
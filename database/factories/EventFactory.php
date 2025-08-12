<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = $this->faker->dateTimeBetween('now', '+3 months');
        $categories = ['akademik', 'kesiswaan', 'umum'];
        
        return [
            'title' => $this->faker->sentence(4, true),
            'description' => $this->faker->paragraph(),
            'category' => $this->faker->randomElement($categories),
            'start_date' => $startDate,
            'end_date' => $this->faker->boolean(70) ? 
                $this->faker->dateTimeBetween($startDate, $startDate->format('Y-m-d') . ' +7 days') : 
                null,
            'location' => $this->faker->randomElement([
                'Aula Sekolah',
                'Lapangan Olahraga', 
                'Lab Komputer',
                'Ruang Kelas 7A',
                'Perpustakaan',
                null
            ]),
            'is_all_day' => $this->faker->boolean(30),
        ];
    }

    /**
     * Set the event as all day.
     */
    public function allDay(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_all_day' => true,
        ]);
    }

    /**
     * Set the event category.
     */
    public function category(string $category): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => $category,
        ]);
    }
}
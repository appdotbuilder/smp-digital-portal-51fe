<?php

namespace Database\Factories;

use App\Models\Gallery;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['photo', 'video'];
        
        return [
            'title' => $this->faker->sentence(3, true),
            'description' => $this->faker->paragraph(),
            'type' => $this->faker->randomElement($types),
        ];
    }
}
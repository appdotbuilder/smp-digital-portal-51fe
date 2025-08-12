<?php

namespace Database\Factories;

use App\Models\GalleryItem;
use App\Models\Gallery;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GalleryItem>
 */
class GalleryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'gallery_id' => Gallery::factory(),
            'title' => $this->faker->sentence(3, true),
            'description' => $this->faker->sentence(),
            'file_path' => $this->faker->randomElement([
                'gallery/photo1.jpg',
                'gallery/photo2.jpg', 
                null
            ]),
            'video_url' => $this->faker->randomElement([
                'https://www.youtube.com/watch?v=example',
                null
            ]),
            'sort_order' => $this->faker->numberBetween(1, 10),
        ];
    }
}
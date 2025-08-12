<?php

namespace Database\Factories;

use App\Models\Announcement;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Announcement>
 */
class AnnouncementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $priorities = ['low', 'medium', 'high', 'urgent'];
        
        return [
            'title' => $this->faker->sentence(5, true),
            'content' => $this->faker->paragraph(3),
            'priority' => $this->faker->randomElement($priorities),
            'status' => 'published',
            'is_pinned' => $this->faker->boolean(30), // 30% chance of being pinned
            'expires_at' => $this->faker->boolean(60) ? 
                $this->faker->dateTimeBetween('+1 week', '+1 month') : 
                null,
            'author_id' => User::factory(),
        ];
    }

    /**
     * Indicate that the announcement is pinned.
     */
    public function pinned(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_pinned' => true,
        ]);
    }

    /**
     * Indicate that the announcement is urgent.
     */
    public function urgent(): static
    {
        return $this->state(fn (array $attributes) => [
            'priority' => 'urgent',
            'is_pinned' => true,
        ]);
    }

    /**
     * Set the announcement priority.
     */
    public function priority(string $priority): static
    {
        return $this->state(fn (array $attributes) => [
            'priority' => $priority,
        ]);
    }
}
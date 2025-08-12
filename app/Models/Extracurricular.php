<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * App\Models\Extracurricular
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $description
 * @property string|null $image
 * @property string|null $advisor
 * @property string|null $schedule
 * @property string|null $achievements
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular query()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular active()

 * 
 * @mixin \Eloquent
 */
class Extracurricular extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'advisor',
        'schedule',
        'achievements',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($extracurricular) {
            if (empty($extracurricular->slug)) {
                $extracurricular->slug = Str::slug($extracurricular->name);
            }
        });
    }

    /**
     * Scope a query to only include active extracurriculars.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
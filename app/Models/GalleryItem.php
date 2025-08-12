<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\GalleryItem
 *
 * @property int $id
 * @property int $gallery_id
 * @property string $title
 * @property string|null $description
 * @property string|null $file_path
 * @property string|null $video_url
 * @property int $sort_order
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Gallery $gallery
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GalleryItem query()

 * 
 * @mixin \Eloquent
 */
class GalleryItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'gallery_id',
        'title',
        'description',
        'file_path',
        'video_url',
        'sort_order',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'sort_order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the gallery that owns the item.
     */
    public function gallery(): BelongsTo
    {
        return $this->belongsTo(Gallery::class);
    }
}
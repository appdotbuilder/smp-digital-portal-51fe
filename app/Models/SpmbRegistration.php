<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\SpmbRegistration
 *
 * @property int $id
 * @property string $registration_number
 * @property string $student_name
 * @property string $student_email
 * @property string $student_phone
 * @property string $gender
 * @property \Illuminate\Support\Carbon $birth_date
 * @property string $birth_place
 * @property string $address
 * @property string $previous_school
 * @property string $parent_name
 * @property string $parent_phone
 * @property string|null $parent_occupation
 * @property string $status
 * @property string|null $documents
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $verified_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|SpmbRegistration newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SpmbRegistration newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SpmbRegistration query()
 * @method static \Illuminate\Database\Eloquent\Builder|SpmbRegistration pending()
 * @method static \Illuminate\Database\Eloquent\Builder|SpmbRegistration verified()
 * @method static \Illuminate\Database\Eloquent\Builder|SpmbRegistration accepted()

 * 
 * @mixin \Eloquent
 */
class SpmbRegistration extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'registration_number',
        'student_name',
        'student_email',
        'student_phone',
        'gender',
        'birth_date',
        'birth_place',
        'address',
        'previous_school',
        'parent_name',
        'parent_phone',
        'parent_occupation',
        'status',
        'documents',
        'notes',
        'verified_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'birth_date' => 'date',
        'documents' => 'array',
        'verified_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($registration) {
            if (empty($registration->registration_number)) {
                $registration->registration_number = 'SPMB' . date('Y') . str_pad(
                    (string)(static::whereYear('created_at', date('Y'))->count() + 1),
                    4,
                    '0',
                    STR_PAD_LEFT
                );
            }
        });
    }

    /**
     * Scope a query to only include pending registrations.
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope a query to only include verified registrations.
     */
    public function scopeVerified($query)
    {
        return $query->where('status', 'verified');
    }

    /**
     * Scope a query to only include accepted registrations.
     */
    public function scopeAccepted($query)
    {
        return $query->where('status', 'accepted');
    }
}
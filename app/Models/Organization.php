<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Organization extends Model
{
    protected $table = 'organizations';
    protected $fillable = [
        'name',
        'uuid',
        'domain',
        'phone',
        'address',
        'city',
        'country',
        'state',
        'industry',
        'website',
        'registration_number',
        'logo',
        'time_zone',
        'language_preference',
        'status',
        'created_by'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($organization) {
            $organization->uuid = (string) Str::uuid();
        });
    }
}

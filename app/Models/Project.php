<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';

    protected $fillable = [
        'name',
        'status',
        'priority',
        'budget',
        'currency',
        'start_date',
        'end_date',
        'duration',
        'project_type',
        'visibility',
        'organization_id',
        'created_by'
    ];
}

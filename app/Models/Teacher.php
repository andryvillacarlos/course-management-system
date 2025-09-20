<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Teacher extends Model
{
    /** @use HasFactory<\Database\Factories\TeacherFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password'
    ];

    public $incrementing = false;
    protected $keyType = 'string';

   protected static function booted() {
      
    static::creating(function ($teacher) {
        // Hashing the password
        $teacher->password = Hash::make($teacher->password);
        // Set up the uuid
        $teacher->id = (string) \Illuminate\Support\Str::uuid();
       });
   }

    
}

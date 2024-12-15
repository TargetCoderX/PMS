<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $languages = [
            ['created_at' => now(), 'updated_at' => now(), "code" => "en", "name" => "English"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "es", "name" => "Spanish"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "fr", "name" => "French"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "de", "name" => "German"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "zh", "name" => "Chinese"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "hi", "name" => "Hindi"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "ar", "name" => "Arabic"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "ru", "name" => "Russian"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "bn", "name" => "Bengali"],
            ['created_at' => now(), 'updated_at' => now(), "code" => "pt", "name" => "Portuguese"],
        ];

        Language::insert($languages);
    }
}

<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = json_decode(file_get_contents('https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json'), true);
        foreach ($response as $key => $value) {
            Currency::create([
                'name' => $value['name'],
                'code' => $value['code'],
                'name_plural' => $value['name_plural'],
            ]);
        }
    }
}

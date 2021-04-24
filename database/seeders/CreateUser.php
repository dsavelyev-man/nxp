<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class CreateUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
        	"name" => "kriper0nind",
        	"email" => "kriper0nind@gmail.com",
	        "password" => bcrypt("Danechka005")
        ]);
    }
}

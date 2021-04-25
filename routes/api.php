<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function() {
	Route::prefix("admin")->group(function () {
		Route::get("current-user", "App\\Http\\Controllers\\AdminController@getCurrentUser");
		Route::post("posts/create", "App\\Http\\Controllers\\AdminController@createPost");
	});
});

Route::get("posts", "App\\Http\\Controllers\\AdminController@getPosts");

Route::prefix("admin")->group(function () {
	Route::post("login", "App\\Http\\Controllers\\AdminController@login");
});
<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use function MongoDB\BSON\toJSON;

class AdminController extends Controller
{
	public function getCurrentUser(Request $request) {
		$user = $request->user();

		return \response($user);
	}

	public function createPost(Request $request) {
		$data = $request->validate([
			"heading" => "required|max:255",
			"content" => "required"
		]);

		$user = $request->user();

		$data["content"] = json_encode($data["content"]);

		$post = Post::create([
			"user_id" => $user["id"],
			"content" => $data["content"],
			"heading" => $data["heading"]
		]);

		return \response($data);
	}

	public function getPosts() {
		$posts = Post::all();


		foreach ($posts as $post) {
			$post["content"] = json_decode($post["content"]);
		}

		return \response($posts);
	}

    public function login(Request $request) {
    	$data = $request->validate([
    		"email" => "required|max:255|email",
		    "password" => "required|max:255",
	    ]);

    	$user = User::where("email", $data["email"])->first();

    	if(!$user) {
    		return \response([
    			"error" => "EMAIL_INVALID"
		    ], 401);
	    }

    	if(!Hash::check($data["password"], $user["password"])) {
		    return \response([
			    "error" => "PASSWORD"
		    ], 401);
	    }

    	$token = $user->createToken("access_token")->plainTextToken;
    	return \response([
    		"login" => true,
		    "token" => $token,
	    ]);
    }
}

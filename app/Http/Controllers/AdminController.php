<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
	public function getCurrentUser(Request $request) {
		$user = $request->user();

		return \response($user);
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

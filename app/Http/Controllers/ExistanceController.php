<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;

class ExistanceController extends Controller
{
    /**
     * API Recover Password
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login_existance(Request $request)
    {
        $login = $request->only('value');
        if (User::where('login', '=', $login)->exists()) {
            return response()->json([false], 200);
        }
        return response()->json([true], 200);
    }

    public function email_existance(Request $request)
    {
        $login = $request->only('value');
        if (User::where('email', '=', $login)->exists()) {
            return response()->json([false], 200);
        }
        return response()->json([true], 200);
    }
}

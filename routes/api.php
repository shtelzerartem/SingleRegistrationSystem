<?php

use Illuminate\Http\Request;

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
Route::post('signup', 'RegisterController@register');
Route::post('signin', 'LoginController@login');
Route::post('recover', 'RecoverController@recover');

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'LogoutController@logout');
    
    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });
});
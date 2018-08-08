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
Route::post('signup', 'Auth/RegisterController@register');

Route::post('login_existance', 'ExistanceController@login_existance');
Route::post('email_existance', 'ExistanceController@email_existance');

Route::post('signin', 'LozginController@login');
Route::post('recover', 'RecoverController@recover');

Route::group(['middleware' => ['web']], function() {
    Route::get('logout', 'LogoutController@logout');
    
    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });
});
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersFormTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_form', function (Blueprint $table) {
            $table->increments('id');

            $table->string('first_name');
            $table->string('surname'); 
            $table->string('patronymic'); 
            
            $table->string('phone_number');

            $table->boolean('sex');
            $table->date('birth_date');	

            $table->string('school_login');
            $table->integer('school_number'); 
            $table->string('school_type'); 
            $table->string('school_name'); 
            $table->string('school_country'); 
            $table->string('school_place'); 
            $table->integer('school_region'); 
            $table->boolean('school_place_countryside'); 

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_form');
    }
}

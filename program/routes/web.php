<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Route::get('/', [App\Http\Controllers\BlogController::class, 'index']);
    // 一旦こういう形におさめておく。
    return redirect()->route('blog.index');
});
// ブログのコントローラ
Route::resource("blog", App\Http\Controllers\BlogController::class);

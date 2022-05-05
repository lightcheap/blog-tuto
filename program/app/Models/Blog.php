<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    // よくわからんけど、今のところファクトリはいらないからコメアウト
    // use HasFactory;

    protected $blog = null;

    protected $fillable = [
        'title',
        'content',
        'img_title',
        'img_path'
    ];

    /**
     * バリデーションルールを追加しないとね
     */
}

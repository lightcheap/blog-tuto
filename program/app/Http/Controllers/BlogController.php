<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 一旦、なんでもいいからviewを表示する【今は仮表示】
        // ここではブログとして書いた分一覧を表示したい。
        $alldata = Blog::all();
        // blogテーブルを全取得して、表示する
        $_method = "GET";
        return view('blog.index', compact('_method', 'alldata'));
    }

    /**
     * index -> 新規作成formページに行くまでの準備処理をここでやる
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        $_method = "POST";
        $action = '/blog';
        return view('blog.form', compact('_method', 'action') );
    }

    /**
     * 新規で作成したデータを登録する処理
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $karititle = "とりあえず仮タイトル";
        $kariimgtitle = "仮画像";
        $kariimgpath = "path";
        Blog::create([
            'title' => $karititle,
            'content' => $request->input('content'),
            'img_title' => $kariimgtitle,
            'img_path' => $kariimgpath
        ]);

        return redirect('/blog');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * index -> formに行く。ただし、既存データを変更する前処理
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * 既存データを変更したデータを更新処理する
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * 既存データを削除する処理
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $blog = Blog::findOrFail($id);
        $blog->delete();

        return redirect('/blog')->with('message', '削除しました');
    }
}

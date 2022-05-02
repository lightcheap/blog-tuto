<h1>ブログのフォームページ</h1>

<form id="form" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="form-group">
      <label class="form-label">記事</label>
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <div id="editor"></div>
      <input id="content" type="hidden" name="content"
        value="{{ $article->content ?? ""}}">
    </div>
    <div class="form-group">
      <button id="submit-btn" class="btn btn-primary" type="button">登録する</button>
    </div>
  </form>

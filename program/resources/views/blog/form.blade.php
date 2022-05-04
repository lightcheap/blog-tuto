<h1>ブログのフォームページ</h1>

<form id="form" method="post" action="{{$action}}" enctype="multipart/form-data">
  <input type="hidden" name="_method" value="{{$_method}}">
  @csrf
  <div class="form-group">
    <label class="form-label">記事</label>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <div id="editor">editor js</div>
    <input id="content" type="hidden" name="content" value="{{ $blog->content ?? ""}}">
  </div>
  <div class="form-group">
    <input type="hidden" name="action" value="update">
    <button id="submit-btn" class="btn btn-primary" type="button">登録する</button>
  </div>
</form>
<div>
  <a href="{{route('blog.index')}}" type="button" class="btn btn-primary">戻る</a>
</div>
<script src="{{ mix('/js/editor.js') }}"></script>

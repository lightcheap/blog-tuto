<h1>blog.index</h1>
<a href={{route('blog.create')}} type="button">新規作成</a>
<h3>このページにブログの一覧表を表示する</h3>
<table>
    <thead>
        <tr>
            <th>タイトル</th>
            <th>コンテンツ内容</th>
            <th>画像題名</th>
            <th>画像パス</th>
            <th colspan="2"></th>
        </tr>
    </thead>
</table>
<tbody>
    @foreach ($alldata as $data)
    <tr>
        <td>{{ $data->title}}</td>
        <td>{{ $data->content}}</td>
        <td>{{ $data->img_title}}</td>
        <td>{{ $data->img_path}}</td>
        <td>編集</td>
        <td>削除</td>
    </tr>
    @endforeach
</tbody>

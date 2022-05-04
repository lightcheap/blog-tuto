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
        <td>
            <button type="button" onclick="location.href='{{route('blog.edit', $data->id)}}'">編集</button>
        </td>
        <td>
            <form action="{{route('blog.destroy', $data->id)}}" method="POST" onsubmit="return (confirm('削除します。'));">
                <input type="hidden" name="_method" value="DELETE">
                <input type="hidden" name="_token" value="{{csrf_token()}}">
                <button type="submit" href="#">削除</button>
            </form>
        </td>
    </tr>
    @endforeach
</tbody>

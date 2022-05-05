// todo:これ多分めっちゃ頭悪いやり方してる。要修正
// import EditorJS from '@editorjs/editorjs';
// editor.js本体
const EditorJS = require('@editorjs/editorjs');
// ヘッダープラグイン。
const Header = require('@editorjs/header');
//

// editor.jsにあるsimpleImageを書いてみる
class SimpleImage {
  static get toolbox() {
    return {
      title: 'image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    };
  }

  rendor() {
    return document.createElement('input');
  }

  save(blockContent) {
    return {
      url: blockContent.value
    }
  }
}



/**
 * editor.js
 */
$(function () {

  // 参考：https://qiita.com/yamachita0109/items/2c6c8fd1ef772f7be05b

  // 別タイプの引用ボックス
  // Quoteを継承することで使用可
  // class Box extends Quote {
  //   static get toolbox() {
  //     return {
  //       title: 'Box',
  //       icon: 'Box'
  //     };
  //   }
  // }
  const editor = new EditorJS({
    holder: 'editor',
    autofocus: true,
    placeholder: '記事を作成',
    tools: {
      image: SimpleImage,
      header: {
        class: Header,
        config: {
          placeholder: 'ヘッダーを入れる',
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 2,
        }
      },
    //   quote: Quote,
    //   box: Box,
    //   table: Table,
    //   image: {
    //     class: ImageTool,
    //     config: {
    //       endpoints: {
    //         byFile: '/byFile',
    //         byUrl: '/byUrl',
    //       },
    //       additionalRequestHeaders: {
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //       },
    //     }
    //   },
    //   Color: {
    //     class: ColorPlugin,
    //     config: {
    //       colorCollections: ['#000', '#FF1300', '#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
    //       defaultColor: '#FF1300',
    //       type: 'text',
    //     }
    //   },
    },
    data: function () {
      // 初期表示時の処理
      const v = $('#content').val();
      return v ? JSON.parse(v) : '何も内容なし'
    }(),
    onReady: function () {
      // トラッキング
      console.log('editor.js is ready!');
    },
    onChange: function () {
      // トラッキング
    }
  });

  $('#submit-btn').on('click', function () {
    editor.save().then((data) => {
      $('#content').val(JSON.stringify(data));
      $('#form').submit();
    });
  });
});

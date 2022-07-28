<template>
  <v-container>
    <div id="view" class="code-contrast"></div>
  </v-container>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
// 对比（如果要实现对比功能，必须引入下面两个文件）
import 'codemirror/addon/merge/merge.js'
import 'codemirror/addon/merge/merge.css'

//mode
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/php/php'

import "codemirror/theme/darcula.css"

import "codemirror/addon/fold/foldgutter.css"
import "codemirror/addon/fold/foldcode"
import "codemirror/addon/fold/brace-fold"//折叠js
import "codemirror/addon/fold/xml-fold"//折叠xml和html
import "codemirror/addon/fold/markdown-fold"//折叠md
import "codemirror/addon/fold/comment-fold"//折叠注释，但是测试一下只能折叠html的注释；

import "codemirror/addon/selection/active-line"

import DiffMatchPatch from 'diff-match-patch'

window.diff_match_patch = DiffMatchPatch
window.DIFF_DELETE = -1
window.DIFF_INSERT = 1
window.DIFF_EQUAL = 0
import {ref} from "vue"

export default {
  setup() {
    const origText = ref("");
    const newText = ref("");
    const initDiff = () => {
      let target = document.getElementById("view");
      target.innerHTML = "";
      CodeMirror.MergeView(target, {
        value: origText.value,//左边内容
        orig: newText.value,//右边内容
        lineNumbers: true,//显示行号
        mode: "php",//代码模式为js模式，这里还可以是xml，python，java，等等，会根据不同代码模式实现代码高亮
        highlightDifferences: true, //有差异的地方是否高亮
        revertButtons: true,//revert按钮设置为true可以回滚
        lineWrap: true,// 文字过长时，是换行(wrap)还是滚动(scroll),默认是滚动
        smartIndent: true, // 智能缩进
        matchBrackets: true, // 括号匹配
        foldGutter: true,//代码折叠
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],  // 智能提示
        allowEditingOriginals: true,
        theme: 'darcula',
        collapseIdentical: true
      })
    }
    return {
      origText,
      newText,
      initDiff,
    }
  },
  data: () => ({
    code: '123',
  }),

  created() {
  },
  mounted() {
    this.initDiff()
  },
  methods: {}
}
</script>

<style>
.CodeMirror-merge, .CodeMirror-merge .CodeMirror {
  height: 80vh;
}

/*修改有差异的背景颜色*/
.CodeMirror-merge-r-chunk {
  background: rgba(30, 144, 255, 0.5);
}

.CodeMirror-merge-r-chunk-start {
  border-top: 1px solid dodgerblue;
}

.CodeMirror-merge-r-chunk-end {
  border-bottom: 1px solid dodgerblue;
}

.CodeMirror-merge-r-connect {
  fill: rgba(30, 144, 255, 0.5);
  stroke: rgba(30, 144, 255, 0.5);
  stroke-width: 1px;
}

.CodeMirror-merge-l-chunk {
  background: rgba(30, 144, 255, 0.5);
}

.CodeMirror-merge-l-chunk-start {
  border-top: 1px solid dodgerblue;
}

.CodeMirror-merge-l-chunk-end {
  border-bottom: 1px solid dodgerblue;
}

.CodeMirror-merge-l-connect {
  fill: rgba(30, 144, 255, 0.5);
  stroke: rgba(30, 144, 255, 0.5);
  stroke-width: 1px;
}

.CodeMirror-merge-l-chunk {
  background: rgba(30, 144, 255, 0.5);
}

.CodeMirror-merge-r-chunk {
  background: rgba(30, 144, 255, 0.5);
}

.CodeMirror-merge-l-chunk-start {
  border-top: 1px solid dodgerblue;
}

.CodeMirror-merge-r-chunk-start {
  border-top: 1px solid dodgerblue;
}

.CodeMirror-merge-l-chunk-end {
  border-bottom: 1px solid dodgerblue;
}

.CodeMirror-merge-r-chunk-end {
  border-bottom: 1px solid dodgerblue;
}

</style>
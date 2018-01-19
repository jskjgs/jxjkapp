<script>
  /*
   * Created by zhengji
   * Date: 2017/10/18
   */
  import E from 'wangeditor'

  export default {
    name: 'RichText',
    props: {
      value: String
    },
    mounted () {
      this.configEditor()
      this.setContent(this.value)
    },
    computed: {
      editorContent: {
        get () {
          return this.value
        },
        set (content) {
          this.$emit('input', content)
        }
      }
    },
    methods: {
      // 配置富文本
      configEditor () {
        let editor = this.editor = new E(this.$refs.toolbar, this.$refs.editor)
        // 菜单配置
        editor.customConfig.menus = [
          'head',  // 标题
          'bold',  // 粗体
          'italic',  // 斜体
          'underline',  // 下划线
          // 'strikeThrough',  // 删除线
          'foreColor',  // 文字颜色
          // 'backColor',  // 背景颜色
          'link',  // 插入链接
          'list',  // 列表
          'justify',  // 对齐方式
          'quote',  // 引用
          'image',  // 插入图片
          'table'  // 表格
        ]
        // 监听函数
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        /* 图片上传配置 */
        editor.customConfig.uploadImgMaxLength = 1
        // 自定义上传图片事件
        editor.customConfig.customUploadImg = (files, insert) => {
          if (files.length > 0) {
            this.$uploadFile(files[0]).then(res => {
              const imageUrl = res.content
              if (imageUrl) {
                insert(imageUrl)
              } else {
                throw new Error()
              }
            })
          }
        }
        editor.create()
      },
      // 设置富文本内容
      setContent (content) {
        this.editor.txt.html(content)
      },
      // 获取编辑器内容
      getContent () {
        if (this.editor) {
          return this.editor.txt.html()
        }
      }
    }
  }
</script>

<template>
  <div class="rich-text-editor">
    <div ref="toolbar" class="toolbar">
    </div>
    <div ref="editor" class="editor"></div>
  </div>
</template>

<style lang="scss">
  .rich-text-editor {
    width: 375px;

    .toolbar {
      padding: 0;
      background: #f1f1f1;
      border:1px solid #ccc;
    }
    .editor {
      min-height: 300px;
      // height: 600px;
      border: 1px solid #ccc;
      border-top: 0;
    }

    .w-e-toolbar .w-e-menu {
      line-height: 1;
    }
    .w-e-text {
      overflow-y: auto;
    }
    .w-e-text {
      ul {
        list-style-type: disc;
      }
      ol {
        list-style-type: decimal;
      }
    }
  }
</style>

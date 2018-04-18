<script>
import getPosition from '@/utils/getPosition'
export default {
  name: 'SignBoard',
  data () {
    return {
    }
  },
  mounted () {
    this.unbindTouchmove = this.bindTouchmove(this.$refs.wrap, (e) => {
      e.preventDefault()
    })
    const canvasBoard = this.$refs.board
    // 设置canvas大小
    canvasBoard.width = canvasBoard.clientWidth
    canvasBoard.height = canvasBoard.clientHeight
    this.boardCtx = canvasBoard.getContext('2d')
    // 获取canvas相对于视口左上角位置
    this.boardPos = getPosition(canvasBoard)
    this.boardCtx.beginPath()
    // 储存touch列表
    this.touchlist = []
  },
  beforeDestroy () {
    this.unbindTouchmove()
  },
  methods: {
    bindTouchmove (el, handler) {
      el.addEventListener('touchmove', handler, {
        passive: false
      })
      return () => {
        el.removeEventListener('touchmove', handler)
      }
    },
    handleTouchstart (e) {
      const offset = this.getTouchOffset(e)
      this.boardCtx.moveTo(offset.x, offset.y)
      this.touchlist.push({
        x: offset.x,
        y: offset.y,
        type: 'start'
      })
    },
    handleTouchmove (e) {
      const offset = this.getTouchOffset(e)
      this.boardCtx.lineTo(offset.x, offset.y)
      this.boardCtx.stroke()
      this.touchlist.push({
        x: offset.x,
        y: offset.y,
        type: 'move'
      })
    },
    handleTouchend (e) {
      this.boardCtx.stroke()
    },
    // 获取touch点相对于画板的位置
    getTouchOffset (e) {
      const touchlist = e.touches
      const touch = touchlist[touchlist.length - 1]
      return {
        x: touch.clientX - this.boardPos.left,
        y: touch.clientY - this.boardPos.top
      }
    },
    clearPath () {
      this.boardCtx.clearRect(0, 0, this.$refs.board.width, this.$refs.board.height)
      this.touchlist = []
      this.boardCtx.beginPath()
    },
    getTouchlist () {
      return this.touchlist
    }
  }
}
</script>

<template>
  <div class="sign-board" ref="wrap">
    <canvas 
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove" 
      ref="board"/>
  </div>
</template>

<style lang="scss">
  .sign-board {
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>

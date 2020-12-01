<template>
  <div class="mm-ellipsis-container">
    <div class="shadow">
      <textarea :rows="rows" readonly></textarea>
      <div class="shadow-box" ref="box">
        {{ showContent }}
        <slot name="ellipsis">
          {{ ellipsisText }}
          <span class="ellipsis-btn">{{ btnText }}</span>
        </slot>
        <span ref="tail"></span>
      </div>
    </div>
    <div class="real-box">
      {{ showContent }}
      <slot name="ellipsis" v-if="(textLength < content.length) || btnShow">
        {{ ellipsisText }}
        <span class="ellipsis-btn" @click="clickBtn">{{ btnText }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import resizeObserver from 'element-resize-detector'
const observer = resizeObserver()

export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: '展开'
    },
    ellipsisText: {
      type: String,
      default: '...'
    },
    rows: {
      type: Number,
      default: 3
    },
    btnShow: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      textLength: 0,
      beforeRefresh: null,
      boxWidth: 0,
      boxHeight: 0
    }
  },
  computed: {
    showContent () {
      const length = this.beforeRefresh ? this.content.length : this.textLength
      return this.content.substr(0, this.textLength)
    },
    watchData () {
      return [this.content, this.btnText, this.ellipsisText, this.rows, this.btnShow]
    }
  },
  watch: {
    watchData: {
      immediate: true,
      handler () {
        this.refresh()
      }
    },
  },
  mounted () {
    observer.listenTo(this.$refs.box, (el) => {
      if (el.offsetWidth == this.boxWidth && el.offsetHeight == this.boxHeight) return
      this.boxWidth = el.offsetWidth
      this.boxHeight = el.offsetHeight
      this.refresh()
    })
  },
  beforeDestroy () {
    observer.uninstall(this.$refs.box)
  },
  methods: {
    refresh () {
      this.beforeRefresh && this.beforeRefresh()
      let stopLoop = false
      this.beforeRefresh = () => stopLoop = true
      this.textLength = this.content.length
      const checkLoop = (start, end) => {
        if (stopLoop || start + 1 >= end) {
          this.beforeRefresh = null
          return
        }
        const boxRect = this.$refs.box.getBoundingClientRect()
        const tailRect = this.$refs.tail.getBoundingClientRect()
        const overflow = tailRect.bottom > boxRect.bottom
        overflow ? (end = this.textLength) : (start = this.textLength)
        this.textLength = Math.floor((start + end) / 2)
        this.$nextTick(() => checkLoop(start, end))
      }
      this.$nextTick(() => checkLoop(0, this.textLength))
    },
    clickBtn (event) {
      this.$emit('click-btn', event)
    },
  }
}
</script>

<style lang="stylus" scoped>
.mm-ellipsis-container
  text-align left
  position relative
  line-height 1.5
  .shadow
    width 100%
    display flex
    pointer-events none
    opacity 0
    user-select none
    position absolute
    outline green solid 1px
    textarea
      border none
      flex auto
      padding 0
      resize none
      overflow hidden
      font-size inherit
      line-height inherit
      outline none
    .shadow-box
      position absolute
      left 0
      right 0
      top 0
      bottom 0
  .ellipsis-btn
    cursor pointer
    text-decoration underline
    color #4791ff
</style>
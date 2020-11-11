<template>
  <div class="ellipsis-container">
    <div class="shadow">
      <textarea :rows="rows"></textarea>
      <div class="real-box" ref="box">
        {{ showContent }}{{ ellipsisText }}
        <span class="ellipsis-btn" @click="clickBtn">
          <slot name="btn">{{ btnText }}</slot>
        </span>
        <span ref="tail"></span>
      </div>
    </div>
    <div class="real-box">
      {{ showContent }}{{ ellipsisText }}
      <template v-if="textLength < content.length || btnShow">
        <span class="ellipsis-btn" @click="clickBtn">
          <slot name="btn">{{ btnText }}</slot>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data () {
    return {
      textLength: 0,
      loading: false
    }
  },
  computed: {
    showContent () {
      const length = this.loading ? this.content.length : this.textLength
      return this.content.substr(0, this.textLength)
    },
    boxList () {
      return [
        {
          class: 'shadow-box',
          content: this.content.substr(0, this.textLength),
        },
        {
          class: 'real-box',
          content: this.content.substr(0, this.textLength)
        }
      ]
    },
  },
  mounted () {
    this.refresh()
    window.addEventListener('resize', this.refresh)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.refresh)
  },
  methods: {
    refresh () {
      if (this.loading) return
      this.textLength = 0
      this.loading = true
      console.time('refresh')
      const loop = () => {
        const rect = this.$refs.tail.getBoundingClientRect()
        const elRect = this.$refs.box.getBoundingClientRect()
        if (rect.top >= elRect.bottom) {
          console.timeEnd('refresh')
          this.textLength -= 1
          this.loading = false
          return
        }
        if (this.textLength >= this.content.length) {
          this.loading = false
          return
        }
        this.textLength++
        this.$nextTick(loop)
      }
      this.$nextTick(loop)
    },
    clickBtn (event) {
      this.$emit('click-btn', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.ellipsis-container
  text-align left
  position relative
  line-height 1.5
  font-size 24px
  border 1px solid red
  .shadow
    display flex
    opacity 0
    pointer-events none
    textarea
      border none
      flex auto
      padding 0
      resize none
      overflow hidden
      font-size inherit
      line-height inherit
      outline none
  .real-box, .shadow-box
    position absolute
    overflow hidden
    left 0
    right 0
    top 0
    bottom 0
</style>
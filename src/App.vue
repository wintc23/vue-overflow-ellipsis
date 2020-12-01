<template>
  <div class="page-ellipsis">
    <div class="ellipsis-container">
      <div class="ellipsis-notice">
        组件是自适应宽度的，拖动右下角改变宽度查看效果。
      </div>
      <div class="ellipsis-component">
        <ellipsis
          class="ellipsis-content"
          @click-btn="hideMore(false)"
          :content="content"
          :rows="rows"
          :btnText="btnText"
          :ellipsisText="ellipsisText"
          v-if="ellipsis">
        </ellipsis>
        <div class="ellipsis-content" v-else>
          {{ content }}
          <span class="btn" @click.stop="hideMore(true)">折叠</span>
        </div>
      </div>
      <div class="ellipsis-github">
        github[求star]：<a :href="link" target="_blank">{{ link }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import ellipsis from '@/components/ellipsis'

const content = `
五百里滇池，奔来眼底，披襟岸帻，喜茫茫空阔无边。看东骧神骏，西翥灵仪，北走蜿蜒，南翔缟素。高人韵士，何妨选胜登临。趁蟹屿螺洲，梳裹就风鬟雾鬓；更苹天苇地，点缀些翠羽丹霞，莫辜负四围香稻，万顷晴沙，九夏芙蓉，三春杨柳。
数千年往事，注到心头，把酒凌虚，叹滚滚英雄谁在。想汉习楼船，唐标铁柱，宋挥玉斧，元跨革囊。伟烈丰功，费尽移山心力。尽珠帘画栋，卷不及暮雨朝云；便断碣残碑，都付与苍烟落照。只赢得几杵疏钟，半江渔火，两行秋雁，一枕清霜。
`

export default {
  components: {
    ellipsis
  },
  data () {
    return {
      content,
      rows: 6,
      btnText: '查看全部',
      ellipsisText: '...',
      link: 'https://github.com/Lushenggang/vue-overflow-ellipsis',
      ellipsis: true,
    }
  },
  methods: {
    hideMore (ellipsis) {
      console.log('hidemore')
      this.ellipsis = ellipsis
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-ellipsis
  display flex
  flex-direction column
  text-align center
  justify-content center
  &::before, &::after
    content ''
  &::before
    flex-grow 1
  &::after
    flex-grow 4
  .ellipsis-container
    flex auto
    overflow auto
    .ellipsis-component
      margin 0 auto
      width 560px
      max-width 90%
      resize horizontal
      border 1px solid rgba(64, 158, 255, 1)
      padding 10px 20px
      height auto
      overflow hidden
      .ellipsis-content
        font-size 16px
        line-height 2
        text-align left
    .ellipsis-notice
      padding 20px 0
    .ellipsis-github
      margin 10px 0
    .btn
      color rgba(64, 158, 255, 1)
      text-decoration underline
      cursor pointer
</style>
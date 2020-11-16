# vue-overlow-ellipsis

## 在Vue项目中使用本组件

### 1. 安装
```bash
npm install vue-overflow-ellipsis
# 或
yarn add vue-overflow-ellipsis
```

### 2. 在项目中引入组件以及依赖

```js
import ellipsis from "vue-overflow-ellipsis"
import "vue-overflow-ellipsis/dist/vue-overflow-ellipsis.css"
```

### 3. 使用组件
```html
<template>
  <!-- ... -->
    <ellipsis :content="content" rows></ellipsis>
  <!-- ... -->
</template>

<script>
import ellipsis from 'vue-overflow-ellipsis'
import "vue-overflow-ellipsis/dist/vue-overflow-ellipsis.css"

const content = `
披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？
`

export default {
  name: 'App',
  components: {
    ellipsis,
  },
  data () {
    return {
      content: content,
    }
  }
}
</script>
```

### 4. API
说明：组件动态计算指定行数的容器能容纳的字符数量，动态截取字符串进行显示。组件内部使用ResizeObserver观察元素的size的变动并调用了refresh方法。但是IE不支持ResizeObserver，所以如果需要兼容IE动态

- props
  - content 文本字符串
  - rows 文本最大行数，默认是3
  - ellipsisText 省略号字符，默认是"..."
  - btnText 按钮的文字，默认是“展开”
  - btnShow 是否总是显示按钮，即便未超过最大行数，默认false

- slot
  - ellipsis 自定义省略号和按钮文字，`<span slot="ellipsis">... 查看全部</span>`


---

## 源码运行
可以通过git将本项目clone到本地运行。

### 安装依赖
```
yarn install
```

### 启动开发服务
```
yarn serve
```


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
import "vue-overflow-ellipsis/dist/index.css"
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
import "vue-overflow-ellipsis/dist/index.css"

const content = `
五百里滇池，奔来眼底，披襟岸帻，喜茫茫空阔无边。看东骧神骏，西翥灵仪，北走蜿蜒，南翔缟素。高人韵士，何妨选胜登临。趁蟹屿螺洲，梳裹就风鬟雾鬓；更苹天苇地，点缀些翠羽丹霞，莫辜负四围香稻，万顷晴沙，九夏芙蓉，三春杨柳。数千年往事，注到心头，把酒凌虚，叹滚滚英雄谁在。想汉习楼船，唐标铁柱，宋挥玉斧，元跨革囊。伟烈丰功，费尽移山心力。尽珠帘画栋，卷不及暮雨朝云；便断碣残碑，都付与苍烟落照。只赢得几杵疏钟，半江渔火，两行秋雁，一枕清霜。
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
- events
  - click-btn 展开按钮点击事件


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


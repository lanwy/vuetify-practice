<!-- 
    hidden-sm-and-down

    可见性------------------------------------------------------------
        有条件地显示基于当前视野的元素。这些类使用格式hidden-{breakpoint}-{condition}

        断点（breakpoint） 设置视野大小:

        xs - 格外小的设备
        sm - 小型设备
        md - 中型设备
        lg - 大型设备
        xl - 格外大的设备
        条件（condition） 适用于基于以下前置条件的类:

        only - 仅通过xl断点将元素隐藏在xs上
        and-down - 在指定的断点处隐藏元素，并通过lg断点向下隐藏元素
        and-up - 通过lg断点隐藏指定断点上的元素，并使sm上升
        Additionally, media types can be targeted using the only condition. Both hidden-screen-only and hidden-print-only are currently supported.
    
    Overflow------------------------------------------------------------
        Set the overflow for an element with overflow-{axis}-hidden or simply overflow-hidden.

        overflow-hidden - hide overflow on both the x and y axis
        overflow-y-hidden - hide overflow on the y axis
        overflow-x-hidden - hide overflow on the x axis

    显示------------------------------------------------------------
        指定元素的display属性。这些类可以使用d-{display}格式定义。

        d-inline-flex - 将元素显示属性设置为inline-flex
        d-flex - 将元素显示属性设置为flex
        d-inline-block - 将元素显示属性设置为inline-block
        d-block - 将元素显示属性设置为block
        d-inline - 将元素显示属性设置为inline
        d-none - 将元素显示属性设置为none

-->
<template>
  <v-toolbar light>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-for="item in items" :key="item.text" class="hidden-sm-and-down">
      <v-btn flat>{{ item.text }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            text: 'Link One'
          },
          {
            text: 'Link Two'
          },
          {
            text: 'Link Three'
          }
        ]
      }
    }
  }
</script>
<template>
  <div>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <!-- depressed: 凹陷的按钮依然保持其背景色，但没有框阴影。-->
    <v-btn color="warning" depressed>Warning</v-btn>
    <!-- flag : 扁平按钮没有巷子箱子阴影，也没有背景。只有鼠标悬浮时才显示按钮的容器 -->
    <v-btn color="info" flat>Info</v-btn>

    <!-- icon 图标按钮 -->
    <v-btn flat icon color="pink">
        <v-icon>favorite</v-icon>
    </v-btn>

    <!-- 
        类似于下拉框？ 主要是下拉框边上那个小箭头功能 
        editable: 可编辑的
    -->
    <v-overflow-btn
        editable
        :items="dropdown_font"
        label="Overflow Btn">
    </v-overflow-btn>

    <!-- fab 浮动按钮 圆形的 -->
    <v-btn fab dark small color="primary">
      <v-icon dark>remove</v-icon>
    </v-btn>

    <!-- outline： 轮廓按钮 ： 只有边框色，无背景色-->
    <v-btn outline color="indigo">Outline Button</v-btn>

    <!-- round: 圆角按钮-->
    <v-btn round color="primary" dark>Rounded Button</v-btn>

    <!-- 含加载过程的 -->
    <v-btn
      :loading="loading"
      :disabled="loading"
      color="blue-grey"
      class="white--text"
      @click="loader = 'loading'">
      Upload
      <v-icon right dark>cloud_upload</v-icon>
      <!-- 自定义 loader过程中的图标或文字,此时下面的样式不能少 -->
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </template>
    </v-btn>

    <!-- block:块状按钮，整条的 -->
    <v-btn block color="secondary" dark>Block Button</v-btn>

  </div>
</template>
<script>
export default {
    data() {
        return {
            loader: null,
            loading: false,
            dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

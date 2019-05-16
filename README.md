# vuetify-practice

用组件过程中，开始发现好多样式都未起效，如按钮如下方式写不起效

```
<v-btn color="success">Success</v-btn>
<v-btn color="error">Error</v-btn>
<v-btn color="warning">Warning</v-btn>
<v-btn color="info">Info</v-btn>
```

还会报错：

| 报错信息：                                                   |
| ------------------------------------------------------------ |
| [Vuetify] Missing v-app or a non-body wrapping element with the [data-app] attribute |

**在App.vue中：加上v-app就正常显示** 

In order for your application to work properly, you **must** wrap it in a `v-app` component. This component is required for determining grid breakpoints for the layout. This can exist **anywhere** inside the body, but must be the parent of **ALL** Vuetify components. `v-content` needs to be a direct descendant of `v-app`. 

```
<v-app>
  <router-view/>
</v-app>
```



**安装依赖**

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

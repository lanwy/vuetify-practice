<!-- 
    Breakpoints:xs/sm/md/lg/xl
    
    offset: 偏移对于补偿可能还不可见的元素或控制内容的位置很有用。
        就像断点一样，您可以为仍和可用的大小设置偏移量，这使您可以根据需要精确调整应用程序布局。

    xs12: 小设备上该列占12栅格   sm5（md5）：中小设备该列占5栅格 [layout上的 row wrap不能少]

    offset-xs5: 小设备上偏移5个栅格

-->
<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card dark color="purple">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs7 offset-xs5 offset-md2 offset-lg5>
        <v-card dark color="secondary">
          <v-card-text>xs7 offset-(xs5 | md2 | lg5)</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3>
        <v-card dark color="primary">
          <v-card-text>(xs12 | sm5 | md3)</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
        <v-card dark color="green">
          <v-card-text>(xs12 | sm5 | md5) offset-(xs0 | lg2)</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
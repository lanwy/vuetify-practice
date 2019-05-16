<!-- 
Breakpoints:xs/sm/md/lg/xl

grid-list-md : 列之间的间隔  md的地方可代替的值有（下面数组中的value）：
[
  { text: 'Extra small (2px)', value: 'xs' },
  { text: 'Small (4px)', value: 'sm' },
  { text: 'Medium (8px)', value: 'md' },
  { text: 'Large (16px)', value: 'lg' },
  { text: 'Extra large (24px)', value: 'xl' }
]

text-xs-center : 文字居中 （xs的替代值通上， center可以用left或right替代）

fluid: 流体的？
-->
<template>
  <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
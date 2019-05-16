<!-- 
    每行3列，用xs2,才能体现出对齐的不同，要不然都一样齐了（xs4体现不出对齐）
-->
<template>
  <v-container fluid grid-list-xl>
    <!-- between : 往两边靠-->
    <v-layout row justify-space-between>
      <v-flex xs2>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- around : 均匀分布？-->
    <v-layout row justify-space-around>
      <v-flex xs2>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- center : 往中间靠-->
    <v-layout row justify-center>
      <v-flex xs2>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
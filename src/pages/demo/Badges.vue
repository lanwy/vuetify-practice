<template>
  <div class="text-xs-center" style="margin-top:50px;">
    <v-badge left color="blue">
      <template v-slot:badge>
        <span>6</span>
      </template>
      <v-icon
        large
        color="grey lighten-1">
        shopping_cart
      </v-icon>
    </v-badge>

    <v-badge color="red">
      <template v-slot:badge>
        <span>!</span>
      </template>
      <v-icon
        large
        color="grey">
        mail
      </v-icon>
    </v-badge>
  </div>
</template>

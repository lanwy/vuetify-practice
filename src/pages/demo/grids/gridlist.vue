<!-- 
    layout v-bind为true时（pc模式：computed中的binding，一直是每行一列？）
    xs6生效前提： layout配置 row wrap
    grid-list-xl 
-->
<template>
  <v-container grid-list-xl fluid>
    <v-layout v-bind="binding" row wrap>
      <v-flex xs6>
        <v-card dark color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    }
  }
</script>
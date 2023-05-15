<template>
  <v-main>
    <v-row class="mt-5">
      <v-col
        cols="12"
        md="10"
        offset-md="1"
      >
        <v-card
          border
          style="height: 100vh"
        >
          <router-view class="ma-4" />
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts" setup>
//
</script>

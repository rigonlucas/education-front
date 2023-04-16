<template>
  <v-app-bar-title>GPP - Gestão de projetos pedagógicos</v-app-bar-title>

  <v-spacer />

  <v-btn icon>
    <v-icon>mdi-magnify</v-icon>
  </v-btn>

  <v-btn icon>
    <v-icon>mdi-heart</v-icon>
  </v-btn>

  <v-btn
    icon
    @click="emitToggleRightpanel"
  >
    <v-icon>mdi-account-cog</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import {defineEmits} from 'vue'

const emit = defineEmits(['toggle-right-panel'])

function emitToggleRightpanel() {
    emit('toggle-right-panel')
}
</script>

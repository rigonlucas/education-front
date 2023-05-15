<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      [{{ auth.getUser.name }}]
      [{{ auth.getUser.email }}]
      [{{ auth.getToken }}]
      [{{ auth.isAuthenticated }}]
      <v-btn @click="abrir">
        Abrir
      </v-btn>
    </v-responsive>
  </v-container>
  <v-navigation-drawer
    v-model="sidePanel"
    elevation="1"
    location="right"
    temporary
  >
    adsasdasda
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {useAuthStore} from '@/store/auth'
import {ref} from "vue";

const auth = useAuthStore()

const sidePanel = ref(false)

function abrir() {
    sidePanel.value = !sidePanel.value
}
</script>

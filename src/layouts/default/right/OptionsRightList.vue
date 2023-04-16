<template>
  <v-list-item
    :prepend-avatar="auth.getUser?.avatar"
    :title="auth.getUser.name"
  />

  <v-divider />

  <v-list
    density="compact"
  >
    <v-list-item
      prepend-icon="mdi-view-dashboard"
      title="Minha conta"
      value="account"
    />
    <v-list-item
      :to="{ name: 'auth.login' }"
      prepend-icon="mdi-cog"
      title="Configurações"
      value="about"
    />
    <v-list-item
      prepend-icon="mdi-logout"
      title="Sair"
      value="sair"
      @click="logout"
    />
  </v-list>
</template>
<script lang="ts" setup>
import {useAuthStore} from "@/store/auth";
import router from "@/router";

const auth = useAuthStore()

function logout() {
    auth.setAuthUserToken(null)
    router.push({name: 'auth.login'})
}
</script>

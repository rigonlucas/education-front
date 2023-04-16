<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      [{{ auth.getUser.name }}]
      [{{ auth.getUser.email }}]
      [{{ auth.getToken }}]
      [{{ auth.isAuthenticated }}]
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import {useAuthStore} from '@/store/auth'

const auth = useAuthStore()
</script>

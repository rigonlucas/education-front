<template>
  <v-row>
    <v-col
      class="text-center"
      cols="12"
    >
      <v-avatar
        v-if="auth.getUser?.name"
        size="100"
      >
        <v-img
          v-if="auth.getUser?.avatar"
          :src="auth.getUser?.avatar"
          alt="Avatar"
        />
        <v-avatar
          v-else
          color="primary"
          size="100"
          variant="elevated"
        >
          <h1>{{ auth.getUserNameInicials }}</h1>
        </v-avatar>
      </v-avatar>
      <div
        v-else
        class="mt-5 mb-5"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import {useAuthStore} from "@/store/auth";

const auth = useAuthStore()
</script>

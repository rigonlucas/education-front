<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
      sm="12"
    >
      <v-card
        color="dark"
        max-width="700"
        theme="light"
        variant="flat"
      >
        <template #loader>
          <v-progress-linear
            :active="isLoading"
            color="primary"
            indeterminate
          />
        </template>
        <v-card-title class="text-center mb-3 mt-3">
          <h2 class="">
            Acesso ao ambiente
          </h2>
        </v-card-title>
        <v-card-text>
          <LocalUser />
          <LoginForm @login-loading="loading" />
        </v-card-text>
        <v-divider />
        <template #actions>
          <RegisterOptions />
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import LoginForm from "@/views/auth/login/components/LoginForm.vue";
import RegisterOptions from "@/views/auth/login/components/RegisterOptions.vue";
import LocalUser from "@/views/auth/login/components/LocalUser.vue";
import {ref} from "vue";

const isLoading = ref(false)

function loading(loading: boolean) {
    isLoading.value = loading
}
</script>


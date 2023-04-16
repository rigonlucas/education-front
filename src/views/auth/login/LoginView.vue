<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
      sm="12"
    >
      <v-card
        color="surface"
        max-width="700"
        theme="light"
        variant="flat"
      >
        <v-card-title class="text-center mb-3 mt-3">
          <h2>Acesso ao ambiente</h2>
        </v-card-title>
        <v-card-text>
          <LocalUser />
          <LoginForm />
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
import LocalUser from "@/views/auth/login/components/LocalUser.vue";</script>


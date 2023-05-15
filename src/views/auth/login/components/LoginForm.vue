<template>
  <v-form :disabled="isLoading">
    <v-row
      class="ml-10 mr-10"
      no-gutters
    >
      <v-col cols="12">
        <v-text-field
          :model-value="auth?.getUser?.email ?? ''"
          density="compact"
          label="Email"
          prepend-inner-icon="mdi-email"
          type="email"
          variant="underlined"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :type="passwordShow ? 'text' : 'password'"
          counter
          density="compact"
          label="Senha"
          prepend-inner-icon="mdi-key"
          variant="underlined"
          @click:append="passwordShow = !passwordShow"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          :disabled="isLoading"
          block
          class="mt-3"
          color="primary"
          rounded
          @click="login"
        >
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import router from "@/router";
import {useAuthStore} from '@/store/auth'

const passwordShow = ref(false)
const isLoading = ref(false)
const auth = useAuthStore()

const emit = defineEmits(['login-loading'])

function emitLoginLoading() {
    emit('login-loading', isLoading.value)
}

function login() {
    isLoading.value = true;
    emitLoginLoading()
    auth.setAuthUser(
        'Lucas',
        'lucas@gmail.com',
        'https://randomuser.me/api/portraits/men/78.jpg'
    )
    auth.setAuthUserToken('asda')
    router.push({name: 'home'})
    isLoading.value = false;
    emitLoginLoading()
}
</script>

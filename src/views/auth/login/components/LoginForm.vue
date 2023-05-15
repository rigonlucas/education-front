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
import {useAuthStore} from '@/store/auth'
import router from "@/router";
import apiAuth from "@/infra/api/auth/Auth"
import axios from "axios";

const passwordShow = ref(false)
const isLoading = ref(false)
const auth = useAuthStore()

const emit = defineEmits(['login-loading'])

function emitLoginLoading() {
    emit('login-loading', isLoading.value)
}

async function login() {
    try {
        isLoading.value = true;
        emitLoginLoading()
        const data = await apiAuth.login('aaa', 'sdfsd')
        auth.setAuthUser(data.email, data.name, data.avatar)
        auth.setAuthUserToken(data.token)

        auth.setAuthUser(
            data.name,
            data.email,
            data.avatar
        )
        auth.setAuthUserToken('asdaaaaaa')
        await router.push({name: 'home'})
    } catch (error: unknown) {
        if (!axios.isAxiosError(error)) {
            throw error
        }
    } finally {
        isLoading.value = false;
        emitLoginLoading()
    }
}
</script>

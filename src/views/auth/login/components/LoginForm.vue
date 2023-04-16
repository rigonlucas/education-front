<template>
  <v-form>
    <v-row
      class="ml-10 mr-10"
      no-gutters
    >
      <v-col cols="12">
        <v-text-field
          :model-value="auth.getUser.email ?? ''"
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

const auth = useAuthStore()

console.log(auth.getUser)
console.log(auth.getUser?.email)

function login() {
    auth.setAuthUser(
        'Lucas',
        'lucas@gmail.com',
        'https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg'
    )
    auth.setAuthUserToken('asda')
    router.push({name: 'home'})
}
</script>

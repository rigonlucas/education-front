<template>
  <v-list-item
    :to="{name: 'home'}"
    prepend-icon="mdi-home"
    title="Home"
  />
  <ProjectMenu />
</template>
<script lang="ts" setup>
import ProjectMenu from "@/layouts/default/left/project/ProjectMenu.vue";</script>

<template>
  <v-list-item
    prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
    title="John Leider"
  />

  <v-divider />

  <v-list
    density="compact"
    nav
  >
    <v-list-item
      prepend-icon="mdi-view-dashboard"
      title="Home"
      value="home"
    />
    <v-list-item
      prepend-icon="mdi-forum"
      title="About"
      value="about"
    />
  </v-list>
</template>
<script lang="ts" setup>
</script>

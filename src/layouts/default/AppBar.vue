<template>
  <v-app-bar
    color="top-bar"
    density="compact"
  >
    <template #prepend>
      <v-app-bar-nav-icon @click="toggleLeftPanel" />
    </template>
    <TopList @toggle-right-panel="toggleRightPanel" />
  </v-app-bar>
  <v-navigation-drawer
    v-model="stateLeftSidePanel"
    elevation="24"
    temporary
  >
    <OptionsLeftList />
  </v-navigation-drawer>
  <v-navigation-drawer
    v-model="stateRightSidePanel"
    location="right"
    temporary
  >
    <OptionsRightList />
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import TopList from "@/layouts/default/top/TopList.vue";
import OptionsLeftList from "@/layouts/default/left/OptionsLeftList.vue";
import OptionsRightList from "@/layouts/default/right/OptionsRightList.vue";

const stateLeftSidePanel = ref(false);
const stateRightSidePanel = ref(false);

function toggleLeftPanel() {
    stateRightSidePanel.value = false
    return stateLeftSidePanel.value = !stateLeftSidePanel.value
}

function toggleRightPanel() {
    stateLeftSidePanel.value = false
    return stateRightSidePanel.value = !stateRightSidePanel.value
}
</script>

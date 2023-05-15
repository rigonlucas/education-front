<template>
  <v-list
    :opened="[]"
    density="compact"
  >
    <v-list-group
      fluid
      prepend-icon="mdi-rocket-launch"
    >
      <template #activator="{ props }">
        <v-list-item
          title="Projetos"
          v-bind="props"
        />
      </template>

      <v-list-item
        v-for="([title, icon, route], i) in projectList"
        :key="i"
        :prepend-icon="icon"
        :title="title"
        :to="{name: route}"
        :value="title"
        density="compact"
      />
    </v-list-group>
  </v-list>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {ProjectRoutesEnum} from "@/core/modules/project/enums/ProjectRoutesEnum";

const projectList = computed(() => {
    return [
        ['Lista', 'mdi-format-list-bulleted', ProjectRoutesEnum.peoject_list],
        ['Configurações', 'mdi-cog-outline', ProjectRoutesEnum.peoject_config],
    ]
})
</script>

<style scoped>

</style>

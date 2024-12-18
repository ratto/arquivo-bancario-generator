<script setup lang="ts">
import { RouterView } from 'vue-router';
import { VApp, VContainer } from 'vuetify/components';
import Topbar from './components/Topbar.vue';
import NavigationMenu from './components/NavigationMenu.vue';
import { ref } from 'vue';

const open = ref(false);

function openDrawer(): void {
  open.value = !open.value;
}
</script>

<template>
  <VApp>
    <Topbar @openDrawer="openDrawer" />
    <NavigationMenu :open="open" />
    <VContainer>
      <RouterView />
    </VContainer>
  </VApp>
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { VApp, VContainer } from 'vuetify/components';
import Topbar from './components/Topbar.vue';
import NavigationMenu from './components/NavigationMenu.vue';
</script>

<template>
  <VApp>
    <Topbar />
    <NavigationMenu />
    <VContainer fluid>
      <RouterView />
    </VContainer>
  </VApp>
</template>

<style scoped></style>

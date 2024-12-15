<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { VApp, VContainer } from 'vuetify/components';
import Topbar from './components/Topbar.vue';
</script>

<template>
  <VApp>
    <Topbar />
    <!-- <div class="nav">
      <VContainer>
        <RouterLink to="/">Home</RouterLink> | <RouterLink to="/form-arquivo">Arquivos</RouterLink> |
        <RouterLink to="/sobre">Sobre</RouterLink>
      </VContainer>
    </div> -->
    <VContainer>
      <RouterView />
    </VContainer>
  </VApp>
</template>

<style scoped></style>

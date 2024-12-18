<script setup lang="ts">
import { VNavigationDrawer, VList, VListItem } from 'vuetify/components';
import { useConfigStore } from '../utils/Store';

const store = useConfigStore();
</script>

<template>
  <VNavigationDrawer :model-value="store.drawerOpen" @update:model-value="store.toggleDrawer">
    <VList nav>
      <VListItem to="/">Home</VListItem>
      <VListItem to="/form-arquivo">Arquivos</VListItem>
      <VListItem to="/sobre">Sobre</VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { VAppBar, VAppBarNavIcon } from 'vuetify/components';
import { useConfigStore } from '../utils/Store';

const darkmode = ref(true);
const theme = useTheme();
const store = useConfigStore();

function toggleTheme(e: boolean) {
  theme.global.name.value = e ? 'dark' : 'light';
  darkmode.value = e;
}
</script>

<template>
  <VAppBar>
    <template v-slot:prepend>
      <VAppBarNavIcon @click="store.toggleDrawer" />
    </template>

    <VAppBarTitle>Gerador de Arquivos Bancários</VAppBarTitle>

    <template v-slot:append>
      <VSwitch
        class="me-3"
        :model-value="darkmode"
        true-icon="mdi-weather-night"
        false-icon="mdi-white-balance-sunny"
        @update:model-value="(e) => toggleTheme(e!)"
        :hide-details="true"
      />
    </template>
  </VAppBar>
</template>

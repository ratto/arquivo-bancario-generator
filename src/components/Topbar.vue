<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import { VContainer, VAppBar, VAppBarNavIcon } from 'vuetify/components';
import { useConfigStore } from '../utils/Store';

const darkTheme = ref(true);
const theme = useTheme();
const store = useConfigStore();

function toggleTheme() {
  theme.global.name.value = darkTheme.value ? 'light' : 'dark';
  darkTheme.value = !darkTheme.value;
}
</script>

<template>
  <VContainer>
    <VAppBar>
      <template v-slot:prepend>
        <VAppBarNavIcon @click="store.toggleDrawer" />
      </template>

      <VAppBarTitle>Application Bar</VAppBarTitle>

      <template v-slot:append>
        <VSwitch
          :model-value="darkTheme"
          true-icon="mdi-weather-night"
          false-icon="mdi-white-balance-sunny"
          :hide-details="true"
          @update:model-value="toggleTheme()"
        />
      </template>
    </VAppBar>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VContainer, VAppBar, VAppBarNavIcon } from 'vuetify/components';
import { useConfigStore } from '../utils/Store';

const darkmode = ref(true);
const store = useConfigStore();
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
          v-model="darkmode"
          true-icon="mdi-weather-night"
          false-icon="mdi-white-balance-sunny"
          :hide-details="true"
        />
      </template>
    </VAppBar>
  </VContainer>
</template>

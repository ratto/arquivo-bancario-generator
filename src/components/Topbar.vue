<script setup lang="ts">
import { ref } from 'vue';
import { VContainer, VAppBar, VAppBarNavIcon } from 'vuetify/components';

const darkmode = ref(true);
</script>

<template>
  <VContainer>
    <VAppBar>
      <template v-slot:prepend>
        <VAppBarNavIcon />
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

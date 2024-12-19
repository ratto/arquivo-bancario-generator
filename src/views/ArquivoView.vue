<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { VTextField, VForm } from 'vuetify/components';
import { isRequired, maxLength } from '../utils/Validations';

const testForm = useTemplateRef('test-form');

async function submit() {
  const formIsValid = await testForm.value?.validate();

  if (formIsValid?.valid) console.log('submitted');
}
</script>

<template>
  <div id="arquivo-view">
    <h1>Main</h1>
    <VForm novalidate ref="test-form" @submit.prevent="submit">
      <VTextField name="test" label="Test" :rules="[isRequired, maxLength(4)]" />

      <VBtn type="submit" color="primary">Criar arquivo</VBtn>
    </VForm>
  </div>
</template>

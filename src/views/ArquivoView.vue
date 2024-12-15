<script setup lang="ts">
import { VTextField, VForm } from 'vuetify/components';
import { ValidateField } from '../utils/Validations';
import { useTemplateRef } from 'vue';

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
      <VTextField name="test" label="Test" :rules="[ValidateField]" />

      <VBtn type="submit" color="primary">Criar arquivo</VBtn>
    </VForm>
  </div>
</template>

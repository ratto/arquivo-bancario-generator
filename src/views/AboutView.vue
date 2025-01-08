<script setup lang="ts">
import { loadScript } from '@paypal/paypal-js';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  loadScript({ clientId }).then((paypal: any) => {
    paypal
      ?.Buttons()
      .render('#donate-button-container')
      .catch((error: Error) => {
        console.error('falha ao renderizar os botões Paypal!', error);
      });
  });
});
</script>

<template>
  <div id="about-view">
    <h1>Sobre</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae recusandae quibusdam fugit aspernatur aperiam
      alias veniam, quo similique cumque atque iure, veritatis deserunt magnam repellendus, beatae repudiandae vel.
      Consectetur!
    </p>

    <div id="donate-button-container"></div>
  </div>
</template>

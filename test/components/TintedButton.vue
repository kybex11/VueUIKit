<template>
    <div ref="buttonContainer"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { tintedButton } from 'iosvueuikit/dist/index.js';
  
  export default {
    setup() {
      const buttonContainer = ref(null);
  
      onMounted(() => {
        if (buttonContainer.value) {
          const btn = tintedButton('Tinted Default Button', '', '');
          buttonContainer.value.appendChild(btn);
        }
      });
  
      return {
        buttonContainer,
      };
    },
  }
  </script>
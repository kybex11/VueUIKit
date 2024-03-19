<template>
    <div ref="buttonContainer"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { filledButton } from '../../UIKit/index';
  
  export default {
    setup() {
      const buttonContainer = ref(null);
  
      onMounted(() => {
        if (buttonContainer.value) {
          const btn = filledButton('Filled Default Button', '', '');
          buttonContainer.value.appendChild(btn);
        }
      });
  
      return {
        buttonContainer,
      };
    },
  }
  </script>
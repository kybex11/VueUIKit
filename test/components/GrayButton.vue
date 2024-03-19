<template>
    <div ref="buttonContainer"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { grayButton } from '../../UIKit/index';
  
  export default {
    setup() {
      const buttonContainer = ref(null);
  
      onMounted(() => {
        if (buttonContainer.value) {
          const btn = grayButton('Gray Default Button', '', '');
          buttonContainer.value.appendChild(btn);
        }
      });
  
      return {
        buttonContainer,
      };
    },
  }
  </script>
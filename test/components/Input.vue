<template>
    <div ref="inputContainer"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { input } from 'iosvueuikit/dist/index.js';
  
  export default {
    setup() {
      const inputContainer = ref(null);
  
      onMounted(() => {
        if (inputContainer.value) {
          const inp = input('Input Default', '', '');
          inputContainer.value.appendChild(inp);
        }
      });
  
      return {
        inputContainer,
      };
    },
  }
  </script>
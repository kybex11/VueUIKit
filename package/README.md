# A IOS Ui Kit For Vue
The method of use by another connection method is supported. Only a sample is found in test!

# Example
ex: filledButton('Text', 'Action', 'Custom Class Name')


# Usage
```
npm i iosvueuikit
```
And
```
import { filledButton } from 'iosvueuikit/dist/index.js';

const element = filledButton();
document.body.appendChild(element)
```

# Or
```
<template>
 <div ref="buttonExampleContainer"></div>
</template>

<script>
import { filledButton } from 'iosvueuikit/dist/index.js';

const vueElement = this.$refs.buttonExampleContainer;

const element = filledButton('Text', 'Action', 'Custom Class Name');

vueElement.value.appendChild(element);
</script>
```

# A IOS Ui Kit For Vue
The method of use by another connection method is supported. Only a sample is found in test!

![Screenshot1](images/Screenshot1.png)

# Example
ex: filledButton('Text', 'Action', 'Custom Class Name')


# Usage
```
import { filledButton } from 'VueUIKit';

const element = filledButton();
document.body.appendChild(element)
```

# Or
```
<template>
 <div ref="buttonExampleContainer"></div>
</template>

<script>
import { filledButton } from 'VueUIKit';

const vueElement = this.$refs.buttonExampleContainer;

const element = filledButton('Text', 'Action', 'Custom Class Name');

vueElement.value.appendChild(element);
</script>
```
<template>
  <div class="view-container">
    <h1>Buttons</h1>
    <div class="buttons-container">
      <FilledButton/>
      <br>
      <TintedButton/>
      <br>
      <GrayButton/>
    </div>
    <br>
    <h1>Inputs</h1>
    <div class="buttons-container">
      <Input/>
    </div>
  </div>
</template>

<style>
.view-container {
  align-items: center;
  text-align: center;
}

.view-container h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  transform: translateX(-5.5%);
}
</style>
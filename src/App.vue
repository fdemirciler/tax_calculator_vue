<template>
  <div id="app">
    <TaxCalculator />
  </div>
</template>

<script>
import TaxCalculator from './components/TaxCalculator.vue';

export default {
  name: 'App',
  components: {
    TaxCalculator
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>

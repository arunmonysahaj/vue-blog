<template>
  <HtmlContentComponent/>
</template>

<script>
import HtmlContentComponent from './components/HtmlContentComponent.vue'

export default {
  name: 'App',
  components: {
    HtmlContentComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

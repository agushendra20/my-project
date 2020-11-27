<template>
  <div id="app">
    <div>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
   components: {
     Footer
    },
}
</script>

<style>
#app {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

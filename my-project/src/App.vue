<template>
  <div id="app">
    <h1>Vueduxstagram</h1>

    <router-view></router-view>
  </div>
</template>

<script>
import Photogrid from './components/Photogrid';

export default {
  name: 'app',
  components: {
    Photogrid,

  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
   background-color: #42b983;
}
</style>

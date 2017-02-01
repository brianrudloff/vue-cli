<template>
  <div id="app">
    this is app

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
</style>

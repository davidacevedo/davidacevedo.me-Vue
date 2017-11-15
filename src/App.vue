<template>
  <div id="app">
    <home-page />
  </div>
</template>

<script>
import AppHeader from 'components/AppHeader.vue';
import HomePage from 'components/HomePage.vue';

export default {
  name: 'app',
  components: { HomePage, AppHeader },
  data () {
    return {
      msg: 'Hello, my name is David',
      msg2: 'I am a frontend developer',
    }
  }
}
</script>

<style lang="scss">
@import './styles/reset.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

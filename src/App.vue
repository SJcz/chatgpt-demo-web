<template>
  <router-view></router-view>
</template>

<script >
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {}
</script>

<style>
#app {
  width: 100%;
}
html {
  height: 100%;
}
body {
  display: flex;
  height: auto;
  min-height: 100%;
  padding: 0;
  margin: 0;
}
</style>

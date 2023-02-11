<template>
  <div class="wellcome container">
    <div class="row main-div">
      <div class="col-lg-6 col-lg-offset-3">
        <h1>Chatgpt Demo</h1>
        <h2>书法评测项目 chatgpt demo</h2>
        <h2>让每个同事都可以轻松使用chatgpt</h2>
        <button><router-link to="/chat">进入Demo</router-link></button>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "Wellcome",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wellcome {
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  background-image: linear-gradient(
    to top,
    #fcc5e4 0%,
    #fda34b 15%,
    #ff7882 35%,
    #c8699e 52%,
    #7046aa 71%,
    #0c1db8 87%,
    #020f75 100%
  );
}
.main-div {
  margin-top: 15%;
}
h1 {
  text-transform: uppercase;
  font-size: 26px;
  position: relative;
  padding-bottom: 20px;
  margin: 0px 0px 20px;
}
h2 {
  max-width: 60%;
  margin: 0px auto 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
}
button {
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.11) 2px 4px 6px,
    rgba(0, 0, 0, 0.08) 0px 1px 3px;
  font-size: 14px;
  line-height: 33px;
  font-weight: 600;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  backface-visibility: hidden;
  color: rgb(119, 149, 248);
  text-transform: uppercase;
  height: 46px;
  outline: none;
  margin-top: 10px;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.15s ease 0s, color 0s, box-shadow 0s, transform 0s,
    opacity 0s;
  background: rgb(255, 255, 255);
  border-width: 2px;
  border-style: solid;
  border-color: rgb(250, 250, 250);
  border-image: initial;
  padding: 0px 40px;
}
button a {
  text-decoration: none;
}
</style>
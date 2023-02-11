<template>
  <div class="header">
    <span>{{ roomId }}</span>
    <a href="https://github.com/SJcz/chatgpt-demo-web" target="_blank" title="https://github.com/SJcz/chatgpt-demo-web">
      <img :src="github_icon" class="img-rounded img-icon" />
    </a>
    
  </div>
</template>

<script >
import github_icon from "@/assets/github_icon.svg";
export default {
  
  props: {
    roomId: String,
  },
  name: "RoomHeader",
  data() {
    return { github_icon };
  },
  methods() {
    return {};
  },
};
</script>


<style scoped>
.header {
  color: white;
  font-size: larger;
  background-color: #333;
}

.header span {
  display: block;
  margin: 10px 0 0 20px;
}
.header a {
  display: inline-block;
  position: absolute;
  width: 25px;
  right: 10px;
  top: 10px;
}

.img-icon {
  display: inline-block;
  width: 100%;
}
</style>

<template>
  <div class="aside">
    <div class="connect-info">
      <span
        v-for="item in connectInfo"
        :key="item"
        :class="item.type"
        :item="item"
        >{{ item.date }} {{ item.info }}</span
      >
    </div>
  </div>
</template>

<script>
import github_img from "@/assets/github.svg";
export default {
  props: {
    userCount: Number,
    systemInfo: Object,
    connectInfo: Array,
  },
  name: "RoomAside",
  data() {
    return {
      github_img,
    };
  },
  methods() {
    return {};
  },
  computed: {
    curUser() {
      return this.$store.state.user;
    },
    registerTime() {
      const date = new Date(this.$store.state.user.register_time);
      return (
        date.toLocaleDateString() +
        " " +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
      );
    },
  },
};
</script>


<style scoped>
.user-info {
  padding: 10px;
}

.media-object {
  width: 35px;
  height: 35px;
  border-radius: 3px;
}

.media-heading {
  font-size: small;
  color: #222;
  margin-bottom: 5px;
}

.media-body span {
  font-size: xx-small;
  color: #aaa;
}

.user-num-info {
  margin-top: 20px;
  font-size: small;
  color: #222;
  padding: 10px;
}

.setting-info {
  margin-top: 20px;
  font-size: small;
  color: #222;
  padding: 10px;
}

label {
  font-size: xx-small;
  color: #d3706e;
  margin: 10px;
}

.system-info div {
  padding: 10px 10px;
}

.connect-info {
  padding: 10px 10px;
}

span {
  font-size: x-small;
  color: #333;
  display: block;
  margin: 10px 0;
}

span.error {
  color: rgb(153, 37, 37);
}
span.success {
  color: rgb(64, 122, 41);
}

p {
  margin: 0;
}
</style>

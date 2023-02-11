<template>
  <div class="scrollbar">
    <scroll-view-item
      v-for="item in chatList"
      :key="item"
      :item="item"
      :id="item.scrollId"
    >
    </scroll-view-item>
  </div>
</template>

<script>
import ScrollViewItem from "./ScrollViewItem.vue";
export default {
  components: {
    "scroll-view-item": ScrollViewItem,
  },
  props: {
    chatList: Array,
    swiperHeight: Number,
  },
  name: "ScrollView",
  data() {
    return {};
  },
  watch: {
    chatList: {
      handler() {
        this.$nextTick(() => {
          document
            .getElementById(this.chatList[this.chatList.length - 1].scrollId)
            .scrollIntoView();
        });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.scrollbar {
  overflow-y: auto;
  height: 100%;
}

.scrollbar::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.scrollbar::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: rgb(159, 175, 182);
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(252, 197, 228, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 120, 130, 0.2) 50%,
    rgba(112, 70, 170, 0.2) 75%,
    transparent 75%,
    transparent
  );
}

.scrollbar::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
</style>
<template>
  <h2>生命周期展示</h2>
  <h4>msg:{{ msg }}</h4>
  <button @click="update">update</button>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
export default defineComponent({
  name: "lifeCircle",
  beforeCreate() {
    console.log("2beforeCreate");
  },
  created() {
    console.log("2created");
  },
  beforeMount() {
    console.log("2beforeMount");
  },
  mounted() {
    console.log("2mounted");
  },
  beforeUpdate() {
    console.log("2beforeUpdate");
  },
  updated() {
    console.log("2updated");
  },
  beforeUnmount() {
    console.log("2beforeUnmount");
  },
  unmounted() {
    console.log("2unmounted");
  },

  setup() {
    console.log("3setup");
    const msg = ref("hahaha");
    const update = () => {
      msg.value += "ha";
    };

    onBeforeMount(() => {
      console.log("3onBeforeMount");
    });

    onMounted(() => {
      console.log("3onMounted");
    });

    onBeforeUpdate(() => {
      console.log("3onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("3onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("3onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("3onUnmounted");
    });

    return {
      msg,
      update,
    };
  },
});
</script>
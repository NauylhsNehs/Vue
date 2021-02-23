<template>
  <h2>{{ count }}</h2>
  <div>哈哈哈</div>
  <button @click="update">update</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    //定义响应式对象
    const count = ref(1);
    console.log(count);

    function update() {
      count.value++;
    }

    return {
      count,
      update,
    };
  },
});
</script>

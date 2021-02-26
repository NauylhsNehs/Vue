<template>
  <h2>{{ state }}</h2>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>


toRaw   返回普通对象    是一个还原方法    用于临时读取  不会 被代理/跟踪/触发界面更新
markRaw     永远不会转换为代理      返回对象本身
应用场景:
有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。


<script lang="ts">
//toRaw: 得到reactive代理对象的目标数据对象
import { markRaw, reactive, toRaw } from "vue";
export default {
  setup() {
    const state = reactive<any>({
      name: "tom",
      age: 25,
    });

    const testToRaw = () => {
      const user = toRaw(state);
      user.age++; // 界面不会更新
    };

    const testMarkRaw = () => {
      const likes = ["a", "b"];
      // state.likes = likes
      state.likes = markRaw(likes); // likes数组就不再是响应式的了
      setTimeout(() => {
        state.likes[0] += "--";
      }, 1000);
    };

    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
};
</script>
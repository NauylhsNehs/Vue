<template>
  <h2>App</h2>

  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>

  <button @click="update">更新</button>
</template>

<script lang="ts">
import { reactive, ref, shallowReactive, shallowRef } from "vue";

// shallowReactive: 只处理  最外层  浅响应式
// shallowRef: 只处理value 不进行reactive
// 一个对象数据  只是外层属性变化 ===> shallowReactive
// 一个对象数据  新的对象会来替换 ===> shallowRef

// readonly     深度只读数据    返回原始代理的只读代理      任何嵌套 property 也是只读的
// shallowReadonly      浅只读数据      不执行嵌套对象的深度只读转换

export default {
  setup() {
    const m1 = reactive({ a: 1, b: { c: 2 } });
    const m2 = shallowReactive({ a: 1, b: { c: 2 } });

    const m3 = ref({ a: 1, b: { c: 2 } });
    const m4 = shallowRef({ a: 1, b: { c: 2 } });

    const update = () => {
      // m1.b.c += 1
      // m2.b.c += 1

      // m3.value.a += 1
      m4.value.a += 1;
    };

    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
};
</script>
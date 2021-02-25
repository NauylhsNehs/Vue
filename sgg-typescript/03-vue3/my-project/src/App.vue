<template>
  <h2>{{ count }}</h2>
  <!-- <h3>x:{{ x }},y{{ y }}</h3> -->
  <div>哈哈哈</div>
  <button @click="updateref">update1</button>
  <button @click="updatereactive">update2</button><br />
  <button @click="lcshow = !lcshow">lcshow</button>
  <hr />
  <Child :msg="cmsg" msg2="真香" @XXX="xxx"></Child>
  <Cww />
  <hr />
  <Lc v-if="lcshow" />
  <hr />
  <hook />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Child from "./components/child.vue";
import Cww from "./components/computed-watch-watchEffect.vue";
import Lc from "./components/lifeCircle.vue";
import hook from "./components/hook/hook.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
    Cww,
    Lc,
    hook,
  },
  setup() {
    //定义响应式对象
    const obj: any = {
      //注意any，否则不能响应式添加数据
      name: "nauyihsnehs",
      age: 21,
      gender: "male",
    };
    const count = ref(1);
    const cmsg = ref("nishiwoxinzhongzuimeideyuncai");
    // const user = reactive<any>(obj); //注意any，否则不能响应式添加数据

    // ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
    // ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
    // reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
    const user = reactive(obj);
    // 如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
    const user2 = ref(obj);

    console.log(count);
    console.log(user, user2);

    function updateref() {
      count.value++;
    }

    const updatereactive = () => {
      user.name += "...";
      user.age--;
      user.handsome = "true";
      console.log(user);
    };
    const xxx = (str: string) => {
      cmsg.value += str;
    };
    const lcshow = ref(true);

    // const { x, y } = hook1();
    return {
      count,
      user,
      user2,
      updateref,
      updatereactive,
      cmsg,
      xxx,
      lcshow,
      // x,
      // y,
    };
  },
});
</script>

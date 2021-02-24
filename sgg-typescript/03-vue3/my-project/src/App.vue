<template>
  <h2>{{ count }}</h2>
  <div>哈哈哈</div>
  <button @click="updateref">update1</button>
  <button @click="updatereactive">update2</button>
  <hr />
  <Child :msg="cmsg" msg2="真香" @XXX="xxx"></Child>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Child from "./components/child.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup(props, context) {
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
    const user = reactive(obj);
    console.log(count);
    console.log(user);

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
    return {
      count,
      user,
      updateref,
      updatereactive,
      cmsg,
      xxx,
    };
  },
});
</script>

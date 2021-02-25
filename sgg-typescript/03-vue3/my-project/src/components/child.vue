<template>
  <h1>I'm child components {{ msg }}</h1>
  <button @click="emitXXX">button</button>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Child",
  props: ["msg"],
  emits: ["XXX"],
  setup(props, context) {
    // 在beforeCreate前执行
    // props: 包含props配置声明且传入了的所有属性的对象
    // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    // slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    // emit: 用来分发自定义事件的函数, 相当于 this.$emit
    // context包括attrs、slots、emit等
    console.log(props);
    console.log(context.attrs);
    console.log(context.attrs.msg2);
    console.log(context.emit);

    const emitXXX = () => {
      context.emit("XXX", "++");
    };

    return {
      emitXXX,
    };
  },
});
</script>
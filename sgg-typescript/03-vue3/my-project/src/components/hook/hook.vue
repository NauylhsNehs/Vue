<template>
  <h2>hook展示</h2>
  <h3>x:{{ x }},y{{ y }}</h3>

  <div class="about">
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
    <!-- <ul v-else>
      <li>id: {{ result.id }}</li>
      <li>name: {{ result.name }}</li>
      <li>distance: {{ result.distance }}</li>
    </ul> -->

    <ul v-for="p in result" :key="p.id">
      <li>id: {{ p.id }}</li>
      <li>title: {{ p.title }}</li>
      <li>price: {{ p.price }}</li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { defineComponent, watch } from "vue";
import hook1 from "./hook1";
import hook2 from "./hook2";
interface AddressResult {
  id: number;
  name: string;
  distance: string;
}

interface ProductResult {
  id: string;
  title: string;
  price: number;
}
export default defineComponent({
  setup() {
    const { x, y } = hook1();

    // const { loading, result, errorMsg } = hook2<AddressResult>(
    //   "/data/address.json"
    // );
    const { loading, result, errorMsg } = hook2<ProductResult[]>(
      "/data/product.json"
    );
    console.log(result);

    return {
      x,
      y,
      loading,
      result,
      errorMsg,
    };
  },
});
</script>
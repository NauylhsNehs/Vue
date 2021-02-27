<template>
  <div class="outsider">
    <header />
    <item />
    <list />
    <footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import header from "./components/header.vue";
import list from "./components/list.vue";
import footer from "./components/footer.vue";
import item from "./components/item.vue";
export default defineComponent({
  name: "App",
  components: { header, list, footer, item },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>>

</style>

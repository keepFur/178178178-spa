
<template>
    <div>
        <product-task></product-task>
        <product-kb></product-kb>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
import ProductTask from './ProductTask';
import ProductKb from './ProductKb';
export default {
  components: {
    ProductKb,
    ProductTask
  }
};
</script>

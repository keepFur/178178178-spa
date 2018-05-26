<template>
    <div>
        <header-self></header-self>
        <router-view></router-view>
        <footer-self></footer-self>
    </div>
</template>
<script>
import HeaderSelf from './views/common/HeaderSelf';
import FooterSelf from './views/common/FooterSelf';
export default {
  data() {
    return {};
  },
  components: {
    HeaderSelf,
    FooterSelf
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
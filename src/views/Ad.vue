<template>
    <div class="ad">
        <el-carousel height="469px" trigger="click">
            <el-carousel-item v-for="(img,index) in adImgs" :key="index">
                <img :src="img.src" :alt="img.alt" style="width:100%;">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  data: function() {
    return {
      adImgs: [
        {
          alt: '轮播图1',
          src: '../src/asserts/imgs/ad1.png'
        },
        {
          alt: '轮播图2',
          src: '../src/asserts/imgs/ad1.png'
        },
        {
          alt: '轮播图3',
          src: '../src/asserts/imgs/ad1.png'
        }
      ]
    };
  }
};
</script>

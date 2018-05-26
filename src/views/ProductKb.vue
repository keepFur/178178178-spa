<template>
    <section class="product clearfix" id="worldKB">
        <h2 class="pull-left text-center">
            全国空包
            <em>全国发全国</em>
            <em>提供底单</em>
            <em>安全无忧</em>
        </h2>
        <div class="product-content pull-right">
            <div class="item clearfix" v-for="(kb,index) in kbs" :key="index">
                <h3>
                    <em>{{plants[index]}}</em>平台
                    <i>
                        <el-select v-model="kbSelceteds[index]"  size="mini">
                            <el-option v-for="(kbItem,i) in kb" :label="kbItem.name" :value="kbItem.id" :key="i">
                            </el-option>
                        </el-select>
                    </i>
                </h3>
                <div class="info">
                    <p v-for="(vip,j) in vips" :key="j">
                        {{vip.name}}
                        <span class="year-rate">
                            {{kb[kbSelceteds[index]].price[vip.priceKey]}} 元
                            <i>单</i>
                        </span>
                    </p>
                </div>
                <div class="buy">
                    <a href="#" @click.prevent="buyHandler(index,$event)">立即下单</a>
                </div>
            </div>
            <div class="item clearfix">
                <h3>
                    <em>圆通-韵达</em><span style="color:#f00;">（强烈推荐）</span>
                    <i>
                        全网通用「21点前下单，2小时揽件」
                    </i>
                </h3>
                <div class="info">
                    <p v-for="(vip,index) in vips" :key="index">
                        {{vip.name}}
                        <span class="year-rate">
                           {{ ytKB[0].price[vip.priceKey] }}元
                            <i>单</i>
                        </span>
                    </p>
                </div>
                <div class="buy">
                    <a href="#" @click.prevent="buyHandler(3,$event)">立即下单</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
</style>
<script>
import mockdata from '../libs/mock';
// 空包
const kb = mockdata.kb;
// 淘宝
const tbKB = kb.tbKB;
// 店铺
const jdKB = kb.jdKB;
// 拼多多
const pddKB = kb.pddKB;
// 圆通
const ytKB = kb.ytKB;
// 会员类型
const vips = mockdata.vips;
export default {
  data: function() {
    return {
      kbs: [tbKB, jdKB, pddKB],
      kbSelceteds: [0, 0, 0],
      vips,
      plants: ['淘宝', '京东', '拼多多'],
      ytKB: mockdata.kb.ytKB
    };
  },
  methods: {
    buyHandler: function(index, $event) {
      this.$message({
        message: index,
        type: 'success'
      });
    }
  }
};
</script>

<template>
     <section class="product clearfix" id="mobileCollege">
        <h2 class="pull-left text-center">
            无线流量&宝贝收藏
            <em>实名小号</em>
            <em>真实搜索</em>
            <em>真实操作</em>
        </h2>
        <div class="product-content pull-right">
            <div class="item clearfix" v-for="(task,index) in tasks" :key="index">
                <h3>
                    <em>{{tasksName[index]}}</em>任务
                    <i>
                        <el-select v-model="tasksSelected[index]" size="mini">
                            <el-option v-for="(t,i) in task" :label="t.name" :value="t.id" :key="i">
                            </el-option>
                        </el-select>
                    </i>
                </h3>
                <div class="info">
                    <p v-for="(vip,j) in vips" :key="j">
                        {{vip.name}}
                        <span class="year-rate">
                            {{task[tasksSelected[index]].price[vip.priceKey]}} 元
                            <i>单</i>
                        </span>
                    </p>
                </div>
                <div class="buy">
                    <a href="#" @click.prevent="buyHandler(index,$event)">立即涨粉</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="less" scoped>
</style>
<script>
import mockdata from '../libs/mock';
// 任务
const task = mockdata.task;
// 宝贝任务
const bbTask = task.bbTask;
// 店铺任务
const dpTask = task.dpTask;
// 京东任务
const jdTask = task.jdTask;
// 会员类型
const vips = mockdata.vips;
export default {
  data: function() {
    return {
      // 会员类型
      vips,
      //  任务名称
      tasksName: ['宝贝', '店铺', '京东'],
      //  当前选择的任务
      tasksSelected: [0, 0, 0],
      //   所有的人物集合
      tasks: [bbTask, dpTask, jdTask]
    };
  },
  methods: {
    // 立即涨粉
    buyHandler: function(index, $event) {
      this.$message({
        message: index,
        type: 'success'
      });
    }
  }
};
</script>

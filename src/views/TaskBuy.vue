
<template>
    <div>
        <el-col :span="15">
            <el-form ref="task-buy-form-ele" :model="taskBuyForm" style="padding:24px;" :rules="taskBuyFormRules" label-position="left" size="small"
                status-icon @submit.native.prevent>
                <h3>「{{plantformMap[$route.params.pagekey]}}」任务下单 <i class="el-icon-question question" title="常见问题解答" @click="dialogQuestionVisible = true"></i></h3>
                <h3>爆款必备-最真实的APP和PC流量</h3>
                <h3>实名小号 真实搜索 真实操作 全国不同IP 100%不被清洗</h3>
                <el-form-item label="流量类型" prop="taskType">
                    <el-select v-model="taskBuyForm.taskType" style="width:100%;" @change="taskTypeChangeHandler">
                        <el-option v-for="(task,index) in productTypeTask" :label="task.name" :value="task.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="搜索入口">
                    <el-select v-model="taskBuyForm.searchIn"  style="width:100%;">
                        <el-option label="淘宝" :value="0"></el-option>
                        <el-option label="天猫" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="购买数量" prop="mount">
                    <el-input type="number" v-model.number="taskBuyForm.mount" auto-complete="off" min="1" @change="mountChangeHandler"></el-input>
                </el-form-item>
                <el-form-item label="宝贝链接" prop="productLink">
                    <el-input type="text" v-model.number="taskBuyForm.productLink"  placeholder="请输入商品链接（或淘口令）" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="搜索关键词" prop="searchWord">
                    <el-input type="text" v-model.number="taskBuyForm.searchWord"  placeholder="请输入关键词搜索，多个使用空格或者逗号分开" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="商品浏览深度" prop="viewDeep">
                    <el-select v-model="taskBuyForm.viewDeep"  style="width:100%;">
                        <el-option label="随机浏览其他0-1个商品30秒" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="期望开始时间「当天平均完成」">
                    <el-date-picker type="date"  v-model="taskBuyForm.exceptViewDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="主商品浏览时间「秒」" prop="viewTime">
                    <el-input type="text" v-model.number="taskBuyForm.viewTime"  readonly  auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="订单金额「元」" prop="orderAmount">
                    <el-input type="number" v-model.number="taskBuyForm.orderAmount" readonly  auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmitHandler('task-buy-form-ele')">立即下单</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="6" style="padding:24px;">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix text-center">
                    <span style="color:#f90;">友情提示</span>
                </div>
                <div class="text item">
                    <h3>提醒：下单的时候如果提示宝贝链接太长。</h3>
                    <h3>解决方法：先到您的淘宝店铺，然后点击这款宝贝，链接就是短链接了</h3>
                </div>
            </el-card>
        </el-col>
        <el-dialog title="下单注意事项以及常见问题解答" :visible.sync="dialogQuestionVisible" >
           <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix text-center">
                    <span style="color:#f90;">下单注意事项以及常见问题解答</span>
                </div>
                <div class="text item">
                    <h3>搜索的关键词确保在前1-30页，中途因关键词搜索不到等其他操作导致任务浏览失败的 联系客服 （退款，重新发布）。</h3>
                </div>
                <div class="text item">
                    <p>问：下单流程，什么时候安排？</p>
                    <p>答：下单完1小时之内安排开始，任务开始会帮你分配好平均每小时完成一些，，最好上午下单，我们也能有充分时间给亲安排浏览任务，当天22:00之前的订单当天处理，过22:00的隔天安排。</p>
                </div>
                <div class="text item">
                    <p>问：下单后，怎么看你们是否已经安排了？</p>
                    <p>答：下单后，我们这边接受到订单安排好后，任务记录页面会显示完成数量和未完成数量，方便你们查询。</p>
                </div>
                <div class="text item">
                    <p>问：你们安排的浏览单，会不会是在一个时间段全部都进来？</p>
                    <p>答：这点您放心，我们流量是给您一整天均匀给您安排浏览单。</p>
                </div>
                <div class="text item">
                    <p>问：你们流量是怎么放的，在哪里放的？</p>
                    <p>答：我们是在各大刷手密集的平台给您放的浏览单。</p>
                </div>
                <div class="text item">
                    <p>问：你们放的浏览是通过关键词搜索进入的，还是直接链接进入的？</p>
                    <p>答：刷手通过关键词搜索进主宝贝浏览2分钟左右，再随机浏览1-3款副宝贝，有收藏的收藏，有购物车的加车。后台 生意参谋可查询。</p>
                </div>
                <div class="text item">
                    <p>问：流量会不会不安全？</p>
                    <p>答：流量如果能让店铺降权的话，那随便投放流量到同行店铺让同行降权，那淘宝就乱了。</p>
                </div>
                <div class="text item">
                    <p>问：那对商品有没有什么效果？</p>
                    <p>答：第一：流量配合刷单 控制转化率可以降低宝贝因刷单被降权的风险。第二：宝贝搜索热度能提升宝贝搜索排名。</p>
                </div>
                <div class="text item">
                    <p>问：我是新店，刚开始不久或者老店很久没打理想刷单又怕系统勘查？</p>
                    <p>答：这个看您要以什么方面来购买这份流量，如果只是单纯要逃过系统勘查刷单，那购买PC的即可，如果是想通过流量来做升权重，排名的，可以试试混合流量，有PC/APP流量浏览中一部分刷手会给您浏览后收藏跟加入购物车来提升宝贝的权重。</p>
                </div>
                <div class="text item">
                    <p>问：我一天刷10几单，大概需要购买多少流量才能不被系统勘查？</p>
                    <p>答：：要逃避系统勘查，这方面您要查看您本身行业的转化率，正常大部分行业转化率不要超过百分之10%。也就是说我如果刷10单 大概也就是需要100多左右浏览，逃过系统勘查。</p>
                </div>
                <div class="text item">
                    <p>问：那么我怎么辨别是你们做的流量还是真实顾客的流量？</p>
                    <p>答：生意参谋里可以看到关键词对应下的访客人数，有明显的效果。</p>
                </div>
                <div class="text item">
                    <p>问：你们跟这么多平台合作，单肯定很多，会不会造成单多，而导致质量下降？</p>
                    <p>答：这点您放心，我们是接单后，会分配给主持给您放单，现合作的主持有200多名。保质保量，这点您放心。</p>
                </div>
            </el-card>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogQuestionVisible=false">取 消</el-button>
                <el-button type="primary" @click="dialogQuestionVisible=false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="less" scoped>
.question {
  font-size: 18px;
  cursor: pointer;
}
</style>
<script>
import mockdata from '../libs/mock.js';
const task = mockdata.task;
export default {
  data: function() {
    return {
      productTypeTask: task[this.$route.params.pagekey],
      plantformMap: {
        bbTask: '宝贝',
        dpTask: '店铺',
        jdTask: '京东'
      },
      taskBuyForm: {
        taskType: 0,
        orderAmount: task[this.$route.params.pagekey][0].price.jpvip,
        exceptViewDate: new Date(),
        viewDeep: 1,
        viewTime: 120,
        searchIn: 0,
        searchWord: '',
        productLink: '',
        mount: 1
      },
      taskBuyFormRules: {
        productLink: [
          {
            required: true,
            message: '商品链接不能为空'
          }
        ],
        searchWord: [
          {
            required: true,
            message: '搜索关键词不能为空'
          }
        ],
        mount: [
          {
            required: true,
            message: '订单数量不能为空'
          },
          {
            type: 'number',
            message: '订单数量只能是数字'
          }
        ]
      },
      dialogQuestionVisible: false
    };
  },
  methods: {
    taskTypeChangeHandler: function(index) {
      this.taskBuyForm.orderAmount = (
        this.taskBuyForm.mount * this.productTypeTask[index].price.jpvip
      ).toFixed(2);
    },
    mountChangeHandler: function(val) {
      this.taskBuyForm.orderAmount = (
        val * this.productTypeTask[this.taskBuyForm.taskType].price.jpvip
      ).toFixed(2);
    },
    onSubmitHandler: function(formName) {
      this.$refs[formName].validate((valid, fildes) => {
        if (valid) {
          this.$message({
            message: '购买成功',
            type: 'success'
          });
        } else {
          return false;
        }
      });
    }
  },
  beforeRouteUpdate: function(to, from, next) {
    this.productTypeTask = task[to.params.pagekey];
    // 一定要调用next
    next();
  }
};
</script>

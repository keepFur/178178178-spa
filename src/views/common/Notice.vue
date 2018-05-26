<template>
    <div class="notice clearfix">
        <a href="" class="pull-left text-ellipsis" @click.prevent="dialogMoreNoticeVisible=true;activeNames=0;">
            <span>{{notices[0].date}}</span>{{notices[0].content}}
        </a>
        <a href="" class="more pull-right" @click.prevent="dialogMoreNoticeVisible=true">更多公告</a>
        <!-- 更多公告弹出框 -->
        <el-dialog title="公告列表" :visible.sync="dialogMoreNoticeVisible">
            <el-collapse v-model="activeNames" accordion>
                <el-collapse-item :title="notice.title" :name="notice.id" v-for="notice in notices" :key="notice.id">
                    <div>{{notice.content}}</div>
                </el-collapse-item>
            </el-collapse>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogMoreNoticeVisible=false">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style lang="less" scoped>
</style>
<script>
export default {
  data: function() {
    return {
      notices: [
        {
          id: 0,
          date: '2018-5-23',
          title: '一致性',
          content:
            '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
        },
        {
          id: 1,
          date: '2018-4-23',
          title: '反馈',
          content:
            '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作。'
        },
        {
          id: 2,
          date: '2018-3-23',
          title: '效率',
          content:
            '帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。'
        },
        {
          id: 3,
          date: '2018-2-23',
          title: '可控',
          content:
            '结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策。'
        }
      ],
      activeNames: 0,
      dialogMoreNoticeVisible: false
    };
  },
  methods: {}
};
</script>

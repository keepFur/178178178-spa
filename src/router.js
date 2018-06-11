const routers = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: resolve => require(['./views/Index.vue'], resolve)
  },
  {
    path: '/admin',
    meta: {
      title: '控制中心'
    },
    component: resolve => require(['./views/Admin.vue'], resolve),
    children: [
      {
        path: 'task_buy/:pagekey',
        meta: {
          title: '无线流量'
        },
        component: resolve => require(['./views/TaskBuy.vue'], resolve)
      },
      {
        path: 'order/:pagekey',
        meta: {
          title: '订单管理'
        },
        component: resolve => require(['./views/TaskOrderManage.vue'], resolve)
      },
      {
        path: 'account_set/update_password',
        meta: {
          title: '会员中心-账号设置-修改密码'
        },
        component: resolve => require(['./views/UpdatePassword.vue'], resolve)
      },
      {
        path: 'account_set/update_info',
        meta: {
          title: '会员中心-账号设置-修改资料'
        },
        component: resolve => require(['./views/UpdateInfo.vue'], resolve)
      },
      {
        path: 'account_set/vip_up',
        meta: {
          title: '会员中心-账号设置-会员升级'
        },
        component: resolve => require(['./views/VipUp.vue'], resolve)
      },
      {
        path: 'money_manage/inline_pay',
        meta: {
          title: '会员中心-财务管理-在线支付'
        },
        component: resolve => require(['./views/InlinePay.vue'], resolve)
      },
      {
        path: 'money_manage/money_detail',
        meta: {
          title: '会员中心-财务管理-资金明细'
        },
        component: resolve => require(['./views/MoneyDetail.vue'], resolve)
      },
      {
        path: 'money_manage/out_recored',
        meta: {
          title: '会员中心-财务管理-提现记录'
        },
        component: resolve => require(['./views/OutRecored.vue'], resolve)
      },
      {
        path: 'other_service/commit_order',
        meta: {
          title: '会员中心-其他服务-提交工单'
        },
        component: resolve => require(['./views/CommitOrder.vue'], resolve)
      },
      {
        path: 'other_service/my_order',
        meta: {
          title: '会员中心-其他服务-我的工单'
        },
        component: resolve => require(['./views/MyOrder.vue'], resolve)
      }
    ]
  }
];
export default routers;

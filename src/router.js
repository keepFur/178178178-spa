const routers = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: resolve => require(['./views/Index.vue'], resolve),
    children: [
      {
        path: 'products',
        meta: {
          title: '产品中心'
        },
        component: resolve => require(['./views/Products.vue'], resolve)
      },
      {
        path: 'vip_center',
        meta: {
          title: '会员中心'
        },
        component: resolve => require(['./views/VipCenter.vue'], resolve),
        children: [
          {
            path: 'kb_buy/:pagekey',
            meta: {
              title: '空包下单'
            },
            component: resolve => require(['./views/KbBuy.vue'], resolve)
          },
          {
            path: 'address/:pagekey',
            meta: {
              title: '发货地址管理'
            },
            component: resolve =>
              require(['./views/FromAddressManage.vue'], resolve)
          },
          {
            path: 'order/:pagekey',
            meta: {
              title: '订单管理'
            },
            component: resolve =>
              require(['./views/KbOrderManage.vue'], resolve)
          },
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
            component: resolve =>
              require(['./views/TaskOrderManage.vue'], resolve)
          }
        ]
      }
    ]
  }
];
export default routers;

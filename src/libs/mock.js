const tbKB = [
  {
    id: 0,
    type: 'lbkd',
    alias: '龙邦速递',
    name: '龙邦速递「淘宝、天猫专用」',
    price: {
      ptvip: 1.8,
      vip: 1.7,
      jpvip: 1.6
    }
  },
  {
    id: 1,
    type: 'bskd',
    alias: '百世快递',
    name: '百世快递「淘宝、天猫专用」',
    price: {
      ptvip: 2.2,
      vip: 2.1,
      jpvip: 2.0
    }
  },
  {
    id: 2,
    type: 'ytkd',
    alias: '圆通快递',
    name: '圆通快递「淘宝、天猫专用」',
    price: {
      ptvip: 1.6,
      vip: 1.5,
      jpvip: 1.4
    }
  }
];
const jdKB = [
  {
    id: 0,
    type: 'lbkd',
    alias: '龙邦速递',
    name: '龙邦速递「京东专用」',
    price: {
      ptvip: 1.4,
      vip: 1.3,
      jpvip: 1.2
    }
  },
  {
    id: 1,
    type: 'stkd',
    alias: '申通快递',
    name: '申通快递「京东专用」',
    price: {
      ptvip: 1.6,
      vip: 1.5,
      jpvip: 1.4
    }
  }
];
const pddKB = [
  {
    id: 0,
    type: 'gtkd',
    alias: '国通快递',
    name: '国通快递「拼多多专用」',
    price: {
      ptvip: 1.0,
      vip: 0.9,
      jpvip: 0.8
    }
  },
  {
    id: 1,
    type: 'lbkd',
    alias: '龙邦速递',
    name: '龙邦速递「拼多多专用」',
    price: {
      ptvip: 1.1,
      vip: 1.0,
      jpvip: 0.9
    }
  },
  {
    id: 2,
    alias: '申通快递',
    type: 'stkd',
    name: '申通快递「拼多多专用」',
    price: {
      ptvip: 1.4,
      vip: 1.3,
      jpvip: 1.2
    }
  },
  {
    id: 3,
    type: 'bskd',
    alias: '百世快递',
    name: '百世快递「拼多多专用」',
    price: {
      ptvip: 1.5,
      vip: 1.4,
      jpvip: 1.3
    }
  },
  {
    id: 4,
    type: 'yfkd',
    alias: '亚风快递',
    name: '亚风快递「拼多多专用」',
    price: {
      ptvip: 0.85,
      vip: 0.75,
      jpvip: 0.65
    }
  },
  {
    id: 5,
    type: 'kfwkd',
    alias: '快服务快递',
    name: '快服务快递「平多多专用」',
    price: {
      ptvip: 0.9,
      vip: 0.8,
      jpvip: 0.7
    }
  }
];
const ytKB = [
  {
    id: 0,
    type: 'ytkd',
    alias: '圆通快递',
    name: '圆通快递「21点之前下单，2小时内揽件」',
    price: {
      ptvip: 0.9,
      vip: 0.8,
      jpvip: 0.7
    }
  }
];
const excelKB = [
  {
    id: 0,
    type: 'lbkd',
    alias: '龙邦速递',
    name: '龙邦速递「淘宝、天猫专用」',
    price: {
      ptvip: 1.8,
      vip: 1.7,
      jpvip: 1.6
    }
  },
  {
    id: 1,
    type: 'bskd',
    alias: '百世快递',
    name: '百世快递「淘宝、天猫专用」',
    price: {
      ptvip: 2.2,
      vip: 2.1,
      jpvip: 2.0
    }
  },
  {
    id: 2,
    type: 'ytkd',
    alias: '圆通快递',
    name: '圆通快递「淘宝、天猫专用」',
    price: {
      ptvip: 1.6,
      vip: 1.5,
      jpvip: 1.4
    }
  },
  {
    id: 3,
    type: 'kjkd',
    alias: '快捷快递',
    name: '快捷速递「淘宝、天猫、阿里专用」',
    price: {
      ptvip: 1.76,
      vip: 1.66,
      jpvip: 1.56
    }
  },
  {
    id: 4,
    type: 'lbkd',
    alias: '龙邦速递',
    name: '龙邦速递「京东专用」',
    price: {
      ptvip: 1.4,
      vip: 1.3,
      jpvip: 1.2
    }
  },
  {
    id: 5,
    type: 'stkd',
    alias: '申通快递',
    name: '申通快递「京东专用」',
    price: {
      ptvip: 1.6,
      vip: 1.5,
      jpvip: 1.4
    }
  },
  {
    id: 6,
    type: 'gtkd',
    alias: '国通快递',
    name: '国通快递「拼多多专用」',
    price: {
      ptvip: 1.0,
      vip: 0.9,
      jpvip: 0.8
    }
  },
  {
    id: 7,
    type: 'lbkd',
    alias: '龙邦速递',
    name: '龙邦速递「拼多多专用」',
    price: {
      ptvip: 1.1,
      vip: 1.0,
      jpvip: 0.9
    }
  },
  {
    id: 8,
    alias: '申通快递',
    type: 'stkd',
    name: '申通快递「拼多多专用」',
    price: {
      ptvip: 1.4,
      vip: 1.3,
      jpvip: 1.2
    }
  },
  {
    id: 9,
    type: 'bskd',
    alias: '百世快递',
    name: '百世快递「拼多多专用」',
    price: {
      ptvip: 1.5,
      vip: 1.4,
      jpvip: 1.3
    }
  },
  {
    id: 10,
    type: 'yfkd',
    alias: '亚风快递',
    name: '亚风快递「拼多多专用」',
    price: {
      ptvip: 0.85,
      vip: 0.75,
      jpvip: 0.65
    }
  },
  {
    id: 11,
    type: 'kfwkd',
    alias: '快服务快递',
    name: '快服务快递「平多多专用」',
    price: {
      ptvip: 0.9,
      vip: 0.8,
      jpvip: 0.7
    }
  },
  {
    id: 12,
    type: 'ytkd',
    alias: '圆通快递',
    name: '圆通快递「全网电商平台通用」推荐',
    price: {
      ptvip: 0.9,
      vip: 0.8,
      jpvip: 0.7
    }
  }
];

const bbTask = [
    {
      type: 0,
      id: 0,
      name: 'PC搜索流量',
      price: {
        ptvip: 0.15,
        vip: 0.14,
        jpvip: 0.13
      }
    },
    {
      type: 0,
      id: 1,
      name: 'PC直访商品',
      price: {
        ptvip: 0.15,
        vip: 0.14,
        jpvip: 0.13
      }
    },
    {
      type: 0,
      id: 2,
      name: 'APP搜索流量',
      price: {
        ptvip: 0.2,
        vip: 0.19,
        jpvip: 0.18
      }
    },
    {
      type: 0,
      id: 3,
      name: 'APP收藏商品',
      price: {
        ptvip: 0.15,
        vip: 0.14,
        jpvip: 0.13
      }
    },
    {
      type: 0,
      id: 4,
      name: 'APP搜索收藏',
      price: {
        ptvip: 0.36,
        vip: 0.35,
        jpvip: 0.34
      }
    },
    {
      type: 0,
      id: 5,
      name: 'APP直接加购',
      price: {
        ptvip: 0.33,
        vip: 0.32,
        jpvip: 0.31
      }
    },
    {
      type: 0,
      id: 6,
      name: 'APP搜索加购',
      price: {
        ptvip: 0.2,
        vip: 0.19,
        jpvip: 0.18
      }
    },
    {
      type: 0,
      id: 7,
      name: '直播关注',
      price: {
        ptvip: 0.17,
        vip: 0.16,
        jpvip: 0.15
      }
    },
    {
      type: 0,
      id: 8,
      name: '微淘点赞',
      price: {
        ptvip: 0.17,
        vip: 0.16,
        jpvip: 0.15
      }
    },
    {
      type: 0,
      id: 9,
      name: '直播观看人数',
      price: {
        ptvip: 0.02,
        vip: 0.02,
        jpvip: 0.02
      }
    }
  ],
  dpTask = [
    {
      type: 1,
      id: 0,
      name: 'PC直访店铺',
      price: {
        ptvip: 0.15,
        vip: 0.14,
        jpvip: 0.13
      }
    },
    {
      type: 1,
      id: 1,
      name: 'APP店铺收藏',
      price: {
        ptvip: 0.17,
        vip: 0.16,
        jpvip: 0.15
      }
    }
  ],
  jdTask = [
    {
      type: 2,
      id: 0,
      name: '京东流量',
      price: {
        ptvip: 0.2,
        vip: 0.19,
        jpvip: 0.18
      }
    },
    {
      type: 2,
      id: 1,
      name: '京东商品收藏',
      price: {
        ptvip: 0.3,
        vip: 0.29,
        jpvip: 0.28
      }
    },
    {
      type: 2,
      id: 2,
      name: '京东店铺关注',
      price: {
        ptvip: 0.16,
        vip: 0.15,
        jpvip: 0.14
      }
    },
    {
      type: 2,
      id: 3,
      name: '京东加购',
      price: {
        ptvip: 0.31,
        vip: 0.3,
        jpvip: 0.29
      }
    }
  ];
// 会员类型
const vips = [
  {
    name: '普通会员：',
    priceKey: 'ptvip'
  },
  {
    name: 'VIP会员：',
    priceKey: 'vip'
  },
  {
    name: '金牌代理商：',
    priceKey: 'jpvip'
  }
];
export default {
  kb: {
    tbKB,
    jdKB,
    pddKB,
    ytKB,
    excelKB
  },
  task: {
    bbTask,
    dpTask,
    jdTask
  },
  vips
};

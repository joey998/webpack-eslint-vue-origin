export default [
  {
    path: "/",
    redirect: "/gate-assignment",
  },
  {
    path: "/gate-assignment",
    component: () => import(/* webpackChunkName: "gate-assignment" */ "@/views/gate-assignment"),
  },
  {
    path: "/rizhiguanli",
    title: "日志管理",
    children: [
      {
        path: "chakanrizhi",
        title: "查看日志",
        component: () => import(/* webpackChunkName: "chakanrizhi" */ "@/views/chakanrizhi"),
      },
    ],
  },
  {
    path: "/xitongguanli",
    title: "系统管理",
    children: [
      {
        path: "jixiaotongji",
        title: "绩效统计",
        component: () => import(/* webpackChunkName: "jixiaotongji" */ "@/views/jixiaotongji"),
      },
      {
        path: "bumenguanli",
        title: "部门管理",
        component: () => import(/* webpackChunkName: "bumenguanli" */ "@/views/bumenguanli"),
      },
      {
        path: "gangweiguanli",
        title: "岗位管理",
        component: () => import(/* webpackChunkName: "gangweiguanli" */ "@/views/gangweiguanli"),
      },
      {
        path: "yonghuguanli",
        title: "用户管理",
        component: () => import(/* webpackChunkName: "yonghuguanli" */ "@/views/yonghuguanli"),
      },
      {
        path: "quanxianguanli",
        title: "权限管理",
        component: () => import(/* webpackChunkName: "quanxianguanli" */ "@/views/quanxianguanli"),
      },
    ],
  },
  {
    path: "/jichuxinxi",
    title: "基础信息",
    children: [
      {
        path: "gongsiguanli",
        title: "公司管理",
        component: () => import(/* webpackChunkName: "gongsiguanli" */ "@/views/gongsiguanli"),
      },
      {
        path: "xiangmuguanli",
        title: "项目管理",
        component: () => import(/* webpackChunkName: "xiangmuguanli" */ "@/views/xiangmuguanli"),
      },
      {
        path: "chedaoguanli",
        title: "车道管理",
        component: () => import(/* webpackChunkName: "chedaoguanli" */ "@/views/chedaoguanli"),
      },
      {
        path: "shebeiguanli",
        title: "设备管理",
        component: () => import(/* webpackChunkName: "shebeiguanli" */ "@/views/shebeiguanli"),
      },
      {
        path: "cansunguanli",
        title: "残损管理",
        component: () => import(/* webpackChunkName: "cansunguanli" */ "@/views/cansunguanli"),
      },
    ],
  },
  {
    path: "/tuocheguanli",
    title: "拖车管理",
    children: [
      {
        path: "tuochegongsi",
        title: "拖车公司",
        component: () => import(/* webpackChunkName: "tuochegongsi" */ "@/views/tuochegongsi"),
      },
      {
        path: "tuocheguanli",
        title: "拖车管理",
        component: () => import(/* webpackChunkName: "tuocheguanli" */ "@/views/tuocheguanli"),
      },
      {
        path: "sijibeian",
        title: "司机备案",
        component: () => import(/* webpackChunkName: "sijibeian" */ "@/views/sijibeian"),
      },
      {
        path: "chejiahaochaxun",
        title: "车架号查询",
        component: () => import(/* webpackChunkName: "chejiahaochaxun" */ "@/views/chejiahaochaxun"),
      },
      {
        path: "xianghaobeian",
        title: "箱号备案",
        component: () => import(/* webpackChunkName: "xianghaobeian" */ "@/views/xianghaobeian"),
      },
      {
        path: "liuliangkongzhi",
        title: "流量控制",
        component: () => import(/* webpackChunkName: "liuliangkongzhi" */ "@/views/liuliangkongzhi"),
      },
    ],
  },
  {
    path: "/neituoguanli",
    title: "内托管理",
    children: [
      {
        path: "neituobeian",
        title: "内托备案",
        component: () => import(/* webpackChunkName: "neituobeian" */ "@/views/neituobeian"),
      },
      {
        path: "neiguochengzhong",
        title: "内托称重",
        component: () => import(/* webpackChunkName: "neiguochengzhong" */ "@/views/neiguochengzhong"),
      },
      {
        path: "neituorizhi",
        title: "内托日志",
        component: () => import(/* webpackChunkName: "neituorizhi" */ "@/views/neituorizhi"),
      },
    ],
  },
  {
    path: "/cheliangweiji",
    title: "车辆违纪",
    children: [
      {
        path: "weijichufa",
        title: "违纪处罚",
        component: () => import(/* webpackChunkName: "weijichufa" */ "@/views/weijichufa"),
      },
    ],
  },
  {
    path: "/zhakouzuoye",
    title: "闸口作业",
    children: [
      {
        path: "qichezuoye",
        title: "汽车作业",
        component: () => import(/* webpackChunkName: "qichezuoye" */ "@/views/qichezuoye"),
      },
      {
        path: "zuoyejiankong",
        title: "作业监控",
        component: () => import(/* webpackChunkName: "zuoyejiankong" */ "@/views/zuoyejiankong"),
      },
    ],
  },
  {
    path: "/yunweiguanli",
    title: "运维管理",
    children: [
      {
        path: "chedaojiankong",
        title: "车道监控",
        component: () => import(/* webpackChunkName: "chedaojiankong" */ "@/views/chedaojiankong"),
      },
      {
        path: "shebeikongzhi",
        title: "设备控制",
        component: () => import(/* webpackChunkName: "shebeikongzhi" */ "@/views/shebeikongzhi"),
      },
    ],
  },

  // 下面没有写
  // {
  //   path: "/jinchuhuowu",
  //   title: "进出货物",
  //   children: [
  //     {
  //       path: "chaozhongyuyue",
  //       title: "超重预约",
  //       component: () => import(/* webpackChunkName: "chaozhongyuyue" */ "@/views/chaozhongyuyue"),
  //     },
  //     {
  //       path: "yunshugongsi",
  //       title: "运输公司",
  //       component: () => import(/* webpackChunkName: "yunshugongsi" */ "@/views/yunshugongsi"),
  //     },
  //     {
  //       path: "yunshucheliang",
  //       title: "运输车辆",
  //       component: () => import(/* webpackChunkName: "yunshucheliang" */ "@/views/yunshucheliang"),
  //     },
  //     {
  //       path: "yunshuwuliao",
  //       title: "运输物料",
  //       component: () => import(/* webpackChunkName: "yunshuwuliao" */ "@/views/yunshuwuliao"),
  //     },
  //     {
  //       path: "youcheguobang",
  //       title: "油车过磅",
  //       component: () => import(/* webpackChunkName: "youcheguobang" */ "@/views/youcheguobang"),
  //     },
  //   ],
  // },
  // {
  //   path: "/lishichaxun",
  //   title: "历史查询",
  //   children: [
  //     {
  //       path: "guochechaxun",
  //       title: "过车查询",
  //       component: () => import(/* webpackChunkName: "guochechaxun" */ "@/views/guochechaxun"),
  //     },
  //     {
  //       path: "guochetongji",
  //       title: "过车统计",
  //       component: () => import(/* webpackChunkName: "guochetongji" */ "@/views/guochetongji"),
  //     },
  //     {
  //       path: "shibielvtongji",
  //       title: "识别率统计",
  //       component: () => import(/* webpackChunkName: "shibielvtongji" */ "@/views/shibielvtongji"),
  //     },
  //     {
  //       path: "tongguolv",
  //       title: "通过率",
  //       component: () => import(/* webpackChunkName: "tongguolv" */ "@/views/tongguolv"),
  //     },
  //     {
  //       path: "fangxingtongji",
  //       title: "放行统计",
  //       component: () => import(/* webpackChunkName: "fangxingtongji" */ "@/views/fangxingtongji"),
  //     },
  //     {
  //       path: "guochexiaolv",
  //       title: "过车效率",
  //       component: () => import(/* webpackChunkName: "guochexiaolv" */ "@/views/guochexiaolv"),
  //     },
  //   ],
  // },
  // {
  //   path: "/chucuotongji",
  //   title: "出错统计",
  //   children: [
  //     {
  //       path: "cuowuchaxun",
  //       title: "错误查询",
  //       component: () => import(/* webpackChunkName: "cuowuchaxun" */ "@/views/cuowuchaxun"),
  //     },
  //     {
  //       path: "cuowutongji",
  //       title: "错误统计",
  //       component: () => import(/* webpackChunkName: "cuowutongji" */ "@/views/cuowutongji"),
  //     },
  //   ],
  // },
  // {
  //   path: "/liuchengguanli",
  //   title: "流程管理",
  //   children: [
  //     {
  //       path: "liuchengguanli",
  //       title: "流程管理",
  //       component: () => import(/* webpackChunkName: "liuchengguanli" */ "@/views/liuchengguanli"),
  //     },
  //   ],
  // },
  // {
  //   path: "/cuowuguanli",
  //   title: "错误管理",
  //   children: [
  //     {
  //       path: "cuowujilu",
  //       title: "错误管理",
  //       component: () => import(/* webpackChunkName: "cuowujilu" */ "@/views/cuowujilu"),
  //     },
  //   ],
  // },
  // {
  //   path: "/eir",
  //   title: "EIR",
  //   children: [
  //     {
  //       path: "dayineir",
  //       title: "打印EIR",
  //       component: () => import(/* webpackChunkName: "dayineir" */ "@/views/dayineir"),
  //     },
  //     {
  //       path: "eirguanli",
  //       title: "eir管理",
  //       component: () => import(/* webpackChunkName: "eirguanli" */ "@/views/eirguanli"),
  //     },
  //   ],
  // },
  // {
  //   path: "/xitongguanli",
  //   title: "系统管理",
  //   children: [
  //     {
  //       path: "gateassignment",
  //       title: "绩效统计",
  //       component: () => import(/* webpackChunkName: "gateassignment" */ "@/views/gateassignment"),
  //     },
  //   ],
  // },
];

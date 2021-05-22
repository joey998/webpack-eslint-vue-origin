import Test from "@/views/test";
import Layout from "@/layout";

export default [
  {
    path: "/",
    meta: { hidden: true },
    redirect: "/login",
  },

  {
    path: "/login",
    meta: { hidden: true },
    component: () => import(/* webpackChunkName: "login" */ "@/views/login"),
  },
  {
    path: "/rizhiguanli",
    meta: { title: "日志管理" },
    component: Layout,
    children: [
      {
        path: "chakanrizhi",
        meta: { title: "查看日志" },
        component: () => import(/* webpackChunkName: "chakanrizhi" */ "@/views/chakanrizhi"),
      },
    ],
  },
  {
    path: "/xitongguanli",
    meta: { title: "系统管理" },
    component: Layout,
    children: [
      {
        path: "test",
        meta: { title: "test" },
        // component: () => import(/* webpackChunkName: "jixiaotongji" */ "@/views/jixiaotongji"),
        component: Test,
        children: [
          {
            path: "jixiaotongji",
            meta: { title: "1" },
            component: () => import(/* webpackChunkName: "jixiaotongji" */ "@/views/jixiaotongji"),
          },
          {
            path: "bumenguanli",
            meta: { title: "2" },
            component: () => import(/* webpackChunkName: "bumenguanli" */ "@/views/bumenguanli"),
          },
          {
            path: "gangweiguanli",
            meta: { title: "3" },
            component: () => import(/* webpackChunkName: "gangweiguanli" */ "@/views/gangweiguanli"),
          },
          {
            path: "yonghuguanli",
            meta: { title: "34" },
            component: () => import(/* webpackChunkName: "yonghuguanli" */ "@/views/yonghuguanli"),
          },
          {
            path: "quanxianguanli",
            meta: { title: "5" },
            component: () => import(/* webpackChunkName: "quanxianguanli" */ "@/views/quanxianguanli"),
          },
        ],
      },
      {
        path: "jixiaotongji",
        meta: { title: "绩效统计" },
        component: () => import(/* webpackChunkName: "jixiaotongji" */ "@/views/jixiaotongji"),
      },
      {
        path: "bumenguanli",
        meta: { title: "部门管理" },
        component: () => import(/* webpackChunkName: "bumenguanli" */ "@/views/bumenguanli"),
      },
      {
        path: "gangweiguanli",
        meta: { title: "岗位管理" },
        component: () => import(/* webpackChunkName: "gangweiguanli" */ "@/views/gangweiguanli"),
      },
      {
        path: "yonghuguanli",
        meta: { title: "用户管理" },
        component: () => import(/* webpackChunkName: "yonghuguanli" */ "@/views/yonghuguanli"),
      },
      {
        path: "quanxianguanli",
        meta: { title: "权限管理" },
        component: () => import(/* webpackChunkName: "quanxianguanli" */ "@/views/quanxianguanli"),
      },
    ],
  },
  {
    path: "/jichuxinxi",
    meta: { title: "基础信息" },
    component: Layout,
    children: [
      {
        path: "gongsiguanli",
        meta: { title: "公司管理" },
        component: () => import(/* webpackChunkName: "gongsiguanli" */ "@/views/gongsiguanli"),
      },
      {
        path: "xiangmuguanli",
        meta: { title: "项目管理" },
        component: () => import(/* webpackChunkName: "xiangmuguanli" */ "@/views/xiangmuguanli"),
      },
      {
        path: "chedaoguanli",
        meta: { title: "车道管理" },
        component: () => import(/* webpackChunkName: "chedaoguanli" */ "@/views/chedaoguanli"),
      },
      {
        path: "shebeiguanli",
        meta: { title: "设备管理" },
        component: () => import(/* webpackChunkName: "shebeiguanli" */ "@/views/shebeiguanli"),
      },
      {
        path: "cansunguanli",
        meta: { title: "残损管理" },
        component: () => import(/* webpackChunkName: "cansunguanli" */ "@/views/cansunguanli"),
      },
    ],
  },
  {
    path: "/tuocheguanli",
    meta: { title: "拖车管理" },
    component: Layout,
    children: [
      {
        path: "tuochegongsi",
        meta: { title: "拖车公司" },
        component: () => import(/* webpackChunkName: "tuochegongsi" */ "@/views/tuochegongsi"),
      },
      {
        path: "tuocheguanli",
        meta: { title: "拖车管理" },
        component: () => import(/* webpackChunkName: "tuocheguanli" */ "@/views/tuocheguanli"),
      },
      {
        path: "sijibeian",
        meta: { title: "司机备案" },
        component: () => import(/* webpackChunkName: "sijibeian" */ "@/views/sijibeian"),
      },
      {
        path: "chejiahaochaxun",
        meta: { title: "车架号查询" },
        component: () => import(/* webpackChunkName: "chejiahaochaxun" */ "@/views/chejiahaochaxun"),
      },
      {
        path: "xianghaobeian",
        meta: { title: "箱号备案" },
        component: () => import(/* webpackChunkName: "xianghaobeian" */ "@/views/xianghaobeian"),
      },
      {
        path: "liuliangkongzhi",
        meta: { title: "流量控制" },
        component: () => import(/* webpackChunkName: "liuliangkongzhi" */ "@/views/liuliangkongzhi"),
      },
    ],
  },
  {
    path: "/neituoguanli",
    meta: { title: "内托管理" },
    component: Layout,
    children: [
      {
        path: "neituobeian",
        meta: { title: "内托备案" },
        component: () => import(/* webpackChunkName: "neituobeian" */ "@/views/neituobeian"),
      },
      {
        path: "neiguochengzhong",
        meta: { title: "内托称重" },
        component: () => import(/* webpackChunkName: "neiguochengzhong" */ "@/views/neiguochengzhong"),
      },
      {
        path: "neituorizhi",
        meta: { title: "内托日志" },
        component: () => import(/* webpackChunkName: "neituorizhi" */ "@/views/neituorizhi"),
      },
    ],
  },
  {
    path: "/cheliangweiji",
    meta: { title: "车辆违纪" },
    component: Layout,
    children: [
      {
        path: "weijichufa",
        meta: { title: "违纪处罚" },
        component: () => import(/* webpackChunkName: "weijichufa" */ "@/views/weijichufa"),
      },
    ],
  },
  {
    path: "/zhakouzuoye",
    meta: { title: "闸口作业" },
    component: Layout,
    children: [
      {
        path: "qichezuoye",
        meta: { title: "汽车作业" },
        component: () => import(/* webpackChunkName: "qichezuoye" */ "@/views/qichezuoye"),
      },
      {
        path: "zuoyejiankong",
        meta: { title: "作业监控" },
        component: () => import(/* webpackChunkName: "zuoyejiankong" */ "@/views/zuoyejiankong"),
      },
    ],
  },
  {
    path: "/yunweiguanli",
    meta: { title: "运维管理" },
    component: Layout,
    children: [
      {
        path: "chedaojiankong",
        meta: { title: "车道监控" },
        component: () => import(/* webpackChunkName: "chedaojiankong" */ "@/views/chedaojiankong"),
      },
      {
        path: "shebeikongzhi",
        meta: { title: "设备控制" },
        component: () => import(/* webpackChunkName: "shebeikongzhi" */ "@/views/shebeikongzhi"),
      },
    ],
  },

  // 下面没有写
  {
    path: "/jinchuhuowu",
    meta: { title: "进出货物" },
    component: Layout,
    children: [
      {
        path: "chaozhongyuyue",
        meta: { title: "超重预约" },
        component: () => import(/* webpackChunkName: "chaozhongyuyue" */ "@/views/chaozhongyuyue"),
      },
      {
        path: "yunshugongsi",
        meta: { title: "运输公司" },
        component: () => import(/* webpackChunkName: "yunshugongsi" */ "@/views/yunshugongsi"),
      },
      {
        path: "yunshucheliang",
        meta: { title: "运输车辆" },
        component: () => import(/* webpackChunkName: "yunshucheliang" */ "@/views/yunshucheliang"),
      },
      {
        path: "yunshuwuliao",
        meta: { title: "运输物料" },
        component: () => import(/* webpackChunkName: "yunshuwuliao" */ "@/views/yunshuwuliao"),
      },
      {
        path: "youcheguobang",
        meta: { title: "油车过磅" },
        component: () => import(/* webpackChunkName: "youcheguobang" */ "@/views/youcheguobang"),
      },
    ],
  },
  {
    path: "/lishichaxun",
    meta: { title: "历史查询" },
    component: Layout,
    children: [
      {
        path: "guochechaxun",
        meta: { title: "过车查询" },
        component: () => import(/* webpackChunkName: "guochechaxun" */ "@/views/guochechaxun"),
      },
      {
        path: "guochetongji",
        meta: { title: "过车统计" },
        component: () => import(/* webpackChunkName: "guochetongji" */ "@/views/guochetongji"),
      },
      {
        path: "shibielvtongji",
        meta: { title: "识别率统计" },
        component: () => import(/* webpackChunkName: "shibielvtongji" */ "@/views/shibielvtongji"),
      },
      {
        path: "tongguolv",
        meta: { title: "通过率" },
        component: () => import(/* webpackChunkName: "tongguolv" */ "@/views/tongguolv"),
      },
      {
        path: "fangxingtongji",
        meta: { title: "放行统计" },
        component: () => import(/* webpackChunkName: "fangxingtongji" */ "@/views/fangxingtongji"),
      },
      {
        path: "guochexiaolv",
        meta: { title: "过车效率" },
        component: () => import(/* webpackChunkName: "guochexiaolv" */ "@/views/guochexiaolv"),
      },
    ],
  },
  {
    path: "/chucuotongji",
    meta: { title: "出错统计" },
    component: Layout,
    children: [
      {
        path: "cuowuchaxun",
        meta: { title: "错误查询" },
        component: () => import(/* webpackChunkName: "cuowuchaxun" */ "@/views/cuowuchaxun"),
      },
      {
        path: "cuowutongji",
        meta: { title: "错误统计" },
        component: () => import(/* webpackChunkName: "cuowutongji" */ "@/views/cuowutongji"),
      },
    ],
  },
  {
    path: "/liuchengguanli",
    meta: { title: "流程管理" },
    component: Layout,
    children: [
      {
        path: "liuchengguanli",
        meta: { title: "流程管理" },
        component: () => import(/* webpackChunkName: "liuchengguanli" */ "@/views/liuchengguanli"),
      },
    ],
  },
  {
    path: "/cuowuguanli",
    meta: { title: "错误管理" },
    component: Layout,
    children: [
      {
        path: "cuowujilu",
        meta: { title: "错误管理" },
        component: () => import(/* webpackChunkName: "cuowujilu" */ "@/views/cuowujilu"),
      },
    ],
  },
  {
    path: "/eir",
    meta: { title: "EIR" },
    component: Layout,
    children: [
      {
        path: "dayineir",
        meta: { title: "打印EIR" },
        component: () => import(/* webpackChunkName: "dayineir" */ "@/views/dayineir"),
      },
      {
        path: "eirguanli",
        meta: { title: "eir管理" },
        component: () => import(/* webpackChunkName: "eirguanli" */ "@/views/eirguanli"),
      },
    ],
  },
  {
    path: "/error-page",
    meta: { title: "error-page" },
    component: Layout,
    children: [
      {
        path: "401",
        meta: { title: "401" },
        component: () => import(/* webpackChunkName: "dayineir" */ "@/views/error-page/401"),
      },
      {
        path: "404",
        meta: { title: "404" },
        component: () => import(/* webpackChunkName: "eirguanli" */ "@/views/error-page/404"),
      },
    ],
  },
  {
    path: "*",
    meta: { title: "error", hidden: true },
    component: () => import(/* webpackChunkName: "eirguanli" */ "@/views/error-page/404"),
  },
  // {
  //   path: "/xitongguanli",
  //   meta:{title: "系统管理"},
  //   children: [
  //     {
  //       path: "gateassignment",
  //       meta:{title: "绩效统计"},
  //       component: () => import(/* webpackChunkName: "gateassignment" */ "@/views/gateassignment"),
  //     },
  //   ],
  // },
];

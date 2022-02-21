// 注意: base的值为github仓库的名称
module.exports = {
  base: '/vue-press-md/', /* 基础虚拟路径: */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'OrangeWind', // 标题
  // theme: 'vdoing',
  description: '学习 复习 面试', // 标题下的描述
  themeConfig: { // 主题配置
    sidebar: [ // 左侧导航
      {
        title: 'TypeScript', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'typeScript/1_安装',
          'typeScript/2_基本类型',
          'typeScript/3_接口',
          'typeScript/4_类',
          'typeScript/5_函数',
          'typeScript/6_泛型',
          'typeScript/7_其他',
        ]
      },
      {
        title: 'Vue3快速上手', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'vue3.0/1_创建vue3项目',
          'vue3.0/2_Composition API',
          'vue3.0/3_Composition API其它',
          'vue3.0/4_手写组合API',
          'vue3.0/5_新组件',
        ]
      },
      {
        title: '面试相关', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '面试相关/1_HTML、CSS相关',
          '面试相关/2_JS相关',
          '面试相关/3_Vue2',
          '面试相关/4_网络安全、HTTP协议',
          '面试相关/5_前端工程化',
          '面试相关/6_前端性能优化',
        ]
      },
      {
        title: '面试手写系列', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '面试手写系列/1_防抖节流',
          '面试手写系列/2_对象浅拷贝',
          '面试手写系列/3_对象深拷贝',
          '面试手写系列/4_数组去重',
          '面试手写系列/5_对象去重',
          '面试手写系列/6_数组扁平化',
        ]
      },
      {
        title: '面试经典题型', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '面试经典题型/1_面试经典题型',
        ]
      },
      {
        title: '面试问题', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '面试问题/1_面试问题',
        ]
      },
      {
        title: '前端单元测试', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '前端单元测试/1_前端单元测试',
        ]
      },
      {
        title: '力扣算法', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '力扣算法/1_力扣算法',
        ]
      },
      {
        title: '补充', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '补充/1_补充',
        ]
      },
      {
        title: '抓包工具', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '抓包工具/1_抓包工具',
        ]
      },
      {
        title: '通用小工具系列', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          '通用小工具系列/1_通用小工具系列',
        ]
      },
    ]
  }
}
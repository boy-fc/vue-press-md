// 注意: base的值为github仓库的名称
module.exports = {
  base: '/vue-press-md/', /* 基础虚拟路径: */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'OrangeWind', // 标题
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
        title: 'interview', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'interview/1_HTML、CSS相关',
          'interview/2_JS相关',
          'interview/3_Vue2',
          'interview/4_网络安全、HTTP协议',
          'interview/5_前端工程化',
          'interview/6_前端性能优化',
        ]
      },
      {
        title: 'interviewHandwriting', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'interviewHandwriting/1_防抖节流',
          'interviewHandwriting/2_对象浅拷贝',
          'interviewHandwriting/3_对象深拷贝',
          'interviewHandwriting/4_数组去重',
          'interviewHandwriting/5_对象去重',
          'interviewHandwriting/6_数组扁平化',
        ]
      },
    ]
  }
}
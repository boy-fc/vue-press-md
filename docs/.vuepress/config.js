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
        ]
      },
    ]
  }
}
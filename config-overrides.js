/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-07-20 15:56:52
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-07-20 17:14:53
 * @Description: 按需加载
 * create-react-app 官方推荐的一个库 customize-cra 扩展文件,
 * 安装  react-app-rewired babel-plugin-import less  less-loader@5   env-cmd  -D
 * less-loader安装5版本
 * 这里配置如果要生效  package.json 修改  "start": "react-app-rewired start",
 */

const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, //true表示引入less
  }),
  //这里设置less，定制antd 主题
  //https://ant.design/docs/react/customize-theme-cn
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#d214a2',
      '@font-size-base': '12px',
    },
  })
)

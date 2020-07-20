/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-07-20 15:56:52
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-07-20 16:18:29
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
  addLessLoader({
    javascriptEnabled: true,
  })
)

/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-07-21 14:31:20
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-07-21 14:47:04
 * @Description:本地存储
 */

const store = window.localStorage

class LocalStore {
  //设置
  public static set(key: string, value: any): void {
    if (!store) {
      return
    }

    let v = value
    try {
      if (typeof value === 'object') {
        v = JSON.stringify(v)
      }
      store.setItem(key, v)
    } catch (error) {
      //todo: 错误处理
      console.log('error:', error)
    }
  }
  //获取
  public static get(key: string): string | null {
    if (!store) {
      return null
    }
    return store.getItem(key)
  }
  //获取数据转换成json
  public static getToJson(key: string): any {
    if (!store) {
      return null
    }
    let v = store.getItem(key)
    if (v) {
      try {
        return JSON.parse(v)
      } catch (error) {
        //TODO:
        console.log('error:', error)
      }
    }
    return null
  }

  //删除
  public static remove(key: string) {
    if (!store) {
      return
    }
    try {
      store.removeItem(key)
    } catch (error) {
      //todo:
      console.log('error:', error)
    }
  }
}

export default LocalStore

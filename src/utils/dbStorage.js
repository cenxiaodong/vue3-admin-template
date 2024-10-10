/**
 * 缓存管理:
 * 字段说明
 *     group  模块分组(必填)
 *     key    模块指定字段(非必填)
 *     value  模块指定字段的值(非必填)
 */
let zhStorage = {
  set(group, key, value) {
    let obj = JSON.parse(localStorage.getItem(group)) || {}
    obj[key] = value
    localStorage.setItem(group, JSON.stringify(obj))
  },
  get(group, key) {
    let obj = JSON.parse(localStorage.getItem(group)) || {}
    return key ? obj[key] : obj
  },
  remove(group, key) {
    if (key) {
      let obj = JSON.parse(localStorage.getItem(group)) || {}
      delete obj[key]
      localStorage.setItem(group, JSON.stringify(obj))
    } else {
      localStorage.removeItem(group)
    }
  },
  clear() {
    localStorage.clear()
  },
  sysSet(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  // 获取数据
  sysGet(key) {
    const value = localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  },
  // 删除指定的数据
  sysRemove(key) {
    localStorage.removeItem(key)
  }
}
export default zhStorage

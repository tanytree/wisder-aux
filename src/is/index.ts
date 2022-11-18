/** @module 类型判断-type */
/**
 * 判断是否是数组
 *
 * @param {*} array - 需要判断的对象
 */
export function isArray<T>(array: T) {
  return Object.prototype.toString.call(array) == '[object Array]'
}

/**
 * 获取元素样式
 * @param el   : dom元素
 * @param attr : css样式
 * @returns {*}
 */
export default (el, attr) => {
  if (el.currentStyle) {
    return el.currentStyle[attr]
  } else {
    return window.getComputedStyle(el, null)[attr]
  }
}

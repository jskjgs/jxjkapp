import getStyle from './getStyle'
export default (el, ancestor) => {
  var left = 0
  var top = 0
  while ((el.offsetParent || getStyle(el, 'position') === 'fixed') && el !== ancestor) {
    left += el.offsetLeft
    top += el.offsetTop
    if (getStyle(el, 'position') === 'fixed') {
      break
    }
    el = el.offsetParent
  }
  return {
    left: left,
    top: top
  }
}

/**
 * 转换时间戳
 * @param timeStamp
 * @param format: 年月日：Y M D, 时分秒：h m s
 * @returns {string}
 */
export default (timeStamp, format) => {
  if (!timeStamp) return ''
  timeStamp = +timeStamp
  if (Number.isNaN(timeStamp)) {
    console.error('时间戳类型有误')
    return
  }
  let date = new Date(timeStamp)
  // 年月日
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = date.getDate()
  day = day < 10 ? '0' + day : day

  if (format) {
    format = format.replace('Y', year)
    format = format.replace('M', month)
    format = format.replace('D', day)
    // 时分秒
    let hour = date.getHours()
    hour = hour < 10 ? '0' + hour : hour
    let min = date.getMinutes()
    min = min < 10 ? '0' + min : min
    let sec = date.getSeconds()
    sec = sec < 10 ? '0' + sec : sec
    format = format.replace('h', hour)
    format = format.replace('m', min)
    format = format.replace('s', sec)
    return format
  } else {
    return `${year}-${month}-${day}`
  }
}

import wepy from 'wepy'

/**
 * EventBus
 * 不含命名空间的事件： 可触发该事件所有绑定的处理函数（包括含有命名空间的该事件），可绑定多个处理函数
 * 含命名空间的事件：  相同命名空间的事件只能绑定一个事件处理函数
 */
class EventBus {
  constructor () {
    this.eventBus = {
      /*
      'event': [{
        handler () {},
        nameSpace: 'nameSpace'
      }]
      */
    }
  }

  // 监听事件
  on (event, handler) {
    const splits = event.split(':')
    event = splits[0]
    const nameSpace = splits[1] || undefined

    const eventHanlders = this.eventBus[event]
    if (eventHanlders) {
      if (nameSpace) {
        this.eventBus[event] = eventHanlders.filter(item => {
          return item.nameSpace !== nameSpace
        })
      }
      this.eventBus[event].push({handler, nameSpace})
    } else {
      this.eventBus[event] = [{handler, nameSpace}]
    }
  }

  // 触发事件
  emit (event, ...args) {
    const splits = event.split(':')
    event = splits[0]
    const nameSpace = splits[1]

    const eventHanlders = this.eventBus[event] || []
    if (nameSpace === undefined) {
      eventHanlders.forEach((item) => {
        item.handler(...args)
      })
    } else {
      eventHanlders.forEach((item) => {
        if (nameSpace === item.nameSpace) {
          item.handler(...args)
        }
      })
    }
  }

  // 移除事件(处理函数)
  remove (event, hanlder) {
    const splits = event.split(':')
    event = splits[0]
    const nameSpace = splits[1]

    const eventHanlders = this.eventBus[event] || []
    if (nameSpace === undefined) {
      if (handler) {
        this.eventBus[event] = eventHanlders.filter(item => {
          return item.handler !== handler
        })
      } else {
        this.eventBus[event] = []
      }
    } else {
      this.eventBus[event] = eventHanlders.filter(item => {
        return item.nameSpace !== nameSpace
      })
    }
  }
}

const eventBus = new EventBus()
export default eventBus
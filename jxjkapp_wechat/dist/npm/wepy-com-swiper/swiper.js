'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var device = wx.getSystemInfoSync(); //  获取设备信息
var DEFAULT = {
  /**
   * 必填项
   */
  slideLength: 0, //  由于目前无法直接获取slide页数，目前只能通过参数写入
  /**
   * 可选参数
   */
  width: device.windowWidth,
  height: device.windowHeight,
  direction: 'horizontal',
  initialSlide: 0,
  speed: 300,
  timingFunction: 'ease', //  过渡动画速度曲线
  autoplay: 0, //  自动播放间隔，设置为0时不自动播放
  directionViewName: 'directionClass', //  对应视图中direction类名
  animationViewName: 'animationData', //  对应视图中animation属性名
  /**
   * 事件回调
   * @type {[type]}
   */
  onInit: null, //  swiper初始化时执行
  onTouchStart: null, //  手指碰触slide时执行
  onTouchMove: null, //  手指碰触slide并且滑动时执行
  onTouchEnd: null, //  手指离开slide时执行
  onSlideChangeStart: null, //  slide达到过渡条件时执行
  onSlideChangeEnd: null, //  swiper从一个slide过渡到另一个slide结束时执行
  onTransitionStart: null, //  过渡时触发
  onTransitionEnd: null, //  过渡结束时执行
  onSlideMove: null, //  手指触碰swiper并且拖动slide时执行
  onSlideNextStart: null, //  slide达到过渡条件 且规定了方向 向前（右、下）切换时执行
  onSlideNextEnd: null, //  slide达到过渡条件 且规定了方向 向前（右、下）切换结束时执行
  onSlidePrevStart: null, //  slide达到过渡条件 且规定了方向 向前（左、上）切换时执行
  onSlidePrevEnd: null //  slide达到过渡条件 且规定了方向 向前（左、上）切换结束时执行
};

var weSwiper = function (_wepy$component) {
  _inherits(weSwiper, _wepy$component);

  function weSwiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, weSwiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = weSwiper.__proto__ || Object.getPrototypeOf(weSwiper)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      directionClass: 'we-container-horizontal',
      animationData: null
    }, _this.props = {
      option: Object
    }, _this.methods = {
      touchstart: function touchstart(e) {
        var onTouchStart = this.onTouchStart,
            XORY = this.XORY,
            activeIndex = this.activeIndex,
            rectDistance = this.rectDistance;

        var touch = e.changedTouches[0];
        var distance = touch['client' + XORY];
        var translate = -activeIndex * rectDistance;

        this['touchStart' + XORY] = distance;
        this['translate' + XORY] = translate;
        this.touchStartTime = new Date().getTime();

        typeof onTouchStart === 'function' && onTouchStart(this, e); //  当手指碰触到slide时执行

        this.slideAnimation(translate, 0);
      },
      touchmove: function touchmove(e) {
        var onTouchMove = this.onTouchMove,
            XORY = this.XORY,
            onSlideMove = this.onSlideMove;

        var touch = e.changedTouches[0];
        var distance = touch['client' + XORY];
        var tmpMove = this['translate' + XORY] + distance - this['touchStart' + XORY];

        typeof onTouchMove === 'function' && onTouchMove(this, e); //  手指碰触slide并且滑动时执行

        this.slideAnimation(tmpMove, 0);

        typeof onSlideMove === 'function' && onSlideMove(this);
      },
      touchend: function touchend(e) {
        var onTouchEnd = this.onTouchEnd,
            XORY = this.XORY,
            speed = this.speed,
            touchStartTime = this.touchStartTime,
            rectDistance = this.rectDistance;

        var touch = e.changedTouches[0];
        var distance = touch['client' + XORY];
        var touchEndTime = new Date().getTime();

        var action = this.action(touchStartTime, touchEndTime, this['touchStart' + XORY], distance, rectDistance);

        typeof onTouchEnd === 'function' && onTouchEnd(this, e); //  手指离开slide时执行

        this[action](true, speed);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(weSwiper, [{
    key: 'action',


    /**
     * 切换控制器
     * @param touchStartTime： 手指触碰slide时的时间戳
     * @param et： 手指离开slide时的时间戳
     * @param from： 手指触碰slide时的屏幕位置
     * @param to： 手指离开slide时的屏幕位置
     * @param wrapperDistance： slide滑动方向上的容器长度
     * @returns {*}
     */
    value: function action(touchStartTime, touchEndTime, from, to, wrapperDistance) {
      var activeIndex = this.activeIndex,
          slideLength = this.slideLength,
          onTransitionStart = this.onTransitionStart;

      var deltaTime = touchEndTime - touchStartTime; //  手指触摸时长
      var distance = Math.abs(to - from); //  滑动距离

      var k = distance / deltaTime;

      if (to > from) {
        typeof onTransitionStart === 'function' && onTransitionStart(self); // slide达到过渡条件时执行
        return k > 0.3 || distance > wrapperDistance / 2 ? activeIndex === 0 ? 'slideBack' : 'slidePrev' : 'slideBack';
      }

      if (to < from) {
        typeof onTransitionStart === 'function' && onTransitionStart(self); // slide达到过渡条件时执行
        return k > 0.3 || distance > wrapperDistance / 2 ? activeIndex === slideLength - 1 ? 'slideBack' : 'slideNext' : 'slideBack';
      }

      if (to = from) {
        return 'slideBack';
      }
    }

    /**
     * 切换至下一个slide
     * @param runCallbacks： 可选，boolean，设置为false时不会触发onSlideChange回调函数
     * @param speed: 可选，num(单位ms)，切换速度
     */

  }, {
    key: 'slideNext',
    value: function slideNext() {
      var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      var self = this;
      var onSlideNextStart = self.onSlideNextStart,
          onSlideNextEnd = self.onSlideNextEnd;


      typeof onSlideNextStart === 'function' && onSlideNextStart(self); // slide达到过渡条件时执行

      self.slideTo(self.activeIndex + 1, speed, runCallbacks);

      typeof onSlideNextEnd === 'function' && setTimeout(function () {
        onSlideNextEnd(self);
      }, speed); //  slide过渡结束后执行
    }

    /**
     * 切换至上一个slide
     * @param runCallbacks： 可选，boolean，设置为false时不会触发onSlideChange回调函数
     * @param speed: 可选，num(单位ms)，切换速度
     */

  }, {
    key: 'slidePrev',
    value: function slidePrev() {
      var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      var self = this;
      var onSlidePrevStart = self.onSlidePrevStart,
          onSlidePrevEnd = self.onSlidePrevEnd;


      typeof onSlidePrevStart === 'function' && onSlidePrevStart(self); // slide达到过渡条件时执行

      self.slideTo(self.activeIndex - 1, speed, runCallbacks);

      typeof onSlidePrevEnd === 'function' && setTimeout(function () {
        onSlidePrevEnd(self);
      }, speed); //  slide过渡结束后执行
    }

    /**
     * 回弹
     * @param runCallbacks: 可选，boolean，设置为false时不会触发onSlideChange回调函数
     * @param speed: 可选，num(单位ms)，切换速度
     */

  }, {
    key: 'slideBack',
    value: function slideBack() {
      var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      var self = this;
      var XORY = self.XORY,
          activeIndex = self.activeIndex,
          rectDistance = self.rectDistance,
          onTransitionEnd = self.onTransitionEnd;


      var translate = -activeIndex * rectDistance;

      self.slideAnimation(translate, speed);

      typeof onTransitionEnd === 'function' && setTimeout(function () {
        onTransitionEnd(self);
      }, speed); //  slide过渡结束后执行
    }

    /**
     * 切换到指定slide
     * @param index：必选，num，指定将要切换到的slide的索引
     * @param speed：可选，num(单位ms)，切换速度
     * @param runCallbacks：可选，boolean，设置为false时不会触发onSlideChange回调函数
     */

  }, {
    key: 'slideTo',
    value: function slideTo(index) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
      var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var self = this;
      var slideLength = self.slideLength,
          activeIndex = self.activeIndex,
          rectDistance = self.rectDistance,
          onSlideChangeStart = self.onSlideChangeStart,
          onSlideChangeEnd = self.onSlideChangeEnd,
          onTransitionEnd = self.onTransitionEnd,
          consoleException = self.consoleException;


      try {
        if (typeof index !== 'number') throw 'paramType'; //  参数类型错误
        if (index < 0 || index > slideLength - 1) throw 'bound'; //  越界

        var translate = -index * rectDistance;
        self.previousIndex = activeIndex;
        self.activeIndex = index;
        self.isBeginning = self.activeIndex === self.initialSlide;
        self.isEnd = self.activeIndex === self.slideLength - 1;

        runCallbacks && typeof onSlideChangeStart === 'function' && onSlideChangeStart(self); // slide达到过渡条件时执行

        self.slideAnimation(translate, speed);

        runCallbacks && typeof onSlideChangeEnd === 'function' && setTimeout(function () {
          onSlideChangeEnd(self);
        }, speed); //  swiper从一个slide过渡到另一个slide结束后执行
        typeof onTransitionEnd === 'function' && setTimeout(function () {
          onTransitionEnd(self);
        }, speed); //  slide过渡结束后执行
      } catch (err) {
        consoleException(err, 'slideTo[Function]');
      }
    }

    /**
     * 平移动画
     * @param translate：平移位置
     * @param speed：过渡时长
     * @param timingFunction：过渡类型
     */

  }, {
    key: 'slideAnimation',
    value: function slideAnimation() {
      var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
      var timingFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ease';

      var REG = {
        TRANSLATE: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
        SPEED: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
        TIMINGFUNCTION: /linear|ease|ease-in|ease-in-out|ease-out|step-start|step-end/
      };

      var XORY = this.XORY,
          animationViewName = this.animationViewName,
          consoleException = this.consoleException;

      try {
        /**
         * 异常处理
         */
        if (!REG.TRANSLATE.test(translate)) throw 'paramType';
        if (!REG.SPEED.test(speed)) throw 'paramType';
        if (!REG.TIMINGFUNCTION.test(timingFunction)) throw 'paramType';
        /**
         * 创建一个动画实例
         */
        var animation = wx.createAnimation({
          transformOrigin: '50% 50%',
          duration: speed,
          timingFunction: timingFunction,
          delay: 0
        });

        animation['translate' + XORY](translate).step(); //  动画描述

        this.syncView(animationViewName, animation); //  同步动画到视图
      } catch (err) {
        consoleException(err, 'slideAnimation[Function]');
      }
    }

    /**
     * 同步设置到视图
     * @param DEFAULT：默认参数
     * @param param：构造参数
     */

  }, {
    key: 'syncView',
    value: function syncView(viewName, prop) {
      this['' + viewName] = prop;
      this.$apply();
    }

    /**
     * 错误对照
     */

  }, {
    key: 'consoleException',
    value: function consoleException(type, place) {
      var ERROR = {
        'paramType': '参数类型错误',
        'bound': '参数越界'
      };
      console.log('%c' + place + ':' + ERROR[type], 'color: red');
    }

    /**
     * 初始化配置
     */

  }, {
    key: 'initSwiper',
    value: function initSwiper(param) {
      var _this2 = this;

      var speed = param.speed,
          initialSlide = param.initialSlide,
          direction = param.direction,
          autoplay = param.autoplay,
          directionViewName = param.directionViewName;


      var directionClass = direction === 'horizontal' ? 'we-container-horizontal' : 'we-container-vertical';
      this.syncView(directionViewName, directionClass);
      this.rectDistance = direction === 'horizontal' ? this.width : this.height;
      this.XORY = direction === 'horizontal' ? 'X' : 'Y';
      this.activeIndex = initialSlide; //  将初始页码赋给activeIndex
      this.noSwiper = false; //  阻止手势滑动
      this.previousIndex = initialSlide; //  返回上一个活动块的索引，切换前的索引
      this.slideTo(initialSlide, 0);
      typeof autoplay === 'number' && autoplay > 0 && setInterval(function () {
        if (_this2.isEnd) {
          _this2.slideTo(0, speed);
        } else {
          _this2.slideTo(_this2.activeIndex + 1, speed);
        }
      }, autoplay);
      /**
       * 处理callback
       */
      var onInit = this.onInit;

      typeof onInit === 'function' && onInit(this);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var option = this.option;

      var CONFIG = Object.assign(this, DEFAULT, option);

      this.initSwiper(CONFIG);
    }
  }]);

  return weSwiper;
}(_wepy2.default.component);

exports.default = weSwiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJkZXZpY2UiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwiREVGQVVMVCIsInNsaWRlTGVuZ3RoIiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsImhlaWdodCIsIndpbmRvd0hlaWdodCIsImRpcmVjdGlvbiIsImluaXRpYWxTbGlkZSIsInNwZWVkIiwidGltaW5nRnVuY3Rpb24iLCJhdXRvcGxheSIsImRpcmVjdGlvblZpZXdOYW1lIiwiYW5pbWF0aW9uVmlld05hbWUiLCJvbkluaXQiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJvblNsaWRlQ2hhbmdlU3RhcnQiLCJvblNsaWRlQ2hhbmdlRW5kIiwib25UcmFuc2l0aW9uU3RhcnQiLCJvblRyYW5zaXRpb25FbmQiLCJvblNsaWRlTW92ZSIsIm9uU2xpZGVOZXh0U3RhcnQiLCJvblNsaWRlTmV4dEVuZCIsIm9uU2xpZGVQcmV2U3RhcnQiLCJvblNsaWRlUHJldkVuZCIsIndlU3dpcGVyIiwiZGF0YSIsImRpcmVjdGlvbkNsYXNzIiwiYW5pbWF0aW9uRGF0YSIsInByb3BzIiwib3B0aW9uIiwiT2JqZWN0IiwibWV0aG9kcyIsInRvdWNoc3RhcnQiLCJlIiwiWE9SWSIsImFjdGl2ZUluZGV4IiwicmVjdERpc3RhbmNlIiwidG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsImRpc3RhbmNlIiwidHJhbnNsYXRlIiwidG91Y2hTdGFydFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNsaWRlQW5pbWF0aW9uIiwidG91Y2htb3ZlIiwidG1wTW92ZSIsInRvdWNoZW5kIiwidG91Y2hFbmRUaW1lIiwiYWN0aW9uIiwiZXZlbnRzIiwiZnJvbSIsInRvIiwid3JhcHBlckRpc3RhbmNlIiwiZGVsdGFUaW1lIiwiTWF0aCIsImFicyIsImsiLCJzZWxmIiwicnVuQ2FsbGJhY2tzIiwic2xpZGVUbyIsInNldFRpbWVvdXQiLCJpbmRleCIsImNvbnNvbGVFeGNlcHRpb24iLCJwcmV2aW91c0luZGV4IiwiaXNCZWdpbm5pbmciLCJpc0VuZCIsImVyciIsIlJFRyIsIlRSQU5TTEFURSIsIlNQRUVEIiwiVElNSU5HRlVOQ1RJT04iLCJ0ZXN0IiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZHVyYXRpb24iLCJkZWxheSIsInN0ZXAiLCJzeW5jVmlldyIsInZpZXdOYW1lIiwicHJvcCIsIiRhcHBseSIsInR5cGUiLCJwbGFjZSIsIkVSUk9SIiwiY29uc29sZSIsImxvZyIsInBhcmFtIiwibm9Td2lwZXIiLCJzZXRJbnRlcnZhbCIsIkNPTkZJRyIsImFzc2lnbiIsImluaXRTd2lwZXIiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxHQUFHQyxpQkFBSCxFQUFmLEMsQ0FBdUM7QUFDdkMsSUFBTUMsVUFBVTtBQUNkOzs7QUFHQUMsZUFBYSxDQUpDLEVBSXdCO0FBQ3RDOzs7QUFHQUMsU0FBT0wsT0FBT00sV0FSQTtBQVNkQyxVQUFRUCxPQUFPUSxZQVREO0FBVWRDLGFBQVcsWUFWRztBQVdkQyxnQkFBYyxDQVhBO0FBWWRDLFNBQU8sR0FaTztBQWFkQyxrQkFBZ0IsTUFiRixFQWF3QjtBQUN0Q0MsWUFBVSxDQWRJLEVBY3dCO0FBQ3RDQyxxQkFBbUIsZ0JBZkwsRUFleUI7QUFDdkNDLHFCQUFtQixlQWhCTCxFQWdCd0I7QUFDdEM7Ozs7QUFJQUMsVUFBUSxJQXJCTSxFQXFCd0I7QUFDdENDLGdCQUFjLElBdEJBLEVBc0J3QjtBQUN0Q0MsZUFBYSxJQXZCQyxFQXVCd0I7QUFDdENDLGNBQVksSUF4QkUsRUF3QndCO0FBQ3RDQyxzQkFBb0IsSUF6Qk4sRUF5QndCO0FBQ3RDQyxvQkFBa0IsSUExQkosRUEwQndCO0FBQ3RDQyxxQkFBbUIsSUEzQkwsRUEyQndCO0FBQ3RDQyxtQkFBaUIsSUE1QkgsRUE0QndCO0FBQ3RDQyxlQUFhLElBN0JDLEVBNkJ3QjtBQUN0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M0I7QUFDQSxhQUFPRyxRQUFQLEtBQW9CLFFBQXBCLElBQWdDQSxXQUFXLENBQTNDLElBQWdEa0YsWUFBWSxZQUFNO0FBQ2hFLFlBQUksT0FBS3hCLEtBQVQsRUFBZ0I7QUFDZCxpQkFBS04sT0FBTCxDQUFhLENBQWIsRUFBZ0J0RCxLQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFLc0QsT0FBTCxDQUFhLE9BQUt6QixXQUFMLEdBQW1CLENBQWhDLEVBQW1DN0IsS0FBbkM7QUFDRDtBQUNGLE9BTitDLEVBTTdDRSxRQU42QyxDQUFoRDtBQU9BOzs7QUF4QmlCLFVBMkJURyxNQTNCUyxHQTJCRSxJQTNCRixDQTJCVEEsTUEzQlM7O0FBNEJqQixhQUFPQSxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxPQUFPLElBQVAsQ0FBaEM7QUFDRDs7OzZCQUVTO0FBQUEsVUFDQWtCLE1BREEsR0FDVyxJQURYLENBQ0FBLE1BREE7O0FBRVIsVUFBTThELFNBQVM3RCxPQUFPOEQsTUFBUCxDQUFjLElBQWQsRUFBb0I5RixPQUFwQixFQUE4QitCLE1BQTlCLENBQWY7O0FBRUEsV0FBS2dFLFVBQUwsQ0FBZ0JGLE1BQWhCO0FBQ0Q7Ozs7RUFoU21DLGVBQUtHLFM7O2tCQUF0QnRFLFEiLCJmaWxlIjoic3dpcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5jb25zdCBkZXZpY2UgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpICAvLyAg6I635Y+W6K6+5aSH5L+h5oGvXG5jb25zdCBERUZBVUxUID0ge1xuICAvKipcbiAgICog5b+F5aGr6aG5XG4gICAqL1xuICBzbGlkZUxlbmd0aDogMCwgICAgICAgICAgICAgICAgICAgICAgIC8vICDnlLHkuo7nm67liY3ml6Dms5Xnm7TmjqXojrflj5ZzbGlkZemhteaVsO+8jOebruWJjeWPquiDvemAmui/h+WPguaVsOWGmeWFpVxuICAvKipcbiAgICog5Y+v6YCJ5Y+C5pWwXG4gICAqL1xuICB3aWR0aDogZGV2aWNlLndpbmRvd1dpZHRoLFxuICBoZWlnaHQ6IGRldmljZS53aW5kb3dIZWlnaHQsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIHNwZWVkOiAzMDAsXG4gIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsICAgICAgICAgICAgICAgLy8gIOi/h+a4oeWKqOeUu+mAn+W6puabsue6v1xuICBhdXRvcGxheTogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICDoh6rliqjmkq3mlL7pl7TpmpTvvIzorr7nva7kuLow5pe25LiN6Ieq5Yqo5pKt5pS+XG4gIGRpcmVjdGlvblZpZXdOYW1lOiAnZGlyZWN0aW9uQ2xhc3MnLCAgIC8vICDlr7nlupTop4blm77kuK1kaXJlY3Rpb27nsbvlkI1cbiAgYW5pbWF0aW9uVmlld05hbWU6ICdhbmltYXRpb25EYXRhJywgICAvLyAg5a+55bqU6KeG5Zu+5LitYW5pbWF0aW9u5bGe5oCn5ZCNXG4gIC8qKlxuICAgKiDkuovku7blm57osINcbiAgICogQHR5cGUge1t0eXBlXX1cbiAgICovXG4gIG9uSW5pdDogbnVsbCwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHN3aXBlcuWIneWni+WMluaXtuaJp+ihjFxuICBvblRvdWNoU3RhcnQ6IG51bGwsICAgICAgICAgICAgICAgICAgIC8vICDmiYvmjIfnorDop6ZzbGlkZeaXtuaJp+ihjFxuICBvblRvdWNoTW92ZTogbnVsbCwgICAgICAgICAgICAgICAgICAgIC8vICDmiYvmjIfnorDop6ZzbGlkZeW5tuS4lOa7keWKqOaXtuaJp+ihjFxuICBvblRvdWNoRW5kOiBudWxsLCAgICAgICAgICAgICAgICAgICAgIC8vICDmiYvmjIfnprvlvIBzbGlkZeaXtuaJp+ihjFxuICBvblNsaWRlQ2hhbmdlU3RhcnQ6IG51bGwsICAgICAgICAgICAgIC8vICBzbGlkZei+vuWIsOi/h+a4oeadoeS7tuaXtuaJp+ihjFxuICBvblNsaWRlQ2hhbmdlRW5kOiBudWxsLCAgICAgICAgICAgICAgIC8vICBzd2lwZXLku47kuIDkuKpzbGlkZei/h+a4oeWIsOWPpuS4gOS4qnNsaWRl57uT5p2f5pe25omn6KGMXG4gIG9uVHJhbnNpdGlvblN0YXJ0OiBudWxsLCAgICAgICAgICAgICAgLy8gIOi/h+a4oeaXtuinpuWPkVxuICBvblRyYW5zaXRpb25FbmQ6IG51bGwsICAgICAgICAgICAgICAgIC8vICDov4fmuKHnu5PmnZ/ml7bmiafooYxcbiAgb25TbGlkZU1vdmU6IG51bGwsICAgICAgICAgICAgICAgICAgICAvLyAg5omL5oyH6Kem56Kwc3dpcGVy5bm25LiU5ouW5Yqoc2xpZGXml7bmiafooYxcbiAgb25TbGlkZU5leHRTdGFydDogbnVsbCwgICAgICAgICAgICAgICAvLyAgc2xpZGXovr7liLDov4fmuKHmnaHku7Yg5LiU6KeE5a6a5LqG5pa55ZCRIOWQkeWJje+8iOWPs+OAgeS4i++8ieWIh+aNouaXtuaJp+ihjFxuICBvblNsaWRlTmV4dEVuZDogbnVsbCwgICAgICAgICAgICAgICAgIC8vICBzbGlkZei+vuWIsOi/h+a4oeadoeS7tiDkuJTop4TlrprkuobmlrnlkJEg5ZCR5YmN77yI5Y+z44CB5LiL77yJ5YiH5o2i57uT5p2f5pe25omn6KGMXG4gIG9uU2xpZGVQcmV2U3RhcnQ6IG51bGwsICAgICAgICAgICAgICAgLy8gIHNsaWRl6L6+5Yiw6L+H5rih5p2h5Lu2IOS4lOinhOWumuS6huaWueWQkSDlkJHliY3vvIjlt6bjgIHkuIrvvInliIfmjaLml7bmiafooYxcbiAgb25TbGlkZVByZXZFbmQ6IG51bGwgICAgICAgICAgICAgICAgICAvLyAgc2xpZGXovr7liLDov4fmuKHmnaHku7Yg5LiU6KeE5a6a5LqG5pa55ZCRIOWQkeWJje+8iOW3puOAgeS4iu+8ieWIh+aNoue7k+adn+aXtuaJp+ihjFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3ZVN3aXBlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICBkaXJlY3Rpb25DbGFzczogJ3dlLWNvbnRhaW5lci1ob3Jpem9udGFsJyxcbiAgICBhbmltYXRpb25EYXRhOiBudWxsXG4gIH1cblxuICBwcm9wcyA9IHtcbiAgICBvcHRpb246IE9iamVjdFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0b3VjaHN0YXJ0IChlKSB7XG4gICAgICBjb25zdCB7IG9uVG91Y2hTdGFydCwgWE9SWSwgYWN0aXZlSW5kZXgsIHJlY3REaXN0YW5jZSB9ID0gdGhpc1xuICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoW2BjbGllbnQke1hPUll9YF1cbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9ICAtIGFjdGl2ZUluZGV4ICogcmVjdERpc3RhbmNlXG5cbiAgICAgIHRoaXNbYHRvdWNoU3RhcnQke1hPUll9YF0gPSBkaXN0YW5jZVxuICAgICAgdGhpc1tgdHJhbnNsYXRlJHtYT1JZfWBdID0gdHJhbnNsYXRlXG4gICAgICB0aGlzLnRvdWNoU3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblxuICAgICAgdHlwZW9mIG9uVG91Y2hTdGFydCA9PT0gJ2Z1bmN0aW9uJyAmJiBvblRvdWNoU3RhcnQodGhpcywgZSkgLy8gIOW9k+aJi+aMh+eisOinpuWIsHNsaWRl5pe25omn6KGMXG5cbiAgICAgIHRoaXMuc2xpZGVBbmltYXRpb24odHJhbnNsYXRlLCAwKVxuICAgIH0sXG5cbiAgICB0b3VjaG1vdmUgKGUpIHtcbiAgICAgIGNvbnN0IHsgb25Ub3VjaE1vdmUsIFhPUlksIG9uU2xpZGVNb3ZlIH0gPSB0aGlzXG4gICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hbYGNsaWVudCR7WE9SWX1gXVxuICAgICAgY29uc3QgdG1wTW92ZSA9IHRoaXNbYHRyYW5zbGF0ZSR7WE9SWX1gXSArIGRpc3RhbmNlIC0gdGhpc1tgdG91Y2hTdGFydCR7WE9SWX1gXVxuXG4gICAgICB0eXBlb2Ygb25Ub3VjaE1vdmUgPT09ICdmdW5jdGlvbicgJiYgb25Ub3VjaE1vdmUodGhpcywgZSkgLy8gIOaJi+aMh+eisOinpnNsaWRl5bm25LiU5ruR5Yqo5pe25omn6KGMXG5cbiAgICAgIHRoaXMuc2xpZGVBbmltYXRpb24odG1wTW92ZSwgMClcblxuICAgICAgdHlwZW9mIG9uU2xpZGVNb3ZlID09PSAnZnVuY3Rpb24nICYmIG9uU2xpZGVNb3ZlKHRoaXMpXG4gICAgfSxcblxuICAgIHRvdWNoZW5kIChlKSB7XG4gICAgICBjb25zdCB7IG9uVG91Y2hFbmQsIFhPUlksIHNwZWVkLCB0b3VjaFN0YXJ0VGltZSwgcmVjdERpc3RhbmNlIH0gPSB0aGlzXG4gICAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hbYGNsaWVudCR7WE9SWX1gXVxuICAgICAgY29uc3QgdG91Y2hFbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcblxuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb24odG91Y2hTdGFydFRpbWUsIHRvdWNoRW5kVGltZSwgdGhpc1tgdG91Y2hTdGFydCR7WE9SWX1gXSwgZGlzdGFuY2UsIHJlY3REaXN0YW5jZSlcblxuICAgICAgdHlwZW9mIG9uVG91Y2hFbmQgPT09ICdmdW5jdGlvbicgJiYgb25Ub3VjaEVuZCh0aGlzLCBlKSAvLyAg5omL5oyH56a75byAc2xpZGXml7bmiafooYxcblxuICAgICAgdGhpc1thY3Rpb25dKHRydWUsIHNwZWVkKVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG5cbiAgLyoqXG4gICAqIOWIh+aNouaOp+WItuWZqFxuICAgKiBAcGFyYW0gdG91Y2hTdGFydFRpbWXvvJog5omL5oyH6Kem56Kwc2xpZGXml7bnmoTml7bpl7TmiLNcbiAgICogQHBhcmFtIGV077yaIOaJi+aMh+emu+W8gHNsaWRl5pe255qE5pe26Ze05oizXG4gICAqIEBwYXJhbSBmcm9t77yaIOaJi+aMh+inpueisHNsaWRl5pe255qE5bGP5bmV5L2N572uXG4gICAqIEBwYXJhbSB0b++8miDmiYvmjIfnprvlvIBzbGlkZeaXtueahOWxj+W5leS9jee9rlxuICAgKiBAcGFyYW0gd3JhcHBlckRpc3RhbmNl77yaIHNsaWRl5ruR5Yqo5pa55ZCR5LiK55qE5a655Zmo6ZW/5bqmXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgYWN0aW9uICh0b3VjaFN0YXJ0VGltZSwgdG91Y2hFbmRUaW1lLCBmcm9tLCB0bywgd3JhcHBlckRpc3RhbmNlKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlSW5kZXgsXG4gICAgICBzbGlkZUxlbmd0aCxcbiAgICAgIG9uVHJhbnNpdGlvblN0YXJ0IH0gPSB0aGlzXG4gICAgY29uc3QgZGVsdGFUaW1lID0gdG91Y2hFbmRUaW1lIC0gdG91Y2hTdGFydFRpbWUgIC8vICDmiYvmjIfop6bmkbjml7bplb9cbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKHRvIC0gZnJvbSkgIC8vICDmu5Hliqjot53nprtcblxuICAgIGNvbnN0IGsgPSBkaXN0YW5jZSAvIGRlbHRhVGltZVxuXG4gICAgaWYgKHRvID4gZnJvbSkge1xuICAgICAgdHlwZW9mIG9uVHJhbnNpdGlvblN0YXJ0ID09PSAnZnVuY3Rpb24nICYmIG9uVHJhbnNpdGlvblN0YXJ0KHNlbGYpICAvLyBzbGlkZei+vuWIsOi/h+a4oeadoeS7tuaXtuaJp+ihjFxuICAgICAgcmV0dXJuIChrID4gMC4zIHx8IGRpc3RhbmNlID4gd3JhcHBlckRpc3RhbmNlIC8gMikgPyAoYWN0aXZlSW5kZXggPT09IDAgPyAnc2xpZGVCYWNrJyA6ICdzbGlkZVByZXYnKSA6ICdzbGlkZUJhY2snXG4gICAgfVxuXG4gICAgaWYgKHRvIDwgZnJvbSkge1xuICAgICAgdHlwZW9mIG9uVHJhbnNpdGlvblN0YXJ0ID09PSAnZnVuY3Rpb24nICYmIG9uVHJhbnNpdGlvblN0YXJ0KHNlbGYpICAvLyBzbGlkZei+vuWIsOi/h+a4oeadoeS7tuaXtuaJp+ihjFxuICAgICAgcmV0dXJuIChrID4gMC4zIHx8IGRpc3RhbmNlID4gd3JhcHBlckRpc3RhbmNlIC8gMikgPyAoYWN0aXZlSW5kZXggPT09IHNsaWRlTGVuZ3RoIC0gMSA/ICdzbGlkZUJhY2snIDogJ3NsaWRlTmV4dCcpIDogJ3NsaWRlQmFjaydcbiAgICB9XG5cbiAgICBpZiAodG8gPSBmcm9tKSB7XG4gICAgICByZXR1cm4gJ3NsaWRlQmFjaydcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiDliIfmjaLoh7PkuIvkuIDkuKpzbGlkZVxuICAgKiBAcGFyYW0gcnVuQ2FsbGJhY2tz77yaIOWPr+mAie+8jGJvb2xlYW7vvIzorr7nva7kuLpmYWxzZeaXtuS4jeS8muinpuWPkW9uU2xpZGVDaGFuZ2Xlm57osIPlh73mlbBcbiAgICogQHBhcmFtIHNwZWVkOiDlj6/pgInvvIxudW0o5Y2V5L2NbXMp77yM5YiH5o2i6YCf5bqmXG4gICAqL1xuICBzbGlkZU5leHQgKHJ1bkNhbGxiYWNrcyA9IGZhbHNlLCBzcGVlZCA9IDMwMCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3Qge1xuICAgICAgb25TbGlkZU5leHRTdGFydCxcbiAgICAgIG9uU2xpZGVOZXh0RW5kXG4gICAgfSA9IHNlbGZcblxuICAgIHR5cGVvZiBvblNsaWRlTmV4dFN0YXJ0ID09PSAnZnVuY3Rpb24nICYmIG9uU2xpZGVOZXh0U3RhcnQoc2VsZikgIC8vIHNsaWRl6L6+5Yiw6L+H5rih5p2h5Lu25pe25omn6KGMXG5cbiAgICBzZWxmLnNsaWRlVG8oc2VsZi5hY3RpdmVJbmRleCArIDEsIHNwZWVkLCBydW5DYWxsYmFja3MpXG5cbiAgICB0eXBlb2Ygb25TbGlkZU5leHRFbmQgPT09ICdmdW5jdGlvbicgJiYgc2V0VGltZW91dCgoKSA9PiB7IG9uU2xpZGVOZXh0RW5kKHNlbGYpIH0sIHNwZWVkKSAgLy8gIHNsaWRl6L+H5rih57uT5p2f5ZCO5omn6KGMXG4gIH1cblxuICAvKipcbiAgICog5YiH5o2i6Iez5LiK5LiA5Liqc2xpZGVcbiAgICogQHBhcmFtIHJ1bkNhbGxiYWNrc++8miDlj6/pgInvvIxib29sZWFu77yM6K6+572u5Li6ZmFsc2Xml7bkuI3kvJrop6blj5FvblNsaWRlQ2hhbmdl5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSBzcGVlZDog5Y+v6YCJ77yMbnVtKOWNleS9jW1zKe+8jOWIh+aNoumAn+W6plxuICAgKi9cbiAgc2xpZGVQcmV2IChydW5DYWxsYmFja3MgPSBmYWxzZSwgc3BlZWQgPSAzMDApIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHtcbiAgICAgIG9uU2xpZGVQcmV2U3RhcnQsXG4gICAgICBvblNsaWRlUHJldkVuZFxuICAgIH0gPSBzZWxmXG5cbiAgICB0eXBlb2Ygb25TbGlkZVByZXZTdGFydCA9PT0gJ2Z1bmN0aW9uJyAmJiBvblNsaWRlUHJldlN0YXJ0KHNlbGYpICAvLyBzbGlkZei+vuWIsOi/h+a4oeadoeS7tuaXtuaJp+ihjFxuXG4gICAgc2VsZi5zbGlkZVRvKHNlbGYuYWN0aXZlSW5kZXggLSAxLCBzcGVlZCwgcnVuQ2FsbGJhY2tzKVxuXG4gICAgdHlwZW9mIG9uU2xpZGVQcmV2RW5kID09PSAnZnVuY3Rpb24nICYmIHNldFRpbWVvdXQoKCkgPT4geyBvblNsaWRlUHJldkVuZChzZWxmKSB9LCBzcGVlZCkgIC8vICBzbGlkZei/h+a4oee7k+adn+WQjuaJp+ihjFxuICB9XG5cbiAgLyoqXG4gICAqIOWbnuW8uVxuICAgKiBAcGFyYW0gcnVuQ2FsbGJhY2tzOiDlj6/pgInvvIxib29sZWFu77yM6K6+572u5Li6ZmFsc2Xml7bkuI3kvJrop6blj5FvblNsaWRlQ2hhbmdl5Zue6LCD5Ye95pWwXG4gICAqIEBwYXJhbSBzcGVlZDog5Y+v6YCJ77yMbnVtKOWNleS9jW1zKe+8jOWIh+aNoumAn+W6plxuICAgKi9cbiAgc2xpZGVCYWNrIChydW5DYWxsYmFja3MgPSBmYWxzZSwgc3BlZWQgPSAzMDApIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHtcbiAgICAgIFhPUlksXG4gICAgICBhY3RpdmVJbmRleCxcbiAgICAgIHJlY3REaXN0YW5jZSxcbiAgICAgIG9uVHJhbnNpdGlvbkVuZFxuICAgIH0gPSBzZWxmXG5cbiAgICBjb25zdCB0cmFuc2xhdGUgPSAtIGFjdGl2ZUluZGV4ICogcmVjdERpc3RhbmNlXG5cbiAgICBzZWxmLnNsaWRlQW5pbWF0aW9uKHRyYW5zbGF0ZSwgc3BlZWQpXG5cbiAgICB0eXBlb2Ygb25UcmFuc2l0aW9uRW5kID09PSAnZnVuY3Rpb24nICYmIHNldFRpbWVvdXQoKCkgPT4geyBvblRyYW5zaXRpb25FbmQoc2VsZikgfSwgc3BlZWQpICAvLyAgc2xpZGXov4fmuKHnu5PmnZ/lkI7miafooYxcbiAgfVxuXG4gIC8qKlxuICAgKiDliIfmjaLliLDmjIflrppzbGlkZVxuICAgKiBAcGFyYW0gaW5kZXjvvJrlv4XpgInvvIxudW3vvIzmjIflrprlsIbopoHliIfmjaLliLDnmoRzbGlkZeeahOe0ouW8lVxuICAgKiBAcGFyYW0gc3BlZWTvvJrlj6/pgInvvIxudW0o5Y2V5L2NbXMp77yM5YiH5o2i6YCf5bqmXG4gICAqIEBwYXJhbSBydW5DYWxsYmFja3PvvJrlj6/pgInvvIxib29sZWFu77yM6K6+572u5Li6ZmFsc2Xml7bkuI3kvJrop6blj5FvblNsaWRlQ2hhbmdl5Zue6LCD5Ye95pWwXG4gICAqL1xuICBzbGlkZVRvIChpbmRleCwgc3BlZWQgPSAzMDAsIHJ1bkNhbGxiYWNrcyA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZUxlbmd0aCxcbiAgICAgIGFjdGl2ZUluZGV4LFxuICAgICAgcmVjdERpc3RhbmNlLFxuICAgICAgb25TbGlkZUNoYW5nZVN0YXJ0LFxuICAgICAgb25TbGlkZUNoYW5nZUVuZCxcbiAgICAgIG9uVHJhbnNpdGlvbkVuZCxcbiAgICAgIGNvbnNvbGVFeGNlcHRpb25cbiAgICB9ID0gc2VsZlxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgIGluZGV4ICE9PSAnbnVtYmVyJykgdGhyb3cgJ3BhcmFtVHlwZScgLy8gIOWPguaVsOexu+Wei+mUmeivr1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHNsaWRlTGVuZ3RoIC0gMSkgdGhyb3cgJ2JvdW5kJyAgIC8vICDotornlYxcblxuICAgICAgY29uc3QgdHJhbnNsYXRlID0gLSBpbmRleCAqIHJlY3REaXN0YW5jZVxuICAgICAgc2VsZi5wcmV2aW91c0luZGV4ID0gYWN0aXZlSW5kZXhcbiAgICAgIHNlbGYuYWN0aXZlSW5kZXggPSBpbmRleFxuICAgICAgc2VsZi5pc0JlZ2lubmluZyA9IHNlbGYuYWN0aXZlSW5kZXggPT09IHNlbGYuaW5pdGlhbFNsaWRlXG4gICAgICBzZWxmLmlzRW5kID0gc2VsZi5hY3RpdmVJbmRleCA9PT0gc2VsZi5zbGlkZUxlbmd0aCAtIDFcblxuICAgICAgcnVuQ2FsbGJhY2tzICYmIHR5cGVvZiBvblNsaWRlQ2hhbmdlU3RhcnQgPT09ICdmdW5jdGlvbicgJiYgb25TbGlkZUNoYW5nZVN0YXJ0KHNlbGYpICAvLyBzbGlkZei+vuWIsOi/h+a4oeadoeS7tuaXtuaJp+ihjFxuXG4gICAgICBzZWxmLnNsaWRlQW5pbWF0aW9uKHRyYW5zbGF0ZSwgc3BlZWQpXG5cbiAgICAgIHJ1bkNhbGxiYWNrcyAmJiAgdHlwZW9mIG9uU2xpZGVDaGFuZ2VFbmQgPT09ICdmdW5jdGlvbicgJiYgc2V0VGltZW91dCgoKSA9PiB7IG9uU2xpZGVDaGFuZ2VFbmQoc2VsZikgfSwgc3BlZWQpICAvLyAgc3dpcGVy5LuO5LiA5Liqc2xpZGXov4fmuKHliLDlj6bkuIDkuKpzbGlkZee7k+adn+WQjuaJp+ihjFxuICAgICAgdHlwZW9mIG9uVHJhbnNpdGlvbkVuZCA9PT0gJ2Z1bmN0aW9uJyAmJiBzZXRUaW1lb3V0KCgpID0+IHsgb25UcmFuc2l0aW9uRW5kKHNlbGYpIH0sIHNwZWVkKSAgLy8gIHNsaWRl6L+H5rih57uT5p2f5ZCO5omn6KGMXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlRXhjZXB0aW9uKGVyciwgJ3NsaWRlVG9bRnVuY3Rpb25dJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5bmz56e75Yqo55S7XG4gICAqIEBwYXJhbSB0cmFuc2xhdGXvvJrlubPnp7vkvY3nva5cbiAgICogQHBhcmFtIHNwZWVk77ya6L+H5rih5pe26ZW/XG4gICAqIEBwYXJhbSB0aW1pbmdGdW5jdGlvbu+8mui/h+a4oeexu+Wei1xuICAgKi9cbiAgc2xpZGVBbmltYXRpb24gKHRyYW5zbGF0ZSA9IDAsIHNwZWVkID0gMzAwLCB0aW1pbmdGdW5jdGlvbiA9ICdlYXNlJykge1xuICAgIGNvbnN0IFJFRyA9IHtcbiAgICAgIFRSQU5TTEFURTogL14oMHxbMS05XVswLTldKnwtWzEtOV1bMC05XSopJC8sXG4gICAgICBTUEVFRDogL14oMHxbMS05XVswLTldKnwtWzEtOV1bMC05XSopJC8sXG4gICAgICBUSU1JTkdGVU5DVElPTjogL2xpbmVhcnxlYXNlfGVhc2UtaW58ZWFzZS1pbi1vdXR8ZWFzZS1vdXR8c3RlcC1zdGFydHxzdGVwLWVuZC9cbiAgICB9XG5cbiAgICBjb25zdCB7IFhPUlksIGFuaW1hdGlvblZpZXdOYW1lLCBjb25zb2xlRXhjZXB0aW9uIH0gPSB0aGlzXG4gICAgdHJ5IHtcbiAgICAgIC8qKlxuICAgICAgICog5byC5bi45aSE55CGXG4gICAgICAgKi9cbiAgICAgIGlmKCFSRUcuVFJBTlNMQVRFLnRlc3QodHJhbnNsYXRlKSkgdGhyb3cgJ3BhcmFtVHlwZSdcbiAgICAgIGlmKCFSRUcuU1BFRUQudGVzdChzcGVlZCkpIHRocm93ICdwYXJhbVR5cGUnXG4gICAgICBpZighUkVHLlRJTUlOR0ZVTkNUSU9OLnRlc3QodGltaW5nRnVuY3Rpb24pKSB0aHJvdyAncGFyYW1UeXBlJ1xuICAgICAgLyoqXG4gICAgICAgKiDliJvlu7rkuIDkuKrliqjnlLvlrp7kvotcbiAgICAgICAqL1xuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJScsXG4gICAgICAgIGR1cmF0aW9uOiBzcGVlZCxcbiAgICAgICAgdGltaW5nRnVuY3Rpb24sXG4gICAgICAgIGRlbGF5OiAwXG4gICAgICB9KVxuXG4gICAgICBhbmltYXRpb25bYHRyYW5zbGF0ZSR7WE9SWX1gXSh0cmFuc2xhdGUpLnN0ZXAoKSAgLy8gIOWKqOeUu+aPj+i/sFxuXG4gICAgICB0aGlzLnN5bmNWaWV3KGFuaW1hdGlvblZpZXdOYW1lLCBhbmltYXRpb24pICAvLyAg5ZCM5q2l5Yqo55S75Yiw6KeG5Zu+XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGVFeGNlcHRpb24oZXJyLCAnc2xpZGVBbmltYXRpb25bRnVuY3Rpb25dJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5ZCM5q2l6K6+572u5Yiw6KeG5Zu+XG4gICAqIEBwYXJhbSBERUZBVUxU77ya6buY6K6k5Y+C5pWwXG4gICAqIEBwYXJhbSBwYXJhbe+8muaehOmAoOWPguaVsFxuICAgKi9cbiAgc3luY1ZpZXcgKHZpZXdOYW1lLCBwcm9wKSB7XG4gICAgICB0aGlzW2Ake3ZpZXdOYW1lfWBdPSBwcm9wXG4gICAgICB0aGlzLiRhcHBseSgpXG4gIH1cblxuICAvKipcbiAgICog6ZSZ6K+v5a+554WnXG4gICAqL1xuICBjb25zb2xlRXhjZXB0aW9uICh0eXBlLCBwbGFjZSkge1xuICAgIGNvbnN0IEVSUk9SID0ge1xuICAgICAgJ3BhcmFtVHlwZSc6ICflj4LmlbDnsbvlnovplJnor68nLFxuICAgICAgJ2JvdW5kJzogJ+WPguaVsOi2iueVjCdcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCVjJHtwbGFjZX06JHtFUlJPUlt0eXBlXX1gLCAnY29sb3I6IHJlZCcpXG4gIH1cblxuICAvKipcbiAgICog5Yid5aeL5YyW6YWN572uXG4gICAqL1xuICBpbml0U3dpcGVyIChwYXJhbSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNwZWVkLFxuICAgICAgaW5pdGlhbFNsaWRlLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgYXV0b3BsYXksXG4gICAgICBkaXJlY3Rpb25WaWV3TmFtZVxuICAgIH0gPSBwYXJhbVxuXG4gICAgY29uc3QgZGlyZWN0aW9uQ2xhc3MgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICd3ZS1jb250YWluZXItaG9yaXpvbnRhbCcgOiAnd2UtY29udGFpbmVyLXZlcnRpY2FsJ1xuICAgIHRoaXMuc3luY1ZpZXcoZGlyZWN0aW9uVmlld05hbWUsIGRpcmVjdGlvbkNsYXNzKVxuICAgIHRoaXMucmVjdERpc3RhbmNlID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLndpZHRoIDogdGhpcy5oZWlnaHRcbiAgICB0aGlzLlhPUlkgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyA/ICdYJyA6ICdZJ1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpbml0aWFsU2xpZGUgIC8vICDlsIbliJ3lp4vpobXnoIHotYvnu5lhY3RpdmVJbmRleFxuICAgIHRoaXMubm9Td2lwZXIgPSBmYWxzZSAgLy8gIOmYu+atouaJi+WKv+a7keWKqFxuICAgIHRoaXMucHJldmlvdXNJbmRleCA9IGluaXRpYWxTbGlkZSAgLy8gIOi/lOWbnuS4iuS4gOS4qua0u+WKqOWdl+eahOe0ouW8le+8jOWIh+aNouWJjeeahOe0ouW8lVxuICAgIHRoaXMuc2xpZGVUbyhpbml0aWFsU2xpZGUsIDApXG4gICAgdHlwZW9mIGF1dG9wbGF5ID09PSAnbnVtYmVyJyAmJiBhdXRvcGxheSA+IDAgJiYgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNFbmQpIHtcbiAgICAgICAgdGhpcy5zbGlkZVRvKDAsIHNwZWVkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zbGlkZVRvKHRoaXMuYWN0aXZlSW5kZXggKyAxLCBzcGVlZClcbiAgICAgIH1cbiAgICB9LCBhdXRvcGxheSlcbiAgICAvKipcbiAgICAgKiDlpITnkIZjYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0IHsgb25Jbml0IH0gPSB0aGlzXG4gICAgdHlwZW9mIG9uSW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiBvbkluaXQodGhpcylcbiAgfVxuXG4gIG9uTG9hZCAoKSB7XG4gICAgY29uc3QgeyBvcHRpb24gfSA9IHRoaXNcbiAgICBjb25zdCBDT05GSUcgPSBPYmplY3QuYXNzaWduKHRoaXMsIERFRkFVTFQgLCBvcHRpb24pXG5cbiAgICB0aGlzLmluaXRTd2lwZXIoQ09ORklHKVxuICB9XG59XG4iXX0=
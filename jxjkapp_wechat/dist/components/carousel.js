'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComSwiper = require('./../npm/wepy-com-swiper/swiper.js');

var _wepyComSwiper2 = _interopRequireDefault(_wepyComSwiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.$repeat = {}, _this.$props = { "weSwiper": { "xmlns:v-bind": "", "v-bind:option.once": "swiper" } }, _this.$events = {}, _this.components = {
      weSwiper: _wepyComSwiper2.default
    }, _this.data = {
      swiper: {
        autoplay: 2000,
        // direction: 'vertical',
        slideLength: 3,
        /**
         * swiper初始化后执行
         * @param swiper
         */
        onInit: function onInit(weswiper) {},

        /**
         * 手指碰触slide时执行
         * @param swiper
         * @param event
         */
        onTouchStart: function onTouchStart(weswiper, event) {},

        /**
         * 手指碰触slide并且滑动时执行
         * @param swiper
         * @param event
         */
        onTouchMove: function onTouchMove(weswiper, event) {},

        /**
         * 手指离开slide时执行
         * @param swiper
         * @param event
         */
        onTouchEnd: function onTouchEnd(weswiper, event) {},

        /**
         *  slide达到过渡条件时执行
         */
        onSlideChangeStart: function onSlideChangeStart(weswiper) {},

        /**
         *  swiper从一个slide过渡到另一个slide结束时执行
         */
        onSlideChangeEnd: function onSlideChangeEnd(weswiper) {},

        /**
         *  过渡时触发
         */
        onTransitionStart: function onTransitionStart(weswiper) {},

        /**
         *  过渡结束时执行
         */
        onTransitionEnd: function onTransitionEnd(weswiper) {
          if (weswiper.activeIndex === 1) {
            weswiper.slideTo(0);
          }
          console.log('weswiper', weswiper);
        },

        /**
         *  手指触碰swiper并且拖动slide时执行
         */
        onSlideMove: function onSlideMove(weswiper) {},

        /**
         * slide达到过渡条件 且规定了方向 向前（右、下）切换时执行
         */
        onSlideNextStart: function onSlideNextStart(weswiper) {},

        /**
         *  slide达到过渡条件 且规定了方向 向前（右、下）切换结束时执行
         */
        onSlideNextEnd: function onSlideNextEnd(weswiper) {},

        /**
         *  slide达到过渡条件 且规定了方向 向前（左、上）切换时执行
         */
        onSlidePrevStart: function onSlidePrevStart(swiper) {},

        /**
         *  slide达到过渡条件 且规定了方向 向前（左、上）切换结束时执行
         */
        onSlidePrevEnd: function onSlidePrevEnd(weswiper) {}
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.$invoke('weSwiper', 'slideTo', 2);
      }, 3000);
    }
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIndlU3dpcGVyIiwiZGF0YSIsInN3aXBlciIsImF1dG9wbGF5Iiwic2xpZGVMZW5ndGgiLCJvbkluaXQiLCJ3ZXN3aXBlciIsIm9uVG91Y2hTdGFydCIsImV2ZW50Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoRW5kIiwib25TbGlkZUNoYW5nZVN0YXJ0Iiwib25TbGlkZUNoYW5nZUVuZCIsIm9uVHJhbnNpdGlvblN0YXJ0Iiwib25UcmFuc2l0aW9uRW5kIiwiYWN0aXZlSW5kZXgiLCJzbGlkZVRvIiwiY29uc29sZSIsImxvZyIsIm9uU2xpZGVNb3ZlIiwib25TbGlkZU5leHRTdGFydCIsIm9uU2xpZGVOZXh0RW5kIiwib25TbGlkZVByZXZTdGFydCIsIm9uU2xpZGVQcmV2RW5kIiwic2V0VGltZW91dCIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsUUFBeEMsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFDTkMsa0JBQVUsSUFESjtBQUVOO0FBQ0FDLHFCQUFhLENBSFA7QUFJTjs7OztBQUlBQyxjQVJNLGtCQVFFQyxRQVJGLEVBUVksQ0FFakIsQ0FWSzs7QUFXTjs7Ozs7QUFLQUMsb0JBaEJNLHdCQWdCUUQsUUFoQlIsRUFnQmtCRSxLQWhCbEIsRUFnQnlCLENBQzlCLENBakJLOztBQWtCTjs7Ozs7QUFLQUMsbUJBdkJNLHVCQXVCT0gsUUF2QlAsRUF1QmlCRSxLQXZCakIsRUF1QndCLENBQzdCLENBeEJLOztBQXlCTjs7Ozs7QUFLQUUsa0JBOUJNLHNCQThCTUosUUE5Qk4sRUE4QmdCRSxLQTlCaEIsRUE4QnVCLENBQzVCLENBL0JLOztBQWdDTjs7O0FBR0FHLDBCQW5DTSw4QkFtQ2NMLFFBbkNkLEVBbUN3QixDQUM3QixDQXBDSzs7QUFxQ047OztBQUdBTSx3QkF4Q00sNEJBd0NZTixRQXhDWixFQXdDc0IsQ0FFM0IsQ0ExQ0s7O0FBMkNOOzs7QUFHQU8seUJBOUNNLDZCQThDYVAsUUE5Q2IsRUE4Q3VCLENBRTVCLENBaERLOztBQWlETjs7O0FBR0FRLHVCQXBETSwyQkFvRFdSLFFBcERYLEVBb0RxQjtBQUN6QixjQUFJQSxTQUFTUyxXQUFULEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCVCxxQkFBU1UsT0FBVCxDQUFpQixDQUFqQjtBQUNEO0FBQ0RDLGtCQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QlosUUFBeEI7QUFDRCxTQXpESzs7QUEwRE47OztBQUdBYSxtQkE3RE0sdUJBNkRPYixRQTdEUCxFQTZEaUIsQ0FFdEIsQ0EvREs7O0FBZ0VOOzs7QUFHQWMsd0JBbkVNLDRCQW1FWWQsUUFuRVosRUFtRXNCLENBRTNCLENBckVLOztBQXNFTjs7O0FBR0FlLHNCQXpFTSwwQkF5RVVmLFFBekVWLEVBeUVvQixDQUV6QixDQTNFSzs7QUE0RU47OztBQUdBZ0Isd0JBL0VNLDRCQStFWXBCLE1BL0VaLEVBK0VvQixDQUN6QixDQWhGSzs7QUFpRk47OztBQUdBcUIsc0JBcEZNLDBCQW9GVWpCLFFBcEZWLEVBb0ZvQixDQUN6QjtBQXJGSztBQURILEs7Ozs7OzZCQXlGRTtBQUFBOztBQUNQa0IsaUJBQVc7QUFBQSxlQUFNLE9BQUtDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLFNBQXpCLEVBQW9DLENBQXBDLENBQU47QUFBQSxPQUFYLEVBQXlELElBQXpEO0FBQ0Q7Ozs7RUF0R2dDLGVBQUtDLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHdlU3dpcGVyIGZyb20gJ3dlcHktY29tLXN3aXBlcidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ3ZVN3aXBlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6b3B0aW9uLm9uY2VcIjpcInN3aXBlclwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICB3ZVN3aXBlcjogd2VTd2lwZXJcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgc3dpcGVyOiB7XG4gICAgICAgIGF1dG9wbGF5OiAyMDAwLFxuICAgICAgICAvLyBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgICAgIHNsaWRlTGVuZ3RoOiAzLFxuICAgICAgICAvKipcbiAgICAgICAgICogc3dpcGVy5Yid5aeL5YyW5ZCO5omn6KGMXG4gICAgICAgICAqIEBwYXJhbSBzd2lwZXJcbiAgICAgICAgICovXG4gICAgICAgIG9uSW5pdCAod2Vzd2lwZXIpIHtcblxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICog5omL5oyH56Kw6Kemc2xpZGXml7bmiafooYxcbiAgICAgICAgICogQHBhcmFtIHN3aXBlclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIG9uVG91Y2hTdGFydCAod2Vzd2lwZXIsIGV2ZW50KSB7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmiYvmjIfnorDop6ZzbGlkZeW5tuS4lOa7keWKqOaXtuaJp+ihjFxuICAgICAgICAgKiBAcGFyYW0gc3dpcGVyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgb25Ub3VjaE1vdmUgKHdlc3dpcGVyLCBldmVudCkge1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICog5omL5oyH56a75byAc2xpZGXml7bmiafooYxcbiAgICAgICAgICogQHBhcmFtIHN3aXBlclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgICAgICovXG4gICAgICAgIG9uVG91Y2hFbmQgKHdlc3dpcGVyLCBldmVudCkge1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogIHNsaWRl6L6+5Yiw6L+H5rih5p2h5Lu25pe25omn6KGMXG4gICAgICAgICAqL1xuICAgICAgICBvblNsaWRlQ2hhbmdlU3RhcnQgKHdlc3dpcGVyKSB7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgc3dpcGVy5LuO5LiA5Liqc2xpZGXov4fmuKHliLDlj6bkuIDkuKpzbGlkZee7k+adn+aXtuaJp+ihjFxuICAgICAgICAgKi9cbiAgICAgICAgb25TbGlkZUNoYW5nZUVuZCAod2Vzd2lwZXIpIHtcblxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogIOi/h+a4oeaXtuinpuWPkVxuICAgICAgICAgKi9cbiAgICAgICAgb25UcmFuc2l0aW9uU3RhcnQgKHdlc3dpcGVyKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqICDov4fmuKHnu5PmnZ/ml7bmiafooYxcbiAgICAgICAgICovXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZCAod2Vzd2lwZXIpIHtcbiAgICAgICAgICBpZiAod2Vzd2lwZXIuYWN0aXZlSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgIHdlc3dpcGVyLnNsaWRlVG8oMClcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ3dlc3dpcGVyJywgd2Vzd2lwZXIpXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAg5omL5oyH6Kem56Kwc3dpcGVy5bm25LiU5ouW5Yqoc2xpZGXml7bmiafooYxcbiAgICAgICAgICovXG4gICAgICAgIG9uU2xpZGVNb3ZlICh3ZXN3aXBlcikge1xuXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzbGlkZei+vuWIsOi/h+a4oeadoeS7tiDkuJTop4TlrprkuobmlrnlkJEg5ZCR5YmN77yI5Y+z44CB5LiL77yJ5YiH5o2i5pe25omn6KGMXG4gICAgICAgICAqL1xuICAgICAgICBvblNsaWRlTmV4dFN0YXJ0ICh3ZXN3aXBlcikge1xuXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgc2xpZGXovr7liLDov4fmuKHmnaHku7Yg5LiU6KeE5a6a5LqG5pa55ZCRIOWQkeWJje+8iOWPs+OAgeS4i++8ieWIh+aNoue7k+adn+aXtuaJp+ihjFxuICAgICAgICAgKi9cbiAgICAgICAgb25TbGlkZU5leHRFbmQgKHdlc3dpcGVyKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBzbGlkZei+vuWIsOi/h+a4oeadoeS7tiDkuJTop4TlrprkuobmlrnlkJEg5ZCR5YmN77yI5bem44CB5LiK77yJ5YiH5o2i5pe25omn6KGMXG4gICAgICAgICAqL1xuICAgICAgICBvblNsaWRlUHJldlN0YXJ0IChzd2lwZXIpIHtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBzbGlkZei+vuWIsOi/h+a4oeadoeS7tiDkuJTop4TlrprkuobmlrnlkJEg5ZCR5YmN77yI5bem44CB5LiK77yJ5YiH5o2i57uT5p2f5pe25omn6KGMXG4gICAgICAgICAqL1xuICAgICAgICBvblNsaWRlUHJldkVuZCAod2Vzd2lwZXIpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuJGludm9rZSgnd2VTd2lwZXInLCAnc2xpZGVUbycsIDIpLCAzMDAwKVxuICAgIH1cbiAgfVxuIl19
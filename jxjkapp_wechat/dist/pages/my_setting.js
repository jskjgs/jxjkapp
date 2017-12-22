'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SETTINGS = [{
  label: '修改密码',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_psd'
    });
  }
}, {
  label: '清除缓存',
  handlerTap: function handlerTap() {
    wx.clearStorage();
    wx.showToast({
      icon: 'success',
      title: '缓存清除成功'
    });
  }
}, {
  label: '退出登陆',
  handlerTap: function handlerTap() {}
}];

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
      navigationBarTitleText: '系统设置'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      settings: SETTINGS
    }, _this.computed = {}, _this.methods = {
      itemClick: function itemClick(index) {
        var handlerTap = SETTINGS[index].handlerTap;
        handlerTap.call(this);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_setting'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3NldHRpbmcuanMiXSwibmFtZXMiOlsiU0VUVElOR1MiLCJsYWJlbCIsImhhbmRsZXJUYXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjbGVhclN0b3JhZ2UiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsInNldHRpbmdzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaXRlbUNsaWNrIiwiaW5kZXgiLCJjYWxsIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsQ0FBQztBQUNoQkMsU0FBTyxNQURTO0FBRWhCQyxZQUZnQix3QkFFRjtBQUNaQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQU5lLENBQUQsRUFPZDtBQUNESixTQUFPLE1BRE47QUFFREMsWUFGQyx3QkFFYTtBQUNaQyxPQUFHRyxZQUFIO0FBQ0FILE9BQUdJLFNBQUgsQ0FBYTtBQUNYQyxZQUFNLFNBREs7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFJRDtBQVJBLENBUGMsRUFnQmQ7QUFDRFIsU0FBTyxNQUROO0FBRURDLFlBRkMsd0JBRWEsQ0FDYjtBQUhBLENBaEJjLENBQWpCOztJQXFCcUJRLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVWhCO0FBREwsSyxRQUlQaUIsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLEtBREgsRUFDVTtBQUNoQixZQUFNbEIsYUFBYUYsU0FBU29CLEtBQVQsRUFBZ0JsQixVQUFuQztBQUNBQSxtQkFBV21CLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDtBQUpPLEssUUFPVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUEzQmdDLGVBQUtDLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJteV9zZXR0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgY29uc3QgU0VUVElOR1MgPSBbe1xuICAgIGxhYmVsOiAn5L+u5pS55a+G56CBJyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbXlfcHNkJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+a4hemZpOe8k+WtmCcsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5jbGVhclN0b3JhZ2UoKVxuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogJ+e8k+WtmOa4hemZpOaIkOWKnydcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgbGFiZWw6ICfpgIDlh7rnmbvpmYYnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgIH1cbiAgfV1cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfns7vnu5/orr7nva4nXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBzZXR0aW5nczogU0VUVElOR1NcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaXRlbUNsaWNrIChpbmRleCkge1xuICAgICAgICBjb25zdCBoYW5kbGVyVGFwID0gU0VUVElOR1NbaW5kZXhdLmhhbmRsZXJUYXBcbiAgICAgICAgaGFuZGxlclRhcC5jYWxsKHRoaXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
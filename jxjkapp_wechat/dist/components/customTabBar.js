'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NAVS = [{
  'pagePath': '/pages/index',
  'iconPath': '../assets/images/tab-index.png',
  'text': '首页'
}, {
  'pagePath': '/pages/health',
  'iconPath': '../assets/images/tab-health.png',
  'text': '健康管理'
}, {
  'pagePath': '/pages/my',
  'iconPath': '../assets/images/tab-my.png',
  'text': '我的'
}];

var CustomTabBar = function (_wepy$component) {
  _inherits(CustomTabBar, _wepy$component);

  function CustomTabBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomTabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomTabBar.__proto__ || Object.getPrototypeOf(CustomTabBar)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {
      imageUrl: String,
      title: String
    }, _this.mixins = [], _this.data = {
      NAVS: NAVS,
      showNav: true,
      currPath: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomTabBar, [{
    key: 'onLoad',
    value: function onLoad() {
      var currRoute = this.getCurrentPages().slice(-1)[0];
      this.currPath = currRoute.route;
      console.log(this.currPath);
    }
  }]);

  return CustomTabBar;
}(_wepy2.default.component);

exports.default = CustomTabBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbVRhYkJhci5qcyJdLCJuYW1lcyI6WyJOQVZTIiwiQ3VzdG9tVGFiQmFyIiwiY29tcG9uZW50cyIsInByb3BzIiwiaW1hZ2VVcmwiLCJTdHJpbmciLCJ0aXRsZSIsIm1peGlucyIsImRhdGEiLCJzaG93TmF2IiwiY3VyclBhdGgiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJjdXJyUm91dGUiLCJnZXRDdXJyZW50UGFnZXMiLCJzbGljZSIsInJvdXRlIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sQ0FBQztBQUNaLGNBQVksY0FEQTtBQUVaLGNBQVksZ0NBRkE7QUFHWixVQUFRO0FBSEksQ0FBRCxFQUlWO0FBQ0QsY0FBWSxlQURYO0FBRUQsY0FBWSxpQ0FGWDtBQUdELFVBQVE7QUFIUCxDQUpVLEVBUVY7QUFDRCxjQUFZLFdBRFg7QUFFRCxjQUFZLDZCQUZYO0FBR0QsVUFBUTtBQUhQLENBUlUsQ0FBYjs7SUFjcUJDLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsVSxHQUFhLEUsUUFHYkMsSyxHQUFRO0FBQ05DLGdCQUFVQyxNQURKO0FBRU5DLGFBQU9EO0FBRkQsSyxRQUtSRSxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTFIsZ0JBREs7QUFFTFMsZUFBUyxJQUZKO0FBR0xDLGdCQUFVO0FBSEwsSyxRQU1QQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFDUCxVQUFNQyxZQUFZLEtBQUtDLGVBQUwsR0FBdUJDLEtBQXZCLENBQTZCLENBQUMsQ0FBOUIsRUFBaUMsQ0FBakMsQ0FBbEI7QUFDQSxXQUFLTixRQUFMLEdBQWdCSSxVQUFVRyxLQUExQjtBQUNBQyxjQUFRQyxHQUFSLENBQVksS0FBS1QsUUFBakI7QUFDRDs7OztFQTlCdUMsZUFBS1UsUzs7a0JBQTFCbkIsWSIsImZpbGUiOiJjdXN0b21UYWJCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBjb25zdCBOQVZTID0gW3tcbiAgICAncGFnZVBhdGgnOiAnL3BhZ2VzL2luZGV4JyxcbiAgICAnaWNvblBhdGgnOiAnLi4vYXNzZXRzL2ltYWdlcy90YWItaW5kZXgucG5nJyxcbiAgICAndGV4dCc6ICfpppbpobUnXG4gIH0sIHtcbiAgICAncGFnZVBhdGgnOiAnL3BhZ2VzL2hlYWx0aCcsXG4gICAgJ2ljb25QYXRoJzogJy4uL2Fzc2V0cy9pbWFnZXMvdGFiLWhlYWx0aC5wbmcnLFxuICAgICd0ZXh0JzogJ+WBpeW6t+euoeeQhidcbiAgfSwge1xuICAgICdwYWdlUGF0aCc6ICcvcGFnZXMvbXknLFxuICAgICdpY29uUGF0aCc6ICcuLi9hc3NldHMvaW1hZ2VzL3RhYi1teS5wbmcnLFxuICAgICd0ZXh0JzogJ+aIkeeahCdcbiAgfV1cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21UYWJCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGltYWdlVXJsOiBTdHJpbmcsXG4gICAgICB0aXRsZTogU3RyaW5nXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBOQVZTLFxuICAgICAgc2hvd05hdjogdHJ1ZSxcbiAgICAgIGN1cnJQYXRoOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnN0IGN1cnJSb3V0ZSA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VzKCkuc2xpY2UoLTEpWzBdXG4gICAgICB0aGlzLmN1cnJQYXRoID0gY3VyclJvdXRlLnJvdXRlXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJQYXRoKVxuICAgIH1cbiAgfVxuIl19
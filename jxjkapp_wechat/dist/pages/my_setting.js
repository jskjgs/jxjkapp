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
  label: '换绑手机',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_tel_change'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3NldHRpbmcuanMiXSwibmFtZXMiOlsiU0VUVElOR1MiLCJsYWJlbCIsImhhbmRsZXJUYXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjbGVhclN0b3JhZ2UiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsInNldHRpbmdzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaXRlbUNsaWNrIiwiaW5kZXgiLCJjYWxsIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsQ0FBQztBQUNoQkMsU0FBTyxNQURTO0FBRWhCQyxZQUZnQix3QkFFRjtBQUNaQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQU5lLENBQUQsRUFPZDtBQUNESixTQUFPLE1BRE47QUFFREMsWUFGQyx3QkFFYTtBQUNaQyxPQUFHRyxZQUFIO0FBQ0FILE9BQUdJLFNBQUgsQ0FBYTtBQUNYQyxZQUFNLFNBREs7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFJRDtBQVJBLENBUGMsRUFnQmQ7QUFDRFIsU0FBTyxNQUROO0FBRURDLFlBRkMsd0JBRWEsQ0FDYjtBQUhBLENBaEJjLENBQWpCOztJQXFCcUJRLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVWhCO0FBREwsSyxRQUlQaUIsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLEtBREgsRUFDVTtBQUNoQixZQUFNbEIsYUFBYUYsU0FBU29CLEtBQVQsRUFBZ0JsQixVQUFuQztBQUNBQSxtQkFBV21CLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDtBQUpPLEssUUFPVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUEzQmdDLGVBQUtDLEk7O2tCQUFuQmIsSyIsImZpbGUiOiJteV9zZXR0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgY29uc3QgU0VUVElOR1MgPSBbe1xuICAgIGxhYmVsOiAn5o2i57uR5omL5py6JyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbXlfdGVsX2NoYW5nZSdcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgbGFiZWw6ICfmuIXpmaTnvJPlrZgnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3guY2xlYXJTdG9yYWdlKClcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgdGl0bGU6ICfnvJPlrZjmuIXpmaTmiJDlip8nXG4gICAgICB9KVxuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6YCA5Ye655m76ZmGJyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICB9XG4gIH1dXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57O757uf6K6+572uJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgc2V0dGluZ3M6IFNFVFRJTkdTXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGl0ZW1DbGljayAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlclRhcCA9IFNFVFRJTkdTW2luZGV4XS5oYW5kbGVyVGFwXG4gICAgICAgIGhhbmRsZXJUYXAuY2FsbCh0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
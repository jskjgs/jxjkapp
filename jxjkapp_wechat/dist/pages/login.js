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
      navigationBarTitleText: '锦欣健康'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      phone: '', // 手机
      code: '',
      phoneIsValid: false, // 判断手机号码有效性
      inputPsd: false // 是否可输密码
    }, _this.computed = {}, _this.watch = {
      phone: function phone(newVal) {
        if (newVal) {
          this.phoneIsValid = true;
        }
      }
    }, _this.methods = {
      toSignup: function toSignup() {
        wx.navigateTo({
          url: '/pages/signup'
        });
      },

      // 下一步
      handleToNext: function handleToNext() {
        this.inputPsd = true;
      },
      handleInput: function handleInput(valBind, _ref2) {
        var detail = _ref2.detail;

        this[valBind] = detail.value;
      },
      handleForget: function handleForget() {
        wx.navigateTo({
          url: '/pages/my_psd'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicGhvbmUiLCJjb2RlIiwicGhvbmVJc1ZhbGlkIiwiaW5wdXRQc2QiLCJjb21wdXRlZCIsIndhdGNoIiwibmV3VmFsIiwibWV0aG9kcyIsInRvU2lnbnVwIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaGFuZGxlVG9OZXh0IiwiaGFuZGxlSW5wdXQiLCJ2YWxCaW5kIiwiZGV0YWlsIiwidmFsdWUiLCJoYW5kbGVGb3JnZXQiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGLEVBQ007QUFDWEMsWUFBTSxFQUZEO0FBR0xDLG9CQUFjLEtBSFQsRUFHZ0I7QUFDckJDLGdCQUFVLEtBSkwsQ0FJVztBQUpYLEssUUFPUEMsUSxHQUFXLEUsUUFHWEMsSyxHQUFRO0FBQ05MLFdBRE0saUJBQ0NNLE1BREQsRUFDUztBQUNiLFlBQUlBLE1BQUosRUFBWTtBQUNWLGVBQUtKLFlBQUwsR0FBb0IsSUFBcEI7QUFDRDtBQUNGO0FBTEssSyxRQVFSSyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDSTtBQUNWQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQUxPOztBQU1SO0FBQ0FDLGtCQVBRLDBCQU9RO0FBQ2QsYUFBS1QsUUFBTCxHQUFnQixJQUFoQjtBQUNELE9BVE87QUFVUlUsaUJBVlEsdUJBVUtDLE9BVkwsU0FVMEI7QUFBQSxZQUFWQyxNQUFVLFNBQVZBLE1BQVU7O0FBQ2hDLGFBQUtELE9BQUwsSUFBZ0JDLE9BQU9DLEtBQXZCO0FBQ0QsT0FaTztBQWFSQyxrQkFiUSwwQkFhUTtBQUNkUixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDtBQWpCTyxLLFFBb0JWTyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQW5EZ0MsZUFBS0MsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSm5qyj5YGl5bq3J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcGhvbmU6ICcnLCAvLyDmiYvmnLpcbiAgICAgIGNvZGU6ICcnLFxuICAgICAgcGhvbmVJc1ZhbGlkOiBmYWxzZSwgLy8g5Yik5pat5omL5py65Y+356CB5pyJ5pWI5oCnXG4gICAgICBpbnB1dFBzZDogZmFsc2UgLy8g5piv5ZCm5Y+v6L6T5a+G56CBXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBwaG9uZSAobmV3VmFsKSB7XG4gICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICB0aGlzLnBob25lSXNWYWxpZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1NpZ251cCAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zaWdudXAnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5LiL5LiA5q2lXG4gICAgICBoYW5kbGVUb05leHQgKCkge1xuICAgICAgICB0aGlzLmlucHV0UHNkID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUlucHV0ICh2YWxCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIHRoaXNbdmFsQmluZF0gPSBkZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBoYW5kbGVGb3JnZXQgKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvbXlfcHNkJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
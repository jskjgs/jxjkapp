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
      psd: '',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicGhvbmUiLCJwc2QiLCJwaG9uZUlzVmFsaWQiLCJpbnB1dFBzZCIsImNvbXB1dGVkIiwid2F0Y2giLCJuZXdWYWwiLCJtZXRob2RzIiwidG9TaWdudXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJoYW5kbGVUb05leHQiLCJoYW5kbGVJbnB1dCIsInZhbEJpbmQiLCJkZXRhaWwiLCJ2YWx1ZSIsImhhbmRsZUZvcmdldCIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREYsRUFDTTtBQUNYQyxXQUFLLEVBRkE7QUFHTEMsb0JBQWMsS0FIVCxFQUdnQjtBQUNyQkMsZ0JBQVUsS0FKTCxDQUlXO0FBSlgsSyxRQU9QQyxRLEdBQVcsRSxRQUdYQyxLLEdBQVE7QUFDTkwsV0FETSxpQkFDQ00sTUFERCxFQUNTO0FBQ2IsWUFBSUEsTUFBSixFQUFZO0FBQ1YsZUFBS0osWUFBTCxHQUFvQixJQUFwQjtBQUNEO0FBQ0Y7QUFMSyxLLFFBUVJLLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNJO0FBQ1ZDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BTE87O0FBTVI7QUFDQUMsa0JBUFEsMEJBT1E7QUFDZCxhQUFLVCxRQUFMLEdBQWdCLElBQWhCO0FBQ0QsT0FUTztBQVVSVSxpQkFWUSx1QkFVS0MsT0FWTCxTQVUwQjtBQUFBLFlBQVZDLE1BQVUsU0FBVkEsTUFBVTs7QUFDaEMsYUFBS0QsT0FBTCxJQUFnQkMsT0FBT0MsS0FBdkI7QUFDRCxPQVpPO0FBYVJDLGtCQWJRLDBCQWFRO0FBQ2RSLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdEO0FBakJPLEssUUFvQlZPLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBbkRnQyxlQUFLQyxJOztrQkFBbkJ6QixLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplKbmrKPlgaXlurcnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBwaG9uZTogJycsIC8vIOaJi+aculxuICAgICAgcHNkOiAnJyxcbiAgICAgIHBob25lSXNWYWxpZDogZmFsc2UsIC8vIOWIpOaWreaJi+acuuWPt+eggeacieaViOaAp1xuICAgICAgaW5wdXRQc2Q6IGZhbHNlIC8vIOaYr+WQpuWPr+i+k+WvhueggVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgcGhvbmUgKG5ld1ZhbCkge1xuICAgICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgICAgdGhpcy5waG9uZUlzVmFsaWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9TaWdudXAgKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2lnbnVwJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOS4i+S4gOatpVxuICAgICAgaGFuZGxlVG9OZXh0ICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFBzZCA9IHRydWVcbiAgICAgIH0sXG4gICAgICBoYW5kbGVJbnB1dCAodmFsQmluZCwgeyBkZXRhaWwgfSkge1xuICAgICAgICB0aGlzW3ZhbEJpbmRdID0gZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgaGFuZGxlRm9yZ2V0ICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL215X3BzZCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
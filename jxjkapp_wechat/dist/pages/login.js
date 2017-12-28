'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customInput = require('./../components/customInput.js');

var _customInput2 = _interopRequireDefault(_customInput);

var _telInput = require('./../components/telInput.js');

var _telInput2 = _interopRequireDefault(_telInput);

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
    }, _this.$repeat = {}, _this.$props = { "TelInput": { "submitBtnText": "确认登录", "xmlns:v-bind": "", "v-bind:value.sync": "formData", "xmlns:v-on": "" } }, _this.$events = { "TelInput": { "v-on:submit": "handleSumbit" } }, _this.components = {
      TelInput: _telInput2.default,
      PhoneInput: _customInput2.default,
      CaptchaInput: _customInput2.default
    }, _this.mixins = [], _this.data = {
      formData: {
        phone: '111',
        code: ''
      }
    }, _this.computed = {}, _this.watch = {}, _this.methods = {
      handleSumbit: function handleSumbit() {
        this.$_request({
          url: '/other/loginByCode?phone=' + this.formData.phone + '&code=' + this.formData.code,
          method: 'POST'
        }, true).then(function (res) {
          var content = res.content || {};
          if (content.empty) {
            wx.navigateTo({
              url: '/pages/index'
            });
          } else {
            wx.redirectTo({
              url: '/pages/signup_info'
            });
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.$invoke('TelInput', 'clearTimer');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlRlbElucHV0IiwiUGhvbmVJbnB1dCIsIkNhcHRjaGFJbnB1dCIsIm1peGlucyIsImRhdGEiLCJmb3JtRGF0YSIsInBob25lIiwiY29kZSIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwiaGFuZGxlU3VtYml0IiwiJF9yZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidGhlbiIsImNvbnRlbnQiLCJyZXMiLCJlbXB0eSIsInd4IiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iLCJldmVudHMiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxpQkFBZ0IsTUFBakIsRUFBd0IsZ0JBQWUsRUFBdkMsRUFBMEMscUJBQW9CLFVBQTlELEVBQXlFLGNBQWEsRUFBdEYsRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxlQUFjLGNBQWYsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNSQyxrQ0FEUTtBQUVSQyx1Q0FGUTtBQUdSQztBQUhRLEssUUFNVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGVBQU8sS0FEQztBQUVSQyxjQUFNO0FBRkU7QUFETCxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLEssR0FBUSxFLFFBR1JDLE8sR0FBVTtBQUNSQyxrQkFEUSwwQkFDUTtBQUNkLGFBQUtDLFNBQUwsQ0FBZTtBQUNiQyw2Q0FBaUMsS0FBS1IsUUFBTCxDQUFjQyxLQUEvQyxjQUE2RCxLQUFLRCxRQUFMLENBQWNFLElBRDlEO0FBRWJPLGtCQUFRO0FBRkssU0FBZixFQUdHLElBSEgsRUFHU0MsSUFIVCxDQUdjLGVBQU87QUFDbkIsY0FBTUMsVUFBVUMsSUFBSUQsT0FBSixJQUFlLEVBQS9CO0FBQ0EsY0FBSUEsUUFBUUUsS0FBWixFQUFtQjtBQUNqQkMsZUFBR0MsVUFBSCxDQUFjO0FBQ1pQLG1CQUFLO0FBRE8sYUFBZDtBQUdELFdBSkQsTUFJTztBQUNMTSxlQUFHRSxVQUFILENBQWM7QUFDWlIsbUJBQUs7QUFETyxhQUFkO0FBR0Q7QUFDRixTQWREO0FBZUQ7QUFqQk8sSyxRQW9CVlMsTSxHQUFTLEU7Ozs7OzZCQUdDLENBQ1Q7OzsrQkFDVztBQUNWLFdBQUtDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLFlBQXpCO0FBQ0Q7Ozs7RUF2RGdDLGVBQUtDLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbUlucHV0J1xuICBpbXBvcnQgVGVsSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL3RlbElucHV0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSm5qyj5YGl5bq3J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVGVsSW5wdXRcIjp7XCJzdWJtaXRCdG5UZXh0XCI6XCLnoa7orqTnmbvlvZVcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZm9ybURhdGFcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJUZWxJbnB1dFwiOntcInYtb246c3VibWl0XCI6XCJoYW5kbGVTdW1iaXRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFRlbElucHV0LFxuICAgICAgUGhvbmVJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBDYXB0Y2hhSW5wdXQ6IEN1c3RvbUlucHV0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBmb3JtRGF0YToge1xuICAgICAgICBwaG9uZTogJzExMScsXG4gICAgICAgIGNvZGU6ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVN1bWJpdCAoKSB7XG4gICAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IGAvb3RoZXIvbG9naW5CeUNvZGU/cGhvbmU9JHt0aGlzLmZvcm1EYXRhLnBob25lfSZjb2RlPSR7dGhpcy5mb3JtRGF0YS5jb2RlfWAsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSwgdHJ1ZSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXMuY29udGVudCB8fCB7fVxuICAgICAgICAgIGlmIChjb250ZW50LmVtcHR5KSB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9zaWdudXBfaW5mbydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgICBvblVubG9hZCAoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoJ1RlbElucHV0JywgJ2NsZWFyVGltZXInKVxuICAgIH1cbiAgfVxuIl19
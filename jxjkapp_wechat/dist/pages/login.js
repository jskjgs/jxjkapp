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
          url: '/other/loginByCode?phone=' + this.phone + '&code=' + this.code,
          method: 'POST'
        }, true).then(function (res) {
          var content = res.content || {};
          if (content.empty) {
            wx.redirectTo({
              url: '/pages/signup_info'
            });
          } else {
            wx.navigateTo({
              url: '/pages/index'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlRlbElucHV0IiwiUGhvbmVJbnB1dCIsIkNhcHRjaGFJbnB1dCIsIm1peGlucyIsImRhdGEiLCJmb3JtRGF0YSIsInBob25lIiwiY29kZSIsImNvbXB1dGVkIiwid2F0Y2giLCJtZXRob2RzIiwiaGFuZGxlU3VtYml0IiwiJF9yZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidGhlbiIsImNvbnRlbnQiLCJyZXMiLCJlbXB0eSIsInd4IiwicmVkaXJlY3RUbyIsIm5hdmlnYXRlVG8iLCJldmVudHMiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxpQkFBZ0IsTUFBakIsRUFBd0IsZ0JBQWUsRUFBdkMsRUFBMEMscUJBQW9CLFVBQTlELEVBQXlFLGNBQWEsRUFBdEYsRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxlQUFjLGNBQWYsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNSQyxrQ0FEUTtBQUVSQyx1Q0FGUTtBQUdSQztBQUhRLEssUUFNVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGVBQU8sS0FEQztBQUVSQyxjQUFNO0FBRkU7QUFETCxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLEssR0FBUSxFLFFBR1JDLE8sR0FBVTtBQUNSQyxrQkFEUSwwQkFDUTtBQUNkLGFBQUtDLFNBQUwsQ0FBZTtBQUNiQyw2Q0FBaUMsS0FBS1AsS0FBdEMsY0FBb0QsS0FBS0MsSUFENUM7QUFFYk8sa0JBQVE7QUFGSyxTQUFmLEVBR0csSUFISCxFQUdTQyxJQUhULENBR2MsZUFBTztBQUNuQixjQUFNQyxVQUFVQyxJQUFJRCxPQUFKLElBQWUsRUFBL0I7QUFDQSxjQUFJQSxRQUFRRSxLQUFaLEVBQW1CO0FBQ2pCQyxlQUFHQyxVQUFILENBQWM7QUFDWlAsbUJBQUs7QUFETyxhQUFkO0FBR0QsV0FKRCxNQUlPO0FBQ0xNLGVBQUdFLFVBQUgsQ0FBYztBQUNaUixtQkFBSztBQURPLGFBQWQ7QUFHRDtBQUNGLFNBZEQ7QUFlRDtBQWpCTyxLLFFBb0JWUyxNLEdBQVMsRTs7Ozs7NkJBR0MsQ0FDVDs7OytCQUNXO0FBQ1YsV0FBS0MsT0FBTCxDQUFhLFVBQWIsRUFBeUIsWUFBekI7QUFDRDs7OztFQXZEZ0MsZUFBS0MsSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tSW5wdXQnXG4gIGltcG9ydCBUZWxJbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvdGVsSW5wdXQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplKbmrKPlgaXlurcnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJUZWxJbnB1dFwiOntcInN1Ym1pdEJ0blRleHRcIjpcIuehruiupOeZu+W9lVwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJmb3JtRGF0YVwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcIlRlbElucHV0XCI6e1widi1vbjpzdWJtaXRcIjpcImhhbmRsZVN1bWJpdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGVsSW5wdXQsXG4gICAgICBQaG9uZUlucHV0OiBDdXN0b21JbnB1dCxcbiAgICAgIENhcHRjaGFJbnB1dDogQ3VzdG9tSW5wdXRcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIHBob25lOiAnMTExJyxcbiAgICAgICAgY29kZTogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlU3VtYml0ICgpIHtcbiAgICAgICAgdGhpcy4kX3JlcXVlc3Qoe1xuICAgICAgICAgIHVybDogYC9vdGhlci9sb2dpbkJ5Q29kZT9waG9uZT0ke3RoaXMucGhvbmV9JmNvZGU9JHt0aGlzLmNvZGV9YCxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9LCB0cnVlKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHJlcy5jb250ZW50IHx8IHt9XG4gICAgICAgICAgaWYgKGNvbnRlbnQuZW1wdHkpIHtcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvc2lnbnVwX2luZm8nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICAgIG9uVW5sb2FkICgpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnVGVsSW5wdXQnLCAnY2xlYXJUaW1lcicpXG4gICAgfVxuICB9XG4iXX0=
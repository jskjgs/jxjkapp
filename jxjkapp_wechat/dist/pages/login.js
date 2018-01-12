'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      TelInput: _telInput2.default
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
        }, false).then(function (content) {
          content = content || {};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlRlbElucHV0IiwibWl4aW5zIiwiZGF0YSIsImZvcm1EYXRhIiwicGhvbmUiLCJjb2RlIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm1ldGhvZHMiLCJoYW5kbGVTdW1iaXQiLCIkX3JlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ0aGVuIiwiY29udGVudCIsImVtcHR5Iiwid3giLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RUbyIsImV2ZW50cyIsIiRpbnZva2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxpQkFBZ0IsTUFBakIsRUFBd0IsZ0JBQWUsRUFBdkMsRUFBMEMscUJBQW9CLFVBQTlELEVBQXlFLGNBQWEsRUFBdEYsRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxlQUFjLGNBQWYsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGVBQU8sS0FEQztBQUVSQyxjQUFNO0FBRkU7QUFETCxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLEssR0FBUSxFLFFBR1JDLE8sR0FBVTtBQUNSQyxrQkFEUSwwQkFDUTtBQUNkLGFBQUtDLFNBQUwsQ0FBZTtBQUNiQyw2Q0FBaUMsS0FBS1IsUUFBTCxDQUFjQyxLQUEvQyxjQUE2RCxLQUFLRCxRQUFMLENBQWNFLElBRDlEO0FBRWJPLGtCQUFRO0FBRkssU0FBZixFQUdHLEtBSEgsRUFHVUMsSUFIVixDQUdlLG1CQUFXO0FBQ3hCQyxvQkFBVUEsV0FBVyxFQUFyQjtBQUNBLGNBQUlBLFFBQVFDLEtBQVosRUFBbUI7QUFDakJDLGVBQUdDLFVBQUgsQ0FBYztBQUNaTixtQkFBSztBQURPLGFBQWQ7QUFHRCxXQUpELE1BSU87QUFDTEssZUFBR0UsVUFBSCxDQUFjO0FBQ1pQLG1CQUFLO0FBRE8sYUFBZDtBQUdEO0FBQ0YsU0FkRDtBQWVEO0FBakJPLEssUUFvQlZRLE0sR0FBUyxFOzs7Ozs2QkFHQyxDQUNUOzs7K0JBQ1c7QUFDVixXQUFLQyxPQUFMLENBQWEsVUFBYixFQUF5QixZQUF6QjtBQUNEOzs7O0VBckRnQyxlQUFLQyxJOztrQkFBbkI1QixLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IFRlbElucHV0IGZyb20gJ0AvY29tcG9uZW50cy90ZWxJbnB1dCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUpuaso+WBpeW6tydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlRlbElucHV0XCI6e1wic3VibWl0QnRuVGV4dFwiOlwi56Gu6K6k55m75b2VXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImZvcm1EYXRhXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiVGVsSW5wdXRcIjp7XCJ2LW9uOnN1Ym1pdFwiOlwiaGFuZGxlU3VtYml0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBUZWxJbnB1dFxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgcGhvbmU6ICcxMTEnLFxuICAgICAgICBjb2RlOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVTdW1iaXQgKCkge1xuICAgICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBgL290aGVyL2xvZ2luQnlDb2RlP3Bob25lPSR7dGhpcy5mb3JtRGF0YS5waG9uZX0mY29kZT0ke3RoaXMuZm9ybURhdGEuY29kZX1gLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgIH0sIGZhbHNlKS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IHt9XG4gICAgICAgICAgaWYgKGNvbnRlbnQuZW1wdHkpIHtcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3NpZ251cF9pbmZvJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICAgIG9uVW5sb2FkICgpIHtcbiAgICAgIHRoaXMuJGludm9rZSgnVGVsSW5wdXQnLCAnY2xlYXJUaW1lcicpXG4gICAgfVxuICB9XG4iXX0=
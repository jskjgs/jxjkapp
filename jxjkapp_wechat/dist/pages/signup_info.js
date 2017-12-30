'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _personInfo = require('./../components/personInfo.js');

var _personInfo2 = _interopRequireDefault(_personInfo);

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
      navigationBarTitleText: '注册信息'
    }, _this.$repeat = {}, _this.$props = { "PersonInfo": { "submitBtnText": "完成注册", "xmlns:v-on": "" } }, _this.$events = { "PersonInfo": { "v-on:pickedsChange": "handlePickedsChange", "v-on:submit": "handleSubmit" } }, _this.components = {
      PersonInfo: _personInfo2.default
    }, _this.mixins = [], _this.data = {
      formData: ''
    }, _this.computed = {}, _this.watch = {}, _this.methods = {
      handlePickedsChange: function handlePickedsChange(formData) {
        this.formData = formData;
      },
      handleSubmit: function handleSubmit(formData) {
        console.log('handleSubmit', formData);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/signup_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cF9pbmZvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBlcnNvbkluZm8iLCJtaXhpbnMiLCJkYXRhIiwiZm9ybURhdGEiLCJjb21wdXRlZCIsIndhdGNoIiwibWV0aG9kcyIsImhhbmRsZVBpY2tlZHNDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsaUJBQWdCLE1BQWpCLEVBQXdCLGNBQWEsRUFBckMsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFQUFDLGNBQWEsRUFBQyxzQkFBcUIscUJBQXRCLEVBQTRDLGVBQWMsY0FBMUQsRUFBZCxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUlQQyxRLEdBQVcsRSxRQUdYQyxLLEdBQVEsRSxRQUdSQyxPLEdBQVU7QUFDUkMseUJBRFEsK0JBQ2FKLFFBRGIsRUFDdUI7QUFDN0IsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRCxPQUhPO0FBSVJLLGtCQUpRLHdCQUlNTCxRQUpOLEVBSWdCO0FBQ3RCTSxnQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJQLFFBQTVCO0FBQ0Q7QUFOTyxLLFFBU1ZRLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBcENnQyxlQUFLQyxJOztrQkFBbkJuQixLIiwiZmlsZSI6InNpZ251cF9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IFBlcnNvbkluZm8gZnJvbSAnQC9jb21wb25lbnRzL3BlcnNvbkluZm8nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfms6jlhozkv6Hmga8nXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQZXJzb25JbmZvXCI6e1wic3VibWl0QnRuVGV4dFwiOlwi5a6M5oiQ5rOo5YaMXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiUGVyc29uSW5mb1wiOntcInYtb246cGlja2Vkc0NoYW5nZVwiOlwiaGFuZGxlUGlja2Vkc0NoYW5nZVwiLFwidi1vbjpzdWJtaXRcIjpcImhhbmRsZVN1Ym1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUGVyc29uSW5mb1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgZm9ybURhdGE6ICcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVBpY2tlZHNDaGFuZ2UgKGZvcm1EYXRhKSB7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YVxuICAgICAgfSxcbiAgICAgIGhhbmRsZVN1Ym1pdCAoZm9ybURhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZVN1Ym1pdCcsIGZvcm1EYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
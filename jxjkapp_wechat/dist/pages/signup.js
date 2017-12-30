'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customInput = require('./../components/customInput.js');

var _customInput2 = _interopRequireDefault(_customInput);

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
    }, _this.$repeat = {}, _this.$props = { "PhoneInput": { "class": "input-group__inner", "type": "number", "xmlns:v-bind": "", "v-bind:value.sync": "phone", "placeholder": "请输入手机号" }, "CaptchaInput": { "class": "input-group__inner", "v-bind:value.sync": "captcha", "placeholder": "请输入验证码" } }, _this.$events = {}, _this.components = {
      PhoneInput: _customInput2.default,
      CaptchaInput: _customInput2.default
    }, _this.mixins = [], _this.data = {
      phone: '',
      phoneIsValid: false,
      captcha: 'fdsdfs'
    }, _this.computed = {}, _this.watch = {
      phone: function phone(newVal) {
        if (newVal) {
          this.phoneIsValid = true;
        }
      },
      captcha: function captcha(newVal) {
        console.log('aptcha', newVal);
      }
    }, _this.methods = {
      handleInput: function handleInput(valBind, _ref2) {
        var detail = _ref2.detail;

        this[valBind] = detail.value;
      },
      handleToNext: function handleToNext() {
        wx.navigateTo({
          url: '/pages/signup_info'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/signup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJQaG9uZUlucHV0IiwiQ2FwdGNoYUlucHV0IiwibWl4aW5zIiwiZGF0YSIsInBob25lIiwicGhvbmVJc1ZhbGlkIiwiY2FwdGNoYSIsImNvbXB1dGVkIiwid2F0Y2giLCJuZXdWYWwiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImhhbmRsZUlucHV0IiwidmFsQmluZCIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlVG9OZXh0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsU0FBUSxvQkFBVCxFQUE4QixRQUFPLFFBQXJDLEVBQThDLGdCQUFlLEVBQTdELEVBQWdFLHFCQUFvQixPQUFwRixFQUE0RixlQUFjLFFBQTFHLEVBQWQsRUFBa0ksZ0JBQWUsRUFBQyxTQUFRLG9CQUFULEVBQThCLHFCQUFvQixTQUFsRCxFQUE0RCxlQUFjLFFBQTFFLEVBQWpKLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLHVDQURRO0FBRVJDO0FBRlEsSyxRQUtWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLG9CQUFjLEtBRlQ7QUFHTEMsZUFBUztBQUhKLEssUUFNUEMsUSxHQUFXLEUsUUFHWEMsSyxHQUFRO0FBQ05KLFdBRE0saUJBQ0NLLE1BREQsRUFDUztBQUNiLFlBQUlBLE1BQUosRUFBWTtBQUNWLGVBQUtKLFlBQUwsR0FBb0IsSUFBcEI7QUFDRDtBQUNGLE9BTEs7QUFNTkMsYUFOTSxtQkFNR0csTUFOSCxFQU1XO0FBQ2ZDLGdCQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkYsTUFBdEI7QUFDRDtBQVJLLEssUUFXUkcsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNLQyxPQURMLFNBQzBCO0FBQUEsWUFBVkMsTUFBVSxTQUFWQSxNQUFVOztBQUNoQyxhQUFLRCxPQUFMLElBQWdCQyxPQUFPQyxLQUF2QjtBQUNELE9BSE87QUFJUkMsa0JBSlEsMEJBSVE7QUFDZEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0Q7QUFSTyxLLFFBV1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBakRnQyxlQUFLQyxJOztrQkFBbkI3QixLIiwiZmlsZSI6InNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tSW5wdXQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplKbmrKPlgaXlurcnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQaG9uZUlucHV0XCI6e1wiY2xhc3NcIjpcImlucHV0LWdyb3VwX19pbm5lclwiLFwidHlwZVwiOlwibnVtYmVyXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInBob25lXCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl5omL5py65Y+3XCJ9LFwiQ2FwdGNoYUlucHV0XCI6e1wiY2xhc3NcIjpcImlucHV0LWdyb3VwX19pbm5lclwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImNhcHRjaGFcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXpqozor4HnoIFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUGhvbmVJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBDYXB0Y2hhSW5wdXQ6IEN1c3RvbUlucHV0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBwaG9uZTogJycsXG4gICAgICBwaG9uZUlzVmFsaWQ6IGZhbHNlLFxuICAgICAgY2FwdGNoYTogJ2Zkc2RmcydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIHBob25lIChuZXdWYWwpIHtcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgIHRoaXMucGhvbmVJc1ZhbGlkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FwdGNoYSAobmV3VmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhcHRjaGEnLCBuZXdWYWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUlucHV0ICh2YWxCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIHRoaXNbdmFsQmluZF0gPSBkZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBoYW5kbGVUb05leHQgKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2lnbnVwX2luZm8nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
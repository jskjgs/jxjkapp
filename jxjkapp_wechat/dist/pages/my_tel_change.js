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
      navigationBarTitleText: '换绑手机'
    }, _this.$repeat = {}, _this.$props = { "TelInput": { "submitBtnText": "确认换绑", "xmlns:v-bind": "", "v-bind:value.sync": "formData", "xmlns:v-on": "" } }, _this.$events = { "TelInput": { "v-on:submit": "handleSumbit" } }, _this.components = {
      TelInput: _telInput2.default
    }, _this.mixins = [], _this.data = {
      formData: {
        phone: '',
        code: ''
      }
    }, _this.computed = {}, _this.methods = {
      handleSumbit: function handleSumbit() {
        console.log(this.formData);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_tel_change'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3RlbF9jaGFuZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGVsSW5wdXQiLCJtaXhpbnMiLCJkYXRhIiwiZm9ybURhdGEiLCJwaG9uZSIsImNvZGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVTdW1iaXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsaUJBQWdCLE1BQWpCLEVBQXdCLGdCQUFlLEVBQXZDLEVBQTBDLHFCQUFvQixVQUE5RCxFQUF5RSxjQUFhLEVBQXRGLEVBQVosRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsZUFBYyxjQUFmLEVBQVosRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxlQUFPLEVBREM7QUFFUkMsY0FBTTtBQUZFO0FBREwsSyxRQU9QQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsa0JBRFEsMEJBQ1E7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLUCxRQUFqQjtBQUNEO0FBSE8sSyxRQU1WUSxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQWpDZ0MsZUFBS0MsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJteV90ZWxfY2hhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUZWxJbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvdGVsSW5wdXQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmjaLnu5HmiYvmnLonXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJUZWxJbnB1dFwiOntcInN1Ym1pdEJ0blRleHRcIjpcIuehruiupOaNoue7kVwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJmb3JtRGF0YVwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcIlRlbElucHV0XCI6e1widi1vbjpzdWJtaXRcIjpcImhhbmRsZVN1bWJpdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGVsSW5wdXRcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgY29kZTogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlU3VtYml0ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtRGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
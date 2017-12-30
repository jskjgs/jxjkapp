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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_psd'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3BzZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUZWxJbnB1dCIsIm1peGlucyIsImRhdGEiLCJmb3JtRGF0YSIsInBob25lIiwiY29kZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZVN1bWJpdCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxpQkFBZ0IsTUFBakIsRUFBd0IsZ0JBQWUsRUFBdkMsRUFBMEMscUJBQW9CLFVBQTlELEVBQXlFLGNBQWEsRUFBdEYsRUFBWixFLFFBQ1RDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxlQUFjLGNBQWYsRUFBWixFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGVBQU8sRUFEQztBQUVSQyxjQUFNO0FBRkU7QUFETCxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxrQkFEUSwwQkFDUTtBQUNkQyxnQkFBUUMsR0FBUixDQUFZLEtBQUtQLFFBQWpCO0FBQ0Q7QUFITyxLLFFBTVZRLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBakNnQyxlQUFLQyxJOztrQkFBbkJuQixLIiwiZmlsZSI6Im15X3BzZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgVGVsSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL3RlbElucHV0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o2i57uR5omL5py6J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVGVsSW5wdXRcIjp7XCJzdWJtaXRCdG5UZXh0XCI6XCLnoa7orqTmjaLnu5FcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZm9ybURhdGFcIixcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJUZWxJbnB1dFwiOntcInYtb246c3VibWl0XCI6XCJoYW5kbGVTdW1iaXRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFRlbElucHV0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBmb3JtRGF0YToge1xuICAgICAgICBwaG9uZTogJycsXG4gICAgICAgIGNvZGU6ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVN1bWJpdCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybURhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
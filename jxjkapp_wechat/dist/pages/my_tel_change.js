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
    }, _this.$repeat = {}, _this.$props = { "TelInput": { "submitBtnText": "确认换绑", "codeType": "2", "xmlns:v-bind": "", "v-bind:value.sync": "formData", "xmlns:v-on": "" } }, _this.$events = { "TelInput": { "v-on:submit": "handleSumbit" } }, _this.components = {
      TelInput: _telInput2.default
    }, _this.mixins = [], _this.data = {
      formData: {
        phone: '',
        code: ''
      }
    }, _this.computed = {}, _this.methods = {
      handleSumbit: function handleSumbit() {
        this.$_request({
          url: '/other/updatePhone',
          method: 'POST',
          data: {
            phone: this.formData.phone,
            phoneCode: this.formData.code
          }
        }).then(function (content) {
          content = content || {};
          wx.showToast({
            title: '手机换绑成功'
          });
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_tel_change'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3RlbF9jaGFuZ2UuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGVsSW5wdXQiLCJtaXhpbnMiLCJkYXRhIiwiZm9ybURhdGEiLCJwaG9uZSIsImNvZGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVTdW1iaXQiLCIkX3JlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwaG9uZUNvZGUiLCJ0aGVuIiwiY29udGVudCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxpQkFBZ0IsTUFBakIsRUFBd0IsWUFBVyxHQUFuQyxFQUF1QyxnQkFBZSxFQUF0RCxFQUF5RCxxQkFBb0IsVUFBN0UsRUFBd0YsY0FBYSxFQUFyRyxFQUFaLEUsUUFDVEMsTyxHQUFVLEVBQUMsWUFBVyxFQUFDLGVBQWMsY0FBZixFQUFaLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsZUFBTyxFQURDO0FBRVJDLGNBQU07QUFGRTtBQURMLEssUUFPUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGtCQURRLDBCQUNRO0FBQ2QsYUFBS0MsU0FBTCxDQUFlO0FBQ2JDLGVBQUssb0JBRFE7QUFFYkMsa0JBQVEsTUFGSztBQUdiVCxnQkFBTTtBQUNKRSxtQkFBTyxLQUFLRCxRQUFMLENBQWNDLEtBRGpCO0FBRUpRLHVCQUFXLEtBQUtULFFBQUwsQ0FBY0U7QUFGckI7QUFITyxTQUFmLEVBT0dRLElBUEgsQ0FPUSxtQkFBVztBQUNqQkMsb0JBQVVBLFdBQVcsRUFBckI7QUFDQUMsYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPO0FBREksV0FBYjtBQUdELFNBWkQ7QUFhRDtBQWZPLEssUUFrQlZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBN0NnQyxlQUFLQyxJOztrQkFBbkIxQixLIiwiZmlsZSI6Im15X3RlbF9jaGFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFRlbElucHV0IGZyb20gJ0AvY29tcG9uZW50cy90ZWxJbnB1dCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aNoue7keaJi+acuidcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlRlbElucHV0XCI6e1wic3VibWl0QnRuVGV4dFwiOlwi56Gu6K6k5o2i57uRXCIsXCJjb2RlVHlwZVwiOlwiMlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJmb3JtRGF0YVwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcIlRlbElucHV0XCI6e1widi1vbjpzdWJtaXRcIjpcImhhbmRsZVN1bWJpdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGVsSW5wdXRcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgY29kZTogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlU3VtYml0ICgpIHtcbiAgICAgICAgdGhpcy4kX3JlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJy9vdGhlci91cGRhdGVQaG9uZScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcGhvbmU6IHRoaXMuZm9ybURhdGEucGhvbmUsXG4gICAgICAgICAgICBwaG9uZUNvZGU6IHRoaXMuZm9ybURhdGEuY29kZVxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihjb250ZW50ID0+IHtcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudCB8fCB7fVxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aJi+acuuaNoue7keaIkOWKnydcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _validator = require('./../utils/validator.js');

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
      navigationBarTitleText: '修改密码'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      activePanel: 'captcha',
      captcha: '', // 验证码
      newPsd: '' // 新密码
    }, _this.computed = {}, _this.methods = {
      handleInput: function handleInput(vmBind, _ref2) {
        var detail = _ref2.detail;

        this[vmBind] = detail.value;
      },
      submitCaptcha: function submitCaptcha() {
        this.activePanel = 'newPsd';
      },
      submitPsd: function submitPsd() {
        (0, _validator.validPsd)(this.newPsd).then(function () {}).catch(function () {
          wx.showToast({
            image: '../assets/images/demo.png',
            title: '密码格式错误'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_psd'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3BzZC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImFjdGl2ZVBhbmVsIiwiY2FwdGNoYSIsIm5ld1BzZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZUlucHV0Iiwidm1CaW5kIiwiZGV0YWlsIiwidmFsdWUiLCJzdWJtaXRDYXB0Y2hhIiwic3VibWl0UHNkIiwidGhlbiIsImNhdGNoIiwid3giLCJzaG93VG9hc3QiLCJpbWFnZSIsInRpdGxlIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7OztJQUlxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLG1CQUFhLFNBRFI7QUFFTEMsZUFBUyxFQUZKLEVBRVE7QUFDYkMsY0FBUSxFQUhILENBR007QUFITixLLFFBTVBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDS0MsTUFETCxTQUN5QjtBQUFBLFlBQVZDLE1BQVUsU0FBVkEsTUFBVTs7QUFDL0IsYUFBS0QsTUFBTCxJQUFlQyxPQUFPQyxLQUF0QjtBQUNELE9BSE87QUFJUkMsbUJBSlEsMkJBSVM7QUFDZixhQUFLVCxXQUFMLEdBQW1CLFFBQW5CO0FBQ0QsT0FOTztBQU9SVSxlQVBRLHVCQU9LO0FBQ1gsaUNBQVMsS0FBS1IsTUFBZCxFQUFzQlMsSUFBdEIsQ0FBMkIsWUFBTSxDQUNoQyxDQURELEVBQ0dDLEtBREgsQ0FDUyxZQUFNO0FBQ2JDLGFBQUdDLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTywyQkFESTtBQUVYQyxtQkFBTztBQUZJLFdBQWI7QUFJRCxTQU5EO0FBT0Q7QUFmTyxLLFFBa0JWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQXhDZ0MsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJteV9wc2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHtcbiAgICB2YWxpZFBzZFxuICB9IGZyb20gJ0AvdXRpbHMvdmFsaWRhdG9yJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L+u5pS55a+G56CBJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgYWN0aXZlUGFuZWw6ICdjYXB0Y2hhJyxcbiAgICAgIGNhcHRjaGE6ICcnLCAvLyDpqozor4HnoIFcbiAgICAgIG5ld1BzZDogJycgLy8g5paw5a+G56CBXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUlucHV0ICh2bUJpbmQsIHsgZGV0YWlsIH0pIHtcbiAgICAgICAgdGhpc1t2bUJpbmRdID0gZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgc3VibWl0Q2FwdGNoYSAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFuZWwgPSAnbmV3UHNkJ1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdFBzZCAoKSB7XG4gICAgICAgIHZhbGlkUHNkKHRoaXMubmV3UHNkKS50aGVuKCgpID0+IHtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICflr4bnoIHmoLzlvI/plJnor68nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
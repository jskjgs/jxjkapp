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
      navigationBarTitleText: '锦欣健康'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      phone: '', // 手机
      captcha: '', // 验证码
      countdown: 0, // 倒计时
      phoneIsValid: false, // 判断手机号码有效性
      inputPsd: false // 是否可输密码
    }, _this.computed = {}, _this.watch = {
      phone: function phone(newVal) {
        var _this2 = this;

        console.log('phone', newVal);
        (0, _validator.validTel)(newVal).then(function () {
          console.log('手机验证ok');
          _this2.phoneIsValid = true;
          _this2.$apply();
        }).catch(function () {
          console.log('手机验证fail');
          _this2.phoneIsValid = false;
          _this2.$apply();
        });
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
      },
      getCaptcha: function getCaptcha() {
        var _this3 = this;

        console.log('getCaptcha');
        this.$_request({
          url: '/other/sendCode?phone=' + this.phone + '&type=0',
          method: 'POST'
        }, true).then(function () {
          wx.showToast({
            title: '验证码发送成功'
          });
          _this3.countdown = 60;
          _this3.timer = setInterval(function () {
            if (--_this3.countdown === 0) {
              clearInterval(_this3.timer);
            }
            _this3.$apply();
          }, 1000);
        });
      },
      submit: function submit() {
        this.$_request({
          url: '/other/loginByCode?phone=' + this.phone + '&code=' + this.captcha,
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
      clearInterval(this.timer);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicGhvbmUiLCJjYXB0Y2hhIiwiY291bnRkb3duIiwicGhvbmVJc1ZhbGlkIiwiaW5wdXRQc2QiLCJjb21wdXRlZCIsIndhdGNoIiwibmV3VmFsIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCIkYXBwbHkiLCJjYXRjaCIsIm1ldGhvZHMiLCJ0b1NpZ251cCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImhhbmRsZVRvTmV4dCIsImhhbmRsZUlucHV0IiwidmFsQmluZCIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlRm9yZ2V0IiwiZ2V0Q2FwdGNoYSIsIiRfcmVxdWVzdCIsIm1ldGhvZCIsInNob3dUb2FzdCIsInRpdGxlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzdWJtaXQiLCJjb250ZW50IiwicmVzIiwiZW1wdHkiLCJyZWRpcmVjdFRvIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7OztJQUlxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERixFQUNNO0FBQ1hDLGVBQVMsRUFGSixFQUVRO0FBQ2JDLGlCQUFXLENBSE4sRUFHUztBQUNkQyxvQkFBYyxLQUpULEVBSWdCO0FBQ3JCQyxnQkFBVSxLQUxMLENBS1c7QUFMWCxLLFFBUVBDLFEsR0FBVyxFLFFBR1hDLEssR0FBUTtBQUNOTixXQURNLGlCQUNDTyxNQURELEVBQ1M7QUFBQTs7QUFDYkMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixNQUFyQjtBQUNBLGlDQUFTQSxNQUFULEVBQWlCRyxJQUFqQixDQUFzQixZQUFNO0FBQzFCRixrQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxpQkFBS04sWUFBTCxHQUFvQixJQUFwQjtBQUNBLGlCQUFLUSxNQUFMO0FBQ0QsU0FKRCxFQUlHQyxLQUpILENBSVMsWUFBTTtBQUNiSixrQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxpQkFBS04sWUFBTCxHQUFvQixLQUFwQjtBQUNBLGlCQUFLUSxNQUFMO0FBQ0QsU0FSRDtBQVNEO0FBWkssSyxRQWVSRSxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDSTtBQUNWQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQUxPOztBQU1SO0FBQ0FDLGtCQVBRLDBCQU9RO0FBQ2QsYUFBS2QsUUFBTCxHQUFnQixJQUFoQjtBQUNELE9BVE87QUFVUmUsaUJBVlEsdUJBVUtDLE9BVkwsU0FVMEI7QUFBQSxZQUFWQyxNQUFVLFNBQVZBLE1BQVU7O0FBQ2hDLGFBQUtELE9BQUwsSUFBZ0JDLE9BQU9DLEtBQXZCO0FBQ0QsT0FaTztBQWFSQyxrQkFiUSwwQkFhUTtBQUNkUixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQWpCTztBQWtCUk8sZ0JBbEJRLHdCQWtCTTtBQUFBOztBQUNaaEIsZ0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsYUFBS2dCLFNBQUwsQ0FBZTtBQUNiUiwwQ0FBOEIsS0FBS2pCLEtBQW5DLFlBRGE7QUFFYjBCLGtCQUFRO0FBRkssU0FBZixFQUdHLElBSEgsRUFHU2hCLElBSFQsQ0FHYyxZQUFNO0FBQ2xCSyxhQUFHWSxTQUFILENBQWE7QUFDWEMsbUJBQU87QUFESSxXQUFiO0FBR0EsaUJBQUsxQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsaUJBQUsyQixLQUFMLEdBQWFDLFlBQVksWUFBTTtBQUM3QixnQkFBSSxFQUFFLE9BQUs1QixTQUFQLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCNkIsNEJBQWMsT0FBS0YsS0FBbkI7QUFDRDtBQUNELG1CQUFLbEIsTUFBTDtBQUNELFdBTFksRUFLVixJQUxVLENBQWI7QUFNRCxTQWREO0FBZUQsT0FuQ087QUFvQ1JxQixZQXBDUSxvQkFvQ0U7QUFDUixhQUFLUCxTQUFMLENBQWU7QUFDYlIsNkNBQWlDLEtBQUtqQixLQUF0QyxjQUFvRCxLQUFLQyxPQUQ1QztBQUVieUIsa0JBQVE7QUFGSyxTQUFmLEVBR0csSUFISCxFQUdTaEIsSUFIVCxDQUdjLGVBQU87QUFDbkIsY0FBTXVCLFVBQVVDLElBQUlELE9BQUosSUFBZSxFQUEvQjtBQUNBLGNBQUlBLFFBQVFFLEtBQVosRUFBbUI7QUFDakJwQixlQUFHcUIsVUFBSCxDQUFjO0FBQ1puQixtQkFBSztBQURPLGFBQWQ7QUFHRCxXQUpELE1BSU87QUFDTEYsZUFBR0MsVUFBSCxDQUFjO0FBQ1pDLG1CQUFLO0FBRE8sYUFBZDtBQUdEO0FBQ0YsU0FkRDtBQWVEO0FBcERPLEssUUF1RFZvQixNLEdBQVMsRTs7Ozs7NkJBR0MsQ0FDVDs7OytCQUNXO0FBQ1ZOLG9CQUFjLEtBQUtGLEtBQW5CO0FBQ0Q7Ozs7RUFqR2dDLGVBQUtTLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQge1xuICAgIHZhbGlkVGVsXG4gIH0gZnJvbSAnQC91dGlscy92YWxpZGF0b3InXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfplKbmrKPlgaXlurcnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBwaG9uZTogJycsIC8vIOaJi+aculxuICAgICAgY2FwdGNoYTogJycsIC8vIOmqjOivgeeggVxuICAgICAgY291bnRkb3duOiAwLCAvLyDlgJLorqHml7ZcbiAgICAgIHBob25lSXNWYWxpZDogZmFsc2UsIC8vIOWIpOaWreaJi+acuuWPt+eggeacieaViOaAp1xuICAgICAgaW5wdXRQc2Q6IGZhbHNlIC8vIOaYr+WQpuWPr+i+k+WvhueggVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgcGhvbmUgKG5ld1ZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGhvbmUnLCBuZXdWYWwpXG4gICAgICAgIHZhbGlkVGVsKG5ld1ZhbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+aJi+acuumqjOivgW9rJylcbiAgICAgICAgICB0aGlzLnBob25lSXNWYWxpZCA9IHRydWVcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn5omL5py66aqM6K+BZmFpbCcpXG4gICAgICAgICAgdGhpcy5waG9uZUlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9TaWdudXAgKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvc2lnbnVwJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOS4i+S4gOatpVxuICAgICAgaGFuZGxlVG9OZXh0ICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFBzZCA9IHRydWVcbiAgICAgIH0sXG4gICAgICBoYW5kbGVJbnB1dCAodmFsQmluZCwgeyBkZXRhaWwgfSkge1xuICAgICAgICB0aGlzW3ZhbEJpbmRdID0gZGV0YWlsLnZhbHVlXG4gICAgICB9LFxuICAgICAgaGFuZGxlRm9yZ2V0ICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL215X3BzZCdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnZXRDYXB0Y2hhICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldENhcHRjaGEnKVxuICAgICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBgL290aGVyL3NlbmRDb2RlP3Bob25lPSR7dGhpcy5waG9uZX0mdHlwZT0wYCxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9LCB0cnVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfpqozor4HnoIHlj5HpgIHmiJDlip8nXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmNvdW50ZG93biA9IDYwXG4gICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICgtLXRoaXMuY291bnRkb3duID09PSAwKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHN1Ym1pdCAoKSB7XG4gICAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IGAvb3RoZXIvbG9naW5CeUNvZGU/cGhvbmU9JHt0aGlzLnBob25lfSZjb2RlPSR7dGhpcy5jYXB0Y2hhfWAsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSwgdHJ1ZSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXMuY29udGVudCB8fCB7fVxuICAgICAgICAgIGlmIChjb250ZW50LmVtcHR5KSB7XG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3NpZ251cF9pbmZvJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgIH1cbiAgICBvblVubG9hZCAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxuICB9XG4iXX0=
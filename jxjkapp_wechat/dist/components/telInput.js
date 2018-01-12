'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customInput = require('./customInput.js');

var _customInput2 = _interopRequireDefault(_customInput);

var _validator = require('./../utils/validator.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TelInput = function (_wepy$component) {
  _inherits(TelInput, _wepy$component);

  function TelInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TelInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TelInput.__proto__ || Object.getPrototypeOf(TelInput)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PhoneInput": { "class": "input-group__inner", "xmlns:v-bind": "", "v-bind:value.sync": "phone", "type": "number", "placeholder": "请输入手机号" }, "CodeInput": { "class": "input-group__inner", "v-bind:value.sync": "code", "placeholder": "请输入验证码" } }, _this.$events = {}, _this.components = {
      PhoneInput: _customInput2.default,
      CodeInput: _customInput2.default
    }, _this.props = {
      value: {
        type: Object,
        twoWay: true
      },
      submitBtnText: {
        type: String
      },
      codeType: {
        type: String,
        default: '0'
      }
    }, _this.mixins = [], _this.data = {
      phone: '', // 手机
      code: '', // 验证码
      countdown: 0, // 倒计时
      phoneIsValid: false, // 判断手机号码有效性
      inputPsd: false // 是否可输密码
    }, _this.watch = {
      phone: function phone(newVal) {
        this.phoneIsValid = (0, _validator.validTel)(newVal);
        this.value.phone = newVal;
      },
      code: function code(newVal) {
        this.value.code = newVal;
      }
    }, _this.computed = {}, _this.methods = {
      getCode: function getCode() {
        var _this2 = this;

        console.log('getCode');
        this.$_request({
          url: '/other/sendCode?phone=' + this.phone + '&type=' + this.codeType,
          method: 'POST'
        }, true).then(function () {
          wx.showToast({
            title: '验证码发送成功'
          });
          _this2.countdown = 60;
          _this2.timer = setInterval(function () {
            if (--_this2.countdown === 0) {
              clearInterval(_this2.timer);
            }
            _this2.$apply();
          }, 1000);
        });
      },
      submit: function submit() {
        this.$emit('submit');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TelInput, [{
    key: 'clearTimer',
    value: function clearTimer() {
      console.log(111, this);
      clearInterval(this.timer);
    }
  }]);

  return TelInput;
}(_wepy2.default.component);

exports.default = TelInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbElucHV0LmpzIl0sIm5hbWVzIjpbIlRlbElucHV0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUGhvbmVJbnB1dCIsIkNvZGVJbnB1dCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiT2JqZWN0IiwidHdvV2F5Iiwic3VibWl0QnRuVGV4dCIsIlN0cmluZyIsImNvZGVUeXBlIiwiZGVmYXVsdCIsIm1peGlucyIsImRhdGEiLCJwaG9uZSIsImNvZGUiLCJjb3VudGRvd24iLCJwaG9uZUlzVmFsaWQiLCJpbnB1dFBzZCIsIndhdGNoIiwibmV3VmFsIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0Q29kZSIsImNvbnNvbGUiLCJsb2ciLCIkX3JlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ0aGVuIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGFwcGx5Iiwic3VibWl0IiwiJGVtaXQiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUlxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsU0FBUSxvQkFBVCxFQUE4QixnQkFBZSxFQUE3QyxFQUFnRCxxQkFBb0IsT0FBcEUsRUFBNEUsUUFBTyxRQUFuRixFQUE0RixlQUFjLFFBQTFHLEVBQWQsRUFBa0ksYUFBWSxFQUFDLFNBQVEsb0JBQVQsRUFBOEIscUJBQW9CLE1BQWxELEVBQXlELGVBQWMsUUFBdkUsRUFBOUksRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsdUNBRFE7QUFFUkM7QUFGUSxLLFFBS1ZDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DLE1BREQ7QUFFTEMsZ0JBQVE7QUFGSCxPQUREO0FBS05DLHFCQUFlO0FBQ2JILGNBQU1JO0FBRE8sT0FMVDtBQVFOQyxnQkFBVTtBQUNSTCxjQUFNSSxNQURFO0FBRVJFLGlCQUFTO0FBRkQ7QUFSSixLLFFBY1JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREYsRUFDTTtBQUNYQyxZQUFNLEVBRkQsRUFFSztBQUNWQyxpQkFBVyxDQUhOLEVBR1M7QUFDZEMsb0JBQWMsS0FKVCxFQUlnQjtBQUNyQkMsZ0JBQVUsS0FMTCxDQUtXO0FBTFgsSyxRQVFQQyxLLEdBQVE7QUFDTkwsV0FETSxpQkFDQ00sTUFERCxFQUNTO0FBQ2IsYUFBS0gsWUFBTCxHQUFvQix5QkFBU0csTUFBVCxDQUFwQjtBQUNBLGFBQUtoQixLQUFMLENBQVdVLEtBQVgsR0FBbUJNLE1BQW5CO0FBQ0QsT0FKSztBQUtOTCxVQUxNLGdCQUtBSyxNQUxBLEVBS1E7QUFDWixhQUFLaEIsS0FBTCxDQUFXVyxJQUFYLEdBQWtCSyxNQUFsQjtBQUNEO0FBUEssSyxRQVVSQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRztBQUFBOztBQUNUQyxnQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxhQUFLQyxTQUFMLENBQWU7QUFDYkMsMENBQThCLEtBQUtiLEtBQW5DLGNBQWlELEtBQUtKLFFBRHpDO0FBRWJrQixrQkFBUTtBQUZLLFNBQWYsRUFHRyxJQUhILEVBR1NDLElBSFQsQ0FHYyxZQUFNO0FBQ2xCQyxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU87QUFESSxXQUFiO0FBR0EsaUJBQUtoQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsaUJBQUtpQixLQUFMLEdBQWFDLFlBQVksWUFBTTtBQUM3QixnQkFBSSxFQUFFLE9BQUtsQixTQUFQLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCbUIsNEJBQWMsT0FBS0YsS0FBbkI7QUFDRDtBQUNELG1CQUFLRyxNQUFMO0FBQ0QsV0FMWSxFQUtWLElBTFUsQ0FBYjtBQU1ELFNBZEQ7QUFlRCxPQWxCTztBQW1CUkMsWUFuQlEsb0JBbUJFO0FBQ1IsYUFBS0MsS0FBTCxDQUFXLFFBQVg7QUFDRDtBQXJCTyxLLFFBd0JWQyxNLEdBQVMsRTs7Ozs7aUNBR0s7QUFDWmYsY0FBUUMsR0FBUixDQUFZLEdBQVosRUFBaUIsSUFBakI7QUFDQVUsb0JBQWMsS0FBS0YsS0FBbkI7QUFDRDs7OztFQTVFbUMsZUFBS08sUzs7a0JBQXRCNUMsUSIsImZpbGUiOiJ0ZWxJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbUlucHV0J1xuICBpbXBvcnQge1xuICAgIHZhbGlkVGVsXG4gIH0gZnJvbSAnQC91dGlscy92YWxpZGF0b3InXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsSW5wdXQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlBob25lSW5wdXRcIjp7XCJjbGFzc1wiOlwiaW5wdXQtZ3JvdXBfX2lubmVyXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInBob25lXCIsXCJ0eXBlXCI6XCJudW1iZXJcIixcInBsYWNlaG9sZGVyXCI6XCLor7fovpPlhaXmiYvmnLrlj7dcIn0sXCJDb2RlSW5wdXRcIjp7XCJjbGFzc1wiOlwiaW5wdXQtZ3JvdXBfX2lubmVyXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiY29kZVwiLFwicGxhY2Vob2xkZXJcIjpcIuivt+i+k+WFpemqjOivgeeggVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBQaG9uZUlucHV0OiBDdXN0b21JbnB1dCxcbiAgICAgIENvZGVJbnB1dDogQ3VzdG9tSW5wdXRcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgc3VibWl0QnRuVGV4dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICBjb2RlVHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcwJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcGhvbmU6ICcnLCAvLyDmiYvmnLpcbiAgICAgIGNvZGU6ICcnLCAvLyDpqozor4HnoIFcbiAgICAgIGNvdW50ZG93bjogMCwgLy8g5YCS6K6h5pe2XG4gICAgICBwaG9uZUlzVmFsaWQ6IGZhbHNlLCAvLyDliKTmlq3miYvmnLrlj7fnoIHmnInmlYjmgKdcbiAgICAgIGlucHV0UHNkOiBmYWxzZSAvLyDmmK/lkKblj6/ovpPlr4bnoIFcbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIHBob25lIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5waG9uZUlzVmFsaWQgPSB2YWxpZFRlbChuZXdWYWwpXG4gICAgICAgIHRoaXMudmFsdWUucGhvbmUgPSBuZXdWYWxcbiAgICAgIH0sXG4gICAgICBjb2RlIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy52YWx1ZS5jb2RlID0gbmV3VmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdldENvZGUgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0Q29kZScpXG4gICAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IGAvb3RoZXIvc2VuZENvZGU/cGhvbmU9JHt0aGlzLnBob25lfSZ0eXBlPSR7dGhpcy5jb2RlVHlwZX1gLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgIH0sIHRydWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+mqjOivgeeggeWPkemAgeaIkOWKnydcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuY291bnRkb3duID0gNjBcbiAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKC0tdGhpcy5jb3VudGRvd24gPT09IDApIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc3VibWl0ICgpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lciAoKSB7XG4gICAgICBjb25zb2xlLmxvZygxMTEsIHRoaXMpXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxuICB9XG4iXX0=
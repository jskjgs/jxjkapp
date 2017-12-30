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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "PersonInfo": { "xmlns:v-bind": "", "v-bind:readonly.sync": "readonly", "v-bind:canEdit.sync": "canEdit", "v-bind:isMaster.sync": "isMaster", "submitBtnText": "确认添加", "xmlns:v-on": "" } }, _this.$events = { "PersonInfo": { "v-on:pickedsChange": "handlePickedsChange" } }, _this.components = {
      PersonInfo: _personInfo2.default
    }, _this.mixins = [], _this.data = {
      readonly: true,
      canEdit: false,
      isMaster: false,
      formData: {}
    }, _this.computed = {}, _this.methods = {
      handlePickedsChange: function handlePickedsChange(formData) {
        this.formData = formData;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var _this2 = this;

      var id = _ref2.id;

      if (id !== undefined) {
        // query中有id说明是查看绑定的就诊人信息（可编辑）
        wx.setNavigationBarTitle({
          title: '就诊人信息'
        });
        this.readonly = true;
        this.canEdit = true;

        this.isMaster = id === '0'; // 假设登陆人账号id为0
        setTimeout(function () {
          _this2.$invoke('PersonInfo', 'syncFormData', {
            id: '111', // 卡号
            cardId: '1211', // 身份证号
            allergies: '32321', // 过敏史
            disease: 'fdsaaf', // 疾病史
            address: 'fafas55' // 联系地址
          });
        }, 1000);
      } else {
        wx.setNavigationBarTitle({
          title: '添加就诊人'
        });
        this.readonly = false;
        this.canEdit = false;
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_relation_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3JlbGF0aW9uX2luZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJQZXJzb25JbmZvIiwibWl4aW5zIiwiZGF0YSIsInJlYWRvbmx5IiwiY2FuRWRpdCIsImlzTWFzdGVyIiwiZm9ybURhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVQaWNrZWRzQ2hhbmdlIiwiZXZlbnRzIiwiaWQiLCJ1bmRlZmluZWQiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwic2V0VGltZW91dCIsIiRpbnZva2UiLCJjYXJkSWQiLCJhbGxlcmdpZXMiLCJkaXNlYXNlIiwiYWRkcmVzcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUVWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFVBQTFDLEVBQXFELHVCQUFzQixTQUEzRSxFQUFxRix3QkFBdUIsVUFBNUcsRUFBdUgsaUJBQWdCLE1BQXZJLEVBQThJLGNBQWEsRUFBM0osRUFBZCxFLFFBQ1RDLE8sR0FBVSxFQUFDLGNBQWEsRUFBQyxzQkFBcUIscUJBQXRCLEVBQWQsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLGVBQVMsS0FGSjtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLGdCQUFVO0FBSkwsSyxRQU9QQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMseUJBRFEsK0JBQ2FILFFBRGIsRUFDdUI7QUFDN0IsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUhPLEssUUFNVkksTSxHQUFTLEU7Ozs7O2tDQUdNO0FBQUE7O0FBQUEsVUFBTkMsRUFBTSxTQUFOQSxFQUFNOztBQUNiLFVBQUlBLE9BQU9DLFNBQVgsRUFBc0I7QUFBRTtBQUN0QkMsV0FBR0MscUJBQUgsQ0FBeUI7QUFDdkJDLGlCQUFPO0FBRGdCLFNBQXpCO0FBR0EsYUFBS1osUUFBTCxHQUFnQixJQUFoQjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxJQUFmOztBQUVBLGFBQUtDLFFBQUwsR0FBZ0JNLE9BQU8sR0FBdkIsQ0FQb0IsQ0FPTztBQUMzQkssbUJBQVcsWUFBTTtBQUNmLGlCQUFLQyxPQUFMLENBQWEsWUFBYixFQUEyQixjQUEzQixFQUEyQztBQUN6Q04sZ0JBQUksS0FEcUMsRUFDOUI7QUFDWE8sb0JBQVEsTUFGaUMsRUFFekI7QUFDaEJDLHVCQUFXLE9BSDhCLEVBR3JCO0FBQ3BCQyxxQkFBUyxRQUpnQyxFQUl0QjtBQUNuQkMscUJBQVMsU0FMZ0MsQ0FLdEI7QUFMc0IsV0FBM0M7QUFPRCxTQVJELEVBUUcsSUFSSDtBQVNELE9BakJELE1BaUJPO0FBQ0xSLFdBQUdDLHFCQUFILENBQXlCO0FBQ3ZCQyxpQkFBTztBQURnQixTQUF6QjtBQUdBLGFBQUtaLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBQ0Y7Ozs7RUF4RGdDLGVBQUtrQixJOztrQkFBbkI1QixLIiwiZmlsZSI6Im15X3JlbGF0aW9uX2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgUGVyc29uSW5mbyBmcm9tICdAL2NvbXBvbmVudHMvcGVyc29uSW5mbydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUGVyc29uSW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIixcInYtYmluZDpjYW5FZGl0LnN5bmNcIjpcImNhbkVkaXRcIixcInYtYmluZDppc01hc3Rlci5zeW5jXCI6XCJpc01hc3RlclwiLFwic3VibWl0QnRuVGV4dFwiOlwi56Gu6K6k5re75YqgXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiUGVyc29uSW5mb1wiOntcInYtb246cGlja2Vkc0NoYW5nZVwiOlwiaGFuZGxlUGlja2Vkc0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUGVyc29uSW5mb1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICBjYW5FZGl0OiBmYWxzZSxcbiAgICAgIGlzTWFzdGVyOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZWRzQ2hhbmdlIChmb3JtRGF0YSkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKHsgaWQgfSkge1xuICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHsgLy8gcXVlcnnkuK3mnIlpZOivtOaYjuaYr+afpeeci+e7keWumueahOWwseiviuS6uuS/oeaBr++8iOWPr+e8lui+ke+8iVxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgIHRpdGxlOiAn5bCx6K+K5Lq65L+h5oGvJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdHJ1ZVxuICAgICAgICB0aGlzLmNhbkVkaXQgPSB0cnVlXG5cbiAgICAgICAgdGhpcy5pc01hc3RlciA9IGlkID09PSAnMCcgLy8g5YGH6K6+55m76ZmG5Lq66LSm5Y+3aWTkuLowXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuJGludm9rZSgnUGVyc29uSW5mbycsICdzeW5jRm9ybURhdGEnLCB7XG4gICAgICAgICAgICBpZDogJzExMScsIC8vIOWNoeWPt1xuICAgICAgICAgICAgY2FyZElkOiAnMTIxMScsIC8vIOi6q+S7veivgeWPt1xuICAgICAgICAgICAgYWxsZXJnaWVzOiAnMzIzMjEnLCAvLyDov4fmlY/lj7JcbiAgICAgICAgICAgIGRpc2Vhc2U6ICdmZHNhYWYnLCAvLyDnlr7nl4Xlj7JcbiAgICAgICAgICAgIGFkZHJlc3M6ICdmYWZhczU1JyAvLyDogZTns7vlnLDlnYBcbiAgICAgICAgICB9KVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICB0aXRsZTogJ+a3u+WKoOWwseiviuS6uidcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2FuRWRpdCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=
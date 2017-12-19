'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dialog = require('./../components/dialog.js');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MY_ITEMS = [{
  icon: '',
  text: '我的二维码',
  handlerTap: function handlerTap() {
    // this.qrcodeVisible = true
    wx.navigateTo({
      url: '/pages/my_qrcode'
    });
  }
}, {
  icon: '',
  text: '知情通知书',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_consent'
    });
  }
}, {
  icon: '',
  text: 'VIP预约列表',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_vip'
    });
  }
}, {
  icon: '',
  text: '联系我们',
  handlerTap: function handlerTap() {
    wx.showModal({
      title: '客服电话',
      // showCancel: false,
      confirmText: '拨打',
      content: '8400561',
      success: function success(data) {
        if (data.confirm) {
          wx.makePhoneCall({
            phoneNumber: '44323423432'
          });
        }
        console.log('success', arguments);
      },
      fail: function fail() {
        console.log('fail', arguments);
      }
    });
    // this.telDialogVisible = true
  }
}, {
  icon: '',
  text: '清除缓存',
  handlerTap: function handlerTap() {
    wx.clearStorage();
    wx.showToast({
      icon: 'success',
      title: '缓存清除成功'
    });
  }
}, {
  icon: '',
  text: '退出当前账号',
  handlerTap: function handlerTap() {
    wx.showModal({
      title: '退出账号',
      content: '确认退出当前账号？',
      cancelColor: '#9190FF'
    });
  }
}];

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
      navigationBarTitleText: '我的'
    }, _this.$repeat = {}, _this.$props = { "QrcodeDialog": { "xmlns:v-bind": "", "v-bind:visible.sync": "qrcodeVisible", "innerStyle": "padding: 40rpx;" }, "TelDialog": { "v-bind:visible.sync": "telDialogVisible", "innerStyle": "width: 560rpx;height: 220rpx;" } }, _this.$events = {}, _this.components = {
      QrcodeDialog: _dialog2.default,
      TelDialog: _dialog2.default
    }, _this.mixins = [], _this.data = {
      qrcodeVisible: false, // 二维码弹框
      telDialogVisible: false,
      myItems: MY_ITEMS
    }, _this.computed = {}, _this.methods = {
      itemClick: function itemClick(index) {
        var handlerTap = MY_ITEMS[index].handlerTap;
        handlerTap.call(this);
      },
      callPhone: function callPhone() {
        wx.makePhoneCall({
          phoneNumber: '44323423432'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIk1ZX0lURU1TIiwiaWNvbiIsInRleHQiLCJoYW5kbGVyVGFwIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb25maXJtVGV4dCIsImNvbnRlbnQiLCJzdWNjZXNzIiwiZGF0YSIsImNvbmZpcm0iLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYXJndW1lbnRzIiwiZmFpbCIsImNsZWFyU3RvcmFnZSIsInNob3dUb2FzdCIsImNhbmNlbENvbG9yIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUXJjb2RlRGlhbG9nIiwiVGVsRGlhbG9nIiwibWl4aW5zIiwicXJjb2RlVmlzaWJsZSIsInRlbERpYWxvZ1Zpc2libGUiLCJteUl0ZW1zIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaXRlbUNsaWNrIiwiaW5kZXgiLCJjYWxsIiwiY2FsbFBob25lIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxDQUFDO0FBQ2hCQyxRQUFNLEVBRFU7QUFFaEJDLFFBQU0sT0FGVTtBQUdoQkMsWUFIZ0Isd0JBR0Y7QUFDWjtBQUNBQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQVJlLENBQUQsRUFTZDtBQUNETCxRQUFNLEVBREw7QUFFREMsUUFBTSxPQUZMO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQQSxDQVRjLEVBaUJkO0FBQ0RMLFFBQU0sRUFETDtBQUVEQyxRQUFNLFNBRkw7QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQVBBLENBakJjLEVBeUJkO0FBQ0RMLFFBQU0sRUFETDtBQUVEQyxRQUFNLE1BRkw7QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHRyxTQUFILENBQWE7QUFDWEMsYUFBTyxNQURJO0FBRVg7QUFDQUMsbUJBQWEsSUFIRjtBQUlYQyxlQUFTLFNBSkU7QUFLWEMsYUFMVyxtQkFLRkMsSUFMRSxFQUtJO0FBQ2IsWUFBSUEsS0FBS0MsT0FBVCxFQUFrQjtBQUNoQlQsYUFBR1UsYUFBSCxDQUFpQjtBQUNmQyx5QkFBYTtBQURFLFdBQWpCO0FBR0Q7QUFDREMsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCQyxTQUF2QjtBQUNELE9BWlU7QUFhWEMsVUFiVyxrQkFhSDtBQUNOSCxnQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JDLFNBQXBCO0FBQ0Q7QUFmVSxLQUFiO0FBaUJBO0FBQ0Q7QUF0QkEsQ0F6QmMsRUFnRGQ7QUFDRGpCLFFBQU0sRUFETDtBQUVEQyxRQUFNLE1BRkw7QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHZ0IsWUFBSDtBQUNBaEIsT0FBR2lCLFNBQUgsQ0FBYTtBQUNYcEIsWUFBTSxTQURLO0FBRVhPLGFBQU87QUFGSSxLQUFiO0FBSUQ7QUFUQSxDQWhEYyxFQTBEZDtBQUNEUCxRQUFNLEVBREw7QUFFREMsUUFBTSxRQUZMO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0csU0FBSCxDQUFhO0FBQ1hDLGFBQU8sTUFESTtBQUVYRSxlQUFTLFdBRkU7QUFHWFksbUJBQWE7QUFIRixLQUFiO0FBS0Q7QUFUQSxDQTFEYyxDQUFqQjs7SUFzRXFCQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixlQUF6QyxFQUF5RCxjQUFhLGlCQUF0RSxFQUFoQixFQUF5RyxhQUFZLEVBQUMsdUJBQXNCLGtCQUF2QixFQUEwQyxjQUFhLCtCQUF2RCxFQUFySCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxvQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsTSxHQUFTLEUsUUFFVHBCLEksR0FBTztBQUNMcUIscUJBQWUsS0FEVixFQUNpQjtBQUN0QkMsd0JBQWtCLEtBRmI7QUFHTEMsZUFBU25DO0FBSEosSyxRQU1Qb0MsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0dDLEtBREgsRUFDVTtBQUNoQixZQUFNcEMsYUFBYUgsU0FBU3VDLEtBQVQsRUFBZ0JwQyxVQUFuQztBQUNBQSxtQkFBV3FDLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRCxPQUpPO0FBS1JDLGVBTFEsdUJBS0s7QUFDWHJDLFdBQUdVLGFBQUgsQ0FBaUI7QUFDZkMsdUJBQWE7QUFERSxTQUFqQjtBQUdEO0FBVE8sSyxRQVlWMkIsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUF2Q2dDLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoibXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IERpYWxvZyBmcm9tICdAL2NvbXBvbmVudHMvZGlhbG9nJ1xuXG4gIGNvbnN0IE1ZX0lURU1TID0gW3tcbiAgICBpY29uOiAnJyxcbiAgICB0ZXh0OiAn5oiR55qE5LqM57u056CBJyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIC8vIHRoaXMucXJjb2RlVmlzaWJsZSA9IHRydWVcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbXlfcXJjb2RlJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnJyxcbiAgICB0ZXh0OiAn55+l5oOF6YCa55+l5LmmJyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbXlfY29uc2VudCdcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgaWNvbjogJycsXG4gICAgdGV4dDogJ1ZJUOmihOe6puWIl+ihqCcsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X3ZpcCdcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgaWNvbjogJycsXG4gICAgdGV4dDogJ+iBlOezu+aIkeS7rCcsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+WuouacjeeUteivnScsXG4gICAgICAgIC8vIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICBjb25maXJtVGV4dDogJ+aLqOaJkycsXG4gICAgICAgIGNvbnRlbnQ6ICc4NDAwNTYxJyxcbiAgICAgICAgc3VjY2VzcyAoZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICAgICAgICBwaG9uZU51bWJlcjogJzQ0MzIzNDIzNDMyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBhcmd1bWVudHMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsJywgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gdGhpcy50ZWxEaWFsb2dWaXNpYmxlID0gdHJ1ZVxuICAgIH1cbiAgfSwge1xuICAgIGljb246ICcnLFxuICAgIHRleHQ6ICfmuIXpmaTnvJPlrZgnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3guY2xlYXJTdG9yYWdlKClcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgdGl0bGU6ICfnvJPlrZjmuIXpmaTmiJDlip8nXG4gICAgICB9KVxuICAgIH1cbiAgfSwge1xuICAgIGljb246ICcnLFxuICAgIHRleHQ6ICfpgIDlh7rlvZPliY3otKblj7cnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfpgIDlh7rotKblj7cnLFxuICAgICAgICBjb250ZW50OiAn56Gu6K6k6YCA5Ye65b2T5YmN6LSm5Y+377yfJyxcbiAgICAgICAgY2FuY2VsQ29sb3I6ICcjOTE5MEZGJ1xuICAgICAgfSlcbiAgICB9XG4gIH1dXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJRcmNvZGVEaWFsb2dcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZpc2libGUuc3luY1wiOlwicXJjb2RlVmlzaWJsZVwiLFwiaW5uZXJTdHlsZVwiOlwicGFkZGluZzogNDBycHg7XCJ9LFwiVGVsRGlhbG9nXCI6e1widi1iaW5kOnZpc2libGUuc3luY1wiOlwidGVsRGlhbG9nVmlzaWJsZVwiLFwiaW5uZXJTdHlsZVwiOlwid2lkdGg6IDU2MHJweDtoZWlnaHQ6IDIyMHJweDtcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUXJjb2RlRGlhbG9nOiBEaWFsb2csXG4gICAgICBUZWxEaWFsb2c6IERpYWxvZ1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcXJjb2RlVmlzaWJsZTogZmFsc2UsIC8vIOS6jOe7tOeggeW8ueahhlxuICAgICAgdGVsRGlhbG9nVmlzaWJsZTogZmFsc2UsXG4gICAgICBteUl0ZW1zOiBNWV9JVEVNU1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBpdGVtQ2xpY2sgKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJUYXAgPSBNWV9JVEVNU1tpbmRleF0uaGFuZGxlclRhcFxuICAgICAgICBoYW5kbGVyVGFwLmNhbGwodGhpcylcbiAgICAgIH0sXG4gICAgICBjYWxsUGhvbmUgKCkge1xuICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICBwaG9uZU51bWJlcjogJzQ0MzIzNDIzNDMyJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
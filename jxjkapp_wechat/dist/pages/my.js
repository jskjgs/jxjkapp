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
  icon: '../assets/images/icon-qrcode.png',
  label: '我的二维码',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_qrcode'
    });
  }
}, {
  icon: '../assets/images/icon-relation.png',
  label: '绑定就诊人',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_relations'
    });
  }
}, {
  icon: '../assets/images/icon-consent.png',
  label: '知情通知书',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_consent'
    });
  }
}, {
  icon: '../assets/images/icon-vip.png',
  label: 'VIP用户管理',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_vip'
    });
  }
}, {
  icon: '../assets/images/icon-concat.png',
  label: '联系我们',
  handlerTap: function handlerTap() {
    wx.showModal({
      title: '客服电话',
      content: '8400561',
      confirmText: '拨打',
      confirmColor: '#9190ff',
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
  }
}, {
  icon: '../assets/images/icon-setting.png',
  label: '系统设置',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_setting'
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
    }, _this.computed = {
      userInfo: function userInfo() {
        return this.$parent.globalData.userInfo;
      }
    }, _this.methods = {
      toLogin: function toLogin() {
        wx.navigateTo({
          url: '/pages/login'
        });
      },
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
    value: function onLoad() {
      console.log('route', this.$_getRoute());
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIk1ZX0lURU1TIiwiaWNvbiIsImxhYmVsIiwiaGFuZGxlclRhcCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic3VjY2VzcyIsImRhdGEiLCJjb25maXJtIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwiY29uc29sZSIsImxvZyIsImFyZ3VtZW50cyIsImZhaWwiLCJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJRcmNvZGVEaWFsb2ciLCJUZWxEaWFsb2ciLCJtaXhpbnMiLCJxcmNvZGVWaXNpYmxlIiwidGVsRGlhbG9nVmlzaWJsZSIsIm15SXRlbXMiLCJjb21wdXRlZCIsInVzZXJJbmZvIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJtZXRob2RzIiwidG9Mb2dpbiIsIml0ZW1DbGljayIsImluZGV4IiwiY2FsbCIsImNhbGxQaG9uZSIsImV2ZW50cyIsIiRfZ2V0Um91dGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLENBQUM7QUFDaEJDLFFBQU0sa0NBRFU7QUFFaEJDLFNBQU8sT0FGUztBQUdoQkMsWUFIZ0Isd0JBR0Y7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQZSxDQUFELEVBUWQ7QUFDREwsUUFBTSxvQ0FETDtBQUVEQyxTQUFPLE9BRk47QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQVBBLENBUmMsRUFnQmQ7QUFDREwsUUFBTSxtQ0FETDtBQUVEQyxTQUFPLE9BRk47QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQVBBLENBaEJjLEVBd0JkO0FBQ0RMLFFBQU0sK0JBREw7QUFFREMsU0FBTyxTQUZOO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQQSxDQXhCYyxFQWdDZDtBQUNETCxRQUFNLGtDQURMO0FBRURDLFNBQU8sTUFGTjtBQUdEQyxZQUhDLHdCQUdhO0FBQ1pDLE9BQUdHLFNBQUgsQ0FBYTtBQUNYQyxhQUFPLE1BREk7QUFFWEMsZUFBUyxTQUZFO0FBR1hDLG1CQUFhLElBSEY7QUFJWEMsb0JBQWMsU0FKSDtBQUtYQyxhQUxXLG1CQUtGQyxJQUxFLEVBS0k7QUFDYixZQUFJQSxLQUFLQyxPQUFULEVBQWtCO0FBQ2hCVixhQUFHVyxhQUFILENBQWlCO0FBQ2ZDLHlCQUFhO0FBREUsV0FBakI7QUFHRDtBQUNEQyxnQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJDLFNBQXZCO0FBQ0QsT0FaVTtBQWFYQyxVQWJXLGtCQWFIO0FBQ05ILGdCQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQkMsU0FBcEI7QUFDRDtBQWZVLEtBQWI7QUFpQkQ7QUFyQkEsQ0FoQ2MsRUFzRGQ7QUFDRGxCLFFBQU0sbUNBREw7QUFFREMsU0FBTyxNQUZOO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQQSxDQXREYyxDQUFqQjs7SUFnRXFCZSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixlQUF6QyxFQUF5RCxjQUFhLGlCQUF0RSxFQUFoQixFQUF5RyxhQUFZLEVBQUMsdUJBQXNCLGtCQUF2QixFQUEwQyxjQUFhLCtCQUF2RCxFQUFySCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxvQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsTSxHQUFTLEUsUUFFVGpCLEksR0FBTztBQUNMa0IscUJBQWUsS0FEVixFQUNpQjtBQUN0QkMsd0JBQWtCLEtBRmI7QUFHTEMsZUFBU2pDO0FBSEosSyxRQU1Qa0MsUSxHQUFXO0FBQ1RDLGNBRFMsc0JBQ0c7QUFDVixlQUFPLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkYsUUFBL0I7QUFDRDtBQUhRLEssUUFNWEcsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0c7QUFDVG5DLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BTE87QUFNUmtDLGVBTlEscUJBTUdDLEtBTkgsRUFNVTtBQUNoQixZQUFNdEMsYUFBYUgsU0FBU3lDLEtBQVQsRUFBZ0J0QyxVQUFuQztBQUNBQSxtQkFBV3VDLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRCxPQVRPO0FBVVJDLGVBVlEsdUJBVUs7QUFDWHZDLFdBQUdXLGFBQUgsQ0FBaUI7QUFDZkMsdUJBQWE7QUFERSxTQUFqQjtBQUdEO0FBZE8sSyxRQWlCVjRCLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQM0IsY0FBUUMsR0FBUixDQUFZLE9BQVosRUFBcUIsS0FBSzJCLFVBQUwsRUFBckI7QUFDRDs7OztFQWhEZ0MsZUFBS0MsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgRGlhbG9nIGZyb20gJ0AvY29tcG9uZW50cy9kaWFsb2cnXG5cbiAgY29uc3QgTVlfSVRFTVMgPSBbe1xuICAgIGljb246ICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tcXJjb2RlLnBuZycsXG4gICAgbGFiZWw6ICfmiJHnmoTkuoznu7TnoIEnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9teV9xcmNvZGUnXG4gICAgICB9KVxuICAgIH1cbiAgfSwge1xuICAgIGljb246ICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tcmVsYXRpb24ucG5nJyxcbiAgICBsYWJlbDogJ+e7keWumuWwseiviuS6uicsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X3JlbGF0aW9ucydcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1jb25zZW50LnBuZycsXG4gICAgbGFiZWw6ICfnn6Xmg4XpgJrnn6XkuaYnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9teV9jb25zZW50J1xuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLXZpcC5wbmcnLFxuICAgIGxhYmVsOiAnVklQ55So5oi3566h55CGJyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbXlfdmlwJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLWNvbmNhdC5wbmcnLFxuICAgIGxhYmVsOiAn6IGU57O75oiR5LusJyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5a6i5pyN55S16K+dJyxcbiAgICAgICAgY29udGVudDogJzg0MDA1NjEnLFxuICAgICAgICBjb25maXJtVGV4dDogJ+aLqOaJkycsXG4gICAgICAgIGNvbmZpcm1Db2xvcjogJyM5MTkwZmYnLFxuICAgICAgICBzdWNjZXNzIChkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEuY29uZmlybSkge1xuICAgICAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICAgICAgIHBob25lTnVtYmVyOiAnNDQzMjM0MjM0MzInXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycsIGFyZ3VtZW50cylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWwnLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1zZXR0aW5nLnBuZycsXG4gICAgbGFiZWw6ICfns7vnu5/orr7nva4nLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9teV9zZXR0aW5nJ1xuICAgICAgfSlcbiAgICB9XG4gIH1dXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJRcmNvZGVEaWFsb2dcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZpc2libGUuc3luY1wiOlwicXJjb2RlVmlzaWJsZVwiLFwiaW5uZXJTdHlsZVwiOlwicGFkZGluZzogNDBycHg7XCJ9LFwiVGVsRGlhbG9nXCI6e1widi1iaW5kOnZpc2libGUuc3luY1wiOlwidGVsRGlhbG9nVmlzaWJsZVwiLFwiaW5uZXJTdHlsZVwiOlwid2lkdGg6IDU2MHJweDtoZWlnaHQ6IDIyMHJweDtcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUXJjb2RlRGlhbG9nOiBEaWFsb2csXG4gICAgICBUZWxEaWFsb2c6IERpYWxvZ1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcXJjb2RlVmlzaWJsZTogZmFsc2UsIC8vIOS6jOe7tOeggeW8ueahhlxuICAgICAgdGVsRGlhbG9nVmlzaWJsZTogZmFsc2UsXG4gICAgICBteUl0ZW1zOiBNWV9JVEVNU1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgdXNlckluZm8gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9Mb2dpbiAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBpdGVtQ2xpY2sgKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJUYXAgPSBNWV9JVEVNU1tpbmRleF0uaGFuZGxlclRhcFxuICAgICAgICBoYW5kbGVyVGFwLmNhbGwodGhpcylcbiAgICAgIH0sXG4gICAgICBjYWxsUGhvbmUgKCkge1xuICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICBwaG9uZU51bWJlcjogJzQ0MzIzNDIzNDMyJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygncm91dGUnLCB0aGlzLiRfZ2V0Um91dGUoKSlcbiAgICB9XG4gIH1cbiJdfQ==
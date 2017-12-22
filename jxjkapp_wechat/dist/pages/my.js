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
  label: '我的二维码',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_qrcode'
    });
  }
}, {
  icon: '',
  label: '绑定就诊人',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_relations'
    });
  }
}, {
  icon: '',
  label: '知情通知书',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_consent'
    });
  }
}, {
  icon: '',
  label: 'VIP预约列表',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_vip'
    });
  }
}, {
  icon: '',
  label: '联系我们',
  handlerTap: function handlerTap() {
    wx.showModal({
      title: '客服电话',
      confirmlabel: '拨打',
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
  }
}, {
  icon: '',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIk1ZX0lURU1TIiwiaWNvbiIsImxhYmVsIiwiaGFuZGxlclRhcCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29uZmlybWxhYmVsIiwiY29udGVudCIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uZmlybSIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJhcmd1bWVudHMiLCJmYWlsIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUXJjb2RlRGlhbG9nIiwiVGVsRGlhbG9nIiwibWl4aW5zIiwicXJjb2RlVmlzaWJsZSIsInRlbERpYWxvZ1Zpc2libGUiLCJteUl0ZW1zIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaXRlbUNsaWNrIiwiaW5kZXgiLCJjYWxsIiwiY2FsbFBob25lIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxDQUFDO0FBQ2hCQyxRQUFNLEVBRFU7QUFFaEJDLFNBQU8sT0FGUztBQUdoQkMsWUFIZ0Isd0JBR0Y7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQZSxDQUFELEVBUWQ7QUFDREwsUUFBTSxFQURMO0FBRURDLFNBQU8sT0FGTjtBQUdEQyxZQUhDLHdCQUdhO0FBQ1pDLE9BQUdDLFVBQUgsQ0FBYztBQUNaQyxXQUFLO0FBRE8sS0FBZDtBQUdEO0FBUEEsQ0FSYyxFQWdCZDtBQUNETCxRQUFNLEVBREw7QUFFREMsU0FBTyxPQUZOO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQQSxDQWhCYyxFQXdCZDtBQUNETCxRQUFNLEVBREw7QUFFREMsU0FBTyxTQUZOO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQQSxDQXhCYyxFQWdDZDtBQUNETCxRQUFNLEVBREw7QUFFREMsU0FBTyxNQUZOO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0csU0FBSCxDQUFhO0FBQ1hDLGFBQU8sTUFESTtBQUVYQyxvQkFBYyxJQUZIO0FBR1hDLGVBQVMsU0FIRTtBQUlYQyxhQUpXLG1CQUlGQyxJQUpFLEVBSUk7QUFDYixZQUFJQSxLQUFLQyxPQUFULEVBQWtCO0FBQ2hCVCxhQUFHVSxhQUFILENBQWlCO0FBQ2ZDLHlCQUFhO0FBREUsV0FBakI7QUFHRDtBQUNEQyxnQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJDLFNBQXZCO0FBQ0QsT0FYVTtBQVlYQyxVQVpXLGtCQVlIO0FBQ05ILGdCQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQkMsU0FBcEI7QUFDRDtBQWRVLEtBQWI7QUFnQkQ7QUFwQkEsQ0FoQ2MsRUFxRGQ7QUFDRGpCLFFBQU0sRUFETDtBQUVEQyxTQUFPLE1BRk47QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQVBBLENBckRjLENBQWpCOztJQStEcUJjLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGVBQXpDLEVBQXlELGNBQWEsaUJBQXRFLEVBQWhCLEVBQXlHLGFBQVksRUFBQyx1QkFBc0Isa0JBQXZCLEVBQTBDLGNBQWEsK0JBQXZELEVBQXJILEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLG9DQURRO0FBRVJDO0FBRlEsSyxRQUtWQyxNLEdBQVMsRSxRQUVUakIsSSxHQUFPO0FBQ0xrQixxQkFBZSxLQURWLEVBQ2lCO0FBQ3RCQyx3QkFBa0IsS0FGYjtBQUdMQyxlQUFTaEM7QUFISixLLFFBTVBpQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsS0FESCxFQUNVO0FBQ2hCLFlBQU1qQyxhQUFhSCxTQUFTb0MsS0FBVCxFQUFnQmpDLFVBQW5DO0FBQ0FBLG1CQUFXa0MsSUFBWCxDQUFnQixJQUFoQjtBQUNELE9BSk87QUFLUkMsZUFMUSx1QkFLSztBQUNYbEMsV0FBR1UsYUFBSCxDQUFpQjtBQUNmQyx1QkFBYTtBQURFLFNBQWpCO0FBR0Q7QUFUTyxLLFFBWVZ3QixNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQXZDZ0MsZUFBS0MsSTs7a0JBQW5CcEIsSyIsImZpbGUiOiJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgRGlhbG9nIGZyb20gJ0AvY29tcG9uZW50cy9kaWFsb2cnXG5cbiAgY29uc3QgTVlfSVRFTVMgPSBbe1xuICAgIGljb246ICcnLFxuICAgIGxhYmVsOiAn5oiR55qE5LqM57u056CBJyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbXlfcXJjb2RlJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnJyxcbiAgICBsYWJlbDogJ+e7keWumuWwseiviuS6uicsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X3JlbGF0aW9ucydcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgaWNvbjogJycsXG4gICAgbGFiZWw6ICfnn6Xmg4XpgJrnn6XkuaYnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9teV9jb25zZW50J1xuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnJyxcbiAgICBsYWJlbDogJ1ZJUOmihOe6puWIl+ihqCcsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X3ZpcCdcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgaWNvbjogJycsXG4gICAgbGFiZWw6ICfogZTns7vmiJHku6wnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICflrqLmnI3nlLXor50nLFxuICAgICAgICBjb25maXJtbGFiZWw6ICfmi6jmiZMnLFxuICAgICAgICBjb250ZW50OiAnODQwMDU2MScsXG4gICAgICAgIHN1Y2Nlc3MgKGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5jb25maXJtKSB7XG4gICAgICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICc0NDMyMzQyMzQzMidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgYXJndW1lbnRzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbCcsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnJyxcbiAgICBsYWJlbDogJ+ezu+e7n+iuvue9ricsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X3NldHRpbmcnXG4gICAgICB9KVxuICAgIH1cbiAgfV1cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlFyY29kZURpYWxvZ1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmlzaWJsZS5zeW5jXCI6XCJxcmNvZGVWaXNpYmxlXCIsXCJpbm5lclN0eWxlXCI6XCJwYWRkaW5nOiA0MHJweDtcIn0sXCJUZWxEaWFsb2dcIjp7XCJ2LWJpbmQ6dmlzaWJsZS5zeW5jXCI6XCJ0ZWxEaWFsb2dWaXNpYmxlXCIsXCJpbm5lclN0eWxlXCI6XCJ3aWR0aDogNTYwcnB4O2hlaWdodDogMjIwcnB4O1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBRcmNvZGVEaWFsb2c6IERpYWxvZyxcbiAgICAgIFRlbERpYWxvZzogRGlhbG9nXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBxcmNvZGVWaXNpYmxlOiBmYWxzZSwgLy8g5LqM57u056CB5by55qGGXG4gICAgICB0ZWxEaWFsb2dWaXNpYmxlOiBmYWxzZSxcbiAgICAgIG15SXRlbXM6IE1ZX0lURU1TXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGl0ZW1DbGljayAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlclRhcCA9IE1ZX0lURU1TW2luZGV4XS5oYW5kbGVyVGFwXG4gICAgICAgIGhhbmRsZXJUYXAuY2FsbCh0aGlzKVxuICAgICAgfSxcbiAgICAgIGNhbGxQaG9uZSAoKSB7XG4gICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICAgIHBob25lTnVtYmVyOiAnNDQzMjM0MjM0MzInXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
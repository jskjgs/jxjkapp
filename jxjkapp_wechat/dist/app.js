'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

require('./utils/nativeExtend.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      networkTimeout: {
        'request': 10000
      },
      pages: ['pages/index', 'pages/banner_detail', 'pages/login', 'pages/signup', 'pages/signup_info', 'pages/project', 'pages/project_order', 'pages/project_order_info', 'pages/health', 'pages/health_pay', 'pages/health_detail', 'pages/health_comment', 'pages/health_cancel', 'pages/my', 'pages/my_vip', 'pages/my_consent', 'pages/my_qrcode', 'pages/my_relations', 'pages/my_relation_info', 'pages/my_vip_update', 'pages/my_setting', 'pages/my_tel_change', 'pages/news', 'pages/news_detail', 'pages/doctor', 'pages/doctor_detail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#9190FF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        selectedColor: '#9190FF',
        list: [{
          'pagePath': 'pages/index',
          'iconPath': './assets/images/tab-index.png',
          'selectedIconPath': './assets/images/tab-index-active.png',
          'text': '首页'
        }, {
          'pagePath': 'pages/health',
          'iconPath': './assets/images/tab-health.png',
          'selectedIconPath': './assets/images/tab-health-active.png',
          'text': '健康管理'
        }, {
          'pagePath': 'pages/my',
          'iconPath': './assets/images/tab-my.png',
          'selectedIconPath': './assets/images/tab-my-active.png',
          'text': '我的'
        }]
      }
    };
    _this.globalData = {
      userInfo: {
        userId: 1,
        isVip: true
      }
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      wx.setEnableDebug({
        enableDebug: true
      });
      // wx.reLaunch({
      //   url: '/pages/my'
      // })
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      console.log('globalData', this.globalData);
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuZXR3b3JrVGltZW91dCIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsInNlbGVjdGVkQ29sb3IiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlcklkIiwiaXNWaXAiLCJ1c2UiLCJ3eCIsInNldEVuYWJsZURlYnVnIiwiZW5hYmxlRGVidWciLCJjYiIsImNvbnNvbGUiLCJsb2ciLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBcUVFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFsRWZBLE1Ba0VlLEdBbEVOO0FBQ1BDLHNCQUFnQjtBQUNkLG1CQUFXO0FBREcsT0FEVDtBQUlQQyxhQUFPLENBQ0wsYUFESyxFQUVMLHFCQUZLLEVBR0wsYUFISyxFQUlMLGNBSkssRUFLTCxtQkFMSyxFQU1MLGVBTkssRUFPTCxxQkFQSyxFQVFMLDBCQVJLLEVBU0wsY0FUSyxFQVVMLGtCQVZLLEVBV0wscUJBWEssRUFZTCxzQkFaSyxFQWFMLHFCQWJLLEVBY0wsVUFkSyxFQWVMLGNBZkssRUFnQkwsa0JBaEJLLEVBaUJMLGlCQWpCSyxFQWtCTCxvQkFsQkssRUFtQkwsd0JBbkJLLEVBb0JMLHFCQXBCSyxFQXFCTCxrQkFyQkssRUFzQkwscUJBdEJLLEVBdUJMLFlBdkJLLEVBd0JMLG1CQXhCSyxFQXlCTCxjQXpCSyxFQTBCTCxxQkExQkssQ0FKQTtBQWdDUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQWhDRDtBQXNDUEMsY0FBUTtBQUNOQyx1QkFBZSxTQURUO0FBRU5DLGNBQU0sQ0FBQztBQUNMLHNCQUFZLGFBRFA7QUFFTCxzQkFBWSwrQkFGUDtBQUdMLDhCQUFvQixzQ0FIZjtBQUlMLGtCQUFRO0FBSkgsU0FBRCxFQUtIO0FBQ0Qsc0JBQVksY0FEWDtBQUVELHNCQUFZLGdDQUZYO0FBR0QsOEJBQW9CLHVDQUhuQjtBQUlELGtCQUFRO0FBSlAsU0FMRyxFQVVIO0FBQ0Qsc0JBQVksVUFEWDtBQUVELHNCQUFZLDRCQUZYO0FBR0QsOEJBQW9CLG1DQUhuQjtBQUlELGtCQUFRO0FBSlAsU0FWRztBQUZBO0FBdENELEtBa0VNO0FBQUEsVUFQZkMsVUFPZSxHQVBGO0FBQ1hDLGdCQUFVO0FBQ1JDLGdCQUFRLENBREE7QUFFUkMsZUFBTztBQUZDO0FBREMsS0FPRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSGE7QUFJZDs7OzsrQkFFVTtBQUNUQyxTQUFHQyxjQUFILENBQWtCO0FBQ2hCQyxxQkFBYTtBQURHLE9BQWxCO0FBR0E7QUFDQTtBQUNBO0FBQ0Q7OztnQ0FDV0MsRSxFQUFJO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLEtBQUtWLFVBQS9CO0FBQ0EsVUFBTVcsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLWCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS1csV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS1gsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJhLElBQUliLFFBQS9CO0FBQ0FPLGdCQUFNQSxHQUFHTSxJQUFJYixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUE3RjBCLGVBQUtjLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0ICdAL3V0aWxzL25hdGl2ZUV4dGVuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgJ3JlcXVlc3QnOiAxMDAwMFxuICAgIH0sXG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvYmFubmVyX2RldGFpbCcsXG4gICAgICAncGFnZXMvbG9naW4nLFxuICAgICAgJ3BhZ2VzL3NpZ251cCcsXG4gICAgICAncGFnZXMvc2lnbnVwX2luZm8nLFxuICAgICAgJ3BhZ2VzL3Byb2plY3QnLFxuICAgICAgJ3BhZ2VzL3Byb2plY3Rfb3JkZXInLFxuICAgICAgJ3BhZ2VzL3Byb2plY3Rfb3JkZXJfaW5mbycsXG4gICAgICAncGFnZXMvaGVhbHRoJyxcbiAgICAgICdwYWdlcy9oZWFsdGhfcGF5JyxcbiAgICAgICdwYWdlcy9oZWFsdGhfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9oZWFsdGhfY29tbWVudCcsXG4gICAgICAncGFnZXMvaGVhbHRoX2NhbmNlbCcsXG4gICAgICAncGFnZXMvbXknLFxuICAgICAgJ3BhZ2VzL215X3ZpcCcsXG4gICAgICAncGFnZXMvbXlfY29uc2VudCcsXG4gICAgICAncGFnZXMvbXlfcXJjb2RlJyxcbiAgICAgICdwYWdlcy9teV9yZWxhdGlvbnMnLFxuICAgICAgJ3BhZ2VzL215X3JlbGF0aW9uX2luZm8nLFxuICAgICAgJ3BhZ2VzL215X3ZpcF91cGRhdGUnLFxuICAgICAgJ3BhZ2VzL215X3NldHRpbmcnLFxuICAgICAgJ3BhZ2VzL215X3RlbF9jaGFuZ2UnLFxuICAgICAgJ3BhZ2VzL25ld3MnLFxuICAgICAgJ3BhZ2VzL25ld3NfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9kb2N0b3InLFxuICAgICAgJ3BhZ2VzL2RvY3Rvcl9kZXRhaWwnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzkxOTBGRicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgc2VsZWN0ZWRDb2xvcjogJyM5MTkwRkYnLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaW5kZXgucG5nJyxcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1pbmRleC1hY3RpdmUucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn6aaW6aG1J1xuICAgICAgfSwge1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaGVhbHRoJyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaGVhbHRoLnBuZycsXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaGVhbHRoLWFjdGl2ZS5wbmcnLFxuICAgICAgICAndGV4dCc6ICflgaXlurfnrqHnkIYnXG4gICAgICB9LCB7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9teScsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLW15LnBuZycsXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItbXktYWN0aXZlLnBuZycsXG4gICAgICAgICd0ZXh0JzogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzoge1xuICAgICAgdXNlcklkOiAxLFxuICAgICAgaXNWaXA6IHRydWVcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIHd4LnNldEVuYWJsZURlYnVnKHtcbiAgICAgIGVuYWJsZURlYnVnOiB0cnVlXG4gICAgfSlcbiAgICAvLyB3eC5yZUxhdW5jaCh7XG4gICAgLy8gICB1cmw6ICcvcGFnZXMvbXknXG4gICAgLy8gfSlcbiAgfVxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhJywgdGhpcy5nbG9iYWxEYXRhKVxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
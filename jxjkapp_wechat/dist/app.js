'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _convertDate = require('./utils/convertDate.js');

var _convertDate2 = _interopRequireDefault(_convertDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Promise.prototype.finally = function (callback) {
  var P = this.constructor;
  return this.then(function (value) {
    return P.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return P.resolve(callback()).then(function () {
      throw reason;
    });
  });
};['page', 'component'].forEach(function (item) {
  Object.defineProperties(_wepy2.default[item].prototype, {
    '$_request': {
      value: function value(cfg, noLoading) {
        cfg = Object.assign({}, cfg);
        if (!noLoading) {
          wx.showLoading({
            title: '加载中..',
            mask: true
          });
        }
        // cfg.url = 'http://192.168.6.84:9001/hospHealth' + cfg.url
        cfg.url = 'http://182.92.78.118:9001/hospHealth' + cfg.url;
        return new Promise(function (resolve, reject) {
          _wepy2.default.request(cfg).then(function (res) {
            return res.data || {};
          }).then(function (data) {
            resolve(data);
          }).catch(function (e) {
            reject(e);
          });
        }).finally(function () {
          wx.hideLoading();
        });
      }
    },
    '$_getPage': {
      value: function value() {
        return this.getCurrentPages().slice(-1)[0];
      }
    },
    '$_getRoute': {
      value: function value() {
        return this.getCurrentPages().slice(-1)[0].route;
      }
    },
    '$_convertDate': {
      value: function value(timeStamp) {
        return (0, _convertDate2.default)(timeStamp);
      }
    }
  });
});
console.log('wepy', _wepy2.default);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/banner_detail', 'pages/login', 'pages/signup', 'pages/signup_info', 'pages/project', 'pages/project_order', 'pages/project_order_info', 'pages/health', 'pages/health_pay', 'pages/health_detail', 'pages/health_comment', 'pages/health_cancel', 'pages/my', 'pages/my_vip', 'pages/my_consent', 'pages/my_qrcode', 'pages/my_relations', 'pages/my_relation_info', 'pages/my_vip_update', 'pages/my_setting', 'pages/my_psd', 'pages/news', 'pages/news_detail', 'pages/staff'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#9190FF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white',
        enablePullDownRefresh: true
      },
      tabBar: {
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
      userInfo: null
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
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiUCIsImNvbnN0cnVjdG9yIiwidGhlbiIsInJlc29sdmUiLCJ2YWx1ZSIsInJlYXNvbiIsImZvckVhY2giLCJpdGVtIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImNmZyIsIm5vTG9hZGluZyIsImFzc2lnbiIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJ1cmwiLCJyZWplY3QiLCJyZXF1ZXN0IiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZSIsImhpZGVMb2FkaW5nIiwiZ2V0Q3VycmVudFBhZ2VzIiwic2xpY2UiLCJyb3V0ZSIsInRpbWVTdGFtcCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwic2V0RW5hYmxlRGVidWciLCJlbmFibGVEZWJ1ZyIsInMiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLFFBQVFDLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCLFVBQVVDLFFBQVYsRUFBb0I7QUFDOUMsTUFBSUMsSUFBSSxLQUFLQyxXQUFiO0FBQ0EsU0FBTyxLQUFLQyxJQUFMLENBQ0w7QUFBQSxXQUFTRixFQUFFRyxPQUFGLENBQVVKLFVBQVYsRUFBc0JHLElBQXRCLENBQTJCO0FBQUEsYUFBTUUsS0FBTjtBQUFB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UUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBcEcwQixlQUFLVyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmltcG9ydCBjb252ZXJ0RGF0ZSBmcm9tICdAL3V0aWxzL2NvbnZlcnREYXRlJ1xuXG5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGxldCBQID0gdGhpcy5jb25zdHJ1Y3RvclxuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIHZhbHVlID0+IFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcbiAgICByZWFzb24gPT4gUC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4geyB0aHJvdyByZWFzb24gfSlcbiAgKVxufVxuXG47KFsncGFnZScsICdjb21wb25lbnQnXSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh3ZXB5W2l0ZW1dLnByb3RvdHlwZSwge1xuICAgICckX3JlcXVlc3QnOiB7XG4gICAgICB2YWx1ZSAoY2ZnLCBub0xvYWRpbmcpIHtcbiAgICAgICAgY2ZnID0gT2JqZWN0LmFzc2lnbih7fSwgY2ZnKVxuICAgICAgICBpZiAoIW5vTG9hZGluZykge1xuICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitLi4nLFxuICAgICAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gY2ZnLnVybCA9ICdodHRwOi8vMTkyLjE2OC42Ljg0OjkwMDEvaG9zcEhlYWx0aCcgKyBjZmcudXJsXG4gICAgICAgIGNmZy51cmwgPSAnaHR0cDovLzE4Mi45Mi43OC4xMTg6OTAwMS9ob3NwSGVhbHRoJyArIGNmZy51cmxcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3ZXB5LnJlcXVlc3QoY2ZnKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEgfHwge31cbiAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICAnJF9nZXRQYWdlJzoge1xuICAgICAgdmFsdWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGFnZXMoKS5zbGljZSgtMSlbMF1cbiAgICAgIH1cbiAgICB9LFxuICAgICckX2dldFJvdXRlJzoge1xuICAgICAgdmFsdWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGFnZXMoKS5zbGljZSgtMSlbMF0ucm91dGVcbiAgICAgIH1cbiAgICB9LFxuICAgICckX2NvbnZlcnREYXRlJzoge1xuICAgICAgdmFsdWUgKHRpbWVTdGFtcCkge1xuICAgICAgICByZXR1cm4gY29udmVydERhdGUodGltZVN0YW1wKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn0pXG5jb25zb2xlLmxvZygnd2VweScsIHdlcHkpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2Jhbm5lcl9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2xvZ2luJyxcbiAgICAgICdwYWdlcy9zaWdudXAnLFxuICAgICAgJ3BhZ2VzL3NpZ251cF9pbmZvJyxcbiAgICAgICdwYWdlcy9wcm9qZWN0JyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyJyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyX2luZm8nLFxuICAgICAgJ3BhZ2VzL2hlYWx0aCcsXG4gICAgICAncGFnZXMvaGVhbHRoX3BheScsXG4gICAgICAncGFnZXMvaGVhbHRoX2RldGFpbCcsXG4gICAgICAncGFnZXMvaGVhbHRoX2NvbW1lbnQnLFxuICAgICAgJ3BhZ2VzL2hlYWx0aF9jYW5jZWwnLFxuICAgICAgJ3BhZ2VzL215JyxcbiAgICAgICdwYWdlcy9teV92aXAnLFxuICAgICAgJ3BhZ2VzL215X2NvbnNlbnQnLFxuICAgICAgJ3BhZ2VzL215X3FyY29kZScsXG4gICAgICAncGFnZXMvbXlfcmVsYXRpb25zJyxcbiAgICAgICdwYWdlcy9teV9yZWxhdGlvbl9pbmZvJyxcbiAgICAgICdwYWdlcy9teV92aXBfdXBkYXRlJyxcbiAgICAgICdwYWdlcy9teV9zZXR0aW5nJyxcbiAgICAgICdwYWdlcy9teV9wc2QnLFxuICAgICAgJ3BhZ2VzL25ld3MnLFxuICAgICAgJ3BhZ2VzL25ld3NfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9zdGFmZidcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjOTE5MEZGJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBsaXN0OiBbe1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1pbmRleC5wbmcnLFxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWluZGV4LWFjdGl2ZS5wbmcnLFxuICAgICAgICAndGV4dCc6ICfpppbpobUnXG4gICAgICB9LCB7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9oZWFsdGgnLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1oZWFsdGgucG5nJyxcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1oZWFsdGgtYWN0aXZlLnBuZycsXG4gICAgICAgICd0ZXh0JzogJ+WBpeW6t+euoeeQhidcbiAgICAgIH0sIHtcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL215JyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItbXkucG5nJyxcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1teS1hY3RpdmUucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn5oiR55qEJ1xuICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIHd4LnNldEVuYWJsZURlYnVnKHtcbiAgICAgIGVuYWJsZURlYnVnOiB0cnVlXG4gICAgfSlcbiAgICAvLyB3eC5yZUxhdW5jaCh7XG4gICAgLy8gICB1cmw6ICcvcGFnZXMvbXknXG4gICAgLy8gfSlcbiAgfVxuXG4gIHNsZWVwIChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgIH0sIHMgKiAxMDAwKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc29sZS5sb2coJ2dsb2JhbERhdGEnLCB0aGlzLmdsb2JhbERhdGEpXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
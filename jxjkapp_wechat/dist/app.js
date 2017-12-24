'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

['page', 'component'].forEach(function (item) {
  Object.defineProperties(_wepy2.default[item].prototype, {
    '$_request': {
      value: function value(cfg) {
        return _wepy2.default.request(cfg);
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
      pages: ['pages/index', 'pages/login', 'pages/signup', 'pages/signup_info', 'pages/project', 'pages/project_order', 'pages/project_order_info', 'pages/health', 'pages/health_pay', 'pages/health_detail', 'pages/health_comment', 'pages/health_cancel', 'pages/my', 'pages/my_vip', 'pages/my_consent', 'pages/my_qrcode', 'pages/my_relations', 'pages/my_relation_info', 'pages/my_vip_update', 'pages/my_setting', 'pages/my_psd', 'pages/news', 'pages/staff'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#9190FF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
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
      wx.reLaunch({
        url: '/pages/my'
      });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiaXRlbSIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJwcm90b3R5cGUiLCJ2YWx1ZSIsImNmZyIsInJlcXVlc3QiLCJnZXRDdXJyZW50UGFnZXMiLCJzbGljZSIsInJvdXRlIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImxpc3QiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3eCIsInNldEVuYWJsZURlYnVnIiwiZW5hYmxlRGVidWciLCJyZUxhdW5jaCIsInVybCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0JBLE9BQXRCLENBQThCLFVBQVVDLElBQVYsRUFBZ0I7QUFDNUNDLFNBQU9DLGdCQUFQLENBQXdCLGVBQUtGLElBQUwsRUFBV0csU0FBbkMsRUFBOEM7QUFDNUMsaUJBQWE7QUFDWEMsV0FEVyxpQkFDSkMsR0FESSxFQUNDO0FBQ1YsZUFBTyxlQUFLQyxPQUFMLENBQWFELEdBQWIsQ0FBUDtBQUNEO0FBSFUsS0FEK0I7QUFNNUMsaUJBQWE7QUFDWEQsV0FEVyxtQkFDRjtBQUNQLGVBQU8sS0FBS0csZUFBTCxHQUF1QkMsS0FBdkIsQ0FBNkIsQ0FBQyxDQUE5QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0Q7QUFIVSxLQU4rQjtBQVc1QyxrQkFBYztBQUNaSixXQURZLG1CQUNIO0FBQ1AsZUFBTyxLQUFLRyxlQUFMLEdBQXVCQyxLQUF2QixDQUE2QixDQUFDLENBQTlCLEVBQWlDLENBQWpDLEVBQW9DQyxLQUEzQztBQUNEO0FBSFc7QUFYOEIsR0FBOUM7QUFpQkQsQ0FsQkQ7QUFtQkFDLFFBQVFDLEdBQVIsQ0FBWSxNQUFaOzs7OztBQTBERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBeERmQyxNQXdEZSxHQXhETjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGFBRkssRUFHTCxjQUhLLEVBSUwsbUJBSkssRUFLTCxlQUxLLEVBTUwscUJBTkssRUFPTCwwQkFQSyxFQVFMLGNBUkssRUFTTCxrQkFUSyxFQVVMLHFCQVZLLEVBV0wsc0JBWEssRUFZTCxxQkFaSyxFQWFMLFVBYkssRUFjTCxjQWRLLEVBZUwsa0JBZkssRUFnQkwsaUJBaEJLLEVBaUJMLG9CQWpCSyxFQWtCTCx3QkFsQkssRUFtQkwscUJBbkJLLEVBb0JMLGtCQXBCSyxFQXFCTCxjQXJCSyxFQXNCTCxZQXRCSyxFQXVCTCxhQXZCSyxDQURBO0FBMEJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BMUJEO0FBZ0NQQyxjQUFRO0FBQ05DLGNBQU0sQ0FBQztBQUNMLHNCQUFZLGFBRFA7QUFFTCxzQkFBWSwrQkFGUDtBQUdMLDhCQUFvQixzQ0FIZjtBQUlMLGtCQUFRO0FBSkgsU0FBRCxFQUtIO0FBQ0Qsc0JBQVksY0FEWDtBQUVELHNCQUFZLGdDQUZYO0FBR0QsOEJBQW9CLHVDQUhuQjtBQUlELGtCQUFRO0FBSlAsU0FMRyxFQVVIO0FBQ0Qsc0JBQVksVUFEWDtBQUVELHNCQUFZLDRCQUZYO0FBR0QsOEJBQW9CLG1DQUhuQjtBQUlELGtCQUFRO0FBSlAsU0FWRztBQURBO0FBaENELEtBd0RNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSGE7QUFJZDs7OzsrQkFFVTtBQUNUQyxTQUFHQyxjQUFILENBQWtCO0FBQ2hCQyxxQkFBYTtBQURHLE9BQWxCO0FBR0FGLFNBQUdHLFFBQUgsQ0FBWTtBQUNWQyxhQUFLO0FBREssT0FBWjtBQUdEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ056Qix3QkFBUUMsR0FBUixDQUFZd0IsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVQyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtoQixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2dCLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pILGVBQUtoQixVQUFMLENBQWdCQyxRQUFoQixHQUEyQmtCLElBQUlsQixRQUEvQjtBQUNBYyxnQkFBTUEsR0FBR0ksSUFBSWxCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQWhHMEIsZUFBS21CLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuWydwYWdlJywgJ2NvbXBvbmVudCddLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMod2VweVtpdGVtXS5wcm90b3R5cGUsIHtcbiAgICAnJF9yZXF1ZXN0Jzoge1xuICAgICAgdmFsdWUgKGNmZykge1xuICAgICAgICByZXR1cm4gd2VweS5yZXF1ZXN0KGNmZylcbiAgICAgIH1cbiAgICB9LFxuICAgICckX2dldFBhZ2UnOiB7XG4gICAgICB2YWx1ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQYWdlcygpLnNsaWNlKC0xKVswXVxuICAgICAgfVxuICAgIH0sXG4gICAgJyRfZ2V0Um91dGUnOiB7XG4gICAgICB2YWx1ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQYWdlcygpLnNsaWNlKC0xKVswXS5yb3V0ZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn0pXG5jb25zb2xlLmxvZygnd2VweScsIHdlcHkpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2xvZ2luJyxcbiAgICAgICdwYWdlcy9zaWdudXAnLFxuICAgICAgJ3BhZ2VzL3NpZ251cF9pbmZvJyxcbiAgICAgICdwYWdlcy9wcm9qZWN0JyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyJyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyX2luZm8nLFxuICAgICAgJ3BhZ2VzL2hlYWx0aCcsXG4gICAgICAncGFnZXMvaGVhbHRoX3BheScsXG4gICAgICAncGFnZXMvaGVhbHRoX2RldGFpbCcsXG4gICAgICAncGFnZXMvaGVhbHRoX2NvbW1lbnQnLFxuICAgICAgJ3BhZ2VzL2hlYWx0aF9jYW5jZWwnLFxuICAgICAgJ3BhZ2VzL215JyxcbiAgICAgICdwYWdlcy9teV92aXAnLFxuICAgICAgJ3BhZ2VzL215X2NvbnNlbnQnLFxuICAgICAgJ3BhZ2VzL215X3FyY29kZScsXG4gICAgICAncGFnZXMvbXlfcmVsYXRpb25zJyxcbiAgICAgICdwYWdlcy9teV9yZWxhdGlvbl9pbmZvJyxcbiAgICAgICdwYWdlcy9teV92aXBfdXBkYXRlJyxcbiAgICAgICdwYWdlcy9teV9zZXR0aW5nJyxcbiAgICAgICdwYWdlcy9teV9wc2QnLFxuICAgICAgJ3BhZ2VzL25ld3MnLFxuICAgICAgJ3BhZ2VzL3N0YWZmJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM5MTkwRkYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWluZGV4LnBuZycsXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaW5kZXgtYWN0aXZlLnBuZycsXG4gICAgICAgICd0ZXh0JzogJ+mmlumhtSdcbiAgICAgIH0sIHtcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hlYWx0aCcsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWhlYWx0aC5wbmcnLFxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWhlYWx0aC1hY3RpdmUucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn5YGl5bq3566h55CGJ1xuICAgICAgfSwge1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbXknLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1teS5wbmcnLFxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLW15LWFjdGl2ZS5wbmcnLFxuICAgICAgICAndGV4dCc6ICfmiJHnmoQnXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgd3guc2V0RW5hYmxlRGVidWcoe1xuICAgICAgZW5hYmxlRGVidWc6IHRydWVcbiAgICB9KVxuICAgIHd4LnJlTGF1bmNoKHtcbiAgICAgIHVybDogJy9wYWdlcy9teSdcbiAgICB9KVxuICB9XG5cbiAgc2xlZXAgKHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgfSwgcyAqIDEwMDApXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHRlc3RBc3luYyAoKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICB9XG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=
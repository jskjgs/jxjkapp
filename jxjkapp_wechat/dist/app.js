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
      pages: ['pages/index', 'pages/banner_detail', 'pages/login', 'pages/signup', 'pages/signup_info', 'pages/project', 'pages/project_order', 'pages/project_order_info', 'pages/health', 'pages/health_pay', 'pages/health_detail', 'pages/health_comment', 'pages/health_cancel', 'pages/my', 'pages/my_vip', 'pages/my_consent', 'pages/my_qrcode', 'pages/my_relations', 'pages/my_relation_info', 'pages/my_vip_update', 'pages/my_setting', 'pages/my_psd', 'pages/news', 'pages/news_detail', 'pages/doctor', 'pages/doctor_detail'],
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
      //   url: '/pages/doctor_detail'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiUCIsImNvbnN0cnVjdG9yIiwidGhlbiIsInJlc29sdmUiLCJ2YWx1ZSIsInJlYXNvbiIsImZvckVhY2giLCJpdGVtIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImNmZyIsIm5vTG9hZGluZyIsImFzc2lnbiIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJ1cmwiLCJyZWplY3QiLCJyZXF1ZXN0IiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZSIsImhpZGVMb2FkaW5nIiwiZ2V0Q3VycmVudFBhZ2VzIiwic2xpY2UiLCJyb3V0ZSIsInRpbWVTdGFtcCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwic2V0RW5hYmxlRGVidWciLCJlbmFibGVEZWJ1ZyIsInMiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLFFBQVFDLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCLFVBQVVDLFFBQVYsRUFBb0I7QUFDOUMsTUFBSUMsSUFBSSxLQUFLQyxXQUFiO0FBQ0EsU0FBTyxLQUFLQyxJQUFMLENBQ0w7QUFBQSxXQUFTRixFQUFFRyxPQUFGLENBQVVKLFVBQVYsRUFBc0JHLElBQXRCLENBQTJCO0FBQUEsYUFBTUUsS0FBTjtBQUFB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QUFHN0IsSUFBSXNCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXJHMEIsZUFBS1csRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQgY29udmVydERhdGUgZnJvbSAnQC91dGlscy9jb252ZXJ0RGF0ZSdcblxuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBsZXQgUCA9IHRoaXMuY29uc3RydWN0b3JcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICB2YWx1ZSA9PiBQLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXG4gICAgcmVhc29uID0+IFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHsgdGhyb3cgcmVhc29uIH0pXG4gIClcbn1cblxuOyhbJ3BhZ2UnLCAnY29tcG9uZW50J10pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMod2VweVtpdGVtXS5wcm90b3R5cGUsIHtcbiAgICAnJF9yZXF1ZXN0Jzoge1xuICAgICAgdmFsdWUgKGNmZywgbm9Mb2FkaW5nKSB7XG4gICAgICAgIGNmZyA9IE9iamVjdC5hc3NpZ24oe30sIGNmZylcbiAgICAgICAgaWYgKCFub0xvYWRpbmcpIHtcbiAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rS4uJyxcbiAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGNmZy51cmwgPSAnaHR0cDovLzE5Mi4xNjguNi44NDo5MDAxL2hvc3BIZWFsdGgnICsgY2ZnLnVybFxuICAgICAgICBjZmcudXJsID0gJ2h0dHA6Ly8xODIuOTIuNzguMTE4OjkwMDEvaG9zcEhlYWx0aCcgKyBjZmcudXJsXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgd2VweS5yZXF1ZXN0KGNmZykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhIHx8IHt9XG4gICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgJyRfZ2V0UGFnZSc6IHtcbiAgICAgIHZhbHVlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBhZ2VzKCkuc2xpY2UoLTEpWzBdXG4gICAgICB9XG4gICAgfSxcbiAgICAnJF9nZXRSb3V0ZSc6IHtcbiAgICAgIHZhbHVlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBhZ2VzKCkuc2xpY2UoLTEpWzBdLnJvdXRlXG4gICAgICB9XG4gICAgfSxcbiAgICAnJF9jb252ZXJ0RGF0ZSc6IHtcbiAgICAgIHZhbHVlICh0aW1lU3RhbXApIHtcbiAgICAgICAgcmV0dXJuIGNvbnZlcnREYXRlKHRpbWVTdGFtcClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KVxuY29uc29sZS5sb2coJ3dlcHknLCB3ZXB5KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICdwYWdlcy9iYW5uZXJfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9sb2dpbicsXG4gICAgICAncGFnZXMvc2lnbnVwJyxcbiAgICAgICdwYWdlcy9zaWdudXBfaW5mbycsXG4gICAgICAncGFnZXMvcHJvamVjdCcsXG4gICAgICAncGFnZXMvcHJvamVjdF9vcmRlcicsXG4gICAgICAncGFnZXMvcHJvamVjdF9vcmRlcl9pbmZvJyxcbiAgICAgICdwYWdlcy9oZWFsdGgnLFxuICAgICAgJ3BhZ2VzL2hlYWx0aF9wYXknLFxuICAgICAgJ3BhZ2VzL2hlYWx0aF9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2hlYWx0aF9jb21tZW50JyxcbiAgICAgICdwYWdlcy9oZWFsdGhfY2FuY2VsJyxcbiAgICAgICdwYWdlcy9teScsXG4gICAgICAncGFnZXMvbXlfdmlwJyxcbiAgICAgICdwYWdlcy9teV9jb25zZW50JyxcbiAgICAgICdwYWdlcy9teV9xcmNvZGUnLFxuICAgICAgJ3BhZ2VzL215X3JlbGF0aW9ucycsXG4gICAgICAncGFnZXMvbXlfcmVsYXRpb25faW5mbycsXG4gICAgICAncGFnZXMvbXlfdmlwX3VwZGF0ZScsXG4gICAgICAncGFnZXMvbXlfc2V0dGluZycsXG4gICAgICAncGFnZXMvbXlfcHNkJyxcbiAgICAgICdwYWdlcy9uZXdzJyxcbiAgICAgICdwYWdlcy9uZXdzX2RldGFpbCcsXG4gICAgICAncGFnZXMvZG9jdG9yJyxcbiAgICAgICdwYWdlcy9kb2N0b3JfZGV0YWlsJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM5MTkwRkYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWluZGV4LnBuZycsXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaW5kZXgtYWN0aXZlLnBuZycsXG4gICAgICAgICd0ZXh0JzogJ+mmlumhtSdcbiAgICAgIH0sIHtcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hlYWx0aCcsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWhlYWx0aC5wbmcnLFxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWhlYWx0aC1hY3RpdmUucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn5YGl5bq3566h55CGJ1xuICAgICAgfSwge1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbXknLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1teS5wbmcnLFxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLW15LWFjdGl2ZS5wbmcnLFxuICAgICAgICAndGV4dCc6ICfmiJHnmoQnXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgd3guc2V0RW5hYmxlRGVidWcoe1xuICAgICAgZW5hYmxlRGVidWc6IHRydWVcbiAgICB9KVxuICAgIC8vIHd4LnJlTGF1bmNoKHtcbiAgICAvLyAgIHVybDogJy9wYWdlcy9kb2N0b3JfZGV0YWlsJ1xuICAgIC8vIH0pXG4gIH1cblxuICBzbGVlcCAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICB9LCBzICogMTAwMClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhJywgdGhpcy5nbG9iYWxEYXRhKVxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
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

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/banner_detail', 'pages/login', 'pages/signup', 'pages/signup_info', 'pages/project', 'pages/project_order', 'pages/project_order_info', 'pages/health', 'pages/health_pay', 'pages/health_detail', 'pages/health_comment', 'pages/health_cancel', 'pages/my', 'pages/my_vip', 'pages/my_consent', 'pages/my_qrcode', 'pages/my_relations', 'pages/my_relation_info', 'pages/my_vip_update', 'pages/my_setting', 'pages/my_tel_change', 'pages/news', 'pages/news_detail', 'pages/doctor', 'pages/doctor_detail'],
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
      //   url: '/pages/signup_info'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiUCIsImNvbnN0cnVjdG9yIiwidGhlbiIsInJlc29sdmUiLCJ2YWx1ZSIsInJlYXNvbiIsImZvckVhY2giLCJpdGVtIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImNmZyIsIm5vTG9hZGluZyIsImFzc2lnbiIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJ1cmwiLCJyZWplY3QiLCJyZXF1ZXN0IiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZSIsImhpZGVMb2FkaW5nIiwiZ2V0Q3VycmVudFBhZ2VzIiwic2xpY2UiLCJyb3V0ZSIsInRpbWVTdGFtcCIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInRhYkJhciIsImxpc3QiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzZXRFbmFibGVEZWJ1ZyIsImVuYWJsZURlYnVnIiwicyIsInNldFRpbWVvdXQiLCJzbGVlcCIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLFFBQVFDLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCLFVBQVVDLFFBQVYsRUFBb0I7QUFDOUMsTUFBSUMsSUFBSSxLQUFLQyxXQUFiO0FBQ0EsU0FBTyxLQUFLQyxJQUFMLENBQ0w7QUFBQSxXQUFTRixFQUFFRyxPQUFGLENBQVVKLFVBQVYsRUFBc0JHLElBQXRCLENBQTJCO0FBQUEsYUFBTUUsS0FBTjtBQUFB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YyxPQUFqQjtBQU1EOzs7O0VBckcwQixlQUFLYSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmltcG9ydCBjb252ZXJ0RGF0ZSBmcm9tICdAL3V0aWxzL2NvbnZlcnREYXRlJ1xuXG5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGxldCBQID0gdGhpcy5jb25zdHJ1Y3RvclxuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIHZhbHVlID0+IFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcbiAgICByZWFzb24gPT4gUC5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4geyB0aHJvdyByZWFzb24gfSlcbiAgKVxufVxuXG47KFsncGFnZScsICdjb21wb25lbnQnXSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh3ZXB5W2l0ZW1dLnByb3RvdHlwZSwge1xuICAgICckX3JlcXVlc3QnOiB7XG4gICAgICB2YWx1ZSAoY2ZnLCBub0xvYWRpbmcpIHtcbiAgICAgICAgY2ZnID0gT2JqZWN0LmFzc2lnbih7fSwgY2ZnKVxuICAgICAgICBpZiAoIW5vTG9hZGluZykge1xuICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitLi4nLFxuICAgICAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2ZnLnVybCA9ICdodHRwOi8vMTgyLjkyLjc4LjExODo5MDAxL2hvc3BIZWFsdGgnICsgY2ZnLnVybFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdlcHkucmVxdWVzdChjZmcpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YSB8fCB7fVxuICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpXG4gICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgICckX2dldFBhZ2UnOiB7XG4gICAgICB2YWx1ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQYWdlcygpLnNsaWNlKC0xKVswXVxuICAgICAgfVxuICAgIH0sXG4gICAgJyRfZ2V0Um91dGUnOiB7XG4gICAgICB2YWx1ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQYWdlcygpLnNsaWNlKC0xKVswXS5yb3V0ZVxuICAgICAgfVxuICAgIH0sXG4gICAgJyRfY29udmVydERhdGUnOiB7XG4gICAgICB2YWx1ZSAodGltZVN0YW1wKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZSh0aW1lU3RhbXApXG4gICAgICB9XG4gICAgfVxuICB9KVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvYmFubmVyX2RldGFpbCcsXG4gICAgICAncGFnZXMvbG9naW4nLFxuICAgICAgJ3BhZ2VzL3NpZ251cCcsXG4gICAgICAncGFnZXMvc2lnbnVwX2luZm8nLFxuICAgICAgJ3BhZ2VzL3Byb2plY3QnLFxuICAgICAgJ3BhZ2VzL3Byb2plY3Rfb3JkZXInLFxuICAgICAgJ3BhZ2VzL3Byb2plY3Rfb3JkZXJfaW5mbycsXG4gICAgICAncGFnZXMvaGVhbHRoJyxcbiAgICAgICdwYWdlcy9oZWFsdGhfcGF5JyxcbiAgICAgICdwYWdlcy9oZWFsdGhfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9oZWFsdGhfY29tbWVudCcsXG4gICAgICAncGFnZXMvaGVhbHRoX2NhbmNlbCcsXG4gICAgICAncGFnZXMvbXknLFxuICAgICAgJ3BhZ2VzL215X3ZpcCcsXG4gICAgICAncGFnZXMvbXlfY29uc2VudCcsXG4gICAgICAncGFnZXMvbXlfcXJjb2RlJyxcbiAgICAgICdwYWdlcy9teV9yZWxhdGlvbnMnLFxuICAgICAgJ3BhZ2VzL215X3JlbGF0aW9uX2luZm8nLFxuICAgICAgJ3BhZ2VzL215X3ZpcF91cGRhdGUnLFxuICAgICAgJ3BhZ2VzL215X3NldHRpbmcnLFxuICAgICAgJ3BhZ2VzL215X3RlbF9jaGFuZ2UnLFxuICAgICAgJ3BhZ2VzL25ld3MnLFxuICAgICAgJ3BhZ2VzL25ld3NfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9kb2N0b3InLFxuICAgICAgJ3BhZ2VzL2RvY3Rvcl9kZXRhaWwnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzkxOTBGRicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgbGlzdDogW3tcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaW5kZXgucG5nJyxcbiAgICAgICAgJ3NlbGVjdGVkSWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1pbmRleC1hY3RpdmUucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn6aaW6aG1J1xuICAgICAgfSwge1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaGVhbHRoJyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaGVhbHRoLnBuZycsXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaGVhbHRoLWFjdGl2ZS5wbmcnLFxuICAgICAgICAndGV4dCc6ICflgaXlurfnrqHnkIYnXG4gICAgICB9LCB7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9teScsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLW15LnBuZycsXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItbXktYWN0aXZlLnBuZycsXG4gICAgICAgICd0ZXh0JzogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICB3eC5zZXRFbmFibGVEZWJ1Zyh7XG4gICAgICBlbmFibGVEZWJ1ZzogdHJ1ZVxuICAgIH0pXG4gICAgLy8gd3gucmVMYXVuY2goe1xuICAgIC8vICAgdXJsOiAnL3BhZ2VzL3NpZ251cF9pbmZvJ1xuICAgIC8vIH0pXG4gIH1cblxuICBzbGVlcCAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICB9LCBzICogMTAwMClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhJywgdGhpcy5nbG9iYWxEYXRhKVxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
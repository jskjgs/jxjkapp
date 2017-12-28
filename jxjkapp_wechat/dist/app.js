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
      wx.reLaunch({
        url: '/pages/my_relations'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiUCIsImNvbnN0cnVjdG9yIiwidGhlbiIsInJlc29sdmUiLCJ2YWx1ZSIsInJlYXNvbiIsImZvckVhY2giLCJpdGVtIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImNmZyIsIm5vTG9hZGluZyIsImFzc2lnbiIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJ1cmwiLCJyZWplY3QiLCJyZXF1ZXN0IiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZSIsImhpZGVMb2FkaW5nIiwiZ2V0Q3VycmVudFBhZ2VzIiwic2xpY2UiLCJyb3V0ZSIsInRpbWVTdGFtcCIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInRhYkJhciIsImxpc3QiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJzZXRFbmFibGVEZWJ1ZyIsImVuYWJsZURlYnVnIiwicmVMYXVuY2giLCJzIiwic2V0VGltZW91dCIsInNsZWVwIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsUUFBUUMsU0FBUixDQUFrQkMsT0FBbEIsR0FBNEIsVUFBVUMsUUFBVixFQUFvQjtBQUM5QyxNQUFJQyxJQUFJLEtBQUtDLFdBQWI7QUFDQSxTQUFPLEtBQUtDLElBQUwsQ0FDTDtBQUFBLFdBQVNGLEVBQUVHLE9BQUYsQ0FBVUosVUFBVixFQUFzQkcsSUFBdEIsQ0FBMkI7QUFBQSxhQUFN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Q0FVLGdCQUFNQSxHQUFHOUIsSUFBSW9CLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXJHMEIsZUFBS2MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5pbXBvcnQgY29udmVydERhdGUgZnJvbSAnQC91dGlscy9jb252ZXJ0RGF0ZSdcblxuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBsZXQgUCA9IHRoaXMuY29uc3RydWN0b3JcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICB2YWx1ZSA9PiBQLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXG4gICAgcmVhc29uID0+IFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHsgdGhyb3cgcmVhc29uIH0pXG4gIClcbn1cblxuOyhbJ3BhZ2UnLCAnY29tcG9uZW50J10pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMod2VweVtpdGVtXS5wcm90b3R5cGUsIHtcbiAgICAnJF9yZXF1ZXN0Jzoge1xuICAgICAgdmFsdWUgKGNmZywgbm9Mb2FkaW5nKSB7XG4gICAgICAgIGNmZyA9IE9iamVjdC5hc3NpZ24oe30sIGNmZylcbiAgICAgICAgaWYgKCFub0xvYWRpbmcpIHtcbiAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XG4gICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rS4uJyxcbiAgICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNmZy51cmwgPSAnaHR0cDovLzE4Mi45Mi43OC4xMTg6OTAwMS9ob3NwSGVhbHRoJyArIGNmZy51cmxcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3ZXB5LnJlcXVlc3QoY2ZnKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEgfHwge31cbiAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICAnJF9nZXRQYWdlJzoge1xuICAgICAgdmFsdWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGFnZXMoKS5zbGljZSgtMSlbMF1cbiAgICAgIH1cbiAgICB9LFxuICAgICckX2dldFJvdXRlJzoge1xuICAgICAgdmFsdWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGFnZXMoKS5zbGljZSgtMSlbMF0ucm91dGVcbiAgICAgIH1cbiAgICB9LFxuICAgICckX2NvbnZlcnREYXRlJzoge1xuICAgICAgdmFsdWUgKHRpbWVTdGFtcCkge1xuICAgICAgICByZXR1cm4gY29udmVydERhdGUodGltZVN0YW1wKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2Jhbm5lcl9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL2xvZ2luJyxcbiAgICAgICdwYWdlcy9zaWdudXAnLFxuICAgICAgJ3BhZ2VzL3NpZ251cF9pbmZvJyxcbiAgICAgICdwYWdlcy9wcm9qZWN0JyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyJyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyX2luZm8nLFxuICAgICAgJ3BhZ2VzL2hlYWx0aCcsXG4gICAgICAncGFnZXMvaGVhbHRoX3BheScsXG4gICAgICAncGFnZXMvaGVhbHRoX2RldGFpbCcsXG4gICAgICAncGFnZXMvaGVhbHRoX2NvbW1lbnQnLFxuICAgICAgJ3BhZ2VzL2hlYWx0aF9jYW5jZWwnLFxuICAgICAgJ3BhZ2VzL215JyxcbiAgICAgICdwYWdlcy9teV92aXAnLFxuICAgICAgJ3BhZ2VzL215X2NvbnNlbnQnLFxuICAgICAgJ3BhZ2VzL215X3FyY29kZScsXG4gICAgICAncGFnZXMvbXlfcmVsYXRpb25zJyxcbiAgICAgICdwYWdlcy9teV9yZWxhdGlvbl9pbmZvJyxcbiAgICAgICdwYWdlcy9teV92aXBfdXBkYXRlJyxcbiAgICAgICdwYWdlcy9teV9zZXR0aW5nJyxcbiAgICAgICdwYWdlcy9teV90ZWxfY2hhbmdlJyxcbiAgICAgICdwYWdlcy9uZXdzJyxcbiAgICAgICdwYWdlcy9uZXdzX2RldGFpbCcsXG4gICAgICAncGFnZXMvZG9jdG9yJyxcbiAgICAgICdwYWdlcy9kb2N0b3JfZGV0YWlsJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM5MTkwRkYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWluZGV4LnBuZycsXG4gICAgICAgICdzZWxlY3RlZEljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaW5kZXgtYWN0aXZlLnBuZycsXG4gICAgICAgICd0ZXh0JzogJ+mmlumhtSdcbiAgICAgIH0sIHtcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2hlYWx0aCcsXG4gICAgICAgICdpY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWhlYWx0aC5wbmcnLFxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLWhlYWx0aC1hY3RpdmUucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn5YGl5bq3566h55CGJ1xuICAgICAgfSwge1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbXknLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1teS5wbmcnLFxuICAgICAgICAnc2VsZWN0ZWRJY29uUGF0aCc6ICcuL2Fzc2V0cy9pbWFnZXMvdGFiLW15LWFjdGl2ZS5wbmcnLFxuICAgICAgICAndGV4dCc6ICfmiJHnmoQnXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgd3guc2V0RW5hYmxlRGVidWcoe1xuICAgICAgZW5hYmxlRGVidWc6IHRydWVcbiAgICB9KVxuICAgIHd4LnJlTGF1bmNoKHtcbiAgICAgIHVybDogJy9wYWdlcy9teV9yZWxhdGlvbnMnXG4gICAgfSlcbiAgfVxuXG4gIHNsZWVwIChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgIH0sIHMgKiAxMDAwKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc29sZS5sb2coJ2dsb2JhbERhdGEnLCB0aGlzLmdsb2JhbERhdGEpXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
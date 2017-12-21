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

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/project', 'pages/project_order', 'pages/project_order_info', 'pages/health', 'pages/health_pay', 'pages/health_detail', 'pages/health_comment', 'pages/health_cancel', 'pages/my', 'pages/my_vip', 'pages/my_consent', 'pages/my_qrcode', 'pages/my_vip_update', 'pages/my_setting', 'pages/news', 'pages/staff'],
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
          'text': '首页'
        }, {
          'pagePath': 'pages/health',
          'iconPath': './assets/images/tab-health.png',
          'text': '健康管理'
        }, {
          'pagePath': 'pages/my',
          'iconPath': './assets/images/tab-my.png',
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
      //   url: 'pages/project_order_info'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwid3giLCJzZXRFbmFibGVEZWJ1ZyIsImVuYWJsZURlYnVnIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWtERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBL0NmQSxNQStDZSxHQS9DTjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGVBRkssRUFHTCxxQkFISyxFQUlMLDBCQUpLLEVBS0wsY0FMSyxFQU1MLGtCQU5LLEVBT0wscUJBUEssRUFRTCxzQkFSSyxFQVNMLHFCQVRLLEVBVUwsVUFWSyxFQVdMLGNBWEssRUFZTCxrQkFaSyxFQWFMLGlCQWJLLEVBY0wscUJBZEssRUFlTCxrQkFmSyxFQWdCTCxZQWhCSyxFQWlCTCxhQWpCSyxDQURBO0FBb0JQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BcEJEO0FBMEJQQyxjQUFRO0FBQ05DLGNBQU0sQ0FBQztBQUNMLHNCQUFZLGFBRFA7QUFFTCxzQkFBWSwrQkFGUDtBQUdMLGtCQUFRO0FBSEgsU0FBRCxFQUlIO0FBQ0Qsc0JBQVksY0FEWDtBQUVELHNCQUFZLGdDQUZYO0FBR0Qsa0JBQVE7QUFIUCxTQUpHLEVBUUg7QUFDRCxzQkFBWSxVQURYO0FBRUQsc0JBQVksNEJBRlg7QUFHRCxrQkFBUTtBQUhQLFNBUkc7QUFEQTtBQTFCRCxLQStDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7K0JBRVU7QUFDVEMsU0FBR0MsY0FBSCxDQUFrQjtBQUNoQkMscUJBQWE7QUFERyxPQUFsQjtBQUdBO0FBQ0E7QUFDQTtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLaEIsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtnQixXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSCxlQUFLaEIsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJrQixJQUFJbEIsUUFBL0I7QUFDQWMsZ0JBQU1BLEdBQUdJLElBQUlsQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF2RjBCLGVBQUttQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICdwYWdlcy9wcm9qZWN0JyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyJyxcbiAgICAgICdwYWdlcy9wcm9qZWN0X29yZGVyX2luZm8nLFxuICAgICAgJ3BhZ2VzL2hlYWx0aCcsXG4gICAgICAncGFnZXMvaGVhbHRoX3BheScsXG4gICAgICAncGFnZXMvaGVhbHRoX2RldGFpbCcsXG4gICAgICAncGFnZXMvaGVhbHRoX2NvbW1lbnQnLFxuICAgICAgJ3BhZ2VzL2hlYWx0aF9jYW5jZWwnLFxuICAgICAgJ3BhZ2VzL215JyxcbiAgICAgICdwYWdlcy9teV92aXAnLFxuICAgICAgJ3BhZ2VzL215X2NvbnNlbnQnLFxuICAgICAgJ3BhZ2VzL215X3FyY29kZScsXG4gICAgICAncGFnZXMvbXlfdmlwX3VwZGF0ZScsXG4gICAgICAncGFnZXMvbXlfc2V0dGluZycsXG4gICAgICAncGFnZXMvbmV3cycsXG4gICAgICAncGFnZXMvc3RhZmYnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzkxOTBGRicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZSdcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgbGlzdDogW3tcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaW5kZXgucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn6aaW6aG1J1xuICAgICAgfSwge1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaGVhbHRoJyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItaGVhbHRoLnBuZycsXG4gICAgICAgICd0ZXh0JzogJ+WBpeW6t+euoeeQhidcbiAgICAgIH0sIHtcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL215JyxcbiAgICAgICAgJ2ljb25QYXRoJzogJy4vYXNzZXRzL2ltYWdlcy90YWItbXkucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn5oiR55qEJ1xuICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIHd4LnNldEVuYWJsZURlYnVnKHtcbiAgICAgIGVuYWJsZURlYnVnOiB0cnVlXG4gICAgfSlcbiAgICAvLyB3eC5yZUxhdW5jaCh7XG4gICAgLy8gICB1cmw6ICdwYWdlcy9wcm9qZWN0X29yZGVyX2luZm8nXG4gICAgLy8gfSlcbiAgfVxuXG4gIHNsZWVwIChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgIH0sIHMgKiAxMDAwKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
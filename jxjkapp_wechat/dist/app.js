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
      pages: ['pages/index', 'pages/index_project', 'pages/health', 'pages/health_pay', 'pages/health_detail', 'pages/health_comment', 'pages/my', 'pages/my_vip', 'pages/my_consent', 'pages/my_qrcode', 'pages/my_vip_update', 'pages/news', 'pages/staff'],
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
      //   url: 'pages/staff'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwid3giLCJzZXRFbmFibGVEZWJ1ZyIsImVuYWJsZURlYnVnIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQThDRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBM0NmQSxNQTJDZSxHQTNDTjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLHFCQUZLLEVBR0wsY0FISyxFQUlMLGtCQUpLLEVBS0wscUJBTEssRUFNTCxzQkFOSyxFQU9MLFVBUEssRUFRTCxjQVJLLEVBU0wsa0JBVEssRUFVTCxpQkFWSyxFQVdMLHFCQVhLLEVBWUwsWUFaSyxFQWFMLGFBYkssQ0FEQTtBQWdCUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQWhCRDtBQXNCUEMsY0FBUTtBQUNOQyxjQUFNLENBQUM7QUFDTCxzQkFBWSxhQURQO0FBRUwsc0JBQVksK0JBRlA7QUFHTCxrQkFBUTtBQUhILFNBQUQsRUFJSDtBQUNELHNCQUFZLGNBRFg7QUFFRCxzQkFBWSxnQ0FGWDtBQUdELGtCQUFRO0FBSFAsU0FKRyxFQVFIO0FBQ0Qsc0JBQVksVUFEWDtBQUVELHNCQUFZLDRCQUZYO0FBR0Qsa0JBQVE7QUFIUCxTQVJHO0FBREE7QUF0QkQsS0EyQ007QUFBQSxVQUpmQyxVQUllLEdBSkY7QUFDWEMsZ0JBQVU7QUFEQyxLQUlFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7OytCQUVVO0FBQ1RDLFNBQUdDLGNBQUgsQ0FBa0I7QUFDaEJDLHFCQUFhO0FBREcsT0FBbEI7QUFHQTtBQUNBO0FBQ0E7QUFDRDs7OzBCQUVNQyxDLEVBQUc7QUFDUixhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2hCLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLZ0IsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS2hCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCa0IsSUFBSWxCLFFBQS9CO0FBQ0FjLGdCQUFNQSxHQUFHSSxJQUFJbEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBbkYwQixlQUFLbUIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvaW5kZXhfcHJvamVjdCcsXG4gICAgICAncGFnZXMvaGVhbHRoJyxcbiAgICAgICdwYWdlcy9oZWFsdGhfcGF5JyxcbiAgICAgICdwYWdlcy9oZWFsdGhfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9oZWFsdGhfY29tbWVudCcsXG4gICAgICAncGFnZXMvbXknLFxuICAgICAgJ3BhZ2VzL215X3ZpcCcsXG4gICAgICAncGFnZXMvbXlfY29uc2VudCcsXG4gICAgICAncGFnZXMvbXlfcXJjb2RlJyxcbiAgICAgICdwYWdlcy9teV92aXBfdXBkYXRlJyxcbiAgICAgICdwYWdlcy9uZXdzJyxcbiAgICAgICdwYWdlcy9zdGFmZidcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjOTE5MEZGJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBsaXN0OiBbe1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1pbmRleC5wbmcnLFxuICAgICAgICAndGV4dCc6ICfpppbpobUnXG4gICAgICB9LCB7XG4gICAgICAgICdwYWdlUGF0aCc6ICdwYWdlcy9oZWFsdGgnLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1oZWFsdGgucG5nJyxcbiAgICAgICAgJ3RleHQnOiAn5YGl5bq3566h55CGJ1xuICAgICAgfSwge1xuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbXknLFxuICAgICAgICAnaWNvblBhdGgnOiAnLi9hc3NldHMvaW1hZ2VzL3RhYi1teS5wbmcnLFxuICAgICAgICAndGV4dCc6ICfmiJHnmoQnXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgd3guc2V0RW5hYmxlRGVidWcoe1xuICAgICAgZW5hYmxlRGVidWc6IHRydWVcbiAgICB9KVxuICAgIC8vIHd4LnJlTGF1bmNoKHtcbiAgICAvLyAgIHVybDogJ3BhZ2VzL3N0YWZmJ1xuICAgIC8vIH0pXG4gIH1cblxuICBzbGVlcCAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICB9LCBzICogMTAwMClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
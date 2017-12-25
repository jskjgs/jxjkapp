'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageMixin = function (_wepy$mixin) {
  _inherits(PageMixin, _wepy$mixin);

  function PageMixin() {
    _classCallCheck(this, PageMixin);

    return _possibleConstructorReturn(this, (PageMixin.__proto__ || Object.getPrototypeOf(PageMixin)).apply(this, arguments));
  }

  _createClass(PageMixin, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPage().finally(function () {
        wx.stopPullDownRefresh();
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (this.isLastPage === false) {
        console.log(2222);
      }
    }
  }]);

  return PageMixin;
}(_wepy2.default.mixin);

exports.default = PageMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1bGxEb3duUmVmcmVzaC5qcyJdLCJuYW1lcyI6WyJQYWdlTWl4aW4iLCJpbml0UGFnZSIsImZpbmFsbHkiLCJ3eCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJpc0xhc3RQYWdlIiwiY29uc29sZSIsImxvZyIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozt3Q0FDRTtBQUNuQixXQUFLQyxRQUFMLEdBQWdCQyxPQUFoQixDQUF3QixZQUFNO0FBQzVCQyxXQUFHQyxtQkFBSDtBQUNELE9BRkQ7QUFHRDs7O29DQUVnQjtBQUNmLFVBQUksS0FBS0MsVUFBTCxLQUFvQixLQUF4QixFQUErQjtBQUM3QkMsZ0JBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Q7QUFDRjs7OztFQVhvQyxlQUFLQyxLOztrQkFBdkJSLFMiLCJmaWxlIjoicHVsbERvd25SZWZyZXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIG9uUHVsbERvd25SZWZyZXNoICgpIHtcbiAgICB0aGlzLmluaXRQYWdlKCkuZmluYWxseSgoKSA9PiB7XG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9KVxuICB9XG5cbiAgb25SZWFjaEJvdHRvbSAoKSB7XG4gICAgaWYgKHRoaXMuaXNMYXN0UGFnZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKDIyMjIpXG4gICAgfVxuICB9XG59XG4iXX0=
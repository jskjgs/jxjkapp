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
  }]);

  return PageMixin;
}(_wepy2.default.mixin);

exports.default = PageMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRQYWdlLmpzIl0sIm5hbWVzIjpbIlBhZ2VNaXhpbiIsImluaXRQYWdlIiwiZmluYWxseSIsInd4Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozt3Q0FDRTtBQUNuQixXQUFLQyxRQUFMLEdBQWdCQyxPQUFoQixDQUF3QixZQUFNO0FBQzVCQyxXQUFHQyxtQkFBSDtBQUNELE9BRkQ7QUFHRDs7OztFQUxvQyxlQUFLQyxLOztrQkFBdkJMLFMiLCJmaWxlIjoiaW5pdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgIHRoaXMuaW5pdFBhZ2UoKS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
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
    key: 'initData',
    value: function initData(reqParams) {
      var _this2 = this;

      if (reqParams) {
        this.reqParams = reqParams;
      } else {
        reqParams = this.reqParams;
      }
      return this.$_request(reqParams).then(function (content) {
        if (!content) {
          _this2.$invoke('CustomPage', 'initPage', {
            noData: true
          });
        } else {
          _this2.$invoke('CustomPage', 'initPage', {
            dataInited: true
          });
        }
        return content;
      }).catch(function () {
        _this2.$invoke('CustomPage', 'initPage', {
          noServer: true
        });
      }).finally(function () {
        _this2.$apply();
      });
    }
  }]);

  return PageMixin;
}(_wepy2.default.mixin);

exports.default = PageMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiXSwibmFtZXMiOlsiUGFnZU1peGluIiwicmVxUGFyYW1zIiwiJF9yZXF1ZXN0IiwidGhlbiIsImNvbnRlbnQiLCIkaW52b2tlIiwibm9EYXRhIiwiZGF0YUluaXRlZCIsImNhdGNoIiwibm9TZXJ2ZXIiLCJmaW5hbGx5IiwiJGFwcGx5IiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OzZCQUNUQyxTLEVBQVc7QUFBQTs7QUFDbkIsVUFBSUEsU0FBSixFQUFlO0FBQ2IsYUFBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRCxPQUZELE1BRU87QUFDTEEsb0JBQVksS0FBS0EsU0FBakI7QUFDRDtBQUNELGFBQU8sS0FBS0MsU0FBTCxDQUFlRCxTQUFmLEVBQTBCRSxJQUExQixDQUErQixtQkFBVztBQUMvQyxZQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGlCQUFLQyxPQUFMLENBQWEsWUFBYixFQUEyQixVQUEzQixFQUF1QztBQUNyQ0Msb0JBQVE7QUFENkIsV0FBdkM7QUFHRCxTQUpELE1BSU87QUFDTCxpQkFBS0QsT0FBTCxDQUFhLFlBQWIsRUFBMkIsVUFBM0IsRUFBdUM7QUFDckNFLHdCQUFZO0FBRHlCLFdBQXZDO0FBR0Q7QUFDRCxlQUFPSCxPQUFQO0FBQ0QsT0FYTSxFQVdKSSxLQVhJLENBV0UsWUFBTTtBQUNiLGVBQUtILE9BQUwsQ0FBYSxZQUFiLEVBQTJCLFVBQTNCLEVBQXVDO0FBQ3JDSSxvQkFBVTtBQUQyQixTQUF2QztBQUdELE9BZk0sRUFlSkMsT0FmSSxDQWVJLFlBQU07QUFDZixlQUFLQyxNQUFMO0FBQ0QsT0FqQk0sQ0FBUDtBQWtCRDs7OztFQXpCb0MsZUFBS0MsSzs7a0JBQXZCWixTIiwiZmlsZSI6InBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlTWl4aW4gZXh0ZW5kcyB3ZXB5Lm1peGluIHtcbiAgaW5pdERhdGEgKHJlcVBhcmFtcykge1xuICAgIGlmIChyZXFQYXJhbXMpIHtcbiAgICAgIHRoaXMucmVxUGFyYW1zID0gcmVxUGFyYW1zXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcVBhcmFtcyA9IHRoaXMucmVxUGFyYW1zXG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRfcmVxdWVzdChyZXFQYXJhbXMpLnRoZW4oY29udGVudCA9PiB7XG4gICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdDdXN0b21QYWdlJywgJ2luaXRQYWdlJywge1xuICAgICAgICAgIG5vRGF0YTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdDdXN0b21QYWdlJywgJ2luaXRQYWdlJywge1xuICAgICAgICAgIGRhdGFJbml0ZWQ6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50XG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgdGhpcy4kaW52b2tlKCdDdXN0b21QYWdlJywgJ2luaXRQYWdlJywge1xuICAgICAgICBub1NlcnZlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9KVxuICB9XG59XG4iXX0=
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

var CustomPage = function (_wepy$component) {
  _inherits(CustomPage, _wepy$component);

  function CustomPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomPage.__proto__ || Object.getPrototypeOf(CustomPage)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.mixins = [], _this.data = {
      dataInited: false,
      noData: false,
      noServer: false
    }, _this.computed = {}, _this.methods = {
      initPage: function initPage(statusObj) {
        for (var key in statusObj) {
          this[key] = statusObj[key];
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomPage, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return CustomPage;
}(_wepy2.default.component);

exports.default = CustomPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbVBhZ2UuanMiXSwibmFtZXMiOlsiQ3VzdG9tUGFnZSIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiZGF0YUluaXRlZCIsIm5vRGF0YSIsIm5vU2VydmVyIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaW5pdFBhZ2UiLCJzdGF0dXNPYmoiLCJrZXkiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLEtBRFA7QUFFTEMsY0FBUSxLQUZIO0FBR0xDLGdCQUFVO0FBSEwsSyxRQU1QQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDRUMsU0FERixFQUNhO0FBQ25CLGFBQUssSUFBSUMsR0FBVCxJQUFnQkQsU0FBaEIsRUFBMkI7QUFDekIsZUFBS0MsR0FBTCxJQUFZRCxVQUFVQyxHQUFWLENBQVo7QUFDRDtBQUNGO0FBTE8sSyxRQVFWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQTNCcUMsZUFBS0MsUzs7a0JBQXhCYixVIiwiZmlsZSI6ImN1c3RvbVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21QYWdlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBkYXRhSW5pdGVkOiBmYWxzZSxcbiAgICAgIG5vRGF0YTogZmFsc2UsXG4gICAgICBub1NlcnZlcjogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaW5pdFBhZ2UgKHN0YXR1c09iaikge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3RhdHVzT2JqKSB7XG4gICAgICAgICAgdGhpc1trZXldID0gc3RhdHVzT2JqW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
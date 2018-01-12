'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomPage.__proto__ || Object.getPrototypeOf(CustomPage)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      isLastPage: {
        type: Boolean,
        default: false
      }
    }, _this.data = {
      dataInited: false,
      noData: false,
      noServer: false
    }, _this.methods = {
      // 初始化页面状态：无数据、网络故障、数据初始化完成
      initPage: function initPage(statusObj) {
        for (var key in statusObj) {
          this[key] = statusObj[key];
        }
        this.$apply();
      },
      refreshPage: function refreshPage() {
        this.$parent.initPageData();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return CustomPage;
}(_wepy2.default.component);

exports.default = CustomPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbVBhZ2UuanMiXSwibmFtZXMiOlsiQ3VzdG9tUGFnZSIsInByb3BzIiwiaXNMYXN0UGFnZSIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsImRhdGEiLCJkYXRhSW5pdGVkIiwibm9EYXRhIiwibm9TZXJ2ZXIiLCJtZXRob2RzIiwiaW5pdFBhZ2UiLCJzdGF0dXNPYmoiLCJrZXkiLCIkYXBwbHkiLCJyZWZyZXNoUGFnZSIsIiRwYXJlbnQiLCJpbml0UGFnZURhdGEiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxjQUFNQyxPQURJO0FBRVZDLGlCQUFTO0FBRkM7QUFETixLLFFBT1JDLEksR0FBTztBQUNMQyxrQkFBWSxLQURQO0FBRUxDLGNBQVEsS0FGSDtBQUdMQyxnQkFBVTtBQUhMLEssUUFNUEMsTyxHQUFVO0FBQ1I7QUFDQUMsY0FGUSxvQkFFRUMsU0FGRixFQUVhO0FBQ25CLGFBQUssSUFBSUMsR0FBVCxJQUFnQkQsU0FBaEIsRUFBMkI7QUFDekIsZUFBS0MsR0FBTCxJQUFZRCxVQUFVQyxHQUFWLENBQVo7QUFDRDtBQUNELGFBQUtDLE1BQUw7QUFDRCxPQVBPO0FBUVJDLGlCQVJRLHlCQVFPO0FBQ2IsYUFBS0MsT0FBTCxDQUFhQyxZQUFiO0FBQ0Q7QUFWTyxLOzs7O0VBZDRCLGVBQUtDLFM7O2tCQUF4QmxCLFUiLCJmaWxlIjoiY3VzdG9tUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBhZ2UgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBpc0xhc3RQYWdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGRhdGFJbml0ZWQ6IGZhbHNlLFxuICAgICAgbm9EYXRhOiBmYWxzZSxcbiAgICAgIG5vU2VydmVyOiBmYWxzZVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDliJ3lp4vljJbpobXpnaLnirbmgIHvvJrml6DmlbDmja7jgIHnvZHnu5zmlYXpmpzjgIHmlbDmja7liJ3lp4vljJblrozmiJBcbiAgICAgIGluaXRQYWdlIChzdGF0dXNPYmopIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHN0YXR1c09iaikge1xuICAgICAgICAgIHRoaXNba2V5XSA9IHN0YXR1c09ialtrZXldXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHJlZnJlc2hQYWdlICgpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LmluaXRQYWdlRGF0YSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=
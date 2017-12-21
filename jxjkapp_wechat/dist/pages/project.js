'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ''
    }, _this.components = {}, _this.mixins = [], _this.data = {
      listData: Array.from({ length: 7 }).map(function (item) {
        return {
          bg: '../assets/images/demo.png' && ''
        };
      })
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      // 当前的页面路由对象
      var route = this.getCurrentPages().slice(-1)[0];
      wx.setNavigationBarTitle({
        title: route.options.target
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/project'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJsaXN0RGF0YSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsImJnIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwicm91dGUiLCJnZXRDdXJyZW50UGFnZXMiLCJzbGljZSIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJvcHRpb25zIiwidGFyZ2V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVQyxNQUFNQyxJQUFOLENBQVcsRUFBQ0MsUUFBUSxDQUFULEVBQVgsRUFBd0JDLEdBQXhCLENBQTRCO0FBQUEsZUFBUztBQUM3Q0MsY0FBSSwrQkFBK0I7QUFEVSxTQUFUO0FBQUEsT0FBNUI7QUFETCxLLFFBTVBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQO0FBQ0EsVUFBTUMsUUFBUSxLQUFLQyxlQUFMLEdBQXVCQyxLQUF2QixDQUE2QixDQUFDLENBQTlCLEVBQWlDLENBQWpDLENBQWQ7QUFDQUMsU0FBR0MscUJBQUgsQ0FBeUI7QUFDdkJDLGVBQU9MLE1BQU1NLE9BQU4sQ0FBY0M7QUFERSxPQUF6QjtBQUdEOzs7O0VBN0JnQyxlQUFLQyxJOztrQkFBbkJ2QixLIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3REYXRhOiBBcnJheS5mcm9tKHtsZW5ndGg6IDd9KS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBiZzogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnICYmICcnXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAvLyDlvZPliY3nmoTpobXpnaLot6/nlLHlr7nosaFcbiAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5nZXRDdXJyZW50UGFnZXMoKS5zbGljZSgtMSlbMF1cbiAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgIHRpdGxlOiByb3V0ZS5vcHRpb25zLnRhcmdldFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==
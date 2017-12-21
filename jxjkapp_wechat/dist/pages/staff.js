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
      navigationBarTitleText: '医护人员'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      searchParams: {
        searchWord: ''
      },
      onSearch: false, // 表示是否在搜索输入中
      filterVisible: false, // 筛选组件显示
      listData: [{
        avatar: '../assets/images/demo.png',
        name: '邓雪梅',
        intro: '主管，高级保健按摩师、高级美容师、高级护理主管，高级保健按摩师、高级美容师、高级护理'
      }, {
        avatar: '../assets/images/demo.png',
        name: '邓雪梅',
        intro: '主管，高级保健按摩师、高级美容师、高级护理主管，高级保健按摩师、高级美容师、高级护理'
      }, {
        avatar: '../assets/images/demo.png',
        name: '邓雪梅',
        intro: '主管，高级保健按摩师、高级美容师、高级护理主管，高级保健按摩师、高级美容师、高级护理'
      }]
    }, _this.computed = {}, _this.watch = {
      searchParams: function searchParams(newVal, oldVal) {}
    }, _this.methods = {
      handleSearchFocus: function handleSearchFocus() {
        this.onSearch = true;
      },
      handleSearchBlur: function handleSearchBlur() {
        this.onSearch = false;
      },
      openFilterBox: function openFilterBox() {
        this.filterVisible = true;
      },
      resetFilters: function resetFilters() {},
      submitFilters: function submitFilters() {
        this.filterVisible = false;
      },
      handleSearch: function handleSearch(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        this.searchParams.searchWord = value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/staff'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoV29yZCIsIm9uU2VhcmNoIiwiZmlsdGVyVmlzaWJsZSIsImxpc3REYXRhIiwiYXZhdGFyIiwibmFtZSIsImludHJvIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm5ld1ZhbCIsIm9sZFZhbCIsIm1ldGhvZHMiLCJoYW5kbGVTZWFyY2hGb2N1cyIsImhhbmRsZVNlYXJjaEJsdXIiLCJvcGVuRmlsdGVyQm94IiwicmVzZXRGaWx0ZXJzIiwic3VibWl0RmlsdGVycyIsImhhbmRsZVNlYXJjaCIsImRldGFpbCIsInZhbHVlIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLG9CQUFjO0FBQ1pDLG9CQUFZO0FBREEsT0FEVDtBQUlMQyxnQkFBVSxLQUpMLEVBSVk7QUFDakJDLHFCQUFlLEtBTFYsRUFLaUI7QUFDdEJDLGdCQUFVLENBQUM7QUFDVEMsZ0JBQVEsMkJBREM7QUFFVEMsY0FBTSxLQUZHO0FBR1RDLGVBQU87QUFIRSxPQUFELEVBSVA7QUFDREYsZ0JBQVEsMkJBRFA7QUFFREMsY0FBTSxLQUZMO0FBR0RDLGVBQU87QUFITixPQUpPLEVBUVA7QUFDREYsZ0JBQVEsMkJBRFA7QUFFREMsY0FBTSxLQUZMO0FBR0RDLGVBQU87QUFITixPQVJPO0FBTkwsSyxRQXFCUEMsUSxHQUFXLEUsUUFHWEMsSyxHQUFRO0FBQ05ULGtCQURNLHdCQUNRVSxNQURSLEVBQ2dCQyxNQURoQixFQUN3QixDQUM3QjtBQUZLLEssUUFLUkMsTyxHQUFVO0FBQ1JDLHVCQURRLCtCQUNhO0FBQ25CLGFBQUtYLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRCxPQUhPO0FBSVJZLHNCQUpRLDhCQUlZO0FBQ2xCLGFBQUtaLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRCxPQU5PO0FBT1JhLG1CQVBRLDJCQU9TO0FBQ2YsYUFBS1osYUFBTCxHQUFxQixJQUFyQjtBQUNELE9BVE87QUFVUmEsa0JBVlEsMEJBVVEsQ0FDZixDQVhPO0FBWVJDLG1CQVpRLDJCQVlTO0FBQ2YsYUFBS2QsYUFBTCxHQUFxQixLQUFyQjtBQUNELE9BZE87QUFlUmUsa0JBZlEsK0JBZWtCO0FBQUEsWUFBVkMsTUFBVSxTQUFWQSxNQUFVOztBQUN4QixZQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNBLGFBQUtwQixZQUFMLENBQWtCQyxVQUFsQixHQUErQm1CLEtBQS9CO0FBQ0Q7QUFsQk8sSyxRQXFCVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUEvRGdDLGVBQUtDLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoic3RhZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WMu+aKpOS6uuWRmCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHNlYXJjaFBhcmFtczoge1xuICAgICAgICBzZWFyY2hXb3JkOiAnJ1xuICAgICAgfSxcbiAgICAgIG9uU2VhcmNoOiBmYWxzZSwgLy8g6KGo56S65piv5ZCm5Zyo5pCc57Si6L6T5YWl5LitXG4gICAgICBmaWx0ZXJWaXNpYmxlOiBmYWxzZSwgLy8g562b6YCJ57uE5Lu25pi+56S6XG4gICAgICBsaXN0RGF0YTogW3tcbiAgICAgICAgYXZhdGFyOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgIG5hbWU6ICfpgpPpm6rmooUnLFxuICAgICAgICBpbnRybzogJ+S4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhuS4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhidcbiAgICAgIH0sIHtcbiAgICAgICAgYXZhdGFyOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgIG5hbWU6ICfpgpPpm6rmooUnLFxuICAgICAgICBpbnRybzogJ+S4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhuS4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhidcbiAgICAgIH0sIHtcbiAgICAgICAgYXZhdGFyOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgIG5hbWU6ICfpgpPpm6rmooUnLFxuICAgICAgICBpbnRybzogJ+S4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhuS4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhidcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBzZWFyY2hQYXJhbXMgKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVNlYXJjaEZvY3VzICgpIHtcbiAgICAgICAgdGhpcy5vblNlYXJjaCA9IHRydWVcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTZWFyY2hCbHVyICgpIHtcbiAgICAgICAgdGhpcy5vblNlYXJjaCA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgb3BlbkZpbHRlckJveCAoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IHRydWVcbiAgICAgIH0sXG4gICAgICByZXNldEZpbHRlcnMgKCkge1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdEZpbHRlcnMgKCkge1xuICAgICAgICB0aGlzLmZpbHRlclZpc2libGUgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZVNlYXJjaCAoeyBkZXRhaWwgfSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5zZWFyY2hXb3JkID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
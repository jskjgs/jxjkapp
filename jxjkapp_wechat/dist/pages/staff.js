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
      filterVisible: false,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoV29yZCIsImZpbHRlclZpc2libGUiLCJsaXN0RGF0YSIsImF2YXRhciIsIm5hbWUiLCJpbnRybyIsImNvbXB1dGVkIiwid2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiLCJtZXRob2RzIiwib3BlbkZpbHRlckJveCIsInJlc2V0RmlsdGVycyIsInN1Ym1pdEZpbHRlcnMiLCJoYW5kbGVTZWFyY2giLCJkZXRhaWwiLCJ2YWx1ZSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxvQkFBYztBQUNaQyxvQkFBWTtBQURBLE9BRFQ7QUFJTEMscUJBQWUsS0FKVjtBQUtMQyxnQkFBVSxDQUFDO0FBQ1RDLGdCQUFRLDJCQURDO0FBRVRDLGNBQU0sS0FGRztBQUdUQyxlQUFPO0FBSEUsT0FBRCxFQUlQO0FBQ0RGLGdCQUFRLDJCQURQO0FBRURDLGNBQU0sS0FGTDtBQUdEQyxlQUFPO0FBSE4sT0FKTyxFQVFQO0FBQ0RGLGdCQUFRLDJCQURQO0FBRURDLGNBQU0sS0FGTDtBQUdEQyxlQUFPO0FBSE4sT0FSTztBQUxMLEssUUFvQlBDLFEsR0FBVyxFLFFBR1hDLEssR0FBUTtBQUNOUixrQkFETSx3QkFDUVMsTUFEUixFQUNnQkMsTUFEaEIsRUFDd0IsQ0FDN0I7QUFGSyxLLFFBS1JDLE8sR0FBVTtBQUNSQyxtQkFEUSwyQkFDUztBQUNmLGFBQUtWLGFBQUwsR0FBcUIsSUFBckI7QUFDRCxPQUhPO0FBSVJXLGtCQUpRLDBCQUlRLENBQ2YsQ0FMTztBQU1SQyxtQkFOUSwyQkFNUztBQUNmLGFBQUtaLGFBQUwsR0FBcUIsS0FBckI7QUFDRCxPQVJPO0FBU1JhLGtCQVRRLCtCQVNrQjtBQUFBLFlBQVZDLE1BQVUsU0FBVkEsTUFBVTs7QUFDeEIsWUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxhQUFLakIsWUFBTCxDQUFrQkMsVUFBbEIsR0FBK0JnQixLQUEvQjtBQUNEO0FBWk8sSyxRQWVWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQXhEZ0MsZUFBS0MsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJzdGFmZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yy75oqk5Lq65ZGYJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgc2VhcmNoUGFyYW1zOiB7XG4gICAgICAgIHNlYXJjaFdvcmQ6ICcnXG4gICAgICB9LFxuICAgICAgZmlsdGVyVmlzaWJsZTogZmFsc2UsXG4gICAgICBsaXN0RGF0YTogW3tcbiAgICAgICAgYXZhdGFyOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgIG5hbWU6ICfpgpPpm6rmooUnLFxuICAgICAgICBpbnRybzogJ+S4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhuS4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhidcbiAgICAgIH0sIHtcbiAgICAgICAgYXZhdGFyOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgIG5hbWU6ICfpgpPpm6rmooUnLFxuICAgICAgICBpbnRybzogJ+S4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhuS4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhidcbiAgICAgIH0sIHtcbiAgICAgICAgYXZhdGFyOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgIG5hbWU6ICfpgpPpm6rmooUnLFxuICAgICAgICBpbnRybzogJ+S4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhuS4u+euoe+8jOmrmOe6p+S/neWBpeaMieaRqeW4iOOAgemrmOe6p+e+juWuueW4iOOAgemrmOe6p+aKpOeQhidcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBzZWFyY2hQYXJhbXMgKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9wZW5GaWx0ZXJCb3ggKCkge1xuICAgICAgICB0aGlzLmZpbHRlclZpc2libGUgPSB0cnVlXG4gICAgICB9LFxuICAgICAgcmVzZXRGaWx0ZXJzICgpIHtcbiAgICAgIH0sXG4gICAgICBzdWJtaXRGaWx0ZXJzICgpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTZWFyY2ggKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2VhcmNoV29yZCA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
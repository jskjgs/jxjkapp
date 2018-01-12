'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPage = require('./../components/customPage.js');

var _customPage2 = _interopRequireDefault(_customPage);

var _listPage = require('./../mixins/listPage.js');

var _listPage2 = _interopRequireDefault(_listPage);

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
      navigationBarTitleText: '新闻中心',
      enablePullDownRefresh: true
    }, _this.$repeat = {}, _this.$props = { "CustomPage": { "xmlns:v-bind": "", "v-bind:isLastPage.sync": "isLastPage" } }, _this.$events = {}, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [_listPage2.default], _this.data = {}, _this.computed = {}, _this.methods = {
      handleNewsTap: function handleNewsTap(id) {
        wx.navigateTo({
          url: '/pages/news_detail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.initPageData();
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this2 = this;

      this.initData({
        url: '/news/all',
        method: 'POST',
        data: {
          pageSize: 5
        }
      }, function (listItem, res) {
        return {
          id: listItem.id,
          photo: (listItem.images || '').split(',')[0],
          title: listItem.title,
          des: listItem.content,
          date: _this2.$_convertDate(listItem.createDate)
        };
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/news'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ3VzdG9tUGFnZSIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVOZXdzVGFwIiwiaWQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbml0UGFnZURhdGEiLCJpbml0RGF0YSIsIm1ldGhvZCIsInBhZ2VTaXplIiwibGlzdEl0ZW0iLCJyZXMiLCJwaG90byIsImltYWdlcyIsInNwbGl0IiwidGl0bGUiLCJkZXMiLCJjb250ZW50IiwiZGF0ZSIsIiRfY29udmVydERhdGUiLCJjcmVhdGVEYXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFlBQTVDLEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxvQixRQUVUQyxJLEdBQU8sRSxRQUdQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsbUJBRFEseUJBQ09DLEVBRFAsRUFDVztBQUNqQkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLDBDQUE4Qkg7QUFEbEIsU0FBZDtBQUdEO0FBTE8sSzs7Ozs7NkJBUUE7QUFDUixXQUFLSSxZQUFMO0FBQ0Q7OzttQ0FFZTtBQUFBOztBQUNkLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixhQUFLLFdBRE87QUFFWkcsZ0JBQVEsTUFGSTtBQUdaVixjQUFNO0FBQ0pXLG9CQUFVO0FBRE47QUFITSxPQUFkLEVBTUcsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYLEVBQW1CO0FBQ3BCLGVBQU87QUFDTFQsY0FBSVEsU0FBU1IsRUFEUjtBQUVMVSxpQkFBTyxDQUFDRixTQUFTRyxNQUFULElBQW1CLEVBQXBCLEVBQXdCQyxLQUF4QixDQUE4QixHQUE5QixFQUFtQyxDQUFuQyxDQUZGO0FBR0xDLGlCQUFPTCxTQUFTSyxLQUhYO0FBSUxDLGVBQUtOLFNBQVNPLE9BSlQ7QUFLTEMsZ0JBQU0sT0FBS0MsYUFBTCxDQUFtQlQsU0FBU1UsVUFBNUI7QUFMRCxTQUFQO0FBT0QsT0FkRDtBQWVEOzs7O0VBaERnQyxlQUFLQyxJOztrQkFBbkJqQyxLIiwiZmlsZSI6Im5ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgXG4gIGltcG9ydCBDdXN0b21QYWdlIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b21QYWdlJ1xuICBpbXBvcnQgcGFnZU1peGluIGZyb20gJ0AvbWl4aW5zL2xpc3RQYWdlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paw6Ze75Lit5b+DJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQ3VzdG9tUGFnZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aXNMYXN0UGFnZS5zeW5jXCI6XCJpc0xhc3RQYWdlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIEN1c3RvbVBhZ2VcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbcGFnZU1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlTmV3c1RhcCAoaWQpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL25ld3NfZGV0YWlsP2lkPSR7aWR9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgaW5pdFBhZ2VEYXRhICgpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoe1xuICAgICAgICB1cmw6ICcvbmV3cy9hbGwnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VTaXplOiA1XG4gICAgICAgIH1cbiAgICAgIH0sIChsaXN0SXRlbSwgcmVzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGxpc3RJdGVtLmlkLFxuICAgICAgICAgIHBob3RvOiAobGlzdEl0ZW0uaW1hZ2VzIHx8ICcnKS5zcGxpdCgnLCcpWzBdLFxuICAgICAgICAgIHRpdGxlOiBsaXN0SXRlbS50aXRsZSxcbiAgICAgICAgICBkZXM6IGxpc3RJdGVtLmNvbnRlbnQsXG4gICAgICAgICAgZGF0ZTogdGhpcy4kX2NvbnZlcnREYXRlKGxpc3RJdGVtLmNyZWF0ZURhdGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=
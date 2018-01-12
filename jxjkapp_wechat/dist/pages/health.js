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

var orderStatusDict = {
  'finish': {
    text: '已完成',
    color: '#2FC660'
  },
  'inUse': {
    text: '使用中',
    color: '#FFB400'
  }
};

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
      navigationBarTitleText: '健康管理',
      enablePullDownRefresh: true
    }, _this.$repeat = {}, _this.$props = { "CustomPage": { "xmlns:v-bind": "", "v-bind:isLastPage.sync": "isLastPage" } }, _this.$events = {}, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [_listPage2.default], _this.data = {
      orderStatusDict: orderStatusDict
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
        url: '/order/query',
        method: 'POST',
        data: {
          pageSize: 5
        }
      }, function (listItem, res) {
        var hospOrderProductList = listItem.hospOrderProductList || [];
        var hospOrderProduct = hospOrderProductList[0] || {};
        var skuData = hospOrderProduct.hospProductSku || {};
        return {
          id: listItem.id,
          image: skuData.images,
          date: _this2.$_convertDate(listItem.createDate),
          hospital: '医院名',
          project: skuData.name,
          num: 10,
          total: skuData.serviceQuantity,
          status: 'inUse',
          isChild: false
        };
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC5qcyJdLCJuYW1lcyI6WyJvcmRlclN0YXR1c0RpY3QiLCJ0ZXh0IiwiY29sb3IiLCJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDdXN0b21QYWdlIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsImluaXRQYWdlRGF0YSIsImluaXREYXRhIiwidXJsIiwibWV0aG9kIiwicGFnZVNpemUiLCJsaXN0SXRlbSIsInJlcyIsImhvc3BPcmRlclByb2R1Y3RMaXN0IiwiaG9zcE9yZGVyUHJvZHVjdCIsInNrdURhdGEiLCJob3NwUHJvZHVjdFNrdSIsImlkIiwiaW1hZ2UiLCJpbWFnZXMiLCJkYXRlIiwiJF9jb252ZXJ0RGF0ZSIsImNyZWF0ZURhdGUiLCJob3NwaXRhbCIsInByb2plY3QiLCJuYW1lIiwibnVtIiwidG90YWwiLCJzZXJ2aWNlUXVhbnRpdHkiLCJzdGF0dXMiLCJpc0NoaWxkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0I7QUFDdEIsWUFBVTtBQUNSQyxVQUFNLEtBREU7QUFFUkMsV0FBTztBQUZDLEdBRFk7QUFLdEIsV0FBUztBQUNQRCxVQUFNLEtBREM7QUFFUEMsV0FBTztBQUZBO0FBTGEsQ0FBeEI7O0lBV3FCQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDBCQUF5QixZQUE1QyxFQUFkLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxNLEdBQVMsb0IsUUFFVEMsSSxHQUFPO0FBQ0xiO0FBREssSyxRQUlQYyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFDUCxXQUFLQyxZQUFMO0FBQ0Q7OzttQ0FFZTtBQUFBOztBQUNkLFdBQUtDLFFBQUwsQ0FBYztBQUNaQyxhQUFLLGNBRE87QUFFWkMsZ0JBQVEsTUFGSTtBQUdaUCxjQUFNO0FBQ0pRLG9CQUFVO0FBRE47QUFITSxPQUFkLEVBTUcsVUFBQ0MsUUFBRCxFQUFXQyxHQUFYLEVBQW1CO0FBQ3BCLFlBQU1DLHVCQUF1QkYsU0FBU0Usb0JBQVQsSUFBaUMsRUFBOUQ7QUFDQSxZQUFNQyxtQkFBb0JELHFCQUFxQixDQUFyQixLQUEyQixFQUFyRDtBQUNBLFlBQU1FLFVBQVVELGlCQUFpQkUsY0FBakIsSUFBbUMsRUFBbkQ7QUFDQSxlQUFPO0FBQ0xDLGNBQUlOLFNBQVNNLEVBRFI7QUFFTEMsaUJBQU9ILFFBQVFJLE1BRlY7QUFHTEMsZ0JBQU0sT0FBS0MsYUFBTCxDQUFtQlYsU0FBU1csVUFBNUIsQ0FIRDtBQUlMQyxvQkFBVSxLQUpMO0FBS0xDLG1CQUFTVCxRQUFRVSxJQUxaO0FBTUxDLGVBQUssRUFOQTtBQU9MQyxpQkFBT1osUUFBUWEsZUFQVjtBQVFMQyxrQkFBUSxPQVJIO0FBU0xDLG1CQUFTO0FBVEosU0FBUDtBQVdELE9BckJEO0FBc0JEOzs7O0VBdERnQyxlQUFLQyxJOztrQkFBbkJ2QyxLIiwiZmlsZSI6ImhlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21QYWdlIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b21QYWdlJ1xuICBpbXBvcnQgbGlzdFBhZ2VNaXhpbiBmcm9tICdAL21peGlucy9saXN0UGFnZSdcblxuICBjb25zdCBvcmRlclN0YXR1c0RpY3QgPSB7XG4gICAgJ2ZpbmlzaCc6IHtcbiAgICAgIHRleHQ6ICflt7LlrozmiJAnLFxuICAgICAgY29sb3I6ICcjMkZDNjYwJ1xuICAgIH0sXG4gICAgJ2luVXNlJzoge1xuICAgICAgdGV4dDogJ+S9v+eUqOS4rScsXG4gICAgICBjb2xvcjogJyNGRkI0MDAnXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflgaXlurfnrqHnkIYnLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDdXN0b21QYWdlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppc0xhc3RQYWdlLnN5bmNcIjpcImlzTGFzdFBhZ2VcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ3VzdG9tUGFnZVxuICAgIH1cblxuICAgIG1peGlucyA9IFtsaXN0UGFnZU1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG9yZGVyU3RhdHVzRGljdFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICBpbml0UGFnZURhdGEgKCkge1xuICAgICAgdGhpcy5pbml0RGF0YSh7XG4gICAgICAgIHVybDogJy9vcmRlci9xdWVyeScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGFnZVNpemU6IDVcbiAgICAgICAgfVxuICAgICAgfSwgKGxpc3RJdGVtLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgaG9zcE9yZGVyUHJvZHVjdExpc3QgPSBsaXN0SXRlbS5ob3NwT3JkZXJQcm9kdWN0TGlzdCB8fCBbXVxuICAgICAgICBjb25zdCBob3NwT3JkZXJQcm9kdWN0ID0gKGhvc3BPcmRlclByb2R1Y3RMaXN0WzBdIHx8IHt9KVxuICAgICAgICBjb25zdCBza3VEYXRhID0gaG9zcE9yZGVyUHJvZHVjdC5ob3NwUHJvZHVjdFNrdSB8fCB7fVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBsaXN0SXRlbS5pZCxcbiAgICAgICAgICBpbWFnZTogc2t1RGF0YS5pbWFnZXMsXG4gICAgICAgICAgZGF0ZTogdGhpcy4kX2NvbnZlcnREYXRlKGxpc3RJdGVtLmNyZWF0ZURhdGUpLFxuICAgICAgICAgIGhvc3BpdGFsOiAn5Yy76Zmi5ZCNJyxcbiAgICAgICAgICBwcm9qZWN0OiBza3VEYXRhLm5hbWUsXG4gICAgICAgICAgbnVtOiAxMCxcbiAgICAgICAgICB0b3RhbDogc2t1RGF0YS5zZXJ2aWNlUXVhbnRpdHksXG4gICAgICAgICAgc3RhdHVzOiAnaW5Vc2UnLFxuICAgICAgICAgIGlzQ2hpbGQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=
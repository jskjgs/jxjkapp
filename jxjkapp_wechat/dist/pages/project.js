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
      navigationBarTitleText: '',
      enablePullDownRefresh: true
    }, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [_listPage2.default], _this.data = {
      typeId: '',
      listData: [] /* Array.from({length: 7}).map(item => ({
                   bg: '../assets/images/demo.png' && ''
                   })) */
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var type = _ref2.type,
          typeId = _ref2.typeId;

      wx.setNavigationBarTitle({
        title: type
      });
      this.typeId = typeId;
      this.initPageData();
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      this.getList();
    }
  }, {
    key: 'getList',
    value: function getList(params) {
      this.initData({
        url: '/product/query',
        method: 'POST',
        data: Object.assign({}, params, {
          pageSize: 10,
          productTypeId: this.typeId
        })
      }, function (listItem, res) {
        return {
          bg: listItem.images,
          name: listItem.name,
          description: listItem.description,
          id: listItem.id
        };
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/project'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiY29tcG9uZW50cyIsIkN1c3RvbVBhZ2UiLCJtaXhpbnMiLCJkYXRhIiwidHlwZUlkIiwibGlzdERhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJ0eXBlIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsImluaXRQYWdlRGF0YSIsImdldExpc3QiLCJwYXJhbXMiLCJpbml0RGF0YSIsInVybCIsIm1ldGhvZCIsIk9iamVjdCIsImFzc2lnbiIsInBhZ2VTaXplIiwicHJvZHVjdFR5cGVJZCIsImxpc3RJdGVtIiwicmVzIiwiYmciLCJpbWFnZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsRUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsb0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxnQkFBVSxFQUZMLENBRVE7OztBQUZSLEssUUFPUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7O2tDQUdnQjtBQUFBLFVBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxVQUFWTCxNQUFVLFNBQVZBLE1BQVU7O0FBQ3ZCTSxTQUFHQyxxQkFBSCxDQUF5QjtBQUN2QkMsZUFBT0g7QUFEZ0IsT0FBekI7QUFHQSxXQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLUyxZQUFMO0FBQ0Q7OzttQ0FFZTtBQUNkLFdBQUtDLE9BQUw7QUFDRDs7OzRCQUVRQyxNLEVBQVE7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWkMsYUFBSyxnQkFETztBQUVaQyxnQkFBUSxNQUZJO0FBR1pmLGNBQU1nQixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsTUFBbEIsRUFBMEI7QUFDOUJNLG9CQUFVLEVBRG9CO0FBRTlCQyx5QkFBZSxLQUFLbEI7QUFGVSxTQUExQjtBQUhNLE9BQWQsRUFPRyxVQUFDbUIsUUFBRCxFQUFXQyxHQUFYLEVBQW1CO0FBQ3BCLGVBQU87QUFDTEMsY0FBSUYsU0FBU0csTUFEUjtBQUVMQyxnQkFBTUosU0FBU0ksSUFGVjtBQUdMQyx1QkFBYUwsU0FBU0ssV0FIakI7QUFJTEMsY0FBSU4sU0FBU007QUFKUixTQUFQO0FBTUQsT0FkRDtBQWVEOzs7O0VBdERnQyxlQUFLQyxJOztrQkFBbkJsQyxLIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgQ3VzdG9tUGFnZSBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tUGFnZSdcbiAgaW1wb3J0IHBhZ2VNaXhpbiBmcm9tICdAL21peGlucy9saXN0UGFnZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJycsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIEN1c3RvbVBhZ2VcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbcGFnZU1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHR5cGVJZDogJycsXG4gICAgICBsaXN0RGF0YTogW10gLyogQXJyYXkuZnJvbSh7bGVuZ3RoOiA3fSkubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgYmc6ICcuLi9hc3NldHMvaW1hZ2VzL2RlbW8ucG5nJyAmJiAnJ1xuICAgICAgfSkpICovXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKHsgdHlwZSwgdHlwZUlkIH0pIHtcbiAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgIHRpdGxlOiB0eXBlXG4gICAgICB9KVxuICAgICAgdGhpcy50eXBlSWQgPSB0eXBlSWRcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICBpbml0UGFnZURhdGEgKCkge1xuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG5cbiAgICBnZXRMaXN0IChwYXJhbXMpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoe1xuICAgICAgICB1cmw6ICcvcHJvZHVjdC9xdWVyeScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICAgICAgcHJvZHVjdFR5cGVJZDogdGhpcy50eXBlSWRcbiAgICAgICAgfSlcbiAgICAgIH0sIChsaXN0SXRlbSwgcmVzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYmc6IGxpc3RJdGVtLmltYWdlcyxcbiAgICAgICAgICBuYW1lOiBsaXN0SXRlbS5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBsaXN0SXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBpZDogbGlzdEl0ZW0uaWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==
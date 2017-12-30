'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPage = require('./../components/customPage.js');

var _customPage2 = _interopRequireDefault(_customPage);

var _page = require('./../mixins/page.js');

var _page2 = _interopRequireDefault(_page);

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
      navigationBarTitleText: '新闻中心'
    }, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [_page2.default], _this.data = {}, _this.computed = {}, _this.methods = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIkN1c3RvbVBhZ2UiLCJtaXhpbnMiLCJkYXRhIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFuZGxlTmV3c1RhcCIsImlkIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaW5pdERhdGEiLCJtZXRob2QiLCJwYWdlU2l6ZSIsImxpc3RJdGVtIiwicmVzIiwicGhvdG8iLCJpbWFnZXMiLCJzcGxpdCIsInRpdGxlIiwiZGVzIiwiY29udGVudCIsImRhdGUiLCIkX2NvbnZlcnREYXRlIiwiY3JlYXRlRGF0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU8sRSxRQUdQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsbUJBRFEseUJBQ09DLEVBRFAsRUFDVztBQUNqQkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLDBDQUE4Qkg7QUFEbEIsU0FBZDtBQUdEO0FBTE8sSzs7Ozs7NkJBUUE7QUFBQTs7QUFDUixXQUFLSSxRQUFMLENBQWM7QUFDWkQsYUFBSyxXQURPO0FBRVpFLGdCQUFRLE1BRkk7QUFHWlQsY0FBTTtBQUNKVSxvQkFBVTtBQUROO0FBSE0sT0FBZCxFQU1HLFVBQUNDLFFBQUQsRUFBV0MsR0FBWCxFQUFtQjtBQUNwQixlQUFPO0FBQ0xSLGNBQUlPLFNBQVNQLEVBRFI7QUFFTFMsaUJBQU8sQ0FBQ0YsU0FBU0csTUFBVCxJQUFtQixFQUFwQixFQUF3QkMsS0FBeEIsQ0FBOEIsR0FBOUIsRUFBbUMsQ0FBbkMsQ0FGRjtBQUdMQyxpQkFBT0wsU0FBU0ssS0FIWDtBQUlMQyxlQUFLTixTQUFTTyxPQUpUO0FBS0xDLGdCQUFNLE9BQUtDLGFBQUwsQ0FBbUJULFNBQVNVLFVBQTVCO0FBTEQsU0FBUDtBQU9ELE9BZEQ7QUFlRDs7OztFQXhDZ0MsZUFBS0MsSTs7a0JBQW5CNUIsSyIsImZpbGUiOiJuZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBDdXN0b21QYWdlIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b21QYWdlJ1xuXG4gIGltcG9ydCBwYWdlTWl4aW4gZnJvbSAnQC9taXhpbnMvcGFnZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOmXu+S4reW/gydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIEN1c3RvbVBhZ2VcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbcGFnZU1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlTmV3c1RhcCAoaWQpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL25ld3NfZGV0YWlsP2lkPSR7aWR9YFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLmluaXREYXRhKHtcbiAgICAgICAgdXJsOiAnL25ld3MvYWxsJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYWdlU2l6ZTogNVxuICAgICAgICB9XG4gICAgICB9LCAobGlzdEl0ZW0sIHJlcykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBsaXN0SXRlbS5pZCxcbiAgICAgICAgICBwaG90bzogKGxpc3RJdGVtLmltYWdlcyB8fCAnJykuc3BsaXQoJywnKVswXSxcbiAgICAgICAgICB0aXRsZTogbGlzdEl0ZW0udGl0bGUsXG4gICAgICAgICAgZGVzOiBsaXN0SXRlbS5jb250ZW50LFxuICAgICAgICAgIGRhdGU6IHRoaXMuJF9jb252ZXJ0RGF0ZShsaXN0SXRlbS5jcmVhdGVEYXRlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19
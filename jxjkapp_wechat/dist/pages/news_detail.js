'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPage = require('./../components/customPage.js');

var _customPage2 = _interopRequireDefault(_customPage);

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
      navigationBarTitleText: '文章详情'
    }, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [], _this.data = {
      title: '',
      date: '',
      content: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var _this2 = this;

      var id = _ref2.id;

      this.$_request({
        url: '/news/',
        data: {
          id: id
        }
      }).then(function (res) {
        var content = res.content || {};
        if (content) {
          _this2.title = content.title;
          _this2.date = _this2.$_convertDate(content.createDate);
          _this2.content = content.content;
          _this2.$apply();
          _this2.$invoke('CustomPage', 'initPage', {
            dataInited: true
          });
        } else {
          _this2.$invoke('CustomPage', 'initPage', {
            noData: true
          });
        }
      }).catch(function () {
        _this2.$invoke('CustomPage', 'initPage', {
          noServer: true
        });
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/news_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NfZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJDdXN0b21QYWdlIiwibWl4aW5zIiwiZGF0YSIsInRpdGxlIiwiZGF0ZSIsImNvbnRlbnQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJpZCIsIiRfcmVxdWVzdCIsInVybCIsInRoZW4iLCJyZXMiLCIkX2NvbnZlcnREYXRlIiwiY3JlYXRlRGF0ZSIsIiRhcHBseSIsIiRpbnZva2UiLCJkYXRhSW5pdGVkIiwibm9EYXRhIiwiY2F0Y2giLCJub1NlcnZlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxlQUFTO0FBSEosSyxRQU1QQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7a0NBR007QUFBQTs7QUFBQSxVQUFOQyxFQUFNLFNBQU5BLEVBQU07O0FBQ2IsV0FBS0MsU0FBTCxDQUFlO0FBQ2JDLHFCQURhO0FBRWJULGNBQU07QUFDSk87QUFESTtBQUZPLE9BQWYsRUFLR0csSUFMSCxDQUtRLGVBQU87QUFDYixZQUFNUCxVQUFVUSxJQUFJUixPQUFKLElBQWUsRUFBL0I7QUFDQSxZQUFJQSxPQUFKLEVBQWE7QUFDWCxpQkFBS0YsS0FBTCxHQUFhRSxRQUFRRixLQUFyQjtBQUNBLGlCQUFLQyxJQUFMLEdBQVksT0FBS1UsYUFBTCxDQUFtQlQsUUFBUVUsVUFBM0IsQ0FBWjtBQUNBLGlCQUFLVixPQUFMLEdBQWVBLFFBQVFBLE9BQXZCO0FBQ0EsaUJBQUtXLE1BQUw7QUFDQSxpQkFBS0MsT0FBTCxDQUFhLFlBQWIsRUFBMkIsVUFBM0IsRUFBdUM7QUFDckNDLHdCQUFZO0FBRHlCLFdBQXZDO0FBR0QsU0FSRCxNQVFPO0FBQ0wsaUJBQUtELE9BQUwsQ0FBYSxZQUFiLEVBQTJCLFVBQTNCLEVBQXVDO0FBQ3JDRSxvQkFBUTtBQUQ2QixXQUF2QztBQUdEO0FBQ0YsT0FwQkQsRUFvQkdDLEtBcEJILENBb0JTLFlBQU07QUFDYixlQUFLSCxPQUFMLENBQWEsWUFBYixFQUEyQixVQUEzQixFQUF1QztBQUNyQ0ksb0JBQVU7QUFEMkIsU0FBdkM7QUFHRCxPQXhCRDtBQXlCRDs7OztFQWxEZ0MsZUFBS0MsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJuZXdzX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21QYWdlIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b21QYWdlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5paH56ug6K+m5oOFJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgQ3VzdG9tUGFnZVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGF0ZTogJycsXG4gICAgICBjb250ZW50OiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7fVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCh7IGlkIH0pIHtcbiAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgL25ld3MvYCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHJlcy5jb250ZW50IHx8IHt9XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgdGhpcy50aXRsZSA9IGNvbnRlbnQudGl0bGVcbiAgICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLiRfY29udmVydERhdGUoY29udGVudC5jcmVhdGVEYXRlKVxuICAgICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQuY29udGVudFxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ0N1c3RvbVBhZ2UnLCAnaW5pdFBhZ2UnLCB7XG4gICAgICAgICAgICBkYXRhSW5pdGVkOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ0N1c3RvbVBhZ2UnLCAnaW5pdFBhZ2UnLCB7XG4gICAgICAgICAgICBub0RhdGE6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuJGludm9rZSgnQ3VzdG9tUGFnZScsICdpbml0UGFnZScsIHtcbiAgICAgICAgICBub1NlcnZlcjogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==
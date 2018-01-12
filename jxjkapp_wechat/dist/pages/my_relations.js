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
      navigationBarTitleText: '绑定就诊人'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      list: []
    }, _this.computed = {}, _this.methods = {
      toRelationInfo: function toRelationInfo(id) {
        wx.navigateTo({
          url: '/pages/my_relation_info' + (id === '' ? '' : '?id=' + id)
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      this.$_request({
        url: '/patientInfo/all',
        method: 'POST',
        data: {
          pageNum: 1,
          pageSize: 10
        }
      }).then(function (content) {
        content = content || {};
        var list = content.list || [];
        _this2.list = list.map(function (item) {
          return {
            name: item.name,
            id: item.id
          };
        });
        _this2.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_relations'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3JlbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b1JlbGF0aW9uSW5mbyIsImlkIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwiJF9yZXF1ZXN0IiwibWV0aG9kIiwicGFnZU51bSIsInBhZ2VTaXplIiwidGhlbiIsImNvbnRlbnQiLCJtYXAiLCJuYW1lIiwiaXRlbSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxZQUFNO0FBREQsSyxRQUlQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsb0JBRFEsMEJBQ1FDLEVBRFIsRUFDWTtBQUNsQkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUssNkJBQTZCSCxPQUFPLEVBQVAsR0FBWSxFQUFaLFlBQXdCQSxFQUFyRDtBQURPLFNBQWQ7QUFHRDtBQUxPLEssUUFRVkksTSxHQUFTLEU7Ozs7OzZCQUdBO0FBQUE7O0FBQ1AsV0FBS0MsU0FBTCxDQUFlO0FBQ2JGLGFBQUssa0JBRFE7QUFFYkcsZ0JBQVEsTUFGSztBQUdiWCxjQUFNO0FBQ0pZLG1CQUFTLENBREw7QUFFSkMsb0JBQVU7QUFGTjtBQUhPLE9BQWYsRUFPR0MsSUFQSCxDQU9RLG1CQUFXO0FBQ2pCQyxrQkFBVUEsV0FBVyxFQUFyQjtBQUNBLFlBQU1kLE9BQU9jLFFBQVFkLElBQVIsSUFBZ0IsRUFBN0I7QUFDQSxlQUFLQSxJQUFMLEdBQVlBLEtBQUtlLEdBQUwsQ0FBUyxnQkFBUTtBQUMzQixpQkFBTztBQUNMQyxrQkFBTUMsS0FBS0QsSUFETjtBQUVMWixnQkFBSWEsS0FBS2I7QUFGSixXQUFQO0FBSUQsU0FMVyxDQUFaO0FBTUEsZUFBS2MsTUFBTDtBQUNELE9BakJEO0FBa0JEOzs7O0VBOUNnQyxlQUFLQyxJOztrQkFBbkJ6QixLIiwiZmlsZSI6Im15X3JlbGF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57uR5a6a5bCx6K+K5Lq6J1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdDogW11cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9SZWxhdGlvbkluZm8gKGlkKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9teV9yZWxhdGlvbl9pbmZvJyArIChpZCA9PT0gJycgPyAnJyA6IGA/aWQ9JHtpZH1gKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgIHVybDogJy9wYXRpZW50SW5mby9hbGwnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VOdW06IDEsXG4gICAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IHt9XG4gICAgICAgIGNvbnN0IGxpc3QgPSBjb250ZW50Lmxpc3QgfHwgW11cbiAgICAgICAgdGhpcy5saXN0ID0gbGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19
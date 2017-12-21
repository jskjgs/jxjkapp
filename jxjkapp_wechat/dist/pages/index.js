'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _chunk3 = require('./../npm/lodash/chunk.js');

var _chunk4 = _interopRequireDefault(_chunk3);

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
      navigationBarTitleText: '首页'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      // 项目分类
      projects: [{
        text: '皮肤美容',
        image: '',
        target: '1'
      }, {
        text: '瑜伽养生',
        image: '',
        target: '2'
      }, {
        text: '中医养生',
        image: '',
        target: '3'
      }, {
        text: '产后康复',
        image: '',
        target: '4'
      }, {
        text: '小儿推拿',
        image: '',
        target: '5'
      }],
      queueNoticeSpread: false,
      queueNotice: ''
    }, _this.computed = {}, _this.methods = {
      handleTapQueueNotice: function handleTapQueueNotice() {
        this.queueNoticeSpread = !this.queueNoticeSpread;
        if (Math.random() > 0.5) {
          this.queueNotice = {
            project: '手法项目排队',
            NO: 36,
            waitNum: 6
          };
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this._chunk([1, 2, 3, 4, 5, 6], 3));
    }
  }, {
    key: '_chunk',
    value: function _chunk() {
      console.log('_chunk(...args)', _chunk4.default.apply(undefined, arguments));
      return _chunk4.default.apply(undefined, arguments);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicHJvamVjdHMiLCJ0ZXh0IiwiaW1hZ2UiLCJ0YXJnZXQiLCJxdWV1ZU5vdGljZVNwcmVhZCIsInF1ZXVlTm90aWNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFuZGxlVGFwUXVldWVOb3RpY2UiLCJNYXRoIiwicmFuZG9tIiwicHJvamVjdCIsIk5PIiwid2FpdE51bSIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJfY2h1bmsiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMO0FBQ0FDLGdCQUFVLENBQUM7QUFDVEMsY0FBTSxNQURHO0FBRVRDLGVBQU8sRUFGRTtBQUdUQyxnQkFBUTtBQUhDLE9BQUQsRUFJUDtBQUNERixjQUFNLE1BREw7QUFFREMsZUFBTyxFQUZOO0FBR0RDLGdCQUFRO0FBSFAsT0FKTyxFQVFQO0FBQ0RGLGNBQU0sTUFETDtBQUVEQyxlQUFPLEVBRk47QUFHREMsZ0JBQVE7QUFIUCxPQVJPLEVBWVA7QUFDREYsY0FBTSxNQURMO0FBRURDLGVBQU8sRUFGTjtBQUdEQyxnQkFBUTtBQUhQLE9BWk8sRUFnQlA7QUFDREYsY0FBTSxNQURMO0FBRURDLGVBQU8sRUFGTjtBQUdEQyxnQkFBUTtBQUhQLE9BaEJPLENBRkw7QUF1QkxDLHlCQUFtQixLQXZCZDtBQXdCTEMsbUJBQWE7QUF4QlIsSyxRQTJCUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLDBCQURRLGtDQUNnQjtBQUN0QixhQUFLSixpQkFBTCxHQUF5QixDQUFDLEtBQUtBLGlCQUEvQjtBQUNBLFlBQUlLLEtBQUtDLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDdkIsZUFBS0wsV0FBTCxHQUFtQjtBQUNqQk0scUJBQVMsUUFEUTtBQUVqQkMsZ0JBQUksRUFGYTtBQUdqQkMscUJBQVM7QUFIUSxXQUFuQjtBQUtEO0FBQ0Y7QUFWTyxLLFFBYVZDLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQQyxjQUFRQyxHQUFSLENBQVksS0FBS0MsTUFBTCxDQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBWixFQUFnQyxDQUFoQyxDQUFaO0FBQ0Q7Ozs2QkFFZ0I7QUFDZkYsY0FBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCLDJDQUEvQjtBQUNBLGFBQU8sMkNBQVA7QUFDRDs7OztFQTlEZ0MsZUFBS0UsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgX2NodW5rIGZyb20gJ2xvZGFzaC9jaHVuaydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIC8vIOmhueebruWIhuexu1xuICAgICAgcHJvamVjdHM6IFt7XG4gICAgICAgIHRleHQ6ICfnmq7ogqTnvo7lrrknLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzEnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfnkZzkvL3lhbvnlJ8nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzInXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfkuK3ljLvlhbvnlJ8nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzMnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfkuqflkI7lurflpI0nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzQnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICflsI/lhL/mjqjmi78nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzUnXG4gICAgICB9XSxcbiAgICAgIHF1ZXVlTm90aWNlU3ByZWFkOiBmYWxzZSxcbiAgICAgIHF1ZXVlTm90aWNlOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVUYXBRdWV1ZU5vdGljZSAoKSB7XG4gICAgICAgIHRoaXMucXVldWVOb3RpY2VTcHJlYWQgPSAhdGhpcy5xdWV1ZU5vdGljZVNwcmVhZFxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRoaXMucXVldWVOb3RpY2UgPSB7XG4gICAgICAgICAgICBwcm9qZWN0OiAn5omL5rOV6aG555uu5o6S6ZifJyxcbiAgICAgICAgICAgIE5POiAzNixcbiAgICAgICAgICAgIHdhaXROdW06IDZcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5fY2h1bmsoWzEsIDIsIDMsIDQsIDUsIDZdLCAzKSlcbiAgICB9XG5cbiAgICBfY2h1bmsgKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfY2h1bmsoLi4uYXJncyknLCBfY2h1bmsoLi4uYXJncykpXG4gICAgICByZXR1cm4gX2NodW5rKC4uLmFyZ3MpXG4gICAgfVxuICB9XG4iXX0=
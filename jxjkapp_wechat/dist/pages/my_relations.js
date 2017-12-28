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
      list: [{
        name: 'zj',
        self: true,
        id: '0'
      }, {
        name: 'paul',
        id: '1'
      }]
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
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_relations'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3JlbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImxpc3QiLCJuYW1lIiwic2VsZiIsImlkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidG9SZWxhdGlvbkluZm8iLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDO0FBQ0xDLGNBQU0sSUFERDtBQUVMQyxjQUFNLElBRkQ7QUFHTEMsWUFBSTtBQUhDLE9BQUQsRUFJSDtBQUNERixjQUFNLE1BREw7QUFFREUsWUFBSTtBQUZILE9BSkc7QUFERCxLLFFBV1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxvQkFEUSwwQkFDUUgsRUFEUixFQUNZO0FBQ2xCSSxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyw2QkFBNkJOLE9BQU8sRUFBUCxHQUFZLEVBQVosWUFBd0JBLEVBQXJEO0FBRE8sU0FBZDtBQUdEO0FBTE8sSyxRQVFWTyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQW5DZ0MsZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJteV9yZWxhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e7keWumuWwseiviuS6uidcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIG5hbWU6ICd6aicsXG4gICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgIGlkOiAnMCdcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ3BhdWwnLFxuICAgICAgICBpZDogJzEnXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1JlbGF0aW9uSW5mbyAoaWQpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL215X3JlbGF0aW9uX2luZm8nICsgKGlkID09PSAnJyA/ICcnIDogYD9pZD0ke2lkfWApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
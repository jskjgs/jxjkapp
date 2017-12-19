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
      }]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicHJvamVjdHMiLCJ0ZXh0IiwiaW1hZ2UiLCJ0YXJnZXQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwiX2NodW5rIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTDtBQUNBQyxnQkFBVSxDQUFDO0FBQ1RDLGNBQU0sTUFERztBQUVUQyxlQUFPLEVBRkU7QUFHVEMsZ0JBQVE7QUFIQyxPQUFELEVBSVA7QUFDREYsY0FBTSxNQURMO0FBRURDLGVBQU8sRUFGTjtBQUdEQyxnQkFBUTtBQUhQLE9BSk8sRUFRUDtBQUNERixjQUFNLE1BREw7QUFFREMsZUFBTyxFQUZOO0FBR0RDLGdCQUFRO0FBSFAsT0FSTyxFQVlQO0FBQ0RGLGNBQU0sTUFETDtBQUVEQyxlQUFPLEVBRk47QUFHREMsZ0JBQVE7QUFIUCxPQVpPLEVBZ0JQO0FBQ0RGLGNBQU0sTUFETDtBQUVEQyxlQUFPLEVBRk47QUFHREMsZ0JBQVE7QUFIUCxPQWhCTztBQUZMLEssUUF5QlBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQQyxjQUFRQyxHQUFSLENBQVksS0FBS0MsTUFBTCxDQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBWixFQUFnQyxDQUFoQyxDQUFaO0FBQ0Q7Ozs2QkFFZ0I7QUFDZkYsY0FBUUMsR0FBUixDQUFZLGlCQUFaLEVBQStCLDJDQUEvQjtBQUNBLGFBQU8sMkNBQVA7QUFDRDs7OztFQWxEZ0MsZUFBS0UsSTs7a0JBQW5CaEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgX2NodW5rIGZyb20gJ2xvZGFzaC9jaHVuaydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIC8vIOmhueebruWIhuexu1xuICAgICAgcHJvamVjdHM6IFt7XG4gICAgICAgIHRleHQ6ICfnmq7ogqTnvo7lrrknLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzEnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfnkZzkvL3lhbvnlJ8nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzInXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfkuK3ljLvlhbvnlJ8nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzMnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfkuqflkI7lurflpI0nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzQnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICflsI/lhL/mjqjmi78nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzUnXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2NodW5rKFsxLCAyLCAzLCA0LCA1LCA2XSwgMykpXG4gICAgfVxuXG4gICAgX2NodW5rICguLi5hcmdzKSB7XG4gICAgICBjb25zb2xlLmxvZygnX2NodW5rKC4uLmFyZ3MpJywgX2NodW5rKC4uLmFyZ3MpKVxuICAgICAgcmV0dXJuIF9jaHVuayguLi5hcmdzKVxuICAgIH1cbiAgfVxuIl19
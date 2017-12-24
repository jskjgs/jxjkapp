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
      this.$_request({
        url: 'http://jishi3.bbdservice.com/'
      }).then(function (res) {
        console.log('res', res);
      });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicHJvamVjdHMiLCJ0ZXh0IiwiaW1hZ2UiLCJ0YXJnZXQiLCJxdWV1ZU5vdGljZVNwcmVhZCIsInF1ZXVlTm90aWNlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFuZGxlVGFwUXVldWVOb3RpY2UiLCJNYXRoIiwicmFuZG9tIiwicHJvamVjdCIsIk5PIiwid2FpdE51bSIsImV2ZW50cyIsIiRfcmVxdWVzdCIsInVybCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwiX2NodW5rIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTDtBQUNBQyxnQkFBVSxDQUFDO0FBQ1RDLGNBQU0sTUFERztBQUVUQyxlQUFPLEVBRkU7QUFHVEMsZ0JBQVE7QUFIQyxPQUFELEVBSVA7QUFDREYsY0FBTSxNQURMO0FBRURDLGVBQU8sRUFGTjtBQUdEQyxnQkFBUTtBQUhQLE9BSk8sRUFRUDtBQUNERixjQUFNLE1BREw7QUFFREMsZUFBTyxFQUZOO0FBR0RDLGdCQUFRO0FBSFAsT0FSTyxFQVlQO0FBQ0RGLGNBQU0sTUFETDtBQUVEQyxlQUFPLEVBRk47QUFHREMsZ0JBQVE7QUFIUCxPQVpPLEVBZ0JQO0FBQ0RGLGNBQU0sTUFETDtBQUVEQyxlQUFPLEVBRk47QUFHREMsZ0JBQVE7QUFIUCxPQWhCTyxDQUZMO0FBdUJMQyx5QkFBbUIsS0F2QmQ7QUF3QkxDLG1CQUFhO0FBeEJSLEssUUEyQlBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQywwQkFEUSxrQ0FDZ0I7QUFDdEIsYUFBS0osaUJBQUwsR0FBeUIsQ0FBQyxLQUFLQSxpQkFBL0I7QUFDQSxZQUFJSyxLQUFLQyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3ZCLGVBQUtMLFdBQUwsR0FBbUI7QUFDakJNLHFCQUFTLFFBRFE7QUFFakJDLGdCQUFJLEVBRmE7QUFHakJDLHFCQUFTO0FBSFEsV0FBbkI7QUFLRDtBQUNGO0FBVk8sSyxRQWFWQyxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFDUCxXQUFLQyxTQUFMLENBQWU7QUFDYkMsYUFBSztBQURRLE9BQWYsRUFFR0MsSUFGSCxDQUVRLGVBQU87QUFDYkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CQyxHQUFuQjtBQUNELE9BSkQ7QUFLQUYsY0FBUUMsR0FBUixDQUFZLEtBQUtFLE1BQUwsQ0FBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQVosRUFBZ0MsQ0FBaEMsQ0FBWjtBQUNEOzs7NkJBRWdCO0FBQ2ZILGNBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQiwyQ0FBL0I7QUFDQSxhQUFPLDJDQUFQO0FBQ0Q7Ozs7RUFuRWdDLGVBQUtHLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IF9jaHVuayBmcm9tICdsb2Rhc2gvY2h1bmsnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICAvLyDpobnnm67liIbnsbtcbiAgICAgIHByb2plY3RzOiBbe1xuICAgICAgICB0ZXh0OiAn55qu6IKk576O5a65JyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0YXJnZXQ6ICcxJ1xuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAn55Gc5Ly95YW755SfJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0YXJnZXQ6ICcyJ1xuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAn5Lit5Yy75YW755SfJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0YXJnZXQ6ICczJ1xuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAn5Lqn5ZCO5bq35aSNJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0YXJnZXQ6ICc0J1xuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAn5bCP5YS/5o6o5ou/JyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICB0YXJnZXQ6ICc1J1xuICAgICAgfV0sXG4gICAgICBxdWV1ZU5vdGljZVNwcmVhZDogZmFsc2UsXG4gICAgICBxdWV1ZU5vdGljZTogJydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlVGFwUXVldWVOb3RpY2UgKCkge1xuICAgICAgICB0aGlzLnF1ZXVlTm90aWNlU3ByZWFkID0gIXRoaXMucXVldWVOb3RpY2VTcHJlYWRcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICB0aGlzLnF1ZXVlTm90aWNlID0ge1xuICAgICAgICAgICAgcHJvamVjdDogJ+aJi+azlemhueebruaOkumYnycsXG4gICAgICAgICAgICBOTzogMzYsXG4gICAgICAgICAgICB3YWl0TnVtOiA2XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovL2ppc2hpMy5iYmRzZXJ2aWNlLmNvbS8nXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5fY2h1bmsoWzEsIDIsIDMsIDQsIDUsIDZdLCAzKSlcbiAgICB9XG5cbiAgICBfY2h1bmsgKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfY2h1bmsoLi4uYXJncyknLCBfY2h1bmsoLi4uYXJncykpXG4gICAgICByZXR1cm4gX2NodW5rKC4uLmFyZ3MpXG4gICAgfVxuICB9XG4iXX0=
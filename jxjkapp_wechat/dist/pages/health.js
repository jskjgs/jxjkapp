'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _convertDate = require('./../utils/convertDate.js');

var _convertDate2 = _interopRequireDefault(_convertDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log(_convertDate2.default);

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
      navigationBarTitleText: '健康管理'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      orderStatusDict: orderStatusDict,
      orderList: [{
        image: '',
        date: '2017-10-09',
        hospital: '锦江附属医院',
        project: '硬化剂注射',
        num: 10,
        total: 1000,
        status: 'inUse'
      }, {
        image: '',
        date: '2017-10-09',
        hospital: '锦江附属医院',
        project: '硬化剂注射',
        num: 10,
        total: 1000,
        status: 'finish'
      }]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwib3JkZXJTdGF0dXNEaWN0IiwidGV4dCIsImNvbG9yIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJvcmRlckxpc3QiLCJpbWFnZSIsImRhdGUiLCJob3NwaXRhbCIsInByb2plY3QiLCJudW0iLCJ0b3RhbCIsInN0YXR1cyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBQSxRQUFRQyxHQUFSOztBQUVBLElBQU1DLGtCQUFrQjtBQUN0QixZQUFVO0FBQ1JDLFVBQU0sS0FERTtBQUVSQyxXQUFPO0FBRkMsR0FEWTtBQUt0QixXQUFTO0FBQ1BELFVBQU0sS0FEQztBQUVQQyxXQUFPO0FBRkE7QUFMYSxDQUF4Qjs7SUFXcUJDLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMUixzQ0FESztBQUVMUyxpQkFBVyxDQUFDO0FBQ1ZDLGVBQU8sRUFERztBQUVWQyxjQUFNLFlBRkk7QUFHVkMsa0JBQVUsUUFIQTtBQUlWQyxpQkFBUyxPQUpDO0FBS1ZDLGFBQUssRUFMSztBQU1WQyxlQUFPLElBTkc7QUFPVkMsZ0JBQVE7QUFQRSxPQUFELEVBUVI7QUFDRE4sZUFBTyxFQUROO0FBRURDLGNBQU0sWUFGTDtBQUdEQyxrQkFBVSxRQUhUO0FBSURDLGlCQUFTLE9BSlI7QUFLREMsYUFBSyxFQUxKO0FBTURDLGVBQU8sSUFOTjtBQU9EQyxnQkFBUTtBQVBQLE9BUlE7QUFGTixLLFFBcUJQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQXhDZ0MsZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJoZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGNvbnZlcnREYXRlIGZyb20gJ0AvdXRpbHMvY29udmVydERhdGUnXG4gIGNvbnNvbGUubG9nKGNvbnZlcnREYXRlKVxuXG4gIGNvbnN0IG9yZGVyU3RhdHVzRGljdCA9IHtcbiAgICAnZmluaXNoJzoge1xuICAgICAgdGV4dDogJ+W3suWujOaIkCcsXG4gICAgICBjb2xvcjogJyMyRkM2NjAnXG4gICAgfSxcbiAgICAnaW5Vc2UnOiB7XG4gICAgICB0ZXh0OiAn5L2/55So5LitJyxcbiAgICAgIGNvbG9yOiAnI0ZGQjQwMCdcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WBpeW6t+euoeeQhidcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG9yZGVyU3RhdHVzRGljdCxcbiAgICAgIG9yZGVyTGlzdDogW3tcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBkYXRlOiAnMjAxNy0xMC0wOScsXG4gICAgICAgIGhvc3BpdGFsOiAn6ZSm5rGf6ZmE5bGe5Yy76ZmiJyxcbiAgICAgICAgcHJvamVjdDogJ+ehrOWMluWJguazqOWwhCcsXG4gICAgICAgIG51bTogMTAsXG4gICAgICAgIHRvdGFsOiAxMDAwLFxuICAgICAgICBzdGF0dXM6ICdpblVzZSdcbiAgICAgIH0sIHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBkYXRlOiAnMjAxNy0xMC0wOScsXG4gICAgICAgIGhvc3BpdGFsOiAn6ZSm5rGf6ZmE5bGe5Yy76ZmiJyxcbiAgICAgICAgcHJvamVjdDogJ+ehrOWMluWJguazqOWwhCcsXG4gICAgICAgIG51bTogMTAsXG4gICAgICAgIHRvdGFsOiAxMDAwLFxuICAgICAgICBzdGF0dXM6ICdmaW5pc2gnXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
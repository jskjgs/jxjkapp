'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customCard = require('./../components/customCard.js');

var _customCard2 = _interopRequireDefault(_customCard);

var _convertDate = require('./../utils/convertDate.js');

var _convertDate2 = _interopRequireDefault(_convertDate);

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
      navigationBarTitleText: '申请作废'
    }, _this.$repeat = {}, _this.$props = { "CustomCard": { "title": "Thermage 热玛吉" } }, _this.$events = {}, _this.components = {
      CustomCard: _customCard2.default
    }, _this.data = {
      textareaValue: '',
      textareaMaxLen: 40,
      canCancel: true,
      cancelDate: ''
    }, _this.computed = {}, _this.methods = {
      handleInput: function handleInput(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        this.textareaValue = value && value.trim();
      },
      submit: function submit() {
        this.canCancel = false;
        this.cancelDate = (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_cancel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9jYW5jZWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ3VzdG9tQ2FyZCIsImRhdGEiLCJ0ZXh0YXJlYVZhbHVlIiwidGV4dGFyZWFNYXhMZW4iLCJjYW5DYW5jZWwiLCJjYW5jZWxEYXRlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFuZGxlSW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsInRyaW0iLCJzdWJtaXQiLCJEYXRlIiwiZ2V0VGltZSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsU0FBUSxjQUFULEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLHNCQUFnQixFQUZYO0FBR0xDLGlCQUFXLElBSE47QUFJTEMsa0JBQVk7QUFKUCxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxpQkFEUSw4QkFDZTtBQUFBLFlBQVRDLE1BQVMsU0FBVEEsTUFBUzs7QUFDckIsWUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxhQUFLUixhQUFMLEdBQXFCUSxTQUFTQSxNQUFNQyxJQUFOLEVBQTlCO0FBQ0QsT0FKTztBQUtSQyxZQUxRLG9CQUtFO0FBQ1IsYUFBS1IsU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsMkJBQVksSUFBSVEsSUFBSixHQUFXQyxPQUFYLEVBQVosRUFBa0MsYUFBbEMsQ0FBbEI7QUFDRDtBQVJPLEssUUFXVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUFwQ2dDLGVBQUtDLEk7O2tCQUFuQnZCLEsiLCJmaWxlIjoiaGVhbHRoX2NhbmNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ3VzdG9tQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tQ2FyZCdcblxuICBpbXBvcnQgY29udmVydERhdGUgZnJvbSAnQC91dGlscy9jb252ZXJ0RGF0ZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eUs+ivt+S9nOW6nydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkN1c3RvbUNhcmRcIjp7XCJ0aXRsZVwiOlwiVGhlcm1hZ2Ug54Ot546b5ZCJXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIEN1c3RvbUNhcmRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdGV4dGFyZWFWYWx1ZTogJycsXG4gICAgICB0ZXh0YXJlYU1heExlbjogNDAsXG4gICAgICBjYW5DYW5jZWw6IHRydWUsXG4gICAgICBjYW5jZWxEYXRlOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVJbnB1dCAoe2RldGFpbH0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy50ZXh0YXJlYVZhbHVlID0gdmFsdWUgJiYgdmFsdWUudHJpbSgpXG4gICAgICB9LFxuICAgICAgc3VibWl0ICgpIHtcbiAgICAgICAgdGhpcy5jYW5DYW5jZWwgPSBmYWxzZVxuICAgICAgICB0aGlzLmNhbmNlbERhdGUgPSBjb252ZXJ0RGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSwgJ1ktTS1EIGg6bTpzJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
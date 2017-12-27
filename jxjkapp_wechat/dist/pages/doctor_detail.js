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
      navigationBarTitleText: '医生介绍'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      name: '',
      description: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var _this2 = this;

      var id = _ref2.id;

      this.$_request({
        url: '/doctorInfo/',
        data: {
          id: id
        }
      }).then(function (res) {
        var content = res.content || {};
        _this2.name = content.name;
        _this2.description = content.description;
        _this2.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/doctor_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvcl9kZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJpZCIsIiRfcmVxdWVzdCIsInVybCIsInRoZW4iLCJjb250ZW50IiwicmVzIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxtQkFBYTtBQUZSLEssUUFLUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7O2tDQUdNO0FBQUE7O0FBQUEsVUFBTkMsRUFBTSxTQUFOQSxFQUFNOztBQUNiLFdBQUtDLFNBQUwsQ0FBZTtBQUNiQyxhQUFLLGNBRFE7QUFFYlIsY0FBTTtBQUNKTTtBQURJO0FBRk8sT0FBZixFQUtHRyxJQUxILENBS1EsZUFBTztBQUNiLFlBQU1DLFVBQVVDLElBQUlELE9BQUosSUFBZSxFQUEvQjtBQUNBLGVBQUtULElBQUwsR0FBWVMsUUFBUVQsSUFBcEI7QUFDQSxlQUFLQyxXQUFMLEdBQW1CUSxRQUFRUixXQUEzQjtBQUNBLGVBQUtVLE1BQUw7QUFDRCxPQVZEO0FBV0Q7Ozs7RUFsQ2dDLGVBQUtDLEk7O2tCQUFuQmxCLEsiLCJmaWxlIjoiZG9jdG9yX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yy755Sf5LuL57uNJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoeyBpZCB9KSB7XG4gICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgIHVybDogJy9kb2N0b3JJbmZvLycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXMuY29udGVudCB8fCB7fVxuICAgICAgICB0aGlzLm5hbWUgPSBjb250ZW50Lm5hbWVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNvbnRlbnQuZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==
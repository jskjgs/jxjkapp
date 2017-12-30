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
      navigationBarTitleText: ''
    }, _this.components = {}, _this.mixins = [], _this.data = {
      listData: Array.from({ length: 7 }).map(function (item) {
        return {
          bg: '../assets/images/demo.png' && ''
        };
      })
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var target = _ref2.target;

      console.log(arguments, 1111);
      wx.setNavigationBarTitle({
        title: target
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/project'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJsaXN0RGF0YSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsImJnIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImFyZ3VtZW50cyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVVDLE1BQU1DLElBQU4sQ0FBVyxFQUFDQyxRQUFRLENBQVQsRUFBWCxFQUF3QkMsR0FBeEIsQ0FBNEI7QUFBQSxlQUFTO0FBQzdDQyxjQUFJLCtCQUErQjtBQURVLFNBQVQ7QUFBQSxPQUE1QjtBQURMLEssUUFNUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7O2tDQUdVO0FBQUEsVUFBVkMsTUFBVSxTQUFWQSxNQUFVOztBQUNqQkMsY0FBUUMsR0FBUixDQUFZQyxTQUFaLEVBQXVCLElBQXZCO0FBQ0FDLFNBQUdDLHFCQUFILENBQXlCO0FBQ3ZCQyxlQUFPTjtBQURnQixPQUF6QjtBQUdEOzs7O0VBNUJnQyxlQUFLTyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3REYXRhOiBBcnJheS5mcm9tKHtsZW5ndGg6IDd9KS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBiZzogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnICYmICcnXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoeyB0YXJnZXQgfSkge1xuICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzLCAxMTExKVxuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgdGl0bGU6IHRhcmdldFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==
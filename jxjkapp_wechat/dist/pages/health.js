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
    value: function onLoad() {
      console.log('this.$parent.globalData', this.$parent.globalData);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwib3JkZXJTdGF0dXNEaWN0IiwidGV4dCIsImNvbG9yIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJvcmRlckxpc3QiLCJpbWFnZSIsImRhdGUiLCJob3NwaXRhbCIsInByb2plY3QiLCJudW0iLCJ0b3RhbCIsInN0YXR1cyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0FBLFFBQVFDLEdBQVI7O0FBRUEsSUFBTUMsa0JBQWtCO0FBQ3RCLFlBQVU7QUFDUkMsVUFBTSxLQURFO0FBRVJDLFdBQU87QUFGQyxHQURZO0FBS3RCLFdBQVM7QUFDUEQsVUFBTSxLQURDO0FBRVBDLFdBQU87QUFGQTtBQUxhLENBQXhCOztJQVdxQkMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xSLHNDQURLO0FBRUxTLGlCQUFXLENBQUM7QUFDVkMsZUFBTyxFQURHO0FBRVZDLGNBQU0sWUFGSTtBQUdWQyxrQkFBVSxRQUhBO0FBSVZDLGlCQUFTLE9BSkM7QUFLVkMsYUFBSyxFQUxLO0FBTVZDLGVBQU8sSUFORztBQU9WQyxnQkFBUTtBQVBFLE9BQUQsRUFRUjtBQUNETixlQUFPLEVBRE47QUFFREMsY0FBTSxZQUZMO0FBR0RDLGtCQUFVLFFBSFQ7QUFJREMsaUJBQVMsT0FKUjtBQUtEQyxhQUFLLEVBTEo7QUFNREMsZUFBTyxJQU5OO0FBT0RDLGdCQUFRO0FBUFAsT0FSUTtBQUZOLEssUUFxQlBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQckIsY0FBUUMsR0FBUixDQUFZLHlCQUFaLEVBQXVDLEtBQUtxQixPQUFMLENBQWFDLFVBQXBEO0FBQ0Q7Ozs7RUF6Q2dDLGVBQUtDLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoiaGVhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBjb252ZXJ0RGF0ZSBmcm9tICdAL3V0aWxzL2NvbnZlcnREYXRlJ1xuICBjb25zb2xlLmxvZyhjb252ZXJ0RGF0ZSlcblxuICBjb25zdCBvcmRlclN0YXR1c0RpY3QgPSB7XG4gICAgJ2ZpbmlzaCc6IHtcbiAgICAgIHRleHQ6ICflt7LlrozmiJAnLFxuICAgICAgY29sb3I6ICcjMkZDNjYwJ1xuICAgIH0sXG4gICAgJ2luVXNlJzoge1xuICAgICAgdGV4dDogJ+S9v+eUqOS4rScsXG4gICAgICBjb2xvcjogJyNGRkI0MDAnXG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflgaXlurfnrqHnkIYnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBvcmRlclN0YXR1c0RpY3QsXG4gICAgICBvcmRlckxpc3Q6IFt7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgZGF0ZTogJzIwMTctMTAtMDknLFxuICAgICAgICBob3NwaXRhbDogJ+mUpuaxn+mZhOWxnuWMu+mZoicsXG4gICAgICAgIHByb2plY3Q6ICfnoazljJbliYLms6jlsIQnLFxuICAgICAgICBudW06IDEwLFxuICAgICAgICB0b3RhbDogMTAwMCxcbiAgICAgICAgc3RhdHVzOiAnaW5Vc2UnXG4gICAgICB9LCB7XG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgZGF0ZTogJzIwMTctMTAtMDknLFxuICAgICAgICBob3NwaXRhbDogJ+mUpuaxn+mZhOWxnuWMu+mZoicsXG4gICAgICAgIHByb2plY3Q6ICfnoazljJbliYLms6jlsIQnLFxuICAgICAgICBudW06IDEwLFxuICAgICAgICB0b3RhbDogMTAwMCxcbiAgICAgICAgc3RhdHVzOiAnZmluaXNoJ1xuICAgICAgfV1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy4kcGFyZW50Lmdsb2JhbERhdGEnLCB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YSlcbiAgICB9XG4gIH1cbiJdfQ==
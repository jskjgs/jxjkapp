'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var valueWatcher = function valueWatcher(newVal) {
  console.log('this.rangeList', this.rangeList);
  this.valueIndex = this.rangeList.findIndex(function (item) {
    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
      return newVal === item.value;
    } else {
      return newVal === item;
    }
  });
};

var CustomPicker = function (_wepy$component) {
  _inherits(CustomPicker, _wepy$component);

  function CustomPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomPicker.__proto__ || Object.getPrototypeOf(CustomPicker)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {
      value: {
        // type: String,
        twoWay: true
      },
      range: {
        /*
          格式为['value1', 'value2'] 或 [{value: 'value1', label: ''}]
         */
        // type: Array
      }
    }, _this.mixins = [], _this.data = {
      valueIndex: 0
    }, _this.computed = {
      rangeList: function rangeList() {
        return this.range;
      }
    }, _this.watch = {
      rangeList: function rangeList(val) {
        console.log('range', val);
      },
      value: function value(newVal) {
        console.log('value:Change');
        valueWatcher.call(this, newVal);
      },
      valueIndex: function valueIndex(newVal) {
        console.log('valueIndex:Change');
        console.log(this.rangeList, 1111);
        var currItem = this.rangeList[newVal];
        if ((typeof currItem === 'undefined' ? 'undefined' : _typeof(currItem)) === 'object') {
          this.value = currItem.value;
        } else {
          this.value = currItem;
        }
      }
    }, _this.methods = {
      handleChange: function handleChange(_ref2) {
        var detail = _ref2.detail;

        console.log(this);
        this.valueIndex = detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomPicker, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.value, this.range, this);
      if (this.value) {
        valueWatcher.call(this, this.value);
      }
    }
  }]);

  return CustomPicker;
}(_wepy2.default.component);

exports.default = CustomPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbVBpY2tlci5qcyJdLCJuYW1lcyI6WyJ2YWx1ZVdhdGNoZXIiLCJuZXdWYWwiLCJjb25zb2xlIiwibG9nIiwicmFuZ2VMaXN0IiwidmFsdWVJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJ2YWx1ZSIsIkN1c3RvbVBpY2tlciIsImNvbXBvbmVudHMiLCJwcm9wcyIsInR3b1dheSIsInJhbmdlIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwid2F0Y2giLCJ2YWwiLCJjYWxsIiwiY3Vyckl0ZW0iLCJtZXRob2RzIiwiaGFuZGxlQ2hhbmdlIiwiZGV0YWlsIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBVUMsTUFBVixFQUFrQjtBQUNyQ0MsVUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtDLFNBQW5DO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixLQUFLRCxTQUFMLENBQWVFLFNBQWYsQ0FBeUIsZ0JBQVE7QUFDakQsUUFBSSxRQUFPQyxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQXBCLEVBQThCO0FBQzVCLGFBQU9OLFdBQVdNLEtBQUtDLEtBQXZCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT1AsV0FBV00sSUFBbEI7QUFDRDtBQUNGLEdBTmlCLENBQWxCO0FBT0QsQ0FURDs7SUFVcUJFLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsVSxHQUFhLEUsUUFHYkMsSyxHQUFRO0FBQ05ILGFBQU87QUFDTDtBQUNBSSxnQkFBUTtBQUZILE9BREQ7QUFLTkMsYUFBTztBQUNMOzs7QUFHQTtBQUpLO0FBTEQsSyxRQWFSQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTFYsa0JBQVk7QUFEUCxLLFFBSVBXLFEsR0FBVztBQUNUWixlQURTLHVCQUNJO0FBQ1gsZUFBTyxLQUFLUyxLQUFaO0FBQ0Q7QUFIUSxLLFFBTVhJLEssR0FBUTtBQUNOYixlQURNLHFCQUNLYyxHQURMLEVBQ1U7QUFDZGhCLGdCQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQmUsR0FBckI7QUFDRCxPQUhLO0FBSU5WLFdBSk0saUJBSUNQLE1BSkQsRUFJUztBQUNiQyxnQkFBUUMsR0FBUixDQUFZLGNBQVo7QUFDQUgscUJBQWFtQixJQUFiLENBQWtCLElBQWxCLEVBQXdCbEIsTUFBeEI7QUFDRCxPQVBLO0FBUU5JLGdCQVJNLHNCQVFNSixNQVJOLEVBUWM7QUFDbEJDLGdCQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDQUQsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxTQUFqQixFQUE0QixJQUE1QjtBQUNBLFlBQUlnQixXQUFXLEtBQUtoQixTQUFMLENBQWVILE1BQWYsQ0FBZjtBQUNBLFlBQUksUUFBT21CLFFBQVAseUNBQU9BLFFBQVAsT0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsZUFBS1osS0FBTCxHQUFhWSxTQUFTWixLQUF0QjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLEtBQUwsR0FBYVksUUFBYjtBQUNEO0FBQ0Y7QUFqQkssSyxRQW9CUkMsTyxHQUFVO0FBQ1JDLGtCQURRLCtCQUNrQjtBQUFBLFlBQVZDLE1BQVUsU0FBVkEsTUFBVTs7QUFDeEJyQixnQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQSxhQUFLRSxVQUFMLEdBQWtCa0IsT0FBT2YsS0FBekI7QUFDRDtBQUpPLEssUUFPVmdCLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQdEIsY0FBUUMsR0FBUixDQUFZLEtBQUtLLEtBQWpCLEVBQXdCLEtBQUtLLEtBQTdCLEVBQW9DLElBQXBDO0FBQ0EsVUFBSSxLQUFLTCxLQUFULEVBQWdCO0FBQ2RSLHFCQUFhbUIsSUFBYixDQUFrQixJQUFsQixFQUF3QixLQUFLWCxLQUE3QjtBQUNEO0FBQ0Y7Ozs7RUFoRXVDLGVBQUtpQixTOztrQkFBMUJoQixZIiwiZmlsZSI6ImN1c3RvbVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGNvbnN0IHZhbHVlV2F0Y2hlciA9IGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5yYW5nZUxpc3QnLCB0aGlzLnJhbmdlTGlzdClcbiAgICB0aGlzLnZhbHVlSW5kZXggPSB0aGlzLnJhbmdlTGlzdC5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXdWYWwgPT09IGl0ZW0udmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXdWYWwgPT09IGl0ZW1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVBpY2tlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgLy8gdHlwZTogU3RyaW5nLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICByYW5nZToge1xuICAgICAgICAvKlxuICAgICAgICAgIOagvOW8j+S4ulsndmFsdWUxJywgJ3ZhbHVlMiddIOaIliBbe3ZhbHVlOiAndmFsdWUxJywgbGFiZWw6ICcnfV1cbiAgICAgICAgICovXG4gICAgICAgIC8vIHR5cGU6IEFycmF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICB2YWx1ZUluZGV4OiAwXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICByYW5nZUxpc3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5nZVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgcmFuZ2VMaXN0ICh2YWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JhbmdlJywgdmFsKVxuICAgICAgfSxcbiAgICAgIHZhbHVlIChuZXdWYWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlOkNoYW5nZScpXG4gICAgICAgIHZhbHVlV2F0Y2hlci5jYWxsKHRoaXMsIG5ld1ZhbClcbiAgICAgIH0sXG4gICAgICB2YWx1ZUluZGV4IChuZXdWYWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlSW5kZXg6Q2hhbmdlJylcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yYW5nZUxpc3QsIDExMTEpXG4gICAgICAgIGxldCBjdXJySXRlbSA9IHRoaXMucmFuZ2VMaXN0W25ld1ZhbF1cbiAgICAgICAgaWYgKHR5cGVvZiBjdXJySXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gY3Vyckl0ZW0udmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gY3Vyckl0ZW1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVDaGFuZ2UgKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgdGhpcy52YWx1ZUluZGV4ID0gZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUsIHRoaXMucmFuZ2UsIHRoaXMpXG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICB2YWx1ZVdhdGNoZXIuY2FsbCh0aGlzLCB0aGlzLnZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19
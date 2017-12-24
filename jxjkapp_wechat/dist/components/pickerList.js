'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomCard = function (_wepy$component) {
  _inherits(CustomCard, _wepy$component);

  function CustomCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {
      ITEMS: {
        type: Array,
        default: []
      },
      lists: {
        type: Object,
        default: {
          hospitalList: [],
          projectList: [],
          orderDateList: [],
          orderTimeList: []
        }
      },
      pickeds: {
        type: Object,
        twoWay: true,
        default: {
          hospital: '',
          projectName: '',
          orderDate: '',
          orderTime: ''
        }
      }
    }, _this.mixins = [], _this.data = {}, _this.computed = {
      pickedIndex: function pickedIndex() {
        var lists = this.lists;
        var pickeds = this.pickeds;
        var returnVal = {};
        this.ITEMS.forEach(function (item) {
          var valueBind = item.picker.valueBind;
          var rangeBind = item.picker.rangeBind;
          var index = lists[rangeBind].findIndex(function (item) {
            if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
              return item.value === pickeds[valueBind];
            } else {
              return item === pickeds[valueBind];
            }
          });
          returnVal[valueBind] = index;
        });
        console.log('returnVal', returnVal);
        return returnVal;
      }
    }, _this.methods = {
      handlePickerChange: function handlePickerChange(valueBind, rangeBind, _ref2) {
        var detail = _ref2.detail;

        var index = detail.value;
        console.log('index', index, this.pickedIndex);
        if (index !== -1) {
          var currItem = this.lists[rangeBind][index];
          if ((typeof currItem === 'undefined' ? 'undefined' : _typeof(currItem)) === 'object') {
            this.pickeds[valueBind] = currItem.value;
          } else {
            this.pickeds[valueBind] = currItem;
          }
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomCard, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return CustomCard;
}(_wepy2.default.component);

exports.default = CustomCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlckxpc3QuanMiXSwibmFtZXMiOlsiQ3VzdG9tQ2FyZCIsImNvbXBvbmVudHMiLCJwcm9wcyIsIklURU1TIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImxpc3RzIiwiT2JqZWN0IiwiaG9zcGl0YWxMaXN0IiwicHJvamVjdExpc3QiLCJvcmRlckRhdGVMaXN0Iiwib3JkZXJUaW1lTGlzdCIsInBpY2tlZHMiLCJ0d29XYXkiLCJob3NwaXRhbCIsInByb2plY3ROYW1lIiwib3JkZXJEYXRlIiwib3JkZXJUaW1lIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwicGlja2VkSW5kZXgiLCJyZXR1cm5WYWwiLCJmb3JFYWNoIiwidmFsdWVCaW5kIiwiaXRlbSIsInBpY2tlciIsInJhbmdlQmluZCIsImluZGV4IiwiZmluZEluZGV4IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImhhbmRsZVBpY2tlckNoYW5nZSIsImRldGFpbCIsImN1cnJJdGVtIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsVSxHQUFhLEUsUUFHYkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsS0FERDtBQUVMQyxpQkFBUztBQUZKLE9BREQ7QUFLTkMsYUFBTztBQUNMSCxjQUFNSSxNQUREO0FBRUxGLGlCQUFTO0FBQ1BHLHdCQUFjLEVBRFA7QUFFUEMsdUJBQWEsRUFGTjtBQUdQQyx5QkFBZSxFQUhSO0FBSVBDLHlCQUFlO0FBSlI7QUFGSixPQUxEO0FBY05DLGVBQVM7QUFDUFQsY0FBTUksTUFEQztBQUVQTSxnQkFBUSxJQUZEO0FBR1BSLGlCQUFTO0FBQ1BTLG9CQUFVLEVBREg7QUFFUEMsdUJBQWEsRUFGTjtBQUdQQyxxQkFBVyxFQUhKO0FBSVBDLHFCQUFXO0FBSko7QUFIRjtBQWRILEssUUEwQlJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTyxFLFFBR1BDLFEsR0FBVztBQUNUQyxpQkFEUyx5QkFDTTtBQUNiLFlBQU1mLFFBQVEsS0FBS0EsS0FBbkI7QUFDQSxZQUFNTSxVQUFVLEtBQUtBLE9BQXJCO0FBQ0EsWUFBSVUsWUFBWSxFQUFoQjtBQUNBLGFBQUtwQixLQUFMLENBQVdxQixPQUFYLENBQW1CLGdCQUFRO0FBQ3pCLGNBQU1DLFlBQVlDLEtBQUtDLE1BQUwsQ0FBWUYsU0FBOUI7QUFDQSxjQUFNRyxZQUFZRixLQUFLQyxNQUFMLENBQVlDLFNBQTlCO0FBQ0EsY0FBTUMsUUFBUXRCLE1BQU1xQixTQUFOLEVBQWlCRSxTQUFqQixDQUEyQixnQkFBUTtBQUMvQyxnQkFBSSxRQUFPSixJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQXBCLEVBQThCO0FBQzVCLHFCQUFPQSxLQUFLSyxLQUFMLEtBQWVsQixRQUFRWSxTQUFSLENBQXRCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU9DLFNBQVNiLFFBQVFZLFNBQVIsQ0FBaEI7QUFDRDtBQUNGLFdBTmEsQ0FBZDtBQU9BRixvQkFBVUUsU0FBVixJQUF1QkksS0FBdkI7QUFDRCxTQVhEO0FBWUFHLGdCQUFRQyxHQUFSLENBQVksV0FBWixFQUF5QlYsU0FBekI7QUFDQSxlQUFPQSxTQUFQO0FBQ0Q7QUFuQlEsSyxRQXNCWFcsTyxHQUFVO0FBQ1JDLHdCQURRLDhCQUNZVixTQURaLEVBQ3VCRyxTQUR2QixTQUM4QztBQUFBLFlBQVZRLE1BQVUsU0FBVkEsTUFBVTs7QUFDcEQsWUFBTVAsUUFBUU8sT0FBT0wsS0FBckI7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSixLQUFyQixFQUE0QixLQUFLUCxXQUFqQztBQUNBLFlBQUlPLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGNBQU1RLFdBQVcsS0FBSzlCLEtBQUwsQ0FBV3FCLFNBQVgsRUFBc0JDLEtBQXRCLENBQWpCO0FBQ0EsY0FBSSxRQUFPUSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLGlCQUFLeEIsT0FBTCxDQUFhWSxTQUFiLElBQTBCWSxTQUFTTixLQUFuQztBQUNELFdBRkQsTUFFTztBQUNMLGlCQUFLbEIsT0FBTCxDQUFhWSxTQUFiLElBQTBCWSxRQUExQjtBQUNEO0FBQ0Y7QUFDRjtBQVpPLEssUUFlVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUE1RXFDLGVBQUtDLFM7O2tCQUF4QnZDLFUiLCJmaWxlIjoicGlja2VyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUNhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIElURU1TOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIGxpc3RzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGhvc3BpdGFsTGlzdDogW10sXG4gICAgICAgICAgcHJvamVjdExpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyVGltZUxpc3Q6IFtdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwaWNrZWRzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaG9zcGl0YWw6ICcnLFxuICAgICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICAgICAgICBvcmRlckRhdGU6ICcnLFxuICAgICAgICAgIG9yZGVyVGltZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgcGlja2VkSW5kZXggKCkge1xuICAgICAgICBjb25zdCBsaXN0cyA9IHRoaXMubGlzdHNcbiAgICAgICAgY29uc3QgcGlja2VkcyA9IHRoaXMucGlja2Vkc1xuICAgICAgICBsZXQgcmV0dXJuVmFsID0ge31cbiAgICAgICAgdGhpcy5JVEVNUy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlQmluZCA9IGl0ZW0ucGlja2VyLnZhbHVlQmluZFxuICAgICAgICAgIGNvbnN0IHJhbmdlQmluZCA9IGl0ZW0ucGlja2VyLnJhbmdlQmluZFxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gbGlzdHNbcmFuZ2VCaW5kXS5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnZhbHVlID09PSBwaWNrZWRzW3ZhbHVlQmluZF1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtID09PSBwaWNrZWRzW3ZhbHVlQmluZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblZhbFt2YWx1ZUJpbmRdID0gaW5kZXhcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3JldHVyblZhbCcsIHJldHVyblZhbClcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZXJDaGFuZ2UgKHZhbHVlQmluZCwgcmFuZ2VCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleCcsIGluZGV4LCB0aGlzLnBpY2tlZEluZGV4KVxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgY3Vyckl0ZW0gPSB0aGlzLmxpc3RzW3JhbmdlQmluZF1baW5kZXhdXG4gICAgICAgICAgaWYgKHR5cGVvZiBjdXJySXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMucGlja2Vkc1t2YWx1ZUJpbmRdID0gY3Vyckl0ZW0udmFsdWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5waWNrZWRzW3ZhbHVlQmluZF0gPSBjdXJySXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
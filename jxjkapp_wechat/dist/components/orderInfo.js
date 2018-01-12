'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _pickerList = require('./pickerList.js');

var _pickerList2 = _interopRequireDefault(_pickerList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITEMS = [{
  label: '项目名称',
  picker: {
    valueBind: 'projectName',
    rangeBind: 'projectList'
  }
}, {
  label: '院区名称',
  picker: {
    valueBind: 'hospital',
    rangeBind: 'hospitalList'
  }
}, {
  label: '预约日期',
  picker: {
    valueBind: 'orderDate',
    rangeBind: 'orderDateList'
  }
}];

var CustomCard = function (_wepy$component) {
  _inherits(CustomCard, _wepy$component);

  function CustomCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PickerList": { "xmlns:v-bind": "", "v-bind:ITEMS.once": "ITEMS", "v-bind:lists.sync": "lists", "v-bind:pickeds.sync": "pickeds" } }, _this.$events = {}, _this.components = {
      PickerList: _pickerList2.default
    }, _this.props = {
      lists: {
        type: Object,
        default: {
          hospitalList: [],
          projectList: [],
          orderDateList: []
        }
      },
      pickeds: {
        type: Object,
        twoWay: true,
        default: {
          hospital: '',
          projectName: '',
          orderDate: ''
        }
      }
    }, _this.mixins = [], _this.data = {
      ITEMS: ITEMS
    }, _this.computed = {
      pickedIndex: function pickedIndex() {
        var lists = this.lists;
        var pickeds = this.pickeds;
        var returnVal = {};
        ITEMS.forEach(function (item) {
          var valueBind = item.picker.valueBind;
          var rangeBind = item.picker.rangeBind;
          returnVal[valueBind] = (lists[rangeBind] || []).findIndex(function (item) {
            return item.label === pickeds[valueBind];
          });
        });
        return returnVal;
      }
    }, _this.methods = {
      handlePickerChange: function handlePickerChange(valueBind, rangeBind, _ref2) {
        var detail = _ref2.detail;

        var index = detail.value;
        if (index) {
          this.pickeds[valueBind] = this.lists[rangeBind][index].label;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVySW5mby5qcyJdLCJuYW1lcyI6WyJJVEVNUyIsImxhYmVsIiwicGlja2VyIiwidmFsdWVCaW5kIiwicmFuZ2VCaW5kIiwiQ3VzdG9tQ2FyZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBpY2tlckxpc3QiLCJwcm9wcyIsImxpc3RzIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJob3NwaXRhbExpc3QiLCJwcm9qZWN0TGlzdCIsIm9yZGVyRGF0ZUxpc3QiLCJwaWNrZWRzIiwidHdvV2F5IiwiaG9zcGl0YWwiLCJwcm9qZWN0TmFtZSIsIm9yZGVyRGF0ZSIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsInBpY2tlZEluZGV4IiwicmV0dXJuVmFsIiwiZm9yRWFjaCIsIml0ZW0iLCJmaW5kSW5kZXgiLCJtZXRob2RzIiwiaGFuZGxlUGlja2VyQ2hhbmdlIiwiZGV0YWlsIiwiaW5kZXgiLCJ2YWx1ZSIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxDQUFDO0FBQ2JDLFNBQU8sTUFETTtBQUViQyxVQUFRO0FBQ05DLGVBQVcsYUFETDtBQUVOQyxlQUFXO0FBRkw7QUFGSyxDQUFELEVBTVg7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxVQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBTlcsRUFZWDtBQUNESCxTQUFPLE1BRE47QUFFREMsVUFBUTtBQUNOQyxlQUFXLFdBREw7QUFFTkMsZUFBVztBQUZMO0FBRlAsQ0FaVyxDQUFkOztJQW9CcUJDLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNwQkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyxxQkFBb0IsT0FBbkUsRUFBMkUsdUJBQXNCLFNBQWpHLEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DLE1BREQ7QUFFTEMsaUJBQVM7QUFDUEMsd0JBQWMsRUFEUDtBQUVQQyx1QkFBYSxFQUZOO0FBR1BDLHlCQUFlO0FBSFI7QUFGSixPQUREO0FBU05DLGVBQVM7QUFDUE4sY0FBTUMsTUFEQztBQUVQTSxnQkFBUSxJQUZEO0FBR1BMLGlCQUFTO0FBQ1BNLG9CQUFVLEVBREg7QUFFUEMsdUJBQWEsRUFGTjtBQUdQQyxxQkFBVztBQUhKO0FBSEY7QUFUSCxLLFFBb0JSQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTHpCO0FBREssSyxRQUlQMEIsUSxHQUFXO0FBQ1RDLGlCQURTLHlCQUNNO0FBQ2IsWUFBTWYsUUFBUSxLQUFLQSxLQUFuQjtBQUNBLFlBQU1PLFVBQVUsS0FBS0EsT0FBckI7QUFDQSxZQUFJUyxZQUFZLEVBQWhCO0FBQ0E1QixjQUFNNkIsT0FBTixDQUFjLGdCQUFRO0FBQ3BCLGNBQU0xQixZQUFZMkIsS0FBSzVCLE1BQUwsQ0FBWUMsU0FBOUI7QUFDQSxjQUFNQyxZQUFZMEIsS0FBSzVCLE1BQUwsQ0FBWUUsU0FBOUI7QUFDQXdCLG9CQUFVekIsU0FBVixJQUF1QixDQUFDUyxNQUFNUixTQUFOLEtBQW9CLEVBQXJCLEVBQXlCMkIsU0FBekIsQ0FBbUMsZ0JBQVE7QUFDaEUsbUJBQU9ELEtBQUs3QixLQUFMLEtBQWVrQixRQUFRaEIsU0FBUixDQUF0QjtBQUNELFdBRnNCLENBQXZCO0FBR0QsU0FORDtBQU9BLGVBQU95QixTQUFQO0FBQ0Q7QUFiUSxLLFFBZ0JYSSxPLEdBQVU7QUFDUkMsd0JBRFEsOEJBQ1k5QixTQURaLEVBQ3VCQyxTQUR2QixTQUM4QztBQUFBLFlBQVY4QixNQUFVLFNBQVZBLE1BQVU7O0FBQ3BELFlBQU1DLFFBQVFELE9BQU9FLEtBQXJCO0FBQ0EsWUFBSUQsS0FBSixFQUFXO0FBQ1QsZUFBS2hCLE9BQUwsQ0FBYWhCLFNBQWIsSUFBMEIsS0FBS1MsS0FBTCxDQUFXUixTQUFYLEVBQXNCK0IsS0FBdEIsRUFBNkJsQyxLQUF2RDtBQUNEO0FBQ0Y7QUFOTyxLLFFBU1ZvQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQS9EcUMsZUFBS0MsUzs7a0JBQXhCakMsVSIsImZpbGUiOiJvcmRlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgUGlja2VyTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvcGlja2VyTGlzdCdcbiAgY29uc3QgSVRFTVMgPSBbe1xuICAgIGxhYmVsOiAn6aG555uu5ZCN56ewJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ3Byb2plY3ROYW1lJyxcbiAgICAgIHJhbmdlQmluZDogJ3Byb2plY3RMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6Zmi5Yy65ZCN56ewJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ2hvc3BpdGFsJyxcbiAgICAgIHJhbmdlQmluZDogJ2hvc3BpdGFsTGlzdCdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+mihOe6puaXpeacnycsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdvcmRlckRhdGUnLFxuICAgICAgcmFuZ2VCaW5kOiAnb3JkZXJEYXRlTGlzdCdcbiAgICB9XG4gIH1dXG4gIFxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQaWNrZXJMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpJVEVNUy5vbmNlXCI6XCJJVEVNU1wiLFwidi1iaW5kOmxpc3RzLnN5bmNcIjpcImxpc3RzXCIsXCJ2LWJpbmQ6cGlja2Vkcy5zeW5jXCI6XCJwaWNrZWRzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFBpY2tlckxpc3RcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3RzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGhvc3BpdGFsTGlzdDogW10sXG4gICAgICAgICAgcHJvamVjdExpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwaWNrZWRzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaG9zcGl0YWw6ICcnLFxuICAgICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICAgICAgICBvcmRlckRhdGU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIElURU1TXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBwaWNrZWRJbmRleCAoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RzID0gdGhpcy5saXN0c1xuICAgICAgICBjb25zdCBwaWNrZWRzID0gdGhpcy5waWNrZWRzXG4gICAgICAgIGxldCByZXR1cm5WYWwgPSB7fVxuICAgICAgICBJVEVNUy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlQmluZCA9IGl0ZW0ucGlja2VyLnZhbHVlQmluZFxuICAgICAgICAgIGNvbnN0IHJhbmdlQmluZCA9IGl0ZW0ucGlja2VyLnJhbmdlQmluZFxuICAgICAgICAgIHJldHVyblZhbFt2YWx1ZUJpbmRdID0gKGxpc3RzW3JhbmdlQmluZF0gfHwgW10pLmZpbmRJbmRleChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmxhYmVsID09PSBwaWNrZWRzW3ZhbHVlQmluZF1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVBpY2tlckNoYW5nZSAodmFsdWVCaW5kLCByYW5nZUJpbmQsIHsgZGV0YWlsIH0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBkZXRhaWwudmFsdWVcbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgdGhpcy5waWNrZWRzW3ZhbHVlQmluZF0gPSB0aGlzLmxpc3RzW3JhbmdlQmluZF1baW5kZXhdLmxhYmVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
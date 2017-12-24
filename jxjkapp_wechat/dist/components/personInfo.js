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

var PICKER_ITEMS = [{
  label: '分娩日期',
  picker: {
    valueBind: 'laborDate',
    rangeBind: 'laborDate'
  }
}, {
  label: '分娩情况',
  picker: {
    valueBind: 'laborCase',
    rangeBind: 'laborCase'
  }
}, {
  label: '婴儿性别',
  picker: {
    valueBind: 'gender',
    rangeBind: 'gender'
  }
}, {
  label: '客户来源',
  picker: {
    valueBind: 'from',
    rangeBind: 'from'
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PickerList": { "xmlns:v-bind": "", "v-bind:ITEMS.once": "PICKER_ITEMS", "v-bind:lists.sync": "pickerLists", "v-bind:pickeds.sync": "pickerPickeds" } }, _this.$events = {}, _this.components = {
      PickerList: _pickerList2.default
    }, _this.props = {
      page: {
        type: String,
        default: 'signup' // signup / relation
      }
    }, _this.mixins = [], _this.data = {
      address: '', // 联系地址
      PICKER_ITEMS: PICKER_ITEMS,
      pickerLists: {
        laborDate: [{
          value: 1,
          label: '232'
        }],
        laborCase: [{
          value: 0,
          label: 'labor0'
        }],
        gender: [{
          value: 0,
          label: '女'
        }, {
          value: 1,
          label: '男'
        }],
        from: [{
          value: 0,
          label: 'from0'
        }]
      },
      pickerPickeds: {}
    }, _this.computed = {}, _this.methods = {
      handleInput: function handleInput(valBind, _ref2) {
        var detail = _ref2.detail;

        this[valBind] = detail.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbkluZm8uanMiXSwibmFtZXMiOlsiUElDS0VSX0lURU1TIiwibGFiZWwiLCJwaWNrZXIiLCJ2YWx1ZUJpbmQiLCJyYW5nZUJpbmQiLCJDdXN0b21DYXJkIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUGlja2VyTGlzdCIsInByb3BzIiwicGFnZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwibWl4aW5zIiwiZGF0YSIsImFkZHJlc3MiLCJwaWNrZXJMaXN0cyIsImxhYm9yRGF0ZSIsInZhbHVlIiwibGFib3JDYXNlIiwiZ2VuZGVyIiwiZnJvbSIsInBpY2tlclBpY2tlZHMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVJbnB1dCIsInZhbEJpbmQiLCJkZXRhaWwiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsQ0FBQztBQUNwQkMsU0FBTyxNQURhO0FBRXBCQyxVQUFRO0FBQ05DLGVBQVcsV0FETDtBQUVOQyxlQUFXO0FBRkw7QUFGWSxDQUFELEVBTWxCO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsV0FETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQU5rQixFQVlsQjtBQUNESCxTQUFPLE1BRE47QUFFREMsVUFBUTtBQUNOQyxlQUFXLFFBREw7QUFFTkMsZUFBVztBQUZMO0FBRlAsQ0Faa0IsRUFrQmxCO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsTUFETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQWxCa0IsQ0FBckI7O0lBeUJxQkMsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLGNBQXZDLEVBQXNELHFCQUFvQixhQUExRSxFQUF3Rix1QkFBc0IsZUFBOUcsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxRQUZMLENBRWM7QUFGZDtBQURBLEssUUFPUkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESixFQUNRO0FBQ2JsQixnQ0FGSztBQUdMbUIsbUJBQWE7QUFDWEMsbUJBQVcsQ0FBQztBQUNWQyxpQkFBTyxDQURHO0FBRVZwQixpQkFBTztBQUZHLFNBQUQsQ0FEQTtBQUtYcUIsbUJBQVcsQ0FBQztBQUNWRCxpQkFBTyxDQURHO0FBRVZwQixpQkFBTztBQUZHLFNBQUQsQ0FMQTtBQVNYc0IsZ0JBQVEsQ0FBQztBQUNQRixpQkFBTyxDQURBO0FBRVBwQixpQkFBTztBQUZBLFNBQUQsRUFHTDtBQUNEb0IsaUJBQU8sQ0FETjtBQUVEcEIsaUJBQU87QUFGTixTQUhLLENBVEc7QUFnQlh1QixjQUFNLENBQUM7QUFDTEgsaUJBQU8sQ0FERjtBQUVMcEIsaUJBQU87QUFGRixTQUFEO0FBaEJLLE9BSFI7QUF3Qkx3QixxQkFBZTtBQXhCVixLLFFBNEJQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0tDLE9BREwsU0FDMEI7QUFBQSxZQUFWQyxNQUFVLFNBQVZBLE1BQVU7O0FBQ2hDLGFBQUtELE9BQUwsSUFBZ0JDLE9BQU9ULEtBQXZCO0FBQ0Q7QUFITyxLLFFBTVZVLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBMURxQyxlQUFLQyxTOztrQkFBeEIzQixVIiwiZmlsZSI6InBlcnNvbkluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgUGlja2VyTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvcGlja2VyTGlzdCdcblxuICBjb25zdCBQSUNLRVJfSVRFTVMgPSBbe1xuICAgIGxhYmVsOiAn5YiG5aip5pel5pyfJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ2xhYm9yRGF0ZScsXG4gICAgICByYW5nZUJpbmQ6ICdsYWJvckRhdGUnXG4gICAgfVxuICB9LCB7XG4gICAgbGFiZWw6ICfliIblqKnmg4XlhrUnLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnbGFib3JDYXNlJyxcbiAgICAgIHJhbmdlQmluZDogJ2xhYm9yQ2FzZSdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+WptOWEv+aAp+WIqycsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdnZW5kZXInLFxuICAgICAgcmFuZ2VCaW5kOiAnZ2VuZGVyJ1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn5a6i5oi35p2l5rqQJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ2Zyb20nLFxuICAgICAgcmFuZ2VCaW5kOiAnZnJvbSdcbiAgICB9XG4gIH1dXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUNhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlBpY2tlckxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOklURU1TLm9uY2VcIjpcIlBJQ0tFUl9JVEVNU1wiLFwidi1iaW5kOmxpc3RzLnN5bmNcIjpcInBpY2tlckxpc3RzXCIsXCJ2LWJpbmQ6cGlja2Vkcy5zeW5jXCI6XCJwaWNrZXJQaWNrZWRzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFBpY2tlckxpc3RcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIHBhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnc2lnbnVwJyAvLyBzaWdudXAgLyByZWxhdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgYWRkcmVzczogJycsIC8vIOiBlOezu+WcsOWdgFxuICAgICAgUElDS0VSX0lURU1TLFxuICAgICAgcGlja2VyTGlzdHM6IHtcbiAgICAgICAgbGFib3JEYXRlOiBbe1xuICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgIGxhYmVsOiAnMjMyJ1xuICAgICAgICB9XSxcbiAgICAgICAgbGFib3JDYXNlOiBbe1xuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgIGxhYmVsOiAnbGFib3IwJ1xuICAgICAgICB9XSxcbiAgICAgICAgZ2VuZGVyOiBbe1xuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgIGxhYmVsOiAn5aWzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgbGFiZWw6ICfnlLcnXG4gICAgICAgIH1dLFxuICAgICAgICBmcm9tOiBbe1xuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgIGxhYmVsOiAnZnJvbTAnXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgcGlja2VyUGlja2Vkczoge1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVJbnB1dCAodmFsQmluZCwgeyBkZXRhaWwgfSkge1xuICAgICAgICB0aGlzW3ZhbEJpbmRdID0gZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
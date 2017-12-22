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
    }, _this.props = {}, _this.mixins = [], _this.data = {
      address: '', // 联系地址
      PICKER_ITEMS: PICKER_ITEMS,
      pickerLists: {
        laborDate: [{
          value: 1,
          label: '232'
        }],
        laborCase: [],
        gender: [],
        from: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbkluZm8uanMiXSwibmFtZXMiOlsiUElDS0VSX0lURU1TIiwibGFiZWwiLCJwaWNrZXIiLCJ2YWx1ZUJpbmQiLCJyYW5nZUJpbmQiLCJDdXN0b21DYXJkIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUGlja2VyTGlzdCIsInByb3BzIiwibWl4aW5zIiwiZGF0YSIsImFkZHJlc3MiLCJwaWNrZXJMaXN0cyIsImxhYm9yRGF0ZSIsInZhbHVlIiwibGFib3JDYXNlIiwiZ2VuZGVyIiwiZnJvbSIsInBpY2tlclBpY2tlZHMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVJbnB1dCIsInZhbEJpbmQiLCJkZXRhaWwiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsQ0FBQztBQUNwQkMsU0FBTyxNQURhO0FBRXBCQyxVQUFRO0FBQ05DLGVBQVcsV0FETDtBQUVOQyxlQUFXO0FBRkw7QUFGWSxDQUFELEVBTWxCO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsV0FETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQU5rQixFQVlsQjtBQUNESCxTQUFPLE1BRE47QUFFREMsVUFBUTtBQUNOQyxlQUFXLFFBREw7QUFFTkMsZUFBVztBQUZMO0FBRlAsQ0Faa0IsRUFrQmxCO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsTUFETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQWxCa0IsQ0FBckI7O0lBeUJxQkMsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLGNBQXZDLEVBQXNELHFCQUFvQixhQUExRSxFQUF3Rix1QkFBc0IsZUFBOUcsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSyxHQUFRLEUsUUFHUkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESixFQUNRO0FBQ2JkLGdDQUZLO0FBR0xlLG1CQUFhO0FBQ1hDLG1CQUFXLENBQUM7QUFDVkMsaUJBQU8sQ0FERztBQUVWaEIsaUJBQU87QUFGRyxTQUFELENBREE7QUFLWGlCLG1CQUFXLEVBTEE7QUFNWEMsZ0JBQVEsRUFORztBQU9YQyxjQUFNO0FBUEssT0FIUjtBQVlMQyxxQkFBZTtBQVpWLEssUUFnQlBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDS0MsT0FETCxTQUMwQjtBQUFBLFlBQVZDLE1BQVUsU0FBVkEsTUFBVTs7QUFDaEMsYUFBS0QsT0FBTCxJQUFnQkMsT0FBT1QsS0FBdkI7QUFDRDtBQUhPLEssUUFNVlUsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUExQ3FDLGVBQUtDLFM7O2tCQUF4QnZCLFUiLCJmaWxlIjoicGVyc29uSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBQaWNrZXJMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9waWNrZXJMaXN0J1xuXG4gIGNvbnN0IFBJQ0tFUl9JVEVNUyA9IFt7XG4gICAgbGFiZWw6ICfliIblqKnml6XmnJ8nLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnbGFib3JEYXRlJyxcbiAgICAgIHJhbmdlQmluZDogJ2xhYm9yRGF0ZSdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+WIhuWoqeaDheWGtScsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdsYWJvckNhc2UnLFxuICAgICAgcmFuZ2VCaW5kOiAnbGFib3JDYXNlJ1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn5am05YS/5oCn5YirJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ2dlbmRlcicsXG4gICAgICByYW5nZUJpbmQ6ICdnZW5kZXInXG4gICAgfVxuICB9LCB7XG4gICAgbGFiZWw6ICflrqLmiLfmnaXmupAnLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnZnJvbScsXG4gICAgICByYW5nZUJpbmQ6ICdmcm9tJ1xuICAgIH1cbiAgfV1cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUGlja2VyTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6SVRFTVMub25jZVwiOlwiUElDS0VSX0lURU1TXCIsXCJ2LWJpbmQ6bGlzdHMuc3luY1wiOlwicGlja2VyTGlzdHNcIixcInYtYmluZDpwaWNrZWRzLnN5bmNcIjpcInBpY2tlclBpY2tlZHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUGlja2VyTGlzdFxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgYWRkcmVzczogJycsIC8vIOiBlOezu+WcsOWdgFxuICAgICAgUElDS0VSX0lURU1TLFxuICAgICAgcGlja2VyTGlzdHM6IHtcbiAgICAgICAgbGFib3JEYXRlOiBbe1xuICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgIGxhYmVsOiAnMjMyJ1xuICAgICAgICB9XSxcbiAgICAgICAgbGFib3JDYXNlOiBbXSxcbiAgICAgICAgZ2VuZGVyOiBbXSxcbiAgICAgICAgZnJvbTogW11cbiAgICAgIH0sXG4gICAgICBwaWNrZXJQaWNrZWRzOiB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUlucHV0ICh2YWxCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIHRoaXNbdmFsQmluZF0gPSBkZXRhaWwudmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
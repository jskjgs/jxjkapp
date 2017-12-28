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
      readonly: {
        type: Boolean,
        default: false
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlckxpc3QuanMiXSwibmFtZXMiOlsiQ3VzdG9tQ2FyZCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInJlYWRvbmx5IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiSVRFTVMiLCJBcnJheSIsImxpc3RzIiwiT2JqZWN0IiwiaG9zcGl0YWxMaXN0IiwicHJvamVjdExpc3QiLCJvcmRlckRhdGVMaXN0Iiwib3JkZXJUaW1lTGlzdCIsInBpY2tlZHMiLCJ0d29XYXkiLCJob3NwaXRhbCIsInByb2plY3ROYW1lIiwib3JkZXJEYXRlIiwib3JkZXJUaW1lIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwicGlja2VkSW5kZXgiLCJyZXR1cm5WYWwiLCJmb3JFYWNoIiwidmFsdWVCaW5kIiwiaXRlbSIsInBpY2tlciIsInJhbmdlQmluZCIsImluZGV4IiwiZmluZEluZGV4IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImhhbmRsZVBpY2tlckNoYW5nZSIsImRldGFpbCIsImN1cnJJdGVtIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsVSxHQUFhLEUsUUFHYkMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLGNBQU1DLE9BREU7QUFFUkMsaUJBQVM7QUFGRCxPQURKO0FBS05DLGFBQU87QUFDTEgsY0FBTUksS0FERDtBQUVMRixpQkFBUztBQUZKLE9BTEQ7QUFTTkcsYUFBTztBQUNMTCxjQUFNTSxNQUREO0FBRUxKLGlCQUFTO0FBQ1BLLHdCQUFjLEVBRFA7QUFFUEMsdUJBQWEsRUFGTjtBQUdQQyx5QkFBZSxFQUhSO0FBSVBDLHlCQUFlO0FBSlI7QUFGSixPQVREO0FBa0JOQyxlQUFTO0FBQ1BYLGNBQU1NLE1BREM7QUFFUE0sZ0JBQVEsSUFGRDtBQUdQVixpQkFBUztBQUNQVyxvQkFBVSxFQURIO0FBRVBDLHVCQUFhLEVBRk47QUFHUEMscUJBQVcsRUFISjtBQUlQQyxxQkFBVztBQUpKO0FBSEY7QUFsQkgsSyxRQThCUkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPLEUsUUFHUEMsUSxHQUFXO0FBQ1RDLGlCQURTLHlCQUNNO0FBQ2IsWUFBTWYsUUFBUSxLQUFLQSxLQUFuQjtBQUNBLFlBQU1NLFVBQVUsS0FBS0EsT0FBckI7QUFDQSxZQUFJVSxZQUFZLEVBQWhCO0FBQ0EsYUFBS2xCLEtBQUwsQ0FBV21CLE9BQVgsQ0FBbUIsZ0JBQVE7QUFDekIsY0FBTUMsWUFBWUMsS0FBS0MsTUFBTCxDQUFZRixTQUE5QjtBQUNBLGNBQU1HLFlBQVlGLEtBQUtDLE1BQUwsQ0FBWUMsU0FBOUI7QUFDQSxjQUFNQyxRQUFRdEIsTUFBTXFCLFNBQU4sRUFBaUJFLFNBQWpCLENBQTJCLGdCQUFRO0FBQy9DLGdCQUFJLFFBQU9KLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIscUJBQU9BLEtBQUtLLEtBQUwsS0FBZWxCLFFBQVFZLFNBQVIsQ0FBdEI7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBT0MsU0FBU2IsUUFBUVksU0FBUixDQUFoQjtBQUNEO0FBQ0YsV0FOYSxDQUFkO0FBT0FGLG9CQUFVRSxTQUFWLElBQXVCSSxLQUF2QjtBQUNELFNBWEQ7QUFZQUcsZ0JBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCVixTQUF6QjtBQUNBLGVBQU9BLFNBQVA7QUFDRDtBQW5CUSxLLFFBc0JYVyxPLEdBQVU7QUFDUkMsd0JBRFEsOEJBQ1lWLFNBRFosRUFDdUJHLFNBRHZCLFNBQzhDO0FBQUEsWUFBVlEsTUFBVSxTQUFWQSxNQUFVOztBQUNwRCxZQUFNUCxRQUFRTyxPQUFPTCxLQUFyQjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJKLEtBQXJCLEVBQTRCLEtBQUtQLFdBQWpDO0FBQ0EsWUFBSU8sVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsY0FBTVEsV0FBVyxLQUFLOUIsS0FBTCxDQUFXcUIsU0FBWCxFQUFzQkMsS0FBdEIsQ0FBakI7QUFDQSxjQUFJLFFBQU9RLFFBQVAseUNBQU9BLFFBQVAsT0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsaUJBQUt4QixPQUFMLENBQWFZLFNBQWIsSUFBMEJZLFNBQVNOLEtBQW5DO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsaUJBQUtsQixPQUFMLENBQWFZLFNBQWIsSUFBMEJZLFFBQTFCO0FBQ0Q7QUFDRjtBQUNGO0FBWk8sSyxRQWVWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQWhGcUMsZUFBS0MsUzs7a0JBQXhCekMsVSIsImZpbGUiOiJwaWNrZXJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBJVEVNUzoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBsaXN0czoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBob3NwaXRhbExpc3Q6IFtdLFxuICAgICAgICAgIHByb2plY3RMaXN0OiBbXSxcbiAgICAgICAgICBvcmRlckRhdGVMaXN0OiBbXSxcbiAgICAgICAgICBvcmRlclRpbWVMaXN0OiBbXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcGlja2Vkczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGhvc3BpdGFsOiAnJyxcbiAgICAgICAgICBwcm9qZWN0TmFtZTogJycsXG4gICAgICAgICAgb3JkZXJEYXRlOiAnJyxcbiAgICAgICAgICBvcmRlclRpbWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHBpY2tlZEluZGV4ICgpIHtcbiAgICAgICAgY29uc3QgbGlzdHMgPSB0aGlzLmxpc3RzXG4gICAgICAgIGNvbnN0IHBpY2tlZHMgPSB0aGlzLnBpY2tlZHNcbiAgICAgICAgbGV0IHJldHVyblZhbCA9IHt9XG4gICAgICAgIHRoaXMuSVRFTVMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZUJpbmQgPSBpdGVtLnBpY2tlci52YWx1ZUJpbmRcbiAgICAgICAgICBjb25zdCByYW5nZUJpbmQgPSBpdGVtLnBpY2tlci5yYW5nZUJpbmRcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGxpc3RzW3JhbmdlQmluZF0uZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZSA9PT0gcGlja2Vkc1t2YWx1ZUJpbmRdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gcGlja2Vkc1t2YWx1ZUJpbmRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm5WYWxbdmFsdWVCaW5kXSA9IGluZGV4XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXR1cm5WYWwnLCByZXR1cm5WYWwpXG4gICAgICAgIHJldHVybiByZXR1cm5WYWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlUGlja2VyQ2hhbmdlICh2YWx1ZUJpbmQsIHJhbmdlQmluZCwgeyBkZXRhaWwgfSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGRldGFpbC52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZygnaW5kZXgnLCBpbmRleCwgdGhpcy5waWNrZWRJbmRleClcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGN1cnJJdGVtID0gdGhpcy5saXN0c1tyYW5nZUJpbmRdW2luZGV4XVxuICAgICAgICAgIGlmICh0eXBlb2YgY3Vyckl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlZHNbdmFsdWVCaW5kXSA9IGN1cnJJdGVtLnZhbHVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGlja2Vkc1t2YWx1ZUJpbmRdID0gY3Vyckl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
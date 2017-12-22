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
            return item.label === pickeds[valueBind];
          });
          returnVal[valueBind] = index === -1 ? 0 : index;
        });
        return returnVal;
      }
    }, _this.methods = {
      handlePickerChange: function handlePickerChange(valueBind, rangeBind, _ref2) {
        var detail = _ref2.detail;

        var index = detail.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlckxpc3QuanMiXSwibmFtZXMiOlsiQ3VzdG9tQ2FyZCIsImNvbXBvbmVudHMiLCJwcm9wcyIsIklURU1TIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImxpc3RzIiwiT2JqZWN0IiwiaG9zcGl0YWxMaXN0IiwicHJvamVjdExpc3QiLCJvcmRlckRhdGVMaXN0Iiwib3JkZXJUaW1lTGlzdCIsInBpY2tlZHMiLCJ0d29XYXkiLCJob3NwaXRhbCIsInByb2plY3ROYW1lIiwib3JkZXJEYXRlIiwib3JkZXJUaW1lIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwicGlja2VkSW5kZXgiLCJyZXR1cm5WYWwiLCJmb3JFYWNoIiwidmFsdWVCaW5kIiwiaXRlbSIsInBpY2tlciIsInJhbmdlQmluZCIsImluZGV4IiwiZmluZEluZGV4IiwibGFiZWwiLCJtZXRob2RzIiwiaGFuZGxlUGlja2VyQ2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJjdXJySXRlbSIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLFUsR0FBYSxFLFFBR2JDLEssR0FBUTtBQUNOQyxhQUFPO0FBQ0xDLGNBQU1DLEtBREQ7QUFFTEMsaUJBQVM7QUFGSixPQUREO0FBS05DLGFBQU87QUFDTEgsY0FBTUksTUFERDtBQUVMRixpQkFBUztBQUNQRyx3QkFBYyxFQURQO0FBRVBDLHVCQUFhLEVBRk47QUFHUEMseUJBQWUsRUFIUjtBQUlQQyx5QkFBZTtBQUpSO0FBRkosT0FMRDtBQWNOQyxlQUFTO0FBQ1BULGNBQU1JLE1BREM7QUFFUE0sZ0JBQVEsSUFGRDtBQUdQUixpQkFBUztBQUNQUyxvQkFBVSxFQURIO0FBRVBDLHVCQUFhLEVBRk47QUFHUEMscUJBQVcsRUFISjtBQUlQQyxxQkFBVztBQUpKO0FBSEY7QUFkSCxLLFFBMEJSQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU8sRSxRQUdQQyxRLEdBQVc7QUFDVEMsaUJBRFMseUJBQ007QUFDYixZQUFNZixRQUFRLEtBQUtBLEtBQW5CO0FBQ0EsWUFBTU0sVUFBVSxLQUFLQSxPQUFyQjtBQUNBLFlBQUlVLFlBQVksRUFBaEI7QUFDQSxhQUFLcEIsS0FBTCxDQUFXcUIsT0FBWCxDQUFtQixnQkFBUTtBQUN6QixjQUFNQyxZQUFZQyxLQUFLQyxNQUFMLENBQVlGLFNBQTlCO0FBQ0EsY0FBTUcsWUFBWUYsS0FBS0MsTUFBTCxDQUFZQyxTQUE5QjtBQUNBLGNBQU1DLFFBQVF0QixNQUFNcUIsU0FBTixFQUFpQkUsU0FBakIsQ0FBMkIsZ0JBQVE7QUFDL0MsbUJBQU9KLEtBQUtLLEtBQUwsS0FBZWxCLFFBQVFZLFNBQVIsQ0FBdEI7QUFDRCxXQUZhLENBQWQ7QUFHQUYsb0JBQVVFLFNBQVYsSUFBdUJJLFVBQVUsQ0FBQyxDQUFYLEdBQWUsQ0FBZixHQUFtQkEsS0FBMUM7QUFDRCxTQVBEO0FBUUEsZUFBT04sU0FBUDtBQUNEO0FBZFEsSyxRQWlCWFMsTyxHQUFVO0FBQ1JDLHdCQURRLDhCQUNZUixTQURaLEVBQ3VCRyxTQUR2QixTQUM4QztBQUFBLFlBQVZNLE1BQVUsU0FBVkEsTUFBVTs7QUFDcEQsWUFBTUwsUUFBUUssT0FBT0MsS0FBckI7QUFDQSxZQUFJTixVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQixjQUFNTyxXQUFXLEtBQUs3QixLQUFMLENBQVdxQixTQUFYLEVBQXNCQyxLQUF0QixDQUFqQjtBQUNBLGNBQUksUUFBT08sUUFBUCx5Q0FBT0EsUUFBUCxPQUFvQixRQUF4QixFQUFrQztBQUNoQyxpQkFBS3ZCLE9BQUwsQ0FBYVksU0FBYixJQUEwQlcsU0FBU0QsS0FBbkM7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBS3RCLE9BQUwsQ0FBYVksU0FBYixJQUEwQlcsUUFBMUI7QUFDRDtBQUNGO0FBQ0Y7QUFYTyxLLFFBY1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBdEVxQyxlQUFLQyxTOztrQkFBeEJ0QyxVIiwiZmlsZSI6InBpY2tlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICBJVEVNUzoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBsaXN0czoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBob3NwaXRhbExpc3Q6IFtdLFxuICAgICAgICAgIHByb2plY3RMaXN0OiBbXSxcbiAgICAgICAgICBvcmRlckRhdGVMaXN0OiBbXSxcbiAgICAgICAgICBvcmRlclRpbWVMaXN0OiBbXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcGlja2Vkczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGhvc3BpdGFsOiAnJyxcbiAgICAgICAgICBwcm9qZWN0TmFtZTogJycsXG4gICAgICAgICAgb3JkZXJEYXRlOiAnJyxcbiAgICAgICAgICBvcmRlclRpbWU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHBpY2tlZEluZGV4ICgpIHtcbiAgICAgICAgY29uc3QgbGlzdHMgPSB0aGlzLmxpc3RzXG4gICAgICAgIGNvbnN0IHBpY2tlZHMgPSB0aGlzLnBpY2tlZHNcbiAgICAgICAgbGV0IHJldHVyblZhbCA9IHt9XG4gICAgICAgIHRoaXMuSVRFTVMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZUJpbmQgPSBpdGVtLnBpY2tlci52YWx1ZUJpbmRcbiAgICAgICAgICBjb25zdCByYW5nZUJpbmQgPSBpdGVtLnBpY2tlci5yYW5nZUJpbmRcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGxpc3RzW3JhbmdlQmluZF0uZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09IHBpY2tlZHNbdmFsdWVCaW5kXVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuVmFsW3ZhbHVlQmluZF0gPSBpbmRleCA9PT0gLTEgPyAwIDogaW5kZXhcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZXJDaGFuZ2UgKHZhbHVlQmluZCwgcmFuZ2VCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBjdXJySXRlbSA9IHRoaXMubGlzdHNbcmFuZ2VCaW5kXVtpbmRleF1cbiAgICAgICAgICBpZiAodHlwZW9mIGN1cnJJdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5waWNrZWRzW3ZhbHVlQmluZF0gPSBjdXJySXRlbS52YWx1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlZHNbdmFsdWVCaW5kXSA9IGN1cnJJdGVtXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
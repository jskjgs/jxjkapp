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
          var index = (lists[rangeBind] || []).findIndex(function (_item) {
            if ((typeof _item === 'undefined' ? 'undefined' : _typeof(_item)) === 'object') {
              return _item.value === pickeds[valueBind];
            } else {
              return _item === pickeds[valueBind];
            }
          });
          returnVal[valueBind] = index || pickeds[valueBind];
        });
        console.log('returnVal', returnVal);
        return returnVal;
      }
    }, _this.watch = {
      pickeds: function pickeds(newVal) {
        console.log('newVal', newVal);
      }
    }, _this.methods = {
      handlePickerChange: function handlePickerChange(valueBind, rangeBind, _ref2) {
        var detail = _ref2.detail;

        var index = detail.value;
        console.log('index', index, this.pickedIndex);
        if (typeof +index === 'number' && +index === +index) {
          if (index !== -1) {
            var currItem = this.lists[rangeBind][index];
            if ((typeof currItem === 'undefined' ? 'undefined' : _typeof(currItem)) === 'object') {
              this.pickeds[valueBind] = currItem.value;
            } else {
              this.pickeds[valueBind] = currItem;
            }
          }
        } else {
          this.pickeds[valueBind] = index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlckxpc3QuanMiXSwibmFtZXMiOlsiQ3VzdG9tQ2FyZCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInJlYWRvbmx5IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiSVRFTVMiLCJBcnJheSIsImxpc3RzIiwiT2JqZWN0IiwiaG9zcGl0YWxMaXN0IiwicHJvamVjdExpc3QiLCJvcmRlckRhdGVMaXN0Iiwib3JkZXJUaW1lTGlzdCIsInBpY2tlZHMiLCJ0d29XYXkiLCJob3NwaXRhbCIsInByb2plY3ROYW1lIiwib3JkZXJEYXRlIiwib3JkZXJUaW1lIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwicGlja2VkSW5kZXgiLCJyZXR1cm5WYWwiLCJmb3JFYWNoIiwidmFsdWVCaW5kIiwiaXRlbSIsInBpY2tlciIsInJhbmdlQmluZCIsImluZGV4IiwiZmluZEluZGV4IiwiX2l0ZW0iLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ3YXRjaCIsIm5ld1ZhbCIsIm1ldGhvZHMiLCJoYW5kbGVQaWNrZXJDaGFuZ2UiLCJkZXRhaWwiLCJjdXJySXRlbSIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLFUsR0FBYSxFLFFBR2JDLEssR0FBUTtBQUNOQyxnQkFBVTtBQUNSQyxjQUFNQyxPQURFO0FBRVJDLGlCQUFTO0FBRkQsT0FESjtBQUtOQyxhQUFPO0FBQ0xILGNBQU1JLEtBREQ7QUFFTEYsaUJBQVM7QUFGSixPQUxEO0FBU05HLGFBQU87QUFDTEwsY0FBTU0sTUFERDtBQUVMSixpQkFBUztBQUNQSyx3QkFBYyxFQURQO0FBRVBDLHVCQUFhLEVBRk47QUFHUEMseUJBQWUsRUFIUjtBQUlQQyx5QkFBZTtBQUpSO0FBRkosT0FURDtBQWtCTkMsZUFBUztBQUNQWCxjQUFNTSxNQURDO0FBRVBNLGdCQUFRLElBRkQ7QUFHUFYsaUJBQVM7QUFDUFcsb0JBQVUsRUFESDtBQUVQQyx1QkFBYSxFQUZOO0FBR1BDLHFCQUFXLEVBSEo7QUFJUEMscUJBQVc7QUFKSjtBQUhGO0FBbEJILEssUUE4QlJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTyxFLFFBR1BDLFEsR0FBVztBQUNUQyxpQkFEUyx5QkFDTTtBQUNiLFlBQU1mLFFBQVEsS0FBS0EsS0FBbkI7QUFDQSxZQUFNTSxVQUFVLEtBQUtBLE9BQXJCO0FBQ0EsWUFBSVUsWUFBWSxFQUFoQjtBQUNBLGFBQUtsQixLQUFMLENBQVdtQixPQUFYLENBQW1CLGdCQUFRO0FBQ3pCLGNBQU1DLFlBQVlDLEtBQUtDLE1BQUwsQ0FBWUYsU0FBOUI7QUFDQSxjQUFNRyxZQUFZRixLQUFLQyxNQUFMLENBQVlDLFNBQTlCO0FBQ0EsY0FBTUMsUUFBUSxDQUFDdEIsTUFBTXFCLFNBQU4sS0FBb0IsRUFBckIsRUFBeUJFLFNBQXpCLENBQW1DLGlCQUFTO0FBQ3hELGdCQUFJLFFBQU9DLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBckIsRUFBK0I7QUFDN0IscUJBQU9BLE1BQU1DLEtBQU4sS0FBZ0JuQixRQUFRWSxTQUFSLENBQXZCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU9NLFVBQVVsQixRQUFRWSxTQUFSLENBQWpCO0FBQ0Q7QUFDRixXQU5hLENBQWQ7QUFPQUYsb0JBQVVFLFNBQVYsSUFBdUJJLFNBQVNoQixRQUFRWSxTQUFSLENBQWhDO0FBQ0QsU0FYRDtBQVlBUSxnQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJYLFNBQXpCO0FBQ0EsZUFBT0EsU0FBUDtBQUNEO0FBbkJRLEssUUFzQlhZLEssR0FBUTtBQUNOdEIsYUFETSxtQkFDR3VCLE1BREgsRUFDVztBQUNmSCxnQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JFLE1BQXRCO0FBQ0Q7QUFISyxLLFFBTVJDLE8sR0FBVTtBQUNSQyx3QkFEUSw4QkFDWWIsU0FEWixFQUN1QkcsU0FEdkIsU0FDOEM7QUFBQSxZQUFWVyxNQUFVLFNBQVZBLE1BQVU7O0FBQ3BELFlBQU1WLFFBQVFVLE9BQU9QLEtBQXJCO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQkwsS0FBckIsRUFBNEIsS0FBS1AsV0FBakM7QUFDQSxZQUFJLE9BQU8sQ0FBQ08sS0FBUixLQUFrQixRQUFsQixJQUE4QixDQUFDQSxLQUFELEtBQVcsQ0FBQ0EsS0FBOUMsRUFBcUQ7QUFDbkQsY0FBSUEsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsZ0JBQU1XLFdBQVcsS0FBS2pDLEtBQUwsQ0FBV3FCLFNBQVgsRUFBc0JDLEtBQXRCLENBQWpCO0FBQ0EsZ0JBQUksUUFBT1csUUFBUCx5Q0FBT0EsUUFBUCxPQUFvQixRQUF4QixFQUFrQztBQUNoQyxtQkFBSzNCLE9BQUwsQ0FBYVksU0FBYixJQUEwQmUsU0FBU1IsS0FBbkM7QUFDRCxhQUZELE1BRU87QUFDTCxtQkFBS25CLE9BQUwsQ0FBYVksU0FBYixJQUEwQmUsUUFBMUI7QUFDRDtBQUNGO0FBQ0YsU0FURCxNQVNPO0FBQ0wsZUFBSzNCLE9BQUwsQ0FBYVksU0FBYixJQUEwQkksS0FBMUI7QUFDRDtBQUNGO0FBaEJPLEssUUFtQlZZLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBMUZxQyxlQUFLQyxTOztrQkFBeEI1QyxVIiwiZmlsZSI6InBpY2tlckxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIElURU1TOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIGxpc3RzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGhvc3BpdGFsTGlzdDogW10sXG4gICAgICAgICAgcHJvamVjdExpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyVGltZUxpc3Q6IFtdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwaWNrZWRzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaG9zcGl0YWw6ICcnLFxuICAgICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICAgICAgICBvcmRlckRhdGU6ICcnLFxuICAgICAgICAgIG9yZGVyVGltZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgcGlja2VkSW5kZXggKCkge1xuICAgICAgICBjb25zdCBsaXN0cyA9IHRoaXMubGlzdHNcbiAgICAgICAgY29uc3QgcGlja2VkcyA9IHRoaXMucGlja2Vkc1xuICAgICAgICBsZXQgcmV0dXJuVmFsID0ge31cbiAgICAgICAgdGhpcy5JVEVNUy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlQmluZCA9IGl0ZW0ucGlja2VyLnZhbHVlQmluZFxuICAgICAgICAgIGNvbnN0IHJhbmdlQmluZCA9IGl0ZW0ucGlja2VyLnJhbmdlQmluZFxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gKGxpc3RzW3JhbmdlQmluZF0gfHwgW10pLmZpbmRJbmRleChfaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIF9pdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICByZXR1cm4gX2l0ZW0udmFsdWUgPT09IHBpY2tlZHNbdmFsdWVCaW5kXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9pdGVtID09PSBwaWNrZWRzW3ZhbHVlQmluZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVyblZhbFt2YWx1ZUJpbmRdID0gaW5kZXggfHwgcGlja2Vkc1t2YWx1ZUJpbmRdXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXR1cm5WYWwnLCByZXR1cm5WYWwpXG4gICAgICAgIHJldHVybiByZXR1cm5WYWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIHBpY2tlZHMgKG5ld1ZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3VmFsJywgbmV3VmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZXJDaGFuZ2UgKHZhbHVlQmluZCwgcmFuZ2VCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleCcsIGluZGV4LCB0aGlzLnBpY2tlZEluZGV4KVxuICAgICAgICBpZiAodHlwZW9mICtpbmRleCA9PT0gJ251bWJlcicgJiYgK2luZGV4ID09PSAraW5kZXgpIHtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJySXRlbSA9IHRoaXMubGlzdHNbcmFuZ2VCaW5kXVtpbmRleF1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3Vyckl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHRoaXMucGlja2Vkc1t2YWx1ZUJpbmRdID0gY3Vyckl0ZW0udmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucGlja2Vkc1t2YWx1ZUJpbmRdID0gY3Vyckl0ZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5waWNrZWRzW3ZhbHVlQmluZF0gPSBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
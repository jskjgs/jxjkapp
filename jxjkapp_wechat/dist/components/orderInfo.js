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
  label: '院区名称',
  picker: {
    valueBind: 'hospital',
    rangeBind: 'hospitalList'
  }
}, {
  label: '项目',
  picker: {
    valueBind: 'projectName',
    rangeBind: 'projectList'
  }
}, {
  label: '预约日期',
  picker: {
    valueBind: 'orderDate',
    rangeBind: 'orderDateList'
  }
}, {
  label: '预约时间',
  picker: {
    valueBind: 'orderTime',
    rangeBind: 'orderTimeList'
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
          returnVal[valueBind] = lists[rangeBind].findIndex(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVySW5mby5qcyJdLCJuYW1lcyI6WyJJVEVNUyIsImxhYmVsIiwicGlja2VyIiwidmFsdWVCaW5kIiwicmFuZ2VCaW5kIiwiQ3VzdG9tQ2FyZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBpY2tlckxpc3QiLCJwcm9wcyIsImxpc3RzIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJob3NwaXRhbExpc3QiLCJwcm9qZWN0TGlzdCIsIm9yZGVyRGF0ZUxpc3QiLCJvcmRlclRpbWVMaXN0IiwicGlja2VkcyIsInR3b1dheSIsImhvc3BpdGFsIiwicHJvamVjdE5hbWUiLCJvcmRlckRhdGUiLCJvcmRlclRpbWUiLCJtaXhpbnMiLCJkYXRhIiwiY29tcHV0ZWQiLCJwaWNrZWRJbmRleCIsInJldHVyblZhbCIsImZvckVhY2giLCJpdGVtIiwiZmluZEluZGV4IiwibWV0aG9kcyIsImhhbmRsZVBpY2tlckNoYW5nZSIsImRldGFpbCIsImluZGV4IiwidmFsdWUiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFFBQVEsQ0FBQztBQUNiQyxTQUFPLE1BRE07QUFFYkMsVUFBUTtBQUNOQyxlQUFXLFVBREw7QUFFTkMsZUFBVztBQUZMO0FBRkssQ0FBRCxFQU1YO0FBQ0RILFNBQU8sSUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsYUFETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQU5XLEVBWVg7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxXQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBWlcsRUFrQlg7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxXQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBbEJXLENBQWQ7O0lBMEJxQkMsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHFCQUFvQixPQUFuRSxFQUEyRSx1QkFBc0IsU0FBakcsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxpQkFBUztBQUNQQyx3QkFBYyxFQURQO0FBRVBDLHVCQUFhLEVBRk47QUFHUEMseUJBQWUsRUFIUjtBQUlQQyx5QkFBZTtBQUpSO0FBRkosT0FERDtBQVVOQyxlQUFTO0FBQ1BQLGNBQU1DLE1BREM7QUFFUE8sZ0JBQVEsSUFGRDtBQUdQTixpQkFBUztBQUNQTyxvQkFBVSxFQURIO0FBRVBDLHVCQUFhLEVBRk47QUFHUEMscUJBQVcsRUFISjtBQUlQQyxxQkFBVztBQUpKO0FBSEY7QUFWSCxLLFFBc0JSQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTDNCO0FBREssSyxRQUlQNEIsUSxHQUFXO0FBQ1RDLGlCQURTLHlCQUNNO0FBQ2IsWUFBTWpCLFFBQVEsS0FBS0EsS0FBbkI7QUFDQSxZQUFNUSxVQUFVLEtBQUtBLE9BQXJCO0FBQ0EsWUFBSVUsWUFBWSxFQUFoQjtBQUNBOUIsY0FBTStCLE9BQU4sQ0FBYyxnQkFBUTtBQUNwQixjQUFNNUIsWUFBWTZCLEtBQUs5QixNQUFMLENBQVlDLFNBQTlCO0FBQ0EsY0FBTUMsWUFBWTRCLEtBQUs5QixNQUFMLENBQVlFLFNBQTlCO0FBQ0EwQixvQkFBVTNCLFNBQVYsSUFBdUJTLE1BQU1SLFNBQU4sRUFBaUI2QixTQUFqQixDQUEyQixnQkFBUTtBQUN4RCxtQkFBT0QsS0FBSy9CLEtBQUwsS0FBZW1CLFFBQVFqQixTQUFSLENBQXRCO0FBQ0QsV0FGc0IsQ0FBdkI7QUFHRCxTQU5EO0FBT0EsZUFBTzJCLFNBQVA7QUFDRDtBQWJRLEssUUFnQlhJLE8sR0FBVTtBQUNSQyx3QkFEUSw4QkFDWWhDLFNBRFosRUFDdUJDLFNBRHZCLFNBQzhDO0FBQUEsWUFBVmdDLE1BQVUsU0FBVkEsTUFBVTs7QUFDcEQsWUFBTUMsUUFBUUQsT0FBT0UsS0FBckI7QUFDQSxZQUFJRCxLQUFKLEVBQVc7QUFDVCxlQUFLakIsT0FBTCxDQUFhakIsU0FBYixJQUEwQixLQUFLUyxLQUFMLENBQVdSLFNBQVgsRUFBc0JpQyxLQUF0QixFQUE2QnBDLEtBQXZEO0FBQ0Q7QUFDRjtBQU5PLEssUUFTVnNDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBakVxQyxlQUFLQyxTOztrQkFBeEJuQyxVIiwiZmlsZSI6Im9yZGVySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBQaWNrZXJMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9waWNrZXJMaXN0J1xuICBjb25zdCBJVEVNUyA9IFt7XG4gICAgbGFiZWw6ICfpmaLljLrlkI3np7AnLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnaG9zcGl0YWwnLFxuICAgICAgcmFuZ2VCaW5kOiAnaG9zcGl0YWxMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aG555uuJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ3Byb2plY3ROYW1lJyxcbiAgICAgIHJhbmdlQmluZDogJ3Byb2plY3RMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aKE57qm5pel5pyfJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ29yZGVyRGF0ZScsXG4gICAgICByYW5nZUJpbmQ6ICdvcmRlckRhdGVMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aKE57qm5pe26Ze0JyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ29yZGVyVGltZScsXG4gICAgICByYW5nZUJpbmQ6ICdvcmRlclRpbWVMaXN0J1xuICAgIH1cbiAgfV1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUNhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlBpY2tlckxpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOklURU1TLm9uY2VcIjpcIklURU1TXCIsXCJ2LWJpbmQ6bGlzdHMuc3luY1wiOlwibGlzdHNcIixcInYtYmluZDpwaWNrZWRzLnN5bmNcIjpcInBpY2tlZHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUGlja2VyTGlzdFxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgbGlzdHM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaG9zcGl0YWxMaXN0OiBbXSxcbiAgICAgICAgICBwcm9qZWN0TGlzdDogW10sXG4gICAgICAgICAgb3JkZXJEYXRlTGlzdDogW10sXG4gICAgICAgICAgb3JkZXJUaW1lTGlzdDogW11cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBpY2tlZHM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB0d29XYXk6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBob3NwaXRhbDogJycsXG4gICAgICAgICAgcHJvamVjdE5hbWU6ICcnLFxuICAgICAgICAgIG9yZGVyRGF0ZTogJycsXG4gICAgICAgICAgb3JkZXJUaW1lOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBJVEVNU1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgcGlja2VkSW5kZXggKCkge1xuICAgICAgICBjb25zdCBsaXN0cyA9IHRoaXMubGlzdHNcbiAgICAgICAgY29uc3QgcGlja2VkcyA9IHRoaXMucGlja2Vkc1xuICAgICAgICBsZXQgcmV0dXJuVmFsID0ge31cbiAgICAgICAgSVRFTVMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZUJpbmQgPSBpdGVtLnBpY2tlci52YWx1ZUJpbmRcbiAgICAgICAgICBjb25zdCByYW5nZUJpbmQgPSBpdGVtLnBpY2tlci5yYW5nZUJpbmRcbiAgICAgICAgICByZXR1cm5WYWxbdmFsdWVCaW5kXSA9IGxpc3RzW3JhbmdlQmluZF0uZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubGFiZWwgPT09IHBpY2tlZHNbdmFsdWVCaW5kXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXR1cm5WYWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlUGlja2VyQ2hhbmdlICh2YWx1ZUJpbmQsIHJhbmdlQmluZCwgeyBkZXRhaWwgfSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGRldGFpbC52YWx1ZVxuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICB0aGlzLnBpY2tlZHNbdmFsdWVCaW5kXSA9IHRoaXMubGlzdHNbcmFuZ2VCaW5kXVtpbmRleF0ubGFiZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
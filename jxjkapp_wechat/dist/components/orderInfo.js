'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {
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
        return {
          hospital: lists.hospitalList.findIndex(function (item) {
            return item.label === pickeds.hospital;
          }),
          projectName: lists.projectList.findIndex(function (item) {
            return item.label === pickeds.projectName;
          }),
          orderDate: lists.orderDateList.findIndex(function (item) {
            return item.label === pickeds.orderDate;
          }),
          orderTime: lists.orderTimeList.findIndex(function (item) {
            return item.label === pickeds.orderTime;
          })
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVySW5mby5qcyJdLCJuYW1lcyI6WyJJVEVNUyIsImxhYmVsIiwicGlja2VyIiwidmFsdWVCaW5kIiwicmFuZ2VCaW5kIiwiQ3VzdG9tQ2FyZCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxpc3RzIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJob3NwaXRhbExpc3QiLCJwcm9qZWN0TGlzdCIsIm9yZGVyRGF0ZUxpc3QiLCJvcmRlclRpbWVMaXN0IiwicGlja2VkcyIsInR3b1dheSIsImhvc3BpdGFsIiwicHJvamVjdE5hbWUiLCJvcmRlckRhdGUiLCJvcmRlclRpbWUiLCJtaXhpbnMiLCJkYXRhIiwiY29tcHV0ZWQiLCJwaWNrZWRJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJtZXRob2RzIiwiaGFuZGxlUGlja2VyQ2hhbmdlIiwiZGV0YWlsIiwiaW5kZXgiLCJ2YWx1ZSIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsQ0FBQztBQUNiQyxTQUFPLE1BRE07QUFFYkMsVUFBUTtBQUNOQyxlQUFXLFVBREw7QUFFTkMsZUFBVztBQUZMO0FBRkssQ0FBRCxFQU1YO0FBQ0RILFNBQU8sSUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsYUFETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQU5XLEVBWVg7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxXQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBWlcsRUFrQlg7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxXQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBbEJXLENBQWQ7O0lBeUJxQkMsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxVLEdBQWEsRSxRQUdiQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQyxNQUREO0FBRUxDLGlCQUFTO0FBQ1BDLHdCQUFjLEVBRFA7QUFFUEMsdUJBQWEsRUFGTjtBQUdQQyx5QkFBZSxFQUhSO0FBSVBDLHlCQUFlO0FBSlI7QUFGSixPQUREO0FBVU5DLGVBQVM7QUFDUFAsY0FBTUMsTUFEQztBQUVQTyxnQkFBUSxJQUZEO0FBR1BOLGlCQUFTO0FBQ1BPLG9CQUFVLEVBREg7QUFFUEMsdUJBQWEsRUFGTjtBQUdQQyxxQkFBVyxFQUhKO0FBSVBDLHFCQUFXO0FBSko7QUFIRjtBQVZILEssUUFzQlJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMdkI7QUFESyxLLFFBSVB3QixRLEdBQVc7QUFDVEMsaUJBRFMseUJBQ007QUFDYixZQUFNakIsUUFBUSxLQUFLQSxLQUFuQjtBQUNBLFlBQU1RLFVBQVUsS0FBS0EsT0FBckI7QUFDQSxlQUFPO0FBQ0xFLG9CQUFVVixNQUFNSSxZQUFOLENBQW1CYyxTQUFuQixDQUE2QjtBQUFBLG1CQUFRQyxLQUFLMUIsS0FBTCxLQUFlZSxRQUFRRSxRQUEvQjtBQUFBLFdBQTdCLENBREw7QUFFTEMsdUJBQWFYLE1BQU1LLFdBQU4sQ0FBa0JhLFNBQWxCLENBQTRCO0FBQUEsbUJBQVFDLEtBQUsxQixLQUFMLEtBQWVlLFFBQVFHLFdBQS9CO0FBQUEsV0FBNUIsQ0FGUjtBQUdMQyxxQkFBV1osTUFBTU0sYUFBTixDQUFvQlksU0FBcEIsQ0FBOEI7QUFBQSxtQkFBUUMsS0FBSzFCLEtBQUwsS0FBZWUsUUFBUUksU0FBL0I7QUFBQSxXQUE5QixDQUhOO0FBSUxDLHFCQUFXYixNQUFNTyxhQUFOLENBQW9CVyxTQUFwQixDQUE4QjtBQUFBLG1CQUFRQyxLQUFLMUIsS0FBTCxLQUFlZSxRQUFRSyxTQUEvQjtBQUFBLFdBQTlCO0FBSk4sU0FBUDtBQU1EO0FBVlEsSyxRQWFYTyxPLEdBQVU7QUFDUkMsd0JBRFEsOEJBQ1kxQixTQURaLEVBQ3VCQyxTQUR2QixTQUM4QztBQUFBLFlBQVYwQixNQUFVLFNBQVZBLE1BQVU7O0FBQ3BELFlBQU1DLFFBQVFELE9BQU9FLEtBQXJCO0FBQ0EsWUFBSUQsS0FBSixFQUFXO0FBQ1QsZUFBS2YsT0FBTCxDQUFhYixTQUFiLElBQTBCLEtBQUtLLEtBQUwsQ0FBV0osU0FBWCxFQUFzQjJCLEtBQXRCLEVBQTZCOUIsS0FBdkQ7QUFDRDtBQUNGO0FBTk8sSyxRQVNWZ0MsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUExRHFDLGVBQUtDLFM7O2tCQUF4QjdCLFUiLCJmaWxlIjoib3JkZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgY29uc3QgSVRFTVMgPSBbe1xuICAgIGxhYmVsOiAn6Zmi5Yy65ZCN56ewJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ2hvc3BpdGFsJyxcbiAgICAgIHJhbmdlQmluZDogJ2hvc3BpdGFsTGlzdCdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+mhueebricsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdwcm9qZWN0TmFtZScsXG4gICAgICByYW5nZUJpbmQ6ICdwcm9qZWN0TGlzdCdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+mihOe6puaXpeacnycsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdvcmRlckRhdGUnLFxuICAgICAgcmFuZ2VCaW5kOiAnb3JkZXJEYXRlTGlzdCdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+mihOe6puaXtumXtCcsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdvcmRlclRpbWUnLFxuICAgICAgcmFuZ2VCaW5kOiAnb3JkZXJUaW1lTGlzdCdcbiAgICB9XG4gIH1dXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUNhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3RzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGhvc3BpdGFsTGlzdDogW10sXG4gICAgICAgICAgcHJvamVjdExpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyVGltZUxpc3Q6IFtdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwaWNrZWRzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaG9zcGl0YWw6ICcnLFxuICAgICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICAgICAgICBvcmRlckRhdGU6ICcnLFxuICAgICAgICAgIG9yZGVyVGltZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgSVRFTVNcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHBpY2tlZEluZGV4ICgpIHtcbiAgICAgICAgY29uc3QgbGlzdHMgPSB0aGlzLmxpc3RzXG4gICAgICAgIGNvbnN0IHBpY2tlZHMgPSB0aGlzLnBpY2tlZHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3NwaXRhbDogbGlzdHMuaG9zcGl0YWxMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IHBpY2tlZHMuaG9zcGl0YWwpLFxuICAgICAgICAgIHByb2plY3ROYW1lOiBsaXN0cy5wcm9qZWN0TGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBwaWNrZWRzLnByb2plY3ROYW1lKSxcbiAgICAgICAgICBvcmRlckRhdGU6IGxpc3RzLm9yZGVyRGF0ZUxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gcGlja2Vkcy5vcmRlckRhdGUpLFxuICAgICAgICAgIG9yZGVyVGltZTogbGlzdHMub3JkZXJUaW1lTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBwaWNrZWRzLm9yZGVyVGltZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZXJDaGFuZ2UgKHZhbHVlQmluZCwgcmFuZ2VCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgIHRoaXMucGlja2Vkc1t2YWx1ZUJpbmRdID0gdGhpcy5saXN0c1tyYW5nZUJpbmRdW2luZGV4XS5sYWJlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
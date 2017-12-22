'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPicker = require('./customPicker.js');

var _customPicker2 = _interopRequireDefault(_customPicker);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = { "ITEMS": { "com": "CustomPicker", "props": "" } }, _this.$props = { "CustomPicker": { "key": { "value": "{{ index }}", "for": "ITEMS", "item": "item", "index": "index", "key": "index" }, "xmlns:v-bind": { "value": "", "for": "ITEMS", "item": "item", "index": "index", "key": "index" }, "v-bind:range.sync": { "value": "$lists[{{item.picker.rangeBind}}]", "for": "ITEMS", "item": "item", "index": "index", "key": "index" }, "value.sync": { "value": "{{ $pickeds[item.picker.valueBind] }}", "for": "ITEMS", "item": "item", "index": "index", "key": "index" } } }, _this.$events = {}, _this.components = {
      CustomPicker: _customPicker2.default
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
      '$lists': function $lists() {
        return this.lists;
      },
      '$pickeds': function $pickeds() {
        return this.pickeds;
      },
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
    }, _this.watch = {}, _this.methods = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9vcmRlckluZm8uanMiXSwibmFtZXMiOlsiSVRFTVMiLCJsYWJlbCIsInBpY2tlciIsInZhbHVlQmluZCIsInJhbmdlQmluZCIsIkN1c3RvbUNhcmQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDdXN0b21QaWNrZXIiLCJwcm9wcyIsImxpc3RzIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJob3NwaXRhbExpc3QiLCJwcm9qZWN0TGlzdCIsIm9yZGVyRGF0ZUxpc3QiLCJvcmRlclRpbWVMaXN0IiwicGlja2VkcyIsInR3b1dheSIsImhvc3BpdGFsIiwicHJvamVjdE5hbWUiLCJvcmRlckRhdGUiLCJvcmRlclRpbWUiLCJtaXhpbnMiLCJkYXRhIiwiY29tcHV0ZWQiLCJwaWNrZWRJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJ3YXRjaCIsIm1ldGhvZHMiLCJoYW5kbGVQaWNrZXJDaGFuZ2UiLCJkZXRhaWwiLCJpbmRleCIsInZhbHVlIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLENBQUM7QUFDYkMsU0FBTyxNQURNO0FBRWJDLFVBQVE7QUFDTkMsZUFBVyxVQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZLLENBQUQsRUFNWDtBQUNESCxTQUFPLElBRE47QUFFREMsVUFBUTtBQUNOQyxlQUFXLGFBREw7QUFFTkMsZUFBVztBQUZMO0FBRlAsQ0FOVyxFQVlYO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsV0FETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQVpXLEVBa0JYO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsV0FETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQWxCVyxDQUFkOztJQXlCcUJDLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNwQkMsTyxHQUFVLEVBQUMsU0FBUSxF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IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21QaWNrZXIgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbVBpY2tlcidcblxuICBjb25zdCBJVEVNUyA9IFt7XG4gICAgbGFiZWw6ICfpmaLljLrlkI3np7AnLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnaG9zcGl0YWwnLFxuICAgICAgcmFuZ2VCaW5kOiAnaG9zcGl0YWxMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aG555uuJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ3Byb2plY3ROYW1lJyxcbiAgICAgIHJhbmdlQmluZDogJ3Byb2plY3RMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aKE57qm5pel5pyfJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ29yZGVyRGF0ZScsXG4gICAgICByYW5nZUJpbmQ6ICdvcmRlckRhdGVMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aKE57qm5pe26Ze0JyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ29yZGVyVGltZScsXG4gICAgICByYW5nZUJpbmQ6ICdvcmRlclRpbWVMaXN0J1xuICAgIH1cbiAgfV1cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICRyZXBlYXQgPSB7XCJJVEVNU1wiOntcImNvbVwiOlwiQ3VzdG9tUGlja2VyXCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1wiQ3VzdG9tUGlja2VyXCI6e1wia2V5XCI6e1widmFsdWVcIjpcInt7IGluZGV4IH19XCIsXCJmb3JcIjpcIklURU1TXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcIklURU1TXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6cmFuZ2Uuc3luY1wiOntcInZhbHVlXCI6XCIkbGlzdHNbe3tpdGVtLnBpY2tlci5yYW5nZUJpbmR9fV1cIixcImZvclwiOlwiSVRFTVNcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInZhbHVlLnN5bmNcIjp7XCJ2YWx1ZVwiOlwie3sgJHBpY2tlZHNbaXRlbS5waWNrZXIudmFsdWVCaW5kXSB9fVwiLFwiZm9yXCI6XCJJVEVNU1wiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBDdXN0b21QaWNrZXJcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3RzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGhvc3BpdGFsTGlzdDogW10sXG4gICAgICAgICAgcHJvamVjdExpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdLFxuICAgICAgICAgIG9yZGVyVGltZUxpc3Q6IFtdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwaWNrZWRzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaG9zcGl0YWw6ICcnLFxuICAgICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICAgICAgICBvcmRlckRhdGU6ICcnLFxuICAgICAgICAgIG9yZGVyVGltZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgSVRFTVNcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICckbGlzdHMnICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHNcbiAgICAgIH0sXG4gICAgICAnJHBpY2tlZHMnICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGlja2Vkc1xuICAgICAgfSxcbiAgICAgIHBpY2tlZEluZGV4ICgpIHtcbiAgICAgICAgY29uc3QgbGlzdHMgPSB0aGlzLmxpc3RzXG4gICAgICAgIGNvbnN0IHBpY2tlZHMgPSB0aGlzLnBpY2tlZHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBob3NwaXRhbDogbGlzdHMuaG9zcGl0YWxMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IHBpY2tlZHMuaG9zcGl0YWwpLFxuICAgICAgICAgIHByb2plY3ROYW1lOiBsaXN0cy5wcm9qZWN0TGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBwaWNrZWRzLnByb2plY3ROYW1lKSxcbiAgICAgICAgICBvcmRlckRhdGU6IGxpc3RzLm9yZGVyRGF0ZUxpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gcGlja2Vkcy5vcmRlckRhdGUpLFxuICAgICAgICAgIG9yZGVyVGltZTogbGlzdHMub3JkZXJUaW1lTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBwaWNrZWRzLm9yZGVyVGltZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZXJDaGFuZ2UgKHZhbHVlQmluZCwgcmFuZ2VCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgIHRoaXMucGlja2Vkc1t2YWx1ZUJpbmRdID0gdGhpcy5saXN0c1tyYW5nZUJpbmRdW2luZGV4XS5sYWJlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
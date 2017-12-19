'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '修改信息'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      ITEMS: ITEMS,
      lists: {
        hospitalList: [{
          id: 0,
          label: '医院一'
        }, {
          id: 1,
          label: '医院二'
        }],
        projectList: [{
          id: 0,
          label: '项目一'
        }, {
          id: 1,
          label: '项目二'
        }],
        orderDateList: [{
          label: '2017-12-1'
        }, {
          label: '2017-12-2'
        }, {
          label: '2017-12-3'
        }],
        orderTimeList: [{
          label: '1:00~2:00'
        }, {
          label: '2:00~3:00'
        }]
      },
      pickeds: {
        hospital: '医院二',
        projectName: '项目二',
        orderDate: '2017-12-1',
        orderTime: '1:00~2:00'
      }
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

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_vip_update'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3ZpcF91cGRhdGUuanMiXSwibmFtZXMiOlsiSVRFTVMiLCJsYWJlbCIsInBpY2tlciIsInZhbHVlQmluZCIsInJhbmdlQmluZCIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwibGlzdHMiLCJob3NwaXRhbExpc3QiLCJpZCIsInByb2plY3RMaXN0Iiwib3JkZXJEYXRlTGlzdCIsIm9yZGVyVGltZUxpc3QiLCJwaWNrZWRzIiwiaG9zcGl0YWwiLCJwcm9qZWN0TmFtZSIsIm9yZGVyRGF0ZSIsIm9yZGVyVGltZSIsImNvbXB1dGVkIiwicGlja2VkSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwibWV0aG9kcyIsImhhbmRsZVBpY2tlckNoYW5nZSIsImRldGFpbCIsImluZGV4IiwidmFsdWUiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxDQUFDO0FBQ2JDLFNBQU8sTUFETTtBQUViQyxVQUFRO0FBQ05DLGVBQVcsVUFETDtBQUVOQyxlQUFXO0FBRkw7QUFGSyxDQUFELEVBTVg7QUFDREgsU0FBTyxJQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxhQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBTlcsRUFZWDtBQUNESCxTQUFPLE1BRE47QUFFREMsVUFBUTtBQUNOQyxlQUFXLFdBREw7QUFFTkMsZUFBVztBQUZMO0FBRlAsQ0FaVyxFQWtCWDtBQUNESCxTQUFPLE1BRE47QUFFREMsVUFBUTtBQUNOQyxlQUFXLFdBREw7QUFFTkMsZUFBVztBQUZMO0FBRlAsQ0FsQlcsQ0FBZDs7SUEwQnFCQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTFYsa0JBREs7QUFFTFcsYUFBTztBQUNMQyxzQkFBYyxDQUFDO0FBQ2JDLGNBQUksQ0FEUztBQUViWixpQkFBTztBQUZNLFNBQUQsRUFHWDtBQUNEWSxjQUFJLENBREg7QUFFRFosaUJBQU87QUFGTixTQUhXLENBRFQ7QUFRTGEscUJBQWEsQ0FBQztBQUNaRCxjQUFJLENBRFE7QUFFWlosaUJBQU87QUFGSyxTQUFELEVBR1Y7QUFDRFksY0FBSSxDQURIO0FBRURaLGlCQUFPO0FBRk4sU0FIVSxDQVJSO0FBZUxjLHVCQUFlLENBQUM7QUFDZGQsaUJBQU87QUFETyxTQUFELEVBRVo7QUFDREEsaUJBQU87QUFETixTQUZZLEVBSVo7QUFDREEsaUJBQU87QUFETixTQUpZLENBZlY7QUFzQkxlLHVCQUFlLENBQUM7QUFDZGYsaUJBQU87QUFETyxTQUFELEVBRVo7QUFDREEsaUJBQU87QUFETixTQUZZO0FBdEJWLE9BRkY7QUE4QkxnQixlQUFTO0FBQ1BDLGtCQUFVLEtBREg7QUFFUEMscUJBQWEsS0FGTjtBQUdQQyxtQkFBVyxXQUhKO0FBSVBDLG1CQUFXO0FBSko7QUE5QkosSyxRQXNDUEMsUSxHQUFXO0FBQ1RDLGlCQURTLHlCQUNNO0FBQ2IsWUFBTVosUUFBUSxLQUFLQSxLQUFuQjtBQUNBLFlBQU1NLFVBQVUsS0FBS0EsT0FBckI7QUFDQSxlQUFPO0FBQ0xDLG9CQUFVUCxNQUFNQyxZQUFOLENBQW1CWSxTQUFuQixDQUE2QjtBQUFBLG1CQUFRQyxLQUFLeEIsS0FBTCxLQUFlZ0IsUUFBUUMsUUFBL0I7QUFBQSxXQUE3QixDQURMO0FBRUxDLHVCQUFhUixNQUFNRyxXQUFOLENBQWtCVSxTQUFsQixDQUE0QjtBQUFBLG1CQUFRQyxLQUFLeEIsS0FBTCxLQUFlZ0IsUUFBUUUsV0FBL0I7QUFBQSxXQUE1QixDQUZSO0FBR0xDLHFCQUFXVCxNQUFNSSxhQUFOLENBQW9CUyxTQUFwQixDQUE4QjtBQUFBLG1CQUFRQyxLQUFLeEIsS0FBTCxLQUFlZ0IsUUFBUUcsU0FBL0I7QUFBQSxXQUE5QixDQUhOO0FBSUxDLHFCQUFXVixNQUFNSyxhQUFOLENBQW9CUSxTQUFwQixDQUE4QjtBQUFBLG1CQUFRQyxLQUFLeEIsS0FBTCxLQUFlZ0IsUUFBUUksU0FBL0I7QUFBQSxXQUE5QjtBQUpOLFNBQVA7QUFNRDtBQVZRLEssUUFhWEssTyxHQUFVO0FBQ1JDLHdCQURRLDhCQUNZeEIsU0FEWixFQUN1QkMsU0FEdkIsU0FDOEM7QUFBQSxZQUFWd0IsTUFBVSxTQUFWQSxNQUFVOztBQUNwRCxZQUFNQyxRQUFRRCxPQUFPRSxLQUFyQjtBQUNBLFlBQUlELEtBQUosRUFBVztBQUNULGVBQUtaLE9BQUwsQ0FBYWQsU0FBYixJQUEwQixLQUFLUSxLQUFMLENBQVdQLFNBQVgsRUFBc0J5QixLQUF0QixFQUE2QjVCLEtBQXZEO0FBQ0Q7QUFDRjtBQU5PLEssUUFTVjhCLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBekVnQyxlQUFLQyxJOztrQkFBbkIzQixLIiwiZmlsZSI6Im15X3ZpcF91cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBjb25zdCBJVEVNUyA9IFt7XG4gICAgbGFiZWw6ICfpmaLljLrlkI3np7AnLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnaG9zcGl0YWwnLFxuICAgICAgcmFuZ2VCaW5kOiAnaG9zcGl0YWxMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aG555uuJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ3Byb2plY3ROYW1lJyxcbiAgICAgIHJhbmdlQmluZDogJ3Byb2plY3RMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aKE57qm5pel5pyfJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ29yZGVyRGF0ZScsXG4gICAgICByYW5nZUJpbmQ6ICdvcmRlckRhdGVMaXN0J1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn6aKE57qm5pe26Ze0JyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ29yZGVyVGltZScsXG4gICAgICByYW5nZUJpbmQ6ICdvcmRlclRpbWVMaXN0J1xuICAgIH1cbiAgfV1cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S/ruaUueS/oeaBrydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIElURU1TLFxuICAgICAgbGlzdHM6IHtcbiAgICAgICAgaG9zcGl0YWxMaXN0OiBbe1xuICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgIGxhYmVsOiAn5Yy76Zmi5LiAJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgbGFiZWw6ICfljLvpmaLkuownXG4gICAgICAgIH1dLFxuICAgICAgICBwcm9qZWN0TGlzdDogW3tcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBsYWJlbDogJ+mhueebruS4gCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGxhYmVsOiAn6aG555uu5LqMJ1xuICAgICAgICB9XSxcbiAgICAgICAgb3JkZXJEYXRlTGlzdDogW3tcbiAgICAgICAgICBsYWJlbDogJzIwMTctMTItMSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnMjAxNy0xMi0yJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICcyMDE3LTEyLTMnXG4gICAgICAgIH1dLFxuICAgICAgICBvcmRlclRpbWVMaXN0OiBbe1xuICAgICAgICAgIGxhYmVsOiAnMTowMH4yOjAwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICcyOjAwfjM6MDAnXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgcGlja2Vkczoge1xuICAgICAgICBob3NwaXRhbDogJ+WMu+mZouS6jCcsXG4gICAgICAgIHByb2plY3ROYW1lOiAn6aG555uu5LqMJyxcbiAgICAgICAgb3JkZXJEYXRlOiAnMjAxNy0xMi0xJyxcbiAgICAgICAgb3JkZXJUaW1lOiAnMTowMH4yOjAwJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgcGlja2VkSW5kZXggKCkge1xuICAgICAgICBjb25zdCBsaXN0cyA9IHRoaXMubGlzdHNcbiAgICAgICAgY29uc3QgcGlja2VkcyA9IHRoaXMucGlja2Vkc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhvc3BpdGFsOiBsaXN0cy5ob3NwaXRhbExpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gcGlja2Vkcy5ob3NwaXRhbCksXG4gICAgICAgICAgcHJvamVjdE5hbWU6IGxpc3RzLnByb2plY3RMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IHBpY2tlZHMucHJvamVjdE5hbWUpLFxuICAgICAgICAgIG9yZGVyRGF0ZTogbGlzdHMub3JkZXJEYXRlTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBwaWNrZWRzLm9yZGVyRGF0ZSksXG4gICAgICAgICAgb3JkZXJUaW1lOiBsaXN0cy5vcmRlclRpbWVMaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IHBpY2tlZHMub3JkZXJUaW1lKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVBpY2tlckNoYW5nZSAodmFsdWVCaW5kLCByYW5nZUJpbmQsIHsgZGV0YWlsIH0pIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBkZXRhaWwudmFsdWVcbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgdGhpcy5waWNrZWRzW3ZhbHVlQmluZF0gPSB0aGlzLmxpc3RzW3JhbmdlQmluZF1baW5kZXhdLmxhYmVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
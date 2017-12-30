'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _orderInfo = require('./../components/orderInfo.js');

var _orderInfo2 = _interopRequireDefault(_orderInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      navigationBarTitleText: '预约信息'
    }, _this.$repeat = {}, _this.$props = { "OrderInfo": { "xmlns:v-bind": "", "v-bind:lists.sync": "lists", "v-bind:pickeds.sync": "pickeds" } }, _this.$events = {}, _this.components = {
      OrderInfo: _orderInfo2.default
    }, _this.mixins = [], _this.data = {
      lists: {
        hospitalList: [],
        projectList: [],
        orderDateList: [],
        orderTimeList: []
      },
      pickeds: {
        hospital: '',
        projectName: '',
        orderDate: '',
        orderTime: ''
      },
      successDialogVisible: false
    }, _this.computed = {}, _this.methods = {
      submit: function submit() {
        if (Math.random() > 0.5) {
          this.successDialogVisible = true;
        } else {
          wx.showToast({
            image: '../assets/images/demo.png',
            title: '提交失败'
          });
        }
      },
      closeDialog: function closeDialog() {
        this.successDialogVisible = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      setTimeout(function () {
        _this2.lists = {
          hospitalList: [{
            value: 'value0',
            label: '医院一'
          }, {
            value: 'value1',
            label: '医院二'
          }],
          projectList: [{
            value: 'value0',
            label: '项目一'
          }, {
            value: 'value1',
            label: '项目二'
          }],
          orderDateList: [{
            value: 'value0',
            label: '2017-12-1'
          }, {
            value: 'value1',
            label: '2017-12-2'
          }, {
            value: 'value2',
            label: '2017-12-3'
          }],
          orderTimeList: [{
            value: 'value0',
            label: '1:00~2:00'
          }, {
            value: 'value1',
            label: '2:00~3:00'
          }]
        };
        _this2.pickeds = {
          hospital: '医院二',
          projectName: '项目二',
          orderDate: '2017-12-1',
          orderTime: '1:00~2:00'
        };
        _this2.$apply();
      }, 1000);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/project_order_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Rfb3JkZXJfaW5mby5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJPcmRlckluZm8iLCJtaXhpbnMiLCJkYXRhIiwibGlzdHMiLCJob3NwaXRhbExpc3QiLCJwcm9qZWN0TGlzdCIsIm9yZGVyRGF0ZUxpc3QiLCJvcmRlclRpbWVMaXN0IiwicGlja2VkcyIsImhvc3BpdGFsIiwicHJvamVjdE5hbWUiLCJvcmRlckRhdGUiLCJvcmRlclRpbWUiLCJzdWNjZXNzRGlhbG9nVmlzaWJsZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInN1Ym1pdCIsIk1hdGgiLCJyYW5kb20iLCJ3eCIsInNob3dUb2FzdCIsImltYWdlIiwidGl0bGUiLCJjbG9zZURpYWxvZyIsImV2ZW50cyIsInNldFRpbWVvdXQiLCJ2YWx1ZSIsImxhYmVsIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHVCQUFzQixTQUFyRSxFQUFiLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsYUFBTztBQUNMQyxzQkFBYyxFQURUO0FBRUxDLHFCQUFhLEVBRlI7QUFHTEMsdUJBQWUsRUFIVjtBQUlMQyx1QkFBZTtBQUpWLE9BREY7QUFPTEMsZUFBUztBQUNQQyxrQkFBVSxFQURIO0FBRVBDLHFCQUFhLEVBRk47QUFHUEMsbUJBQVcsRUFISjtBQUlQQyxtQkFBVztBQUpKLE9BUEo7QUFhTEMsNEJBQXNCO0FBYmpCLEssUUFnQlBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNFO0FBQ1IsWUFBSUMsS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUN2QixlQUFLTCxvQkFBTCxHQUE0QixJQUE1QjtBQUNELFNBRkQsTUFFTztBQUNMTSxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sMkJBREk7QUFFWEMsbUJBQU87QUFGSSxXQUFiO0FBSUQ7QUFDRixPQVZPO0FBV1JDLGlCQVhRLHlCQVdPO0FBQ2IsYUFBS1Ysb0JBQUwsR0FBNEIsS0FBNUI7QUFDRDtBQWJPLEssUUFnQlZXLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUFBOztBQUNQQyxpQkFBVyxZQUFNO0FBQ2YsZUFBS3RCLEtBQUwsR0FBYTtBQUNYQyx3QkFBYyxDQUFDO0FBQ2JzQixtQkFBTyxRQURNO0FBRWJDLG1CQUFPO0FBRk0sV0FBRCxFQUdYO0FBQ0RELG1CQUFPLFFBRE47QUFFREMsbUJBQU87QUFGTixXQUhXLENBREg7QUFRWHRCLHVCQUFhLENBQUM7QUFDWnFCLG1CQUFPLFFBREs7QUFFWkMsbUJBQU87QUFGSyxXQUFELEVBR1Y7QUFDREQsbUJBQU8sUUFETjtBQUVEQyxtQkFBTztBQUZOLFdBSFUsQ0FSRjtBQWVYckIseUJBQWUsQ0FBQztBQUNkb0IsbUJBQU8sUUFETztBQUVkQyxtQkFBTztBQUZPLFdBQUQsRUFHWjtBQUNERCxtQkFBTyxRQUROO0FBRURDLG1CQUFPO0FBRk4sV0FIWSxFQU1aO0FBQ0RELG1CQUFPLFFBRE47QUFFREMsbUJBQU87QUFGTixXQU5ZLENBZko7QUF5QlhwQix5QkFBZSxDQUFDO0FBQ2RtQixtQkFBTyxRQURPO0FBRWRDLG1CQUFPO0FBRk8sV0FBRCxFQUdaO0FBQ0RELG1CQUFPLFFBRE47QUFFREMsbUJBQU87QUFGTixXQUhZO0FBekJKLFNBQWI7QUFpQ0EsZUFBS25CLE9BQUwsR0FBZTtBQUNiQyxvQkFBVSxLQURHO0FBRWJDLHVCQUFhLEtBRkE7QUFHYkMscUJBQVcsV0FIRTtBQUliQyxxQkFBVztBQUpFLFNBQWY7QUFNQSxlQUFLZ0IsTUFBTDtBQUNELE9BekNELEVBeUNHLElBekNIO0FBMENEOzs7O0VBOUZnQyxlQUFLQyxJOztrQkFBbkJwQyxLIiwiZmlsZSI6InByb2plY3Rfb3JkZXJfaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBPcmRlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlckluZm8nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpooTnuqbkv6Hmga8nXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJPcmRlckluZm9cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3RzLnN5bmNcIjpcImxpc3RzXCIsXCJ2LWJpbmQ6cGlja2Vkcy5zeW5jXCI6XCJwaWNrZWRzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIE9yZGVySW5mb1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgbGlzdHM6IHtcbiAgICAgICAgaG9zcGl0YWxMaXN0OiBbXSxcbiAgICAgICAgcHJvamVjdExpc3Q6IFtdLFxuICAgICAgICBvcmRlckRhdGVMaXN0OiBbXSxcbiAgICAgICAgb3JkZXJUaW1lTGlzdDogW11cbiAgICAgIH0sXG4gICAgICBwaWNrZWRzOiB7XG4gICAgICAgIGhvc3BpdGFsOiAnJyxcbiAgICAgICAgcHJvamVjdE5hbWU6ICcnLFxuICAgICAgICBvcmRlckRhdGU6ICcnLFxuICAgICAgICBvcmRlclRpbWU6ICcnXG4gICAgICB9LFxuICAgICAgc3VjY2Vzc0RpYWxvZ1Zpc2libGU6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN1Ym1pdCAoKSB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgdGhpcy5zdWNjZXNzRGlhbG9nVmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL2RlbW8ucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q5Lqk5aSx6LSlJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjbG9zZURpYWxvZyAoKSB7XG4gICAgICAgIHRoaXMuc3VjY2Vzc0RpYWxvZ1Zpc2libGUgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5saXN0cyA9IHtcbiAgICAgICAgICBob3NwaXRhbExpc3Q6IFt7XG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMCcsXG4gICAgICAgICAgICBsYWJlbDogJ+WMu+mZouS4gCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMScsXG4gICAgICAgICAgICBsYWJlbDogJ+WMu+mZouS6jCdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBwcm9qZWN0TGlzdDogW3tcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUwJyxcbiAgICAgICAgICAgIGxhYmVsOiAn6aG555uu5LiAJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAndmFsdWUxJyxcbiAgICAgICAgICAgIGxhYmVsOiAn6aG555uu5LqMJ1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFt7XG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMCcsXG4gICAgICAgICAgICBsYWJlbDogJzIwMTctMTItMSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMScsXG4gICAgICAgICAgICBsYWJlbDogJzIwMTctMTItMidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogJ3ZhbHVlMicsXG4gICAgICAgICAgICBsYWJlbDogJzIwMTctMTItMydcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBvcmRlclRpbWVMaXN0OiBbe1xuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTAnLFxuICAgICAgICAgICAgbGFiZWw6ICcxOjAwfjI6MDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6ICd2YWx1ZTEnLFxuICAgICAgICAgICAgbGFiZWw6ICcyOjAwfjM6MDAnXG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBpY2tlZHMgPSB7XG4gICAgICAgICAgaG9zcGl0YWw6ICfljLvpmaLkuownLFxuICAgICAgICAgIHByb2plY3ROYW1lOiAn6aG555uu5LqMJyxcbiAgICAgICAgICBvcmRlckRhdGU6ICcyMDE3LTEyLTEnLFxuICAgICAgICAgIG9yZGVyVGltZTogJzE6MDB+MjowMCdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgfVxuIl19
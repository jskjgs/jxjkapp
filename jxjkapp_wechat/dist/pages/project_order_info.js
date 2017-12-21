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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Rfb3JkZXJfaW5mby5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJPcmRlckluZm8iLCJtaXhpbnMiLCJkYXRhIiwibGlzdHMiLCJob3NwaXRhbExpc3QiLCJwcm9qZWN0TGlzdCIsIm9yZGVyRGF0ZUxpc3QiLCJvcmRlclRpbWVMaXN0IiwicGlja2VkcyIsImhvc3BpdGFsIiwicHJvamVjdE5hbWUiLCJvcmRlckRhdGUiLCJvcmRlclRpbWUiLCJzdWNjZXNzRGlhbG9nVmlzaWJsZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInN1Ym1pdCIsIk1hdGgiLCJyYW5kb20iLCJ3eCIsInNob3dUb2FzdCIsImltYWdlIiwidGl0bGUiLCJjbG9zZURpYWxvZyIsImV2ZW50cyIsInNldFRpbWVvdXQiLCJpZCIsImxhYmVsIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQStDLHVCQUFzQixTQUFyRSxFQUFiLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsYUFBTztBQUNMQyxzQkFBYyxFQURUO0FBRUxDLHFCQUFhLEVBRlI7QUFHTEMsdUJBQWUsRUFIVjtBQUlMQyx1QkFBZTtBQUpWLE9BREY7QUFPTEMsZUFBUztBQUNQQyxrQkFBVSxFQURIO0FBRVBDLHFCQUFhLEVBRk47QUFHUEMsbUJBQVcsRUFISjtBQUlQQyxtQkFBVztBQUpKLE9BUEo7QUFhTEMsNEJBQXNCO0FBYmpCLEssUUFnQlBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNFO0FBQ1IsWUFBSUMsS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUN2QixlQUFLTCxvQkFBTCxHQUE0QixJQUE1QjtBQUNELFNBRkQsTUFFTztBQUNMTSxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sMkJBREk7QUFFWEMsbUJBQU87QUFGSSxXQUFiO0FBSUQ7QUFDRixPQVZPO0FBV1JDLGlCQVhRLHlCQVdPO0FBQ2IsYUFBS1Ysb0JBQUwsR0FBNEIsS0FBNUI7QUFDRDtBQWJPLEssUUFnQlZXLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUFBOztBQUNQQyxpQkFBVyxZQUFNO0FBQ2YsZUFBS3RCLEtBQUwsR0FBYTtBQUNYQyx3QkFBYyxDQUFDO0FBQ2JzQixnQkFBSSxDQURTO0FBRWJDLG1CQUFPO0FBRk0sV0FBRCxFQUdYO0FBQ0RELGdCQUFJLENBREg7QUFFREMsbUJBQU87QUFGTixXQUhXLENBREg7QUFRWHRCLHVCQUFhLENBQUM7QUFDWnFCLGdCQUFJLENBRFE7QUFFWkMsbUJBQU87QUFGSyxXQUFELEVBR1Y7QUFDREQsZ0JBQUksQ0FESDtBQUVEQyxtQkFBTztBQUZOLFdBSFUsQ0FSRjtBQWVYckIseUJBQWUsQ0FBQztBQUNkcUIsbUJBQU87QUFETyxXQUFELEVBRVo7QUFDREEsbUJBQU87QUFETixXQUZZLEVBSVo7QUFDREEsbUJBQU87QUFETixXQUpZLENBZko7QUFzQlhwQix5QkFBZSxDQUFDO0FBQ2RvQixtQkFBTztBQURPLFdBQUQsRUFFWjtBQUNEQSxtQkFBTztBQUROLFdBRlk7QUF0QkosU0FBYjtBQTRCQSxlQUFLbkIsT0FBTCxHQUFlO0FBQ2JDLG9CQUFVLEtBREc7QUFFYkMsdUJBQWEsS0FGQTtBQUdiQyxxQkFBVyxXQUhFO0FBSWJDLHFCQUFXO0FBSkUsU0FBZjtBQU1BLGVBQUtnQixNQUFMO0FBQ0QsT0FwQ0QsRUFvQ0csSUFwQ0g7QUFxQ0Q7Ozs7RUF6RmdDLGVBQUtDLEk7O2tCQUFuQnBDLEsiLCJmaWxlIjoicHJvamVjdF9vcmRlcl9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IE9yZGVySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL29yZGVySW5mbydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihOe6puS/oeaBrydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk9yZGVySW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdHMuc3luY1wiOlwibGlzdHNcIixcInYtYmluZDpwaWNrZWRzLnN5bmNcIjpcInBpY2tlZHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgT3JkZXJJbmZvXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0czoge1xuICAgICAgICBob3NwaXRhbExpc3Q6IFtdLFxuICAgICAgICBwcm9qZWN0TGlzdDogW10sXG4gICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdLFxuICAgICAgICBvcmRlclRpbWVMaXN0OiBbXVxuICAgICAgfSxcbiAgICAgIHBpY2tlZHM6IHtcbiAgICAgICAgaG9zcGl0YWw6ICcnLFxuICAgICAgICBwcm9qZWN0TmFtZTogJycsXG4gICAgICAgIG9yZGVyRGF0ZTogJycsXG4gICAgICAgIG9yZGVyVGltZTogJydcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzRGlhbG9nVmlzaWJsZTogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgc3VibWl0ICgpIHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICB0aGlzLnN1Y2Nlc3NEaWFsb2dWaXNpYmxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfmj5DkuqTlpLHotKUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsb3NlRGlhbG9nICgpIHtcbiAgICAgICAgdGhpcy5zdWNjZXNzRGlhbG9nVmlzaWJsZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxpc3RzID0ge1xuICAgICAgICAgIGhvc3BpdGFsTGlzdDogW3tcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgbGFiZWw6ICfljLvpmaLkuIAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ+WMu+mZouS6jCdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBwcm9qZWN0TGlzdDogW3tcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgbGFiZWw6ICfpobnnm67kuIAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ+mhueebruS6jCdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBvcmRlckRhdGVMaXN0OiBbe1xuICAgICAgICAgICAgbGFiZWw6ICcyMDE3LTEyLTEnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICcyMDE3LTEyLTInXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICcyMDE3LTEyLTMnXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgb3JkZXJUaW1lTGlzdDogW3tcbiAgICAgICAgICAgIGxhYmVsOiAnMTowMH4yOjAwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnMjowMH4zOjAwJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5waWNrZWRzID0ge1xuICAgICAgICAgIGhvc3BpdGFsOiAn5Yy76Zmi5LqMJyxcbiAgICAgICAgICBwcm9qZWN0TmFtZTogJ+mhueebruS6jCcsXG4gICAgICAgICAgb3JkZXJEYXRlOiAnMjAxNy0xMi0xJyxcbiAgICAgICAgICBvcmRlclRpbWU6ICcxOjAwfjI6MDAnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMTAwMClcbiAgICB9XG4gIH1cbiJdfQ==
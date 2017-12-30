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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4X29yZGVyX2luZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiT3JkZXJJbmZvIiwibWl4aW5zIiwiZGF0YSIsImxpc3RzIiwiaG9zcGl0YWxMaXN0IiwicHJvamVjdExpc3QiLCJvcmRlckRhdGVMaXN0Iiwib3JkZXJUaW1lTGlzdCIsInBpY2tlZHMiLCJob3NwaXRhbCIsInByb2plY3ROYW1lIiwib3JkZXJEYXRlIiwib3JkZXJUaW1lIiwic3VjY2Vzc0RpYWxvZ1Zpc2libGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzdWJtaXQiLCJNYXRoIiwicmFuZG9tIiwid3giLCJzaG93VG9hc3QiLCJpbWFnZSIsInRpdGxlIiwiY2xvc2VEaWFsb2ciLCJldmVudHMiLCJzZXRUaW1lb3V0IiwiaWQiLCJsYWJlbCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixPQUF2QyxFQUErQyx1QkFBc0IsU0FBckUsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGFBQU87QUFDTEMsc0JBQWMsRUFEVDtBQUVMQyxxQkFBYSxFQUZSO0FBR0xDLHVCQUFlLEVBSFY7QUFJTEMsdUJBQWU7QUFKVixPQURGO0FBT0xDLGVBQVM7QUFDUEMsa0JBQVUsRUFESDtBQUVQQyxxQkFBYSxFQUZOO0FBR1BDLG1CQUFXLEVBSEo7QUFJUEMsbUJBQVc7QUFKSixPQVBKO0FBYUxDLDRCQUFzQjtBQWJqQixLLFFBZ0JQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDRTtBQUNSLFlBQUlDLEtBQUtDLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDdkIsZUFBS0wsb0JBQUwsR0FBNEIsSUFBNUI7QUFDRCxTQUZELE1BRU87QUFDTE0sYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLDJCQURJO0FBRVhDLG1CQUFPO0FBRkksV0FBYjtBQUlEO0FBQ0YsT0FWTztBQVdSQyxpQkFYUSx5QkFXTztBQUNiLGFBQUtWLG9CQUFMLEdBQTRCLEtBQTVCO0FBQ0Q7QUFiTyxLLFFBZ0JWVyxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFBQTs7QUFDUEMsaUJBQVcsWUFBTTtBQUNmLGVBQUt0QixLQUFMLEdBQWE7QUFDWEMsd0JBQWMsQ0FBQztBQUNic0IsZ0JBQUksQ0FEUztBQUViQyxtQkFBTztBQUZNLFdBQUQsRUFHWDtBQUNERCxnQkFBSSxDQURIO0FBRURDLG1CQUFPO0FBRk4sV0FIVyxDQURIO0FBUVh0Qix1QkFBYSxDQUFDO0FBQ1pxQixnQkFBSSxDQURRO0FBRVpDLG1CQUFPO0FBRkssV0FBRCxFQUdWO0FBQ0RELGdCQUFJLENBREg7QUFFREMsbUJBQU87QUFGTixXQUhVLENBUkY7QUFlWHJCLHlCQUFlLENBQUM7QUFDZHFCLG1CQUFPO0FBRE8sV0FBRCxFQUVaO0FBQ0RBLG1CQUFPO0FBRE4sV0FGWSxFQUlaO0FBQ0RBLG1CQUFPO0FBRE4sV0FKWSxDQWZKO0FBc0JYcEIseUJBQWUsQ0FBQztBQUNkb0IsbUJBQU87QUFETyxXQUFELEVBRVo7QUFDREEsbUJBQU87QUFETixXQUZZO0FBdEJKLFNBQWI7QUE0QkEsZUFBS25CLE9BQUwsR0FBZTtBQUNiQyxvQkFBVSxLQURHO0FBRWJDLHVCQUFhLEtBRkE7QUFHYkMscUJBQVcsV0FIRTtBQUliQyxxQkFBVztBQUpFLFNBQWY7QUFNQSxlQUFLZ0IsTUFBTDtBQUNELE9BcENELEVBb0NHLElBcENIO0FBcUNEOzs7O0VBekZnQyxlQUFLQyxJOztrQkFBbkJwQyxLIiwiZmlsZSI6ImluZGV4X29yZGVyX2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgT3JkZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJJbmZvJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aKE57qm5L+h5oGvJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiT3JkZXJJbmZvXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0cy5zeW5jXCI6XCJsaXN0c1wiLFwidi1iaW5kOnBpY2tlZHMuc3luY1wiOlwicGlja2Vkc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBPcmRlckluZm9cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3RzOiB7XG4gICAgICAgIGhvc3BpdGFsTGlzdDogW10sXG4gICAgICAgIHByb2plY3RMaXN0OiBbXSxcbiAgICAgICAgb3JkZXJEYXRlTGlzdDogW10sXG4gICAgICAgIG9yZGVyVGltZUxpc3Q6IFtdXG4gICAgICB9LFxuICAgICAgcGlja2Vkczoge1xuICAgICAgICBob3NwaXRhbDogJycsXG4gICAgICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICAgICAgb3JkZXJEYXRlOiAnJyxcbiAgICAgICAgb3JkZXJUaW1lOiAnJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3NEaWFsb2dWaXNpYmxlOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzdWJtaXQgKCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRoaXMuc3VjY2Vzc0RpYWxvZ1Zpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOWksei0pSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2xvc2VEaWFsb2cgKCkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3NEaWFsb2dWaXNpYmxlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdHMgPSB7XG4gICAgICAgICAgaG9zcGl0YWxMaXN0OiBbe1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBsYWJlbDogJ+WMu+mZouS4gCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGxhYmVsOiAn5Yy76Zmi5LqMJ1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIHByb2plY3RMaXN0OiBbe1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBsYWJlbDogJ+mhueebruS4gCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGxhYmVsOiAn6aG555uu5LqMJ1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFt7XG4gICAgICAgICAgICBsYWJlbDogJzIwMTctMTItMSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJzIwMTctMTItMidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJzIwMTctMTItMydcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBvcmRlclRpbWVMaXN0OiBbe1xuICAgICAgICAgICAgbGFiZWw6ICcxOjAwfjI6MDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICcyOjAwfjM6MDAnXG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBpY2tlZHMgPSB7XG4gICAgICAgICAgaG9zcGl0YWw6ICfljLvpmaLkuownLFxuICAgICAgICAgIHByb2plY3ROYW1lOiAn6aG555uu5LqMJyxcbiAgICAgICAgICBvcmRlckRhdGU6ICcyMDE3LTEyLTEnLFxuICAgICAgICAgIG9yZGVyVGltZTogJzE6MDB+MjowMCdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgfVxuIl19
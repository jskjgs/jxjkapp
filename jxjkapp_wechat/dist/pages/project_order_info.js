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
      name: '', // 项目名称
      lists: {
        hospitalList: [],
        orderDateList: []
      },
      pickeds: {
        projectName: undefined,
        hospital: undefined,
        orderDate: undefined
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
    value: function onLoad(_ref2) {
      var id = _ref2.id,
          skuId = _ref2.skuId,
          name = _ref2.name;

      this.skuId = skuId;
      this.name = name;
      this.pickeds.projectName = name;
      this.getAllHospArea();
    }
    // 获取院区列表

  }, {
    key: 'getAllHospArea',
    value: function getAllHospArea() {
      var _this2 = this;

      this.$_request({
        url: '/hospArea/all',
        method: 'POST',
        data: {
          pageNum: 1
        }
      }).then(function (content) {
        content = content || {};
        var list = content.list || [];
        _this2.lists.hospitalList = list.map(function (item) {
          return {
            label: item.name,
            value: item.id
          };
        });
        _this2.$apply();
      });
    }
  }, {
    key: 'submit',
    value: function submit() {
      this.$_request({
        url: '/precontract/',
        method: 'POST',
        data: {
          productSkuId: this.skuId,
          precontractDate: ''
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/project_order_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Rfb3JkZXJfaW5mby5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJPcmRlckluZm8iLCJtaXhpbnMiLCJkYXRhIiwibmFtZSIsImxpc3RzIiwiaG9zcGl0YWxMaXN0Iiwib3JkZXJEYXRlTGlzdCIsInBpY2tlZHMiLCJwcm9qZWN0TmFtZSIsInVuZGVmaW5lZCIsImhvc3BpdGFsIiwib3JkZXJEYXRlIiwic3VjY2Vzc0RpYWxvZ1Zpc2libGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzdWJtaXQiLCJNYXRoIiwicmFuZG9tIiwid3giLCJzaG93VG9hc3QiLCJpbWFnZSIsInRpdGxlIiwiY2xvc2VEaWFsb2ciLCJldmVudHMiLCJpZCIsInNrdUlkIiwiZ2V0QWxsSG9zcEFyZWEiLCIkX3JlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYWdlTnVtIiwidGhlbiIsImNvbnRlbnQiLCJsaXN0IiwibWFwIiwibGFiZWwiLCJpdGVtIiwidmFsdWUiLCIkYXBwbHkiLCJwcm9kdWN0U2t1SWQiLCJwcmVjb250cmFjdERhdGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0MsdUJBQXNCLFNBQXJFLEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQsRUFDSztBQUNWQyxhQUFPO0FBQ0xDLHNCQUFjLEVBRFQ7QUFFTEMsdUJBQWU7QUFGVixPQUZGO0FBTUxDLGVBQVM7QUFDUEMscUJBQWFDLFNBRE47QUFFUEMsa0JBQVVELFNBRkg7QUFHUEUsbUJBQVdGO0FBSEosT0FOSjtBQVdMRyw0QkFBc0I7QUFYakIsSyxRQWNQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDRTtBQUNSLFlBQUlDLEtBQUtDLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDdkIsZUFBS0wsb0JBQUwsR0FBNEIsSUFBNUI7QUFDRCxTQUZELE1BRU87QUFDTE0sYUFBR0MsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLDJCQURJO0FBRVhDLG1CQUFPO0FBRkksV0FBYjtBQUlEO0FBQ0YsT0FWTztBQVdSQyxpQkFYUSx5QkFXTztBQUNiLGFBQUtWLG9CQUFMLEdBQTRCLEtBQTVCO0FBQ0Q7QUFiTyxLLFFBZ0JWVyxNLEdBQVMsRTs7Ozs7a0NBR2lCO0FBQUEsVUFBbEJDLEVBQWtCLFNBQWxCQSxFQUFrQjtBQUFBLFVBQWRDLEtBQWMsU0FBZEEsS0FBYztBQUFBLFVBQVB0QixJQUFPLFNBQVBBLElBQU87O0FBQ3hCLFdBQUtzQixLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLdEIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS0ksT0FBTCxDQUFhQyxXQUFiLEdBQTJCTCxJQUEzQjtBQUNBLFdBQUt1QixjQUFMO0FBQ0Q7QUFDRDs7OztxQ0FDa0I7QUFBQTs7QUFDaEIsV0FBS0MsU0FBTCxDQUFlO0FBQ2JDLGFBQUssZUFEUTtBQUViQyxnQkFBUSxNQUZLO0FBR2IzQixjQUFNO0FBQ0o0QixtQkFBUztBQURMO0FBSE8sT0FBZixFQU1HQyxJQU5ILENBTVEsbUJBQVc7QUFDakJDLGtCQUFVQSxXQUFXLEVBQXJCO0FBQ0EsWUFBTUMsT0FBT0QsUUFBUUMsSUFBUixJQUFnQixFQUE3QjtBQUNBLGVBQUs3QixLQUFMLENBQVdDLFlBQVgsR0FBMEI0QixLQUFLQyxHQUFMLENBQVMsZ0JBQVE7QUFDekMsaUJBQU87QUFDTEMsbUJBQU9DLEtBQUtqQyxJQURQO0FBRUxrQyxtQkFBT0QsS0FBS1o7QUFGUCxXQUFQO0FBSUQsU0FMeUIsQ0FBMUI7QUFNQSxlQUFLYyxNQUFMO0FBQ0QsT0FoQkQ7QUFpQkQ7Ozs2QkFFUztBQUNSLFdBQUtYLFNBQUwsQ0FBZTtBQUNiQyxhQUFLLGVBRFE7QUFFYkMsZ0JBQVEsTUFGSztBQUdiM0IsY0FBTTtBQUNKcUMsd0JBQWMsS0FBS2QsS0FEZjtBQUVKZSwyQkFBaUI7QUFGYjtBQUhPLE9BQWY7QUFRRDs7OztFQXJGZ0MsZUFBS0MsSTs7a0JBQW5CaEQsSyIsImZpbGUiOiJwcm9qZWN0X29yZGVyX2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgT3JkZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJJbmZvJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aKE57qm5L+h5oGvJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiT3JkZXJJbmZvXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0cy5zeW5jXCI6XCJsaXN0c1wiLFwidi1iaW5kOnBpY2tlZHMuc3luY1wiOlwicGlja2Vkc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBPcmRlckluZm9cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG5hbWU6ICcnLCAvLyDpobnnm67lkI3np7BcbiAgICAgIGxpc3RzOiB7XG4gICAgICAgIGhvc3BpdGFsTGlzdDogW10sXG4gICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdXG4gICAgICB9LFxuICAgICAgcGlja2Vkczoge1xuICAgICAgICBwcm9qZWN0TmFtZTogdW5kZWZpbmVkLFxuICAgICAgICBob3NwaXRhbDogdW5kZWZpbmVkLFxuICAgICAgICBvcmRlckRhdGU6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3NEaWFsb2dWaXNpYmxlOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzdWJtaXQgKCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRoaXMuc3VjY2Vzc0RpYWxvZ1Zpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9kZW1vLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOWksei0pSdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2xvc2VEaWFsb2cgKCkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3NEaWFsb2dWaXNpYmxlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKHtpZCwgc2t1SWQsIG5hbWV9KSB7XG4gICAgICB0aGlzLnNrdUlkID0gc2t1SWRcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgIHRoaXMucGlja2Vkcy5wcm9qZWN0TmFtZSA9IG5hbWVcbiAgICAgIHRoaXMuZ2V0QWxsSG9zcEFyZWEoKVxuICAgIH1cbiAgICAvLyDojrflj5bpmaLljLrliJfooahcbiAgICBnZXRBbGxIb3NwQXJlYSAoKSB7XG4gICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgIHVybDogJy9ob3NwQXJlYS9hbGwnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHBhZ2VOdW06IDFcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihjb250ZW50ID0+IHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQgfHwge31cbiAgICAgICAgY29uc3QgbGlzdCA9IGNvbnRlbnQubGlzdCB8fCBbXVxuICAgICAgICB0aGlzLmxpc3RzLmhvc3BpdGFsTGlzdCA9IGxpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogaXRlbS5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgc3VibWl0ICgpIHtcbiAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnL3ByZWNvbnRyYWN0LycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcHJvZHVjdFNrdUlkOiB0aGlzLnNrdUlkLFxuICAgICAgICAgIHByZWNvbnRyYWN0RGF0ZTogJydcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==
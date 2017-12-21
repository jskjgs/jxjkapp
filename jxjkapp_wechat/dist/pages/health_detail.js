'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _convertDate = require('./../utils/convertDate.js');

var _convertDate2 = _interopRequireDefault(_convertDate);

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
      navigationBarTitleText: '健康记录'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      projectDesVisible: false,
      processList: [{
        symptomSpread: undefined,
        date: (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s'),
        server: '赵雪晴',
        symptom: Array.from({ length: 120 }).map(function (item) {
          return '字';
        }).join('')
      }, {
        symptomSpread: undefined,
        date: (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s'),
        server: '赵雪晴',
        symptom: Array.from({ length: 40 }).map(function (item) {
          return '字';
        }).join('')
      }]
    }, _this.computed = {}, _this.methods = {
      dropdown: function dropdown() {
        this.projectDesVisible = true;
      },
      dropup: function dropup() {
        this.projectDesVisible = false;
      },
      spreadSymptom: function spreadSymptom(canSpread, index) {
        if (canSpread) {
          this.processList[index].symptomSpread = !this.processList[index].symptomSpread;
        }
      },
      toComment: function toComment() {
        wx.navigateTo({
          url: '/pages/health_comment'
        });
      },
      toCancel: function toCancel() {
        wx.navigateTo({
          url: '/pages/health_cancel'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initData();
    }
  }, {
    key: 'initData',
    value: function initData() {
      var vm = this;
      setTimeout(function () {
        vm.initSymptom();
      }, 1000);
    }
    // 初始化症状文字

  }, {
    key: 'initSymptom',
    value: function initSymptom() {
      var vm = this;
      var query = wx.createSelectorQuery();
      query.selectAll('.item-symptom .item-symptom__text').boundingClientRect();
      query.selectAll('.item-symptom--clone .item-symptom__text').boundingClientRect().exec(function () {
        var reality = arguments[0][0];
        var clone = arguments[0][1];
        reality.forEach(function (item, index) {
          if (item.height !== clone[index].height) {
            vm.processList[index].symptomSpread = false;
            vm.$apply();
          }
        });
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9kZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJwcm9qZWN0RGVzVmlzaWJsZSIsInByb2Nlc3NMaXN0Iiwic3ltcHRvbVNwcmVhZCIsInVuZGVmaW5lZCIsImRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsInNlcnZlciIsInN5bXB0b20iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJqb2luIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZHJvcGRvd24iLCJkcm9wdXAiLCJzcHJlYWRTeW1wdG9tIiwiY2FuU3ByZWFkIiwiaW5kZXgiLCJ0b0NvbW1lbnQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0NhbmNlbCIsImV2ZW50cyIsImluaXREYXRhIiwidm0iLCJzZXRUaW1lb3V0IiwiaW5pdFN5bXB0b20iLCJxdWVyeSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3RBbGwiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJleGVjIiwicmVhbGl0eSIsImFyZ3VtZW50cyIsImNsb25lIiwiZm9yRWFjaCIsIml0ZW0iLCJoZWlnaHQiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyx5QkFBbUIsS0FEZDtBQUVMQyxtQkFBYSxDQUFDO0FBQ1pDLHVCQUFlQyxTQURIO0FBRVpDLGNBQU0sMkJBQVksSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVosRUFBa0MsYUFBbEMsQ0FGTTtBQUdaQyxnQkFBUSxLQUhJO0FBSVpDLGlCQUFTQyxNQUFNQyxJQUFOLENBQVcsRUFBQ0MsUUFBUSxHQUFULEVBQVgsRUFBMEJDLEdBQTFCLENBQThCO0FBQUEsaUJBQVEsR0FBUjtBQUFBLFNBQTlCLEVBQTJDQyxJQUEzQyxDQUFnRCxFQUFoRDtBQUpHLE9BQUQsRUFLVjtBQUNEWCx1QkFBZUMsU0FEZDtBQUVEQyxjQUFNLDJCQUFZLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFaLEVBQWtDLGFBQWxDLENBRkw7QUFHREMsZ0JBQVEsS0FIUDtBQUlEQyxpQkFBU0MsTUFBTUMsSUFBTixDQUFXLEVBQUNDLFFBQVEsRUFBVCxFQUFYLEVBQXlCQyxHQUF6QixDQUE2QjtBQUFBLGlCQUFRLEdBQVI7QUFBQSxTQUE3QixFQUEwQ0MsSUFBMUMsQ0FBK0MsRUFBL0M7QUFKUixPQUxVO0FBRlIsSyxRQWVQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDSTtBQUNWLGFBQUtoQixpQkFBTCxHQUF5QixJQUF6QjtBQUNELE9BSE87QUFJUmlCLFlBSlEsb0JBSUU7QUFDUixhQUFLakIsaUJBQUwsR0FBeUIsS0FBekI7QUFDRCxPQU5PO0FBT1JrQixtQkFQUSx5QkFPT0MsU0FQUCxFQU9rQkMsS0FQbEIsRUFPeUI7QUFDL0IsWUFBSUQsU0FBSixFQUFlO0FBQ2IsZUFBS2xCLFdBQUwsQ0FBaUJtQixLQUFqQixFQUF3QmxCLGFBQXhCLEdBQXdDLENBQUMsS0FBS0QsV0FBTCxDQUFpQm1CLEtBQWpCLEVBQXdCbEIsYUFBakU7QUFDRDtBQUNGLE9BWE87QUFZUm1CLGVBWlEsdUJBWUs7QUFDWEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0FoQk87QUFpQlJDLGNBakJRLHNCQWlCSTtBQUNWSCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDtBQXJCTyxLLFFBd0JWRSxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OzhCQUVVO0FBQ1QsV0FBS0MsUUFBTDtBQUNEOzs7K0JBRVc7QUFDVixVQUFJQyxLQUFLLElBQVQ7QUFDQUMsaUJBQVcsWUFBTTtBQUNmRCxXQUFHRSxXQUFIO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHRDtBQUNEOzs7O2tDQUNlO0FBQ2IsVUFBSUYsS0FBSyxJQUFUO0FBQ0EsVUFBTUcsUUFBUVQsR0FBR1UsbUJBQUgsRUFBZDtBQUNBRCxZQUNHRSxTQURILENBQ2EsbUNBRGIsRUFFR0Msa0JBRkg7QUFHQUgsWUFDR0UsU0FESCxDQUNhLDBDQURiLEVBRUdDLGtCQUZILEdBR0dDLElBSEgsQ0FHUSxZQUFZO0FBQ2hCLFlBQU1DLFVBQVVDLFVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBaEI7QUFDQSxZQUFNQyxRQUFRRCxVQUFVLENBQVYsRUFBYSxDQUFiLENBQWQ7QUFDQUQsZ0JBQVFHLE9BQVIsQ0FBZ0IsVUFBVUMsSUFBVixFQUFnQnBCLEtBQWhCLEVBQXVCO0FBQ3JDLGNBQUlvQixLQUFLQyxNQUFMLEtBQWdCSCxNQUFNbEIsS0FBTixFQUFhcUIsTUFBakMsRUFBeUM7QUFDdkNiLGVBQUczQixXQUFILENBQWVtQixLQUFmLEVBQXNCbEIsYUFBdEIsR0FBc0MsS0FBdEM7QUFDQTBCLGVBQUdjLE1BQUg7QUFDRDtBQUNGLFNBTEQ7QUFNRCxPQVpIO0FBYUQ7Ozs7RUF2RmdDLGVBQUtDLEk7O2tCQUFuQmpELEsiLCJmaWxlIjoiaGVhbHRoX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBjb252ZXJ0RGF0ZSBmcm9tICdAL3V0aWxzL2NvbnZlcnREYXRlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YGl5bq36K6w5b2VJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcHJvamVjdERlc1Zpc2libGU6IGZhbHNlLFxuICAgICAgcHJvY2Vzc0xpc3Q6IFt7XG4gICAgICAgIHN5bXB0b21TcHJlYWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0ZTogY29udmVydERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCksICdZLU0tRCBoOm06cycpLFxuICAgICAgICBzZXJ2ZXI6ICfotbXpm6rmmbQnLFxuICAgICAgICBzeW1wdG9tOiBBcnJheS5mcm9tKHtsZW5ndGg6IDEyMH0pLm1hcChpdGVtID0+ICflrZcnKS5qb2luKCcnKVxuICAgICAgfSwge1xuICAgICAgICBzeW1wdG9tU3ByZWFkOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGU6IGNvbnZlcnREYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCAnWS1NLUQgaDptOnMnKSxcbiAgICAgICAgc2VydmVyOiAn6LW16Zuq5pm0JyxcbiAgICAgICAgc3ltcHRvbTogQXJyYXkuZnJvbSh7bGVuZ3RoOiA0MH0pLm1hcChpdGVtID0+ICflrZcnKS5qb2luKCcnKVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgZHJvcGRvd24gKCkge1xuICAgICAgICB0aGlzLnByb2plY3REZXNWaXNpYmxlID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRyb3B1cCAoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdERlc1Zpc2libGUgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNwcmVhZFN5bXB0b20gKGNhblNwcmVhZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGNhblNwcmVhZCkge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc0xpc3RbaW5kZXhdLnN5bXB0b21TcHJlYWQgPSAhdGhpcy5wcm9jZXNzTGlzdFtpbmRleF0uc3ltcHRvbVNwcmVhZFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9Db21tZW50ICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2hlYWx0aF9jb21tZW50J1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvQ2FuY2VsICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2hlYWx0aF9jYW5jZWwnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG5cbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoKVxuICAgIH1cblxuICAgIGluaXREYXRhICgpIHtcbiAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2bS5pbml0U3ltcHRvbSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgICAvLyDliJ3lp4vljJbnl4fnirbmloflrZdcbiAgICBpbml0U3ltcHRvbSAoKSB7XG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgcXVlcnlcbiAgICAgICAgLnNlbGVjdEFsbCgnLml0ZW0tc3ltcHRvbSAuaXRlbS1zeW1wdG9tX190ZXh0JylcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBxdWVyeVxuICAgICAgICAuc2VsZWN0QWxsKCcuaXRlbS1zeW1wdG9tLS1jbG9uZSAuaXRlbS1zeW1wdG9tX190ZXh0JylcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCByZWFsaXR5ID0gYXJndW1lbnRzWzBdWzBdXG4gICAgICAgICAgY29uc3QgY2xvbmUgPSBhcmd1bWVudHNbMF1bMV1cbiAgICAgICAgICByZWFsaXR5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oZWlnaHQgIT09IGNsb25lW2luZGV4XS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgdm0ucHJvY2Vzc0xpc3RbaW5kZXhdLnN5bXB0b21TcHJlYWQgPSBmYWxzZVxuICAgICAgICAgICAgICB2bS4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=
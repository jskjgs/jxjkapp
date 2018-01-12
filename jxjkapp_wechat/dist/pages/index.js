'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _chunk3 = require('./../npm/lodash/chunk.js');

var _chunk4 = _interopRequireDefault(_chunk3);

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
      navigationBarTitleText: '首页'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      bannerList: [],
      // 项目分类
      projectTypeList: [],
      /* [{
        name: '皮肤美容',
        image: '',
        id: '1'
      }, {
        name: '瑜伽养生',
        image: '',
        id: '2'
      }, {
        name: '中医养生',
        image: '',
        id: '3'
      }, {
        name: '产后康复',
        image: '',
        id: '4'
      }, {
        name: '小儿推拿',
        image: '',
        id: '5'
      }] */
      queueNoticeSpread: false,
      queueNotice: ''
    }, _this.computed = {}, _this.watch = {
      projectTypeList: function projectTypeList(newVal) {
        console.log(newVal, 9999);
      }
    }, _this.methods = {
      handleTapQueueNotice: function handleTapQueueNotice() {
        this.queueNoticeSpread = !this.queueNoticeSpread;
        if (Math.random() > 0.5) {
          this.queueNotice = {
            project: '手法项目排队',
            NO: 36,
            waitNum: 6
          };
        }
      },
      handleBannerTap: function handleBannerTap(jumpUrl) {
        wx.navigateTo({
          url: '/pages/banner_detail?jumpUrl=' + jumpUrl
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getBanner();
      this.getProjectType();
    }

    // 获取banner数据

  }, {
    key: 'getBanner',
    value: function getBanner() {
      var _this2 = this;

      return this.$_request({
        url: '/banner/all',
        method: 'GET',
        data: {
          pageNum: 1
        }
      }).then(function (content) {
        content = content || {};
        var list = content.list || [];
        _this2.bannerList = list.map(function (item) {
          return {
            bannerUrl: '../assets/images/banner.png', // item.bannerUrl,
            id: item.id,
            jumpUrl: item.jumpUrl
          };
        });
        _this2.$apply();
      }).finally(function () {
        _this2.bannerList = Array.from({ length: 3 }).map(function (item) {
          return {
            bannerUrl: '../assets/images/banner.png'
          };
        });
        _this2.$apply();
      });
    }

    // 获取项目分类

  }, {
    key: 'getProjectType',
    value: function getProjectType() {
      var _this3 = this;

      return this.$_request({
        url: '/productType/all',
        method: 'POST',
        data: {}
      }).then(function (content) {
        content = content || {};
        _this3.projectTypeList = (content.list || []).map(function (item) {
          return {
            name: item.name,
            image: item.images,
            id: item.id
          };
        });
        _this3.$apply();
      }).finally(function () {
        // this.projectTypeList = [{
        //   name: '皮肤美容',
        //   image: '../assets/images/ps-pfmr.png',
        //   id: '1'
        // }, {
        //   name: '瑜伽养生',
        //   image: '../assets/images/ps-yjys.png',
        //   id: '2'
        // }, {
        //   name: '中医养生',
        //   image: '../assets/images/ps-zyrs.png',
        //   id: '3'
        // }, {
        //   name: '产后康复',
        //   image: '../assets/images/ps-chkf.png',
        //   id: '4'
        // }, {
        //   name: '小儿推拿',
        //   image: '../assets/images/ps-xetn.png',
        //   id: '5'
        // }]
        // this.$apply()
      });
    }
  }, {
    key: '_chunk',
    value: function _chunk() {
      console.log('_chunk(...args)', _chunk4.default.apply(undefined, arguments));
      return _chunk4.default.apply(undefined, arguments);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiYmFubmVyTGlzdCIsInByb2plY3RUeXBlTGlzdCIsInF1ZXVlTm90aWNlU3ByZWFkIiwicXVldWVOb3RpY2UiLCJjb21wdXRlZCIsIndhdGNoIiwibmV3VmFsIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJoYW5kbGVUYXBRdWV1ZU5vdGljZSIsIk1hdGgiLCJyYW5kb20iLCJwcm9qZWN0IiwiTk8iLCJ3YWl0TnVtIiwiaGFuZGxlQmFubmVyVGFwIiwianVtcFVybCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsImdldEJhbm5lciIsImdldFByb2plY3RUeXBlIiwiJF9yZXF1ZXN0IiwibWV0aG9kIiwicGFnZU51bSIsInRoZW4iLCJjb250ZW50IiwibGlzdCIsIm1hcCIsImJhbm5lclVybCIsImlkIiwiaXRlbSIsIiRhcHBseSIsImZpbmFsbHkiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJuYW1lIiwiaW1hZ2UiLCJpbWFnZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUw7QUFDQUMsdUJBQWlCLEVBSFo7QUFJTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBQyx5QkFBbUIsS0F6QmQ7QUEwQkxDLG1CQUFhO0FBMUJSLEssUUE2QlBDLFEsR0FBVyxFLFFBR1hDLEssR0FBUTtBQUNOSixxQkFETSwyQkFDV0ssTUFEWCxFQUNtQjtBQUN2QkMsZ0JBQVFDLEdBQVIsQ0FBWUYsTUFBWixFQUFvQixJQUFwQjtBQUNEO0FBSEssSyxRQU1SRyxPLEdBQVU7QUFDUkMsMEJBRFEsa0NBQ2dCO0FBQ3RCLGFBQUtSLGlCQUFMLEdBQXlCLENBQUMsS0FBS0EsaUJBQS9CO0FBQ0EsWUFBSVMsS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUN2QixlQUFLVCxXQUFMLEdBQW1CO0FBQ2pCVSxxQkFBUyxRQURRO0FBRWpCQyxnQkFBSSxFQUZhO0FBR2pCQyxxQkFBUztBQUhRLFdBQW5CO0FBS0Q7QUFDRixPQVZPO0FBV1JDLHFCQVhRLDJCQVdTQyxPQVhULEVBV2tCO0FBQ3hCQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyxrQ0FBa0NIO0FBRDNCLFNBQWQ7QUFHRDtBQWZPLEssUUFrQlZJLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQLFdBQUtDLFNBQUw7QUFDQSxXQUFLQyxjQUFMO0FBQ0Q7O0FBRUQ7Ozs7Z0NBQ2E7QUFBQTs7QUFDWCxhQUFPLEtBQUtDLFNBQUwsQ0FBZTtBQUNwQkosYUFBSyxhQURlO0FBRXBCSyxnQkFBUSxLQUZZO0FBR3BCMUIsY0FBTTtBQUNKMkIsbUJBQVM7QUFETDtBQUhjLE9BQWYsRUFNSkMsSUFOSSxDQU1DLG1CQUFXO0FBQ2pCQyxrQkFBVUEsV0FBVyxFQUFyQjtBQUNBLFlBQU1DLE9BQU9ELFFBQVFDLElBQVIsSUFBZ0IsRUFBN0I7QUFDQSxlQUFLN0IsVUFBTCxHQUFrQjZCLEtBQUtDLEdBQUwsQ0FBUztBQUFBLGlCQUFTO0FBQ2xDQyx1QkFBVyw2QkFEdUIsRUFDUTtBQUMxQ0MsZ0JBQUlDLEtBQUtELEVBRnlCO0FBR2xDZixxQkFBU2dCLEtBQUtoQjtBQUhvQixXQUFUO0FBQUEsU0FBVCxDQUFsQjtBQUtBLGVBQUtpQixNQUFMO0FBQ0QsT0FmTSxFQWVKQyxPQWZJLENBZUksWUFBTTtBQUNmLGVBQUtuQyxVQUFMLEdBQWtCb0MsTUFBTUMsSUFBTixDQUFXLEVBQUNDLFFBQVEsQ0FBVCxFQUFYLEVBQXdCUixHQUF4QixDQUE0QixnQkFBUTtBQUNwRCxpQkFBTztBQUNMQyx1QkFBVztBQUROLFdBQVA7QUFHRCxTQUppQixDQUFsQjtBQUtBLGVBQUtHLE1BQUw7QUFDRCxPQXRCTSxDQUFQO0FBdUJEOztBQUVEOzs7O3FDQUNrQjtBQUFBOztBQUNoQixhQUFPLEtBQUtWLFNBQUwsQ0FBZTtBQUNwQkosYUFBSyxrQkFEZTtBQUVwQkssZ0JBQVEsTUFGWTtBQUdwQjFCLGNBQU07QUFIYyxPQUFmLEVBSUo0QixJQUpJLENBSUMsbUJBQVc7QUFDakJDLGtCQUFVQSxXQUFXLEVBQXJCO0FBQ0EsZUFBSzNCLGVBQUwsR0FBdUIsQ0FBQzJCLFFBQVFDLElBQVIsSUFBZ0IsRUFBakIsRUFBcUJDLEdBQXJCLENBQXlCLGdCQUFRO0FBQ3RELGlCQUFPO0FBQ0xTLGtCQUFNTixLQUFLTSxJQUROO0FBRUxDLG1CQUFPUCxLQUFLUSxNQUZQO0FBR0xULGdCQUFJQyxLQUFLRDtBQUhKLFdBQVA7QUFLRCxTQU5zQixDQUF2QjtBQU9BLGVBQUtFLE1BQUw7QUFDRCxPQWRNLEVBY0pDLE9BZEksQ0FjSSxZQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxPQXJDTSxDQUFQO0FBc0NEOzs7NkJBRWdCO0FBQ2Y1QixjQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0IsMkNBQS9CO0FBQ0EsYUFBTywyQ0FBUDtBQUNEOzs7O0VBakpnQyxlQUFLa0MsSTs7a0JBQW5CaEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgX2NodW5rIGZyb20gJ2xvZGFzaC9jaHVuaydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGJhbm5lckxpc3Q6IFtdLFxuICAgICAgLy8g6aG555uu5YiG57G7XG4gICAgICBwcm9qZWN0VHlwZUxpc3Q6IFtdLFxuICAgICAgLyogW3tcbiAgICAgICAgbmFtZTogJ+earuiCpOe+juWuuScsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgaWQ6ICcxJ1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAn55Gc5Ly95YW755SfJyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBpZDogJzInXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICfkuK3ljLvlhbvnlJ8nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGlkOiAnMydcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ+S6p+WQjuW6t+WkjScsXG4gICAgICAgIGltYWdlOiAnJyxcbiAgICAgICAgaWQ6ICc0J1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAn5bCP5YS/5o6o5ou/JyxcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBpZDogJzUnXG4gICAgICB9XSAqL1xuICAgICAgcXVldWVOb3RpY2VTcHJlYWQ6IGZhbHNlLFxuICAgICAgcXVldWVOb3RpY2U6ICcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBwcm9qZWN0VHlwZUxpc3QgKG5ld1ZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWwsIDk5OTkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZVRhcFF1ZXVlTm90aWNlICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZU5vdGljZVNwcmVhZCA9ICF0aGlzLnF1ZXVlTm90aWNlU3ByZWFkXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZU5vdGljZSA9IHtcbiAgICAgICAgICAgIHByb2plY3Q6ICfmiYvms5Xpobnnm67mjpLpmJ8nLFxuICAgICAgICAgICAgTk86IDM2LFxuICAgICAgICAgICAgd2FpdE51bTogNlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUJhbm5lclRhcCAoanVtcFVybCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvYmFubmVyX2RldGFpbD9qdW1wVXJsPScgKyBqdW1wVXJsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuZ2V0QmFubmVyKClcbiAgICAgIHRoaXMuZ2V0UHJvamVjdFR5cGUoKVxuICAgIH1cblxuICAgIC8vIOiOt+WPlmJhbm5lcuaVsOaNrlxuICAgIGdldEJhbm5lciAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kX3JlcXVlc3Qoe1xuICAgICAgICB1cmw6ICcvYmFubmVyL2FsbCcsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IHt9XG4gICAgICAgIGNvbnN0IGxpc3QgPSBjb250ZW50Lmxpc3QgfHwgW11cbiAgICAgICAgdGhpcy5iYW5uZXJMaXN0ID0gbGlzdC5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIGJhbm5lclVybDogJy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLnBuZycsIC8vIGl0ZW0uYmFubmVyVXJsLFxuICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgIGp1bXBVcmw6IGl0ZW0uanVtcFVybFxuICAgICAgICB9KSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYmFubmVyTGlzdCA9IEFycmF5LmZyb20oe2xlbmd0aDogM30pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFubmVyVXJsOiAnLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDojrflj5bpobnnm67liIbnsbtcbiAgICBnZXRQcm9qZWN0VHlwZSAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kX3JlcXVlc3Qoe1xuICAgICAgICB1cmw6ICcvcHJvZHVjdFR5cGUvYWxsJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9KS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICBjb250ZW50ID0gY29udGVudCB8fCB7fVxuICAgICAgICB0aGlzLnByb2plY3RUeXBlTGlzdCA9IChjb250ZW50Lmxpc3QgfHwgW10pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2VzLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnByb2plY3RUeXBlTGlzdCA9IFt7XG4gICAgICAgIC8vICAgbmFtZTogJ+earuiCpOe+juWuuScsXG4gICAgICAgIC8vICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3BzLXBmbXIucG5nJyxcbiAgICAgICAgLy8gICBpZDogJzEnXG4gICAgICAgIC8vIH0sIHtcbiAgICAgICAgLy8gICBuYW1lOiAn55Gc5Ly95YW755SfJyxcbiAgICAgICAgLy8gICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvcHMteWp5cy5wbmcnLFxuICAgICAgICAvLyAgIGlkOiAnMidcbiAgICAgICAgLy8gfSwge1xuICAgICAgICAvLyAgIG5hbWU6ICfkuK3ljLvlhbvnlJ8nLFxuICAgICAgICAvLyAgIGltYWdlOiAnLi4vYXNzZXRzL2ltYWdlcy9wcy16eXJzLnBuZycsXG4gICAgICAgIC8vICAgaWQ6ICczJ1xuICAgICAgICAvLyB9LCB7XG4gICAgICAgIC8vICAgbmFtZTogJ+S6p+WQjuW6t+WkjScsXG4gICAgICAgIC8vICAgaW1hZ2U6ICcuLi9hc3NldHMvaW1hZ2VzL3BzLWNoa2YucG5nJyxcbiAgICAgICAgLy8gICBpZDogJzQnXG4gICAgICAgIC8vIH0sIHtcbiAgICAgICAgLy8gICBuYW1lOiAn5bCP5YS/5o6o5ou/JyxcbiAgICAgICAgLy8gICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvcHMteGV0bi5wbmcnLFxuICAgICAgICAvLyAgIGlkOiAnNSdcbiAgICAgICAgLy8gfV1cbiAgICAgICAgLy8gdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfY2h1bmsgKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdfY2h1bmsoLi4uYXJncyknLCBfY2h1bmsoLi4uYXJncykpXG4gICAgICByZXR1cm4gX2NodW5rKC4uLmFyZ3MpXG4gICAgfVxuICB9XG4iXX0=
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
      projects: [{
        text: '皮肤美容',
        image: '',
        target: '1'
      }, {
        text: '瑜伽养生',
        image: '',
        target: '2'
      }, {
        text: '中医养生',
        image: '',
        target: '3'
      }, {
        text: '产后康复',
        image: '',
        target: '4'
      }, {
        text: '小儿推拿',
        image: '',
        target: '5'
      }],
      queueNoticeSpread: false,
      queueNotice: ''
    }, _this.computed = {}, _this.methods = {
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
      var _this2 = this;

      this.$_request({
        url: '/banner/all',
        method: 'POST',
        data: {
          pageNum: 1
        }
      }).then(function (res) {
        var content = res.content || {};
        _this2.bannerList = content.list.map(function (item) {
          return {
            bannerUrl: item.bannerUrl,
            id: item.id,
            jumpUrl: item.jumpUrl
          };
        });
        _this2.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiYmFubmVyTGlzdCIsInByb2plY3RzIiwidGV4dCIsImltYWdlIiwidGFyZ2V0IiwicXVldWVOb3RpY2VTcHJlYWQiLCJxdWV1ZU5vdGljZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZVRhcFF1ZXVlTm90aWNlIiwiTWF0aCIsInJhbmRvbSIsInByb2plY3QiLCJOTyIsIndhaXROdW0iLCJoYW5kbGVCYW5uZXJUYXAiLCJqdW1wVXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwiJF9yZXF1ZXN0IiwibWV0aG9kIiwicGFnZU51bSIsInRoZW4iLCJjb250ZW50IiwicmVzIiwibGlzdCIsIm1hcCIsImJhbm5lclVybCIsIml0ZW0iLCJpZCIsIiRhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUw7QUFDQUMsZ0JBQVUsQ0FBQztBQUNUQyxjQUFNLE1BREc7QUFFVEMsZUFBTyxFQUZFO0FBR1RDLGdCQUFRO0FBSEMsT0FBRCxFQUlQO0FBQ0RGLGNBQU0sTUFETDtBQUVEQyxlQUFPLEVBRk47QUFHREMsZ0JBQVE7QUFIUCxPQUpPLEVBUVA7QUFDREYsY0FBTSxNQURMO0FBRURDLGVBQU8sRUFGTjtBQUdEQyxnQkFBUTtBQUhQLE9BUk8sRUFZUDtBQUNERixjQUFNLE1BREw7QUFFREMsZUFBTyxFQUZOO0FBR0RDLGdCQUFRO0FBSFAsT0FaTyxFQWdCUDtBQUNERixjQUFNLE1BREw7QUFFREMsZUFBTyxFQUZOO0FBR0RDLGdCQUFRO0FBSFAsT0FoQk8sQ0FITDtBQXdCTEMseUJBQW1CLEtBeEJkO0FBeUJMQyxtQkFBYTtBQXpCUixLLFFBNEJQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsMEJBRFEsa0NBQ2dCO0FBQ3RCLGFBQUtKLGlCQUFMLEdBQXlCLENBQUMsS0FBS0EsaUJBQS9CO0FBQ0EsWUFBSUssS0FBS0MsTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUN2QixlQUFLTCxXQUFMLEdBQW1CO0FBQ2pCTSxxQkFBUyxRQURRO0FBRWpCQyxnQkFBSSxFQUZhO0FBR2pCQyxxQkFBUztBQUhRLFdBQW5CO0FBS0Q7QUFDRixPQVZPO0FBV1JDLHFCQVhRLDJCQVdTQyxPQVhULEVBV2tCO0FBQ3hCQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyxrQ0FBa0NIO0FBRDNCLFNBQWQ7QUFHRDtBQWZPLEssUUFrQlZJLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUFBOztBQUNQLFdBQUtDLFNBQUwsQ0FBZTtBQUNiRixhQUFLLGFBRFE7QUFFYkcsZ0JBQVEsTUFGSztBQUdidkIsY0FBTTtBQUNKd0IsbUJBQVM7QUFETDtBQUhPLE9BQWYsRUFNR0MsSUFOSCxDQU1RLGVBQU87QUFDYixZQUFNQyxVQUFVQyxJQUFJRCxPQUFKLElBQWUsRUFBL0I7QUFDQSxlQUFLekIsVUFBTCxHQUFrQnlCLFFBQVFFLElBQVIsQ0FBYUMsR0FBYixDQUFpQjtBQUFBLGlCQUFTO0FBQzFDQyx1QkFBV0MsS0FBS0QsU0FEMEI7QUFFMUNFLGdCQUFJRCxLQUFLQyxFQUZpQztBQUcxQ2YscUJBQVNjLEtBQUtkO0FBSDRCLFdBQVQ7QUFBQSxTQUFqQixDQUFsQjtBQUtBLGVBQUtnQixNQUFMO0FBQ0QsT0FkRDtBQWVEOzs7NkJBRWdCO0FBQ2ZDLGNBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQiwyQ0FBL0I7QUFDQSxhQUFPLDJDQUFQO0FBQ0Q7Ozs7RUFsRmdDLGVBQUtDLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IF9jaHVuayBmcm9tICdsb2Rhc2gvY2h1bmsnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBiYW5uZXJMaXN0OiBbXSxcbiAgICAgIC8vIOmhueebruWIhuexu1xuICAgICAgcHJvamVjdHM6IFt7XG4gICAgICAgIHRleHQ6ICfnmq7ogqTnvo7lrrknLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzEnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfnkZzkvL3lhbvnlJ8nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzInXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfkuK3ljLvlhbvnlJ8nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzMnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICfkuqflkI7lurflpI0nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzQnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICflsI/lhL/mjqjmi78nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIHRhcmdldDogJzUnXG4gICAgICB9XSxcbiAgICAgIHF1ZXVlTm90aWNlU3ByZWFkOiBmYWxzZSxcbiAgICAgIHF1ZXVlTm90aWNlOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVUYXBRdWV1ZU5vdGljZSAoKSB7XG4gICAgICAgIHRoaXMucXVldWVOb3RpY2VTcHJlYWQgPSAhdGhpcy5xdWV1ZU5vdGljZVNwcmVhZFxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRoaXMucXVldWVOb3RpY2UgPSB7XG4gICAgICAgICAgICBwcm9qZWN0OiAn5omL5rOV6aG555uu5o6S6ZifJyxcbiAgICAgICAgICAgIE5POiAzNixcbiAgICAgICAgICAgIHdhaXROdW06IDZcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYW5kbGVCYW5uZXJUYXAgKGp1bXBVcmwpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2Jhbm5lcl9kZXRhaWw/anVtcFVybD0nICsganVtcFVybFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgIHVybDogJy9iYW5uZXIvYWxsJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHJlcy5jb250ZW50IHx8IHt9XG4gICAgICAgIHRoaXMuYmFubmVyTGlzdCA9IGNvbnRlbnQubGlzdC5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgIGJhbm5lclVybDogaXRlbS5iYW5uZXJVcmwsXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAganVtcFVybDogaXRlbS5qdW1wVXJsXG4gICAgICAgIH0pKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9jaHVuayAoLi4uYXJncykge1xuICAgICAgY29uc29sZS5sb2coJ19jaHVuayguLi5hcmdzKScsIF9jaHVuayguLi5hcmdzKSlcbiAgICAgIHJldHVybiBfY2h1bmsoLi4uYXJncylcbiAgICB9XG4gIH1cbiJdfQ==
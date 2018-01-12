'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPage = require('./../components/customPage.js');

var _customPage2 = _interopRequireDefault(_customPage);

var _page = require('./../mixins/page.js');

var _page2 = _interopRequireDefault(_page);

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
      navigationBarTitleText: '项目预约'
    }, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [_page2.default], _this.data = {
      photo: '',
      name: '硬化剂注射',
      description: 'Thermage紧肤除皱系统是一种专业的非手术紧肤、除皱、塑形设备。是一种安全性高、不会造成伤口的治疗方式，已获医学临床证实能收'
    }, _this.computed = {
      userInfo: function userInfo() {
        return this.$parent.globalData.userInfo;
      }
    }, _this.methods = {
      handleOrderBtnTap: function handleOrderBtnTap() {
        wx.navigateTo({
          url: '/pages/project_order_info?id=' + this.id + '&skuId=' + this.skuId + '&name=' + this.name
        });
      },
      toLogin: function toLogin() {
        wx.navigateTo({
          url: '/pages/login'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var id = _ref2.id;

      this.id = id;
      this.initPageData();
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this2 = this;

      this.initData({
        url: '/product/',
        data: {
          id: this.id
        }
      }).then(function (content) {
        content = content || {};
        _this2.skuId = (content.defaultSku || {}).productId;
        _this2.photo = content.images || '';
        _this2.name = content.name || '';
        _this2.description = content.description || '';
        _this2.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/project_order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Rfb3JkZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIkN1c3RvbVBhZ2UiLCJtaXhpbnMiLCJkYXRhIiwicGhvdG8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb21wdXRlZCIsInVzZXJJbmZvIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJtZXRob2RzIiwiaGFuZGxlT3JkZXJCdG5UYXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpZCIsInNrdUlkIiwidG9Mb2dpbiIsImV2ZW50cyIsImluaXRQYWdlRGF0YSIsImluaXREYXRhIiwidGhlbiIsImNvbnRlbnQiLCJkZWZhdWx0U2t1IiwicHJvZHVjdElkIiwiaW1hZ2VzIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsWUFBTSxPQUZEO0FBR0xDLG1CQUFhO0FBSFIsSyxRQU1QQyxRLEdBQVc7QUFDVEMsY0FEUyxzQkFDRztBQUNWLGVBQU8sS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCRixRQUEvQjtBQUNEO0FBSFEsSyxRQU1YRyxPLEdBQVU7QUFDUkMsdUJBRFEsK0JBQ2E7QUFDbkJDLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxpREFBcUMsS0FBS0MsRUFBMUMsZUFBc0QsS0FBS0MsS0FBM0QsY0FBeUUsS0FBS1o7QUFEbEUsU0FBZDtBQUdELE9BTE87QUFNUmEsYUFOUSxxQkFNRztBQUNUTCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDtBQVZPLEssUUFhVkksTSxHQUFTLEU7Ozs7O2tDQUdNO0FBQUEsVUFBTkgsRUFBTSxTQUFOQSxFQUFNOztBQUNiLFdBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtJLFlBQUw7QUFDRDs7O21DQUNlO0FBQUE7O0FBQ2QsV0FBS0MsUUFBTCxDQUFjO0FBQ1pOLGFBQUssV0FETztBQUVaWixjQUFNO0FBQ0phLGNBQUksS0FBS0E7QUFETDtBQUZNLE9BQWQsRUFLR00sSUFMSCxDQUtRLG1CQUFXO0FBQ2pCQyxrQkFBVUEsV0FBVyxFQUFyQjtBQUNBLGVBQUtOLEtBQUwsR0FBYSxDQUFDTSxRQUFRQyxVQUFSLElBQXNCLEVBQXZCLEVBQTJCQyxTQUF4QztBQUNBLGVBQUtyQixLQUFMLEdBQWFtQixRQUFRRyxNQUFSLElBQWtCLEVBQS9CO0FBQ0EsZUFBS3JCLElBQUwsR0FBWWtCLFFBQVFsQixJQUFSLElBQWdCLEVBQTVCO0FBQ0EsZUFBS0MsV0FBTCxHQUFtQmlCLFFBQVFqQixXQUFSLElBQXVCLEVBQTFDO0FBQ0EsZUFBS3FCLE1BQUw7QUFDRCxPQVpEO0FBYUQ7Ozs7RUF4RGdDLGVBQUtDLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoicHJvamVjdF9vcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21QYWdlIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b21QYWdlJ1xuICBpbXBvcnQgUGFnZU1peGluIGZyb20gJ0AvbWl4aW5zL3BhZ2UnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpobnnm67pooTnuqYnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBDdXN0b21QYWdlXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW1BhZ2VNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBwaG90bzogJycsXG4gICAgICBuYW1lOiAn56Gs5YyW5YmC5rOo5bCEJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlcm1hZ2XntKfogqTpmaTnmrHns7vnu5/mmK/kuIDnp43kuJPkuJrnmoTpnZ7miYvmnK/ntKfogqTjgIHpmaTnmrHjgIHloZHlvaLorr7lpIfjgILmmK/kuIDnp43lronlhajmgKfpq5jjgIHkuI3kvJrpgKDmiJDkvKTlj6PnmoTmsrvnlpfmlrnlvI/vvIzlt7LojrfljLvlrabkuLTluoror4Hlrp7og73mlLYnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICB1c2VySW5mbyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVPcmRlckJ0blRhcCAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9wcm9qZWN0X29yZGVyX2luZm8/aWQ9JHt0aGlzLmlkfSZza3VJZD0ke3RoaXMuc2t1SWR9Jm5hbWU9JHt0aGlzLm5hbWV9YFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvTG9naW4gKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCh7IGlkIH0pIHtcbiAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cbiAgICBpbml0UGFnZURhdGEgKCkge1xuICAgICAgdGhpcy5pbml0RGF0YSh7XG4gICAgICAgIHVybDogJy9wcm9kdWN0LycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpZDogdGhpcy5pZFxuICAgICAgICB9XG4gICAgICB9KS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICBjb250ZW50ID0gY29udGVudCB8fCB7fVxuICAgICAgICB0aGlzLnNrdUlkID0gKGNvbnRlbnQuZGVmYXVsdFNrdSB8fCB7fSkucHJvZHVjdElkXG4gICAgICAgIHRoaXMucGhvdG8gPSBjb250ZW50LmltYWdlcyB8fCAnJ1xuICAgICAgICB0aGlzLm5hbWUgPSBjb250ZW50Lm5hbWUgfHwgJydcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNvbnRlbnQuZGVzY3JpcHRpb24gfHwgJydcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==
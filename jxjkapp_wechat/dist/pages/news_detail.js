'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPage = require('./../components/customPage.js');

var _customPage2 = _interopRequireDefault(_customPage);

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
      navigationBarTitleText: '文章详情'
    }, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [], _this.data = {
      title: '',
      date: '',
      content: '',
      id: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var _this2 = this;

      var id = _ref2.id;

      this.id = id;
      setTimeout(function () {
        _this2.initPageData();
      });
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this3 = this;

      this.$_request({
        url: '/news/',
        data: {
          id: this.id
        }
      }).then(function (content) {
        if (content) {
          _this3.title = content.title;
          _this3.date = _this3.$_convertDate(content.createDate);
          _this3.content = content.content;
          _this3.$apply();
          _this3.$invoke('CustomPage', 'initPage', {
            dataInited: true
          });
        } else {
          _this3.$invoke('CustomPage', 'initPage', {
            noData: true
          });
        }
      }).catch(function () {
        _this3.$invoke('CustomPage', 'initPage', {
          noServer: true
        });
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/news_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NfZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJDdXN0b21QYWdlIiwibWl4aW5zIiwiZGF0YSIsInRpdGxlIiwiZGF0ZSIsImNvbnRlbnQiLCJpZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInNldFRpbWVvdXQiLCJpbml0UGFnZURhdGEiLCIkX3JlcXVlc3QiLCJ1cmwiLCJ0aGVuIiwiJF9jb252ZXJ0RGF0ZSIsImNyZWF0ZURhdGUiLCIkYXBwbHkiLCIkaW52b2tlIiwiZGF0YUluaXRlZCIsIm5vRGF0YSIsImNhdGNoIiwibm9TZXJ2ZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLFVBQUk7QUFKQyxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7OztrQ0FHTTtBQUFBOztBQUFBLFVBQU5ILEVBQU0sU0FBTkEsRUFBTTs7QUFDYixXQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDQUksaUJBQVcsWUFBTTtBQUNmLGVBQUtDLFlBQUw7QUFDRCxPQUZEO0FBR0Q7OzttQ0FFZTtBQUFBOztBQUNkLFdBQUtDLFNBQUwsQ0FBZTtBQUNiQyxxQkFEYTtBQUViWCxjQUFNO0FBQ0pJLGNBQUksS0FBS0E7QUFETDtBQUZPLE9BQWYsRUFLR1EsSUFMSCxDQUtRLG1CQUFXO0FBQ2pCLFlBQUlULE9BQUosRUFBYTtBQUNYLGlCQUFLRixLQUFMLEdBQWFFLFFBQVFGLEtBQXJCO0FBQ0EsaUJBQUtDLElBQUwsR0FBWSxPQUFLVyxhQUFMLENBQW1CVixRQUFRVyxVQUEzQixDQUFaO0FBQ0EsaUJBQUtYLE9BQUwsR0FBZUEsUUFBUUEsT0FBdkI7QUFDQSxpQkFBS1ksTUFBTDtBQUNBLGlCQUFLQyxPQUFMLENBQWEsWUFBYixFQUEyQixVQUEzQixFQUF1QztBQUNyQ0Msd0JBQVk7QUFEeUIsV0FBdkM7QUFHRCxTQVJELE1BUU87QUFDTCxpQkFBS0QsT0FBTCxDQUFhLFlBQWIsRUFBMkIsVUFBM0IsRUFBdUM7QUFDckNFLG9CQUFRO0FBRDZCLFdBQXZDO0FBR0Q7QUFDRixPQW5CRCxFQW1CR0MsS0FuQkgsQ0FtQlMsWUFBTTtBQUNiLGVBQUtILE9BQUwsQ0FBYSxZQUFiLEVBQTJCLFVBQTNCLEVBQXVDO0FBQ3JDSSxvQkFBVTtBQUQyQixTQUF2QztBQUdELE9BdkJEO0FBd0JEOzs7O0VBekRnQyxlQUFLQyxJOztrQkFBbkIzQixLIiwiZmlsZSI6Im5ld3NfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IEN1c3RvbVBhZ2UgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbVBhZ2UnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6Dor6bmg4UnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBDdXN0b21QYWdlXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBkYXRlOiAnJyxcbiAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgaWQ6ICcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHt9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKHsgaWQgfSkge1xuICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0UGFnZURhdGEgKCkge1xuICAgICAgdGhpcy4kX3JlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAvbmV3cy9gLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaWQ6IHRoaXMuaWRcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihjb250ZW50ID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICB0aGlzLnRpdGxlID0gY29udGVudC50aXRsZVxuICAgICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMuJF9jb252ZXJ0RGF0ZShjb250ZW50LmNyZWF0ZURhdGUpXG4gICAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudC5jb250ZW50XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIHRoaXMuJGludm9rZSgnQ3VzdG9tUGFnZScsICdpbml0UGFnZScsIHtcbiAgICAgICAgICAgIGRhdGFJbml0ZWQ6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGludm9rZSgnQ3VzdG9tUGFnZScsICdpbml0UGFnZScsIHtcbiAgICAgICAgICAgIG5vRGF0YTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdDdXN0b21QYWdlJywgJ2luaXRQYWdlJywge1xuICAgICAgICAgIG5vU2VydmVyOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19
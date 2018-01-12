'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _personInfo = require('./../components/personInfo.js');

var _personInfo2 = _interopRequireDefault(_personInfo);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "PersonInfo": { "xmlns:v-bind": "", "v-bind:readonly.sync": "readonly", "v-bind:canEdit.sync": "canEdit", "v-bind:isMaster.sync": "isMaster", "submitBtnText": "确认添加", "xmlns:v-on": "" } }, _this.$events = { "PersonInfo": { "v-on:pickedsChange": "handlePickedsChange" } }, _this.components = {
      PersonInfo: _personInfo2.default
    }, _this.mixins = [], _this.data = {
      readonly: true,
      canEdit: false,
      isMaster: false,
      formData: {}
    }, _this.computed = {}, _this.methods = {
      handlePickedsChange: function handlePickedsChange(formData) {
        this.formData = formData;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var _this2 = this;

      var id = _ref2.id;

      if (id !== undefined) {
        // query中有id说明是查看绑定的就诊人信息（可编辑）
        wx.setNavigationBarTitle({
          title: '就诊人信息'
        });
        this.readonly = true;
        this.canEdit = true;

        this.isMaster = id === '0'; // 假设登录人账号id为0
        this.$_request({
          url: '/patientInfo/',
          data: {
            id: id
          }
        }).then(function (content) {
          content = content || {};
          _this2.$invoke('PersonInfo', 'syncFormData', {
            id: content.id, // 卡号
            cardId: content.cardId, // 身份证号
            allergies: content.allergies, // 过敏史
            disease: content.disease, // 疾病史
            address: content.address, // 联系地址
            deliveryDate: _this2.$_convertDate(content.deliveryDate),
            deliveryInfo: content.deliveryInfo,
            babySex: content.babySex === 0 ? '女' : '男',
            userSource: content.userSource
          });
        });
      } else {
        wx.setNavigationBarTitle({
          title: '添加就诊人'
        });
        this.readonly = false;
        this.canEdit = false;
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_relation_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3JlbGF0aW9uX2luZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJQZXJzb25JbmZvIiwibWl4aW5zIiwiZGF0YSIsInJlYWRvbmx5IiwiY2FuRWRpdCIsImlzTWFzdGVyIiwiZm9ybURhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVQaWNrZWRzQ2hhbmdlIiwiZXZlbnRzIiwiaWQiLCJ1bmRlZmluZWQiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiJF9yZXF1ZXN0IiwidXJsIiwidGhlbiIsImNvbnRlbnQiLCIkaW52b2tlIiwiY2FyZElkIiwiYWxsZXJnaWVzIiwiZGlzZWFzZSIsImFkZHJlc3MiLCJkZWxpdmVyeURhdGUiLCIkX2NvbnZlcnREYXRlIiwiZGVsaXZlcnlJbmZvIiwiYmFieVNleCIsInVzZXJTb3VyY2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLEUsUUFFVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixVQUExQyxFQUFxRCx1QkFBc0IsU0FBM0UsRUFBcUYsd0JBQXVCLFVBQTVHLEVBQXVILGlCQUFnQixNQUF2SSxFQUE4SSxjQUFhLEVBQTNKLEVBQWQsRSxRQUNUQyxPLEdBQVUsRUFBQyxjQUFhLEVBQUMsc0JBQXFCLHFCQUF0QixFQUFkLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMQyxlQUFTLEtBRko7QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxnQkFBVTtBQUpMLEssUUFPUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLHlCQURRLCtCQUNhSCxRQURiLEVBQ3VCO0FBQzdCLGFBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFITyxLLFFBTVZJLE0sR0FBUyxFOzs7OztrQ0FHTTtBQUFBOztBQUFBLFVBQU5DLEVBQU0sU0FBTkEsRUFBTTs7QUFDYixVQUFJQSxPQUFPQyxTQUFYLEVBQXNCO0FBQUU7QUFDdEJDLFdBQUdDLHFCQUFILENBQXlCO0FBQ3ZCQyxpQkFBTztBQURnQixTQUF6QjtBQUdBLGFBQUtaLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxhQUFLQyxPQUFMLEdBQWUsSUFBZjs7QUFFQSxhQUFLQyxRQUFMLEdBQWdCTSxPQUFPLEdBQXZCLENBUG9CLENBT087QUFDM0IsYUFBS0ssU0FBTCxDQUFlO0FBQ2JDLGVBQUssZUFEUTtBQUViZixnQkFBTTtBQUNKUztBQURJO0FBRk8sU0FBZixFQUtHTyxJQUxILENBS1EsbUJBQVc7QUFDakJDLG9CQUFVQSxXQUFXLEVBQXJCO0FBQ0EsaUJBQUtDLE9BQUwsQ0FBYSxZQUFiLEVBQTJCLGNBQTNCLEVBQTJDO0FBQ3pDVCxnQkFBSVEsUUFBUVIsRUFENkIsRUFDekI7QUFDaEJVLG9CQUFRRixRQUFRRSxNQUZ5QixFQUVqQjtBQUN4QkMsdUJBQVdILFFBQVFHLFNBSHNCLEVBR1g7QUFDOUJDLHFCQUFTSixRQUFRSSxPQUp3QixFQUlmO0FBQzFCQyxxQkFBU0wsUUFBUUssT0FMd0IsRUFLZjtBQUMxQkMsMEJBQWMsT0FBS0MsYUFBTCxDQUFtQlAsUUFBUU0sWUFBM0IsQ0FOMkI7QUFPekNFLDBCQUFjUixRQUFRUSxZQVBtQjtBQVF6Q0MscUJBQVNULFFBQVFTLE9BQVIsS0FBb0IsQ0FBcEIsR0FBd0IsR0FBeEIsR0FBOEIsR0FSRTtBQVN6Q0Msd0JBQVlWLFFBQVFVO0FBVHFCLFdBQTNDO0FBV0QsU0FsQkQ7QUFtQkQsT0EzQkQsTUEyQk87QUFDTGhCLFdBQUdDLHFCQUFILENBQXlCO0FBQ3ZCQyxpQkFBTztBQURnQixTQUF6QjtBQUdBLGFBQUtaLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBQ0Y7Ozs7RUFsRWdDLGVBQUswQixJOztrQkFBbkJwQyxLIiwiZmlsZSI6Im15X3JlbGF0aW9uX2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgUGVyc29uSW5mbyBmcm9tICdAL2NvbXBvbmVudHMvcGVyc29uSW5mbydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUGVyc29uSW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cmVhZG9ubHkuc3luY1wiOlwicmVhZG9ubHlcIixcInYtYmluZDpjYW5FZGl0LnN5bmNcIjpcImNhbkVkaXRcIixcInYtYmluZDppc01hc3Rlci5zeW5jXCI6XCJpc01hc3RlclwiLFwic3VibWl0QnRuVGV4dFwiOlwi56Gu6K6k5re75YqgXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiUGVyc29uSW5mb1wiOntcInYtb246cGlja2Vkc0NoYW5nZVwiOlwiaGFuZGxlUGlja2Vkc0NoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUGVyc29uSW5mb1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICBjYW5FZGl0OiBmYWxzZSxcbiAgICAgIGlzTWFzdGVyOiBmYWxzZSxcbiAgICAgIGZvcm1EYXRhOiB7fVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZWRzQ2hhbmdlIChmb3JtRGF0YSkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKHsgaWQgfSkge1xuICAgICAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHsgLy8gcXVlcnnkuK3mnIlpZOivtOaYjuaYr+afpeeci+e7keWumueahOWwseiviuS6uuS/oeaBr++8iOWPr+e8lui+ke+8iVxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgIHRpdGxlOiAn5bCx6K+K5Lq65L+h5oGvJ1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdHJ1ZVxuICAgICAgICB0aGlzLmNhbkVkaXQgPSB0cnVlXG5cbiAgICAgICAgdGhpcy5pc01hc3RlciA9IGlkID09PSAnMCcgLy8g5YGH6K6+55m75b2V5Lq66LSm5Y+3aWTkuLowXG4gICAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICcvcGF0aWVudEluZm8vJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihjb250ZW50ID0+IHtcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudCB8fCB7fVxuICAgICAgICAgIHRoaXMuJGludm9rZSgnUGVyc29uSW5mbycsICdzeW5jRm9ybURhdGEnLCB7XG4gICAgICAgICAgICBpZDogY29udGVudC5pZCwgLy8g5Y2h5Y+3XG4gICAgICAgICAgICBjYXJkSWQ6IGNvbnRlbnQuY2FyZElkLCAvLyDouqvku73or4Hlj7dcbiAgICAgICAgICAgIGFsbGVyZ2llczogY29udGVudC5hbGxlcmdpZXMsIC8vIOi/h+aVj+WPslxuICAgICAgICAgICAgZGlzZWFzZTogY29udGVudC5kaXNlYXNlLCAvLyDnlr7nl4Xlj7JcbiAgICAgICAgICAgIGFkZHJlc3M6IGNvbnRlbnQuYWRkcmVzcywgLy8g6IGU57O75Zyw5Z2AXG4gICAgICAgICAgICBkZWxpdmVyeURhdGU6IHRoaXMuJF9jb252ZXJ0RGF0ZShjb250ZW50LmRlbGl2ZXJ5RGF0ZSksXG4gICAgICAgICAgICBkZWxpdmVyeUluZm86IGNvbnRlbnQuZGVsaXZlcnlJbmZvLFxuICAgICAgICAgICAgYmFieVNleDogY29udGVudC5iYWJ5U2V4ID09PSAwID8gJ+WlsycgOiAn55S3JyxcbiAgICAgICAgICAgIHVzZXJTb3VyY2U6IGNvbnRlbnQudXNlclNvdXJjZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgIHRpdGxlOiAn5re75Yqg5bCx6K+K5Lq6J1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gZmFsc2VcbiAgICAgICAgdGhpcy5jYW5FZGl0ID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==
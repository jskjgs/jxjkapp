'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customCard = require('./../components/customCard.js');

var _customCard2 = _interopRequireDefault(_customCard);

var _starComment = require('./../components/starComment.js');

var _starComment2 = _interopRequireDefault(_starComment);

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
      navigationBarTitleText: '评价'
    }, _this.$repeat = {}, _this.$props = { "CustomCard": { "title": "Thermage 热玛吉" }, "StarComment": { "class": "star-comment-wrap", "total": "3", "xmlns:v-bind": "", "v-bind:value.sync": "commentStar", "v-bind:canPicked.once": "canComment" } }, _this.$events = {}, _this.components = {
      CustomCard: _customCard2.default,
      StarComment: _starComment2.default
    }, _this.mixins = [], _this.data = {
      textareaValue: '地方实弹射击',
      textareaMaxLen: 40,
      canComment: false,
      commentStar: 0,
      commentDate: '2017/09/11 23:11:04'
    }, _this.computed = {}, _this.methods = {
      handleInput: function handleInput(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        this.textareaValue = value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_comment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9jb21tZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkN1c3RvbUNhcmQiLCJTdGFyQ29tbWVudCIsIm1peGlucyIsImRhdGEiLCJ0ZXh0YXJlYVZhbHVlIiwidGV4dGFyZWFNYXhMZW4iLCJjYW5Db21tZW50IiwiY29tbWVudFN0YXIiLCJjb21tZW50RGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZUlucHV0IiwiZGV0YWlsIiwidmFsdWUiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLFNBQVEsY0FBVCxFQUFkLEVBQXVDLGVBQWMsRUFBQyxTQUFRLG1CQUFULEVBQTZCLFNBQVEsR0FBckMsRUFBeUMsZ0JBQWUsRUFBeEQsRUFBMkQscUJBQW9CLGFBQS9FLEVBQTZGLHlCQUF3QixZQUFySCxFQUFyRCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxzQ0FEUTtBQUVSQztBQUZRLEssUUFLVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLHFCQUFlLFFBRFY7QUFFTEMsc0JBQWdCLEVBRlg7QUFHTEMsa0JBQVksS0FIUDtBQUlMQyxtQkFBYSxDQUpSO0FBS0xDLG1CQUFhO0FBTFIsSyxRQVFQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsaUJBRFEsOEJBQ2U7QUFBQSxZQUFUQyxNQUFTLFNBQVRBLE1BQVM7O0FBQ3JCLFlBQU1DLFFBQVFELE9BQU9DLEtBQXJCO0FBQ0EsYUFBS1QsYUFBTCxHQUFxQlMsS0FBckI7QUFDRDtBQUpPLEssUUFPVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUFwQ2dDLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoiaGVhbHRoX2NvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEN1c3RvbUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbUNhcmQnXG4gIGltcG9ydCBTdGFyQ29tbWVudCBmcm9tICdAL2NvbXBvbmVudHMvc3RhckNvbW1lbnQnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor4Tku7cnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDdXN0b21DYXJkXCI6e1widGl0bGVcIjpcIlRoZXJtYWdlIOeDreeOm+WQiVwifSxcIlN0YXJDb21tZW50XCI6e1wiY2xhc3NcIjpcInN0YXItY29tbWVudC13cmFwXCIsXCJ0b3RhbFwiOlwiM1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJjb21tZW50U3RhclwiLFwidi1iaW5kOmNhblBpY2tlZC5vbmNlXCI6XCJjYW5Db21tZW50XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIEN1c3RvbUNhcmQsXG4gICAgICBTdGFyQ29tbWVudFxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgdGV4dGFyZWFWYWx1ZTogJ+WcsOaWueWunuW8ueWwhOWHuycsXG4gICAgICB0ZXh0YXJlYU1heExlbjogNDAsXG4gICAgICBjYW5Db21tZW50OiBmYWxzZSxcbiAgICAgIGNvbW1lbnRTdGFyOiAwLFxuICAgICAgY29tbWVudERhdGU6ICcyMDE3LzA5LzExIDIzOjExOjA0J1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVJbnB1dCAoe2RldGFpbH0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy50ZXh0YXJlYVZhbHVlID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
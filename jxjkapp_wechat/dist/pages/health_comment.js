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
      navigationBarTitleText: '评价'
    }, _this.$repeat = {}, _this.$props = { "CustomCard": { "title": "Thermage 热玛吉" }, "StarComment": { "class": "star-comment-wrap", "total": "3", "xmlns:v-bind": "", "v-bind:value.sync": "commentStar", "v-bind:canPicked.sync": "canComment" } }, _this.$events = {}, _this.components = {
      CustomCard: _customCard2.default,
      StarComment: _starComment2.default
    }, _this.mixins = [], _this.data = {
      textareaValue: '地方实弹射击',
      textareaMaxLen: 40,
      canComment: true,
      commentStar: 0,
      commentDate: ''
    }, _this.computed = {}, _this.watch = {
      commentStar: function commentStar(newVal) {
        console.log('commentStar', newVal);
      }
    }, _this.methods = {
      handleInput: function handleInput(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        this.textareaValue = value && value.trim();
      },
      submit: function submit() {
        if (this.commentStar === 0) {
          wx.showToast({
            title: '请选择评分',
            image: '../assets/images/demo.png'
          });
        } else {
          this.canComment = false;
          this.commentDate = (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s');
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('commentStar', this.commentStar);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_comment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9jb21tZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkN1c3RvbUNhcmQiLCJTdGFyQ29tbWVudCIsIm1peGlucyIsImRhdGEiLCJ0ZXh0YXJlYVZhbHVlIiwidGV4dGFyZWFNYXhMZW4iLCJjYW5Db21tZW50IiwiY29tbWVudFN0YXIiLCJjb21tZW50RGF0ZSIsImNvbXB1dGVkIiwid2F0Y2giLCJuZXdWYWwiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImhhbmRsZUlucHV0IiwiZGV0YWlsIiwidmFsdWUiLCJ0cmltIiwic3VibWl0Iiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImltYWdlIiwiRGF0ZSIsImdldFRpbWUiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsU0FBUSxjQUFULEVBQWQsRUFBdUMsZUFBYyxFQUFDLFNBQVEsbUJBQVQsRUFBNkIsU0FBUSxHQUFyQyxFQUF5QyxnQkFBZSxFQUF4RCxFQUEyRCxxQkFBb0IsYUFBL0UsRUFBNkYseUJBQXdCLFlBQXJILEVBQXJELEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLHNDQURRO0FBRVJDO0FBRlEsSyxRQUtWQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMscUJBQWUsUUFEVjtBQUVMQyxzQkFBZ0IsRUFGWDtBQUdMQyxrQkFBWSxJQUhQO0FBSUxDLG1CQUFhLENBSlI7QUFLTEMsbUJBQWE7QUFMUixLLFFBUVBDLFEsR0FBVyxFLFFBR1hDLEssR0FBUTtBQUNOSCxpQkFETSx1QkFDT0ksTUFEUCxFQUNlO0FBQ25CQyxnQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJGLE1BQTNCO0FBQ0Q7QUFISyxLLFFBTVJHLE8sR0FBVTtBQUNSQyxpQkFEUSw4QkFDZTtBQUFBLFlBQVRDLE1BQVMsU0FBVEEsTUFBUzs7QUFDckIsWUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxhQUFLYixhQUFMLEdBQXFCYSxTQUFTQSxNQUFNQyxJQUFOLEVBQTlCO0FBQ0QsT0FKTztBQUtSQyxZQUxRLG9CQUtFO0FBQ1IsWUFBSSxLQUFLWixXQUFMLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCYSxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sT0FESTtBQUVYQyxtQkFBTztBQUZJLFdBQWI7QUFJRCxTQUxELE1BS087QUFDTCxlQUFLakIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLGVBQUtFLFdBQUwsR0FBbUIsMkJBQVksSUFBSWdCLElBQUosR0FBV0MsT0FBWCxFQUFaLEVBQWtDLGFBQWxDLENBQW5CO0FBQ0Q7QUFDRjtBQWZPLEssUUFrQlZDLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQZCxjQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQixLQUFLTixXQUFoQztBQUNEOzs7O0VBdERnQyxlQUFLb0IsSTs7a0JBQW5CbEMsSyIsImZpbGUiOiJoZWFsdGhfY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ3VzdG9tQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tQ2FyZCdcbiAgaW1wb3J0IFN0YXJDb21tZW50IGZyb20gJ0AvY29tcG9uZW50cy9zdGFyQ29tbWVudCdcblxuICBpbXBvcnQgY29udmVydERhdGUgZnJvbSAnQC91dGlscy9jb252ZXJ0RGF0ZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivhOS7tydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkN1c3RvbUNhcmRcIjp7XCJ0aXRsZVwiOlwiVGhlcm1hZ2Ug54Ot546b5ZCJXCJ9LFwiU3RhckNvbW1lbnRcIjp7XCJjbGFzc1wiOlwic3Rhci1jb21tZW50LXdyYXBcIixcInRvdGFsXCI6XCIzXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImNvbW1lbnRTdGFyXCIsXCJ2LWJpbmQ6Y2FuUGlja2VkLnN5bmNcIjpcImNhbkNvbW1lbnRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ3VzdG9tQ2FyZCxcbiAgICAgIFN0YXJDb21tZW50XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICB0ZXh0YXJlYVZhbHVlOiAn5Zyw5pa55a6e5by55bCE5Ye7JyxcbiAgICAgIHRleHRhcmVhTWF4TGVuOiA0MCxcbiAgICAgIGNhbkNvbW1lbnQ6IHRydWUsXG4gICAgICBjb21tZW50U3RhcjogMCxcbiAgICAgIGNvbW1lbnREYXRlOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgY29tbWVudFN0YXIgKG5ld1ZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudFN0YXInLCBuZXdWYWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUlucHV0ICh7ZGV0YWlsfSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLnRleHRhcmVhVmFsdWUgPSB2YWx1ZSAmJiB2YWx1ZS50cmltKClcbiAgICAgIH0sXG4gICAgICBzdWJtaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5jb21tZW50U3RhciA9PT0gMCkge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeivhOWIhicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbkNvbW1lbnQgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuY29tbWVudERhdGUgPSBjb252ZXJ0RGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSwgJ1ktTS1EIGg6bTpzJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudFN0YXInLCB0aGlzLmNvbW1lbnRTdGFyKVxuICAgIH1cbiAgfVxuIl19
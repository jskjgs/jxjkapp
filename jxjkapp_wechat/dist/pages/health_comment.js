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
    }, _this.computed = {}, _this.methods = {
      handleInput: function handleInput(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        this.textareaValue = value;
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
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_comment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9jb21tZW50LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkN1c3RvbUNhcmQiLCJTdGFyQ29tbWVudCIsIm1peGlucyIsImRhdGEiLCJ0ZXh0YXJlYVZhbHVlIiwidGV4dGFyZWFNYXhMZW4iLCJjYW5Db21tZW50IiwiY29tbWVudFN0YXIiLCJjb21tZW50RGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZUlucHV0IiwiZGV0YWlsIiwidmFsdWUiLCJzdWJtaXQiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaW1hZ2UiLCJEYXRlIiwiZ2V0VGltZSIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxTQUFRLGNBQVQsRUFBZCxFQUF1QyxlQUFjLEVBQUMsU0FBUSxtQkFBVCxFQUE2QixTQUFRLEdBQXJDLEVBQXlDLGdCQUFlLEVBQXhELEVBQTJELHFCQUFvQixhQUEvRSxFQUE2Rix5QkFBd0IsWUFBckgsRUFBckQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsc0NBRFE7QUFFUkM7QUFGUSxLLFFBS1ZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxxQkFBZSxRQURWO0FBRUxDLHNCQUFnQixFQUZYO0FBR0xDLGtCQUFZLElBSFA7QUFJTEMsbUJBQWEsQ0FKUjtBQUtMQyxtQkFBYTtBQUxSLEssUUFRUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGlCQURRLDhCQUNlO0FBQUEsWUFBVEMsTUFBUyxTQUFUQSxNQUFTOztBQUNyQixZQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNBLGFBQUtULGFBQUwsR0FBcUJTLEtBQXJCO0FBQ0QsT0FKTztBQUtSQyxZQUxRLG9CQUtFO0FBQ1IsWUFBSSxLQUFLUCxXQUFMLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCUSxhQUFHQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sT0FESTtBQUVYQyxtQkFBTztBQUZJLFdBQWI7QUFJRCxTQUxELE1BS087QUFDTCxlQUFLWixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsZUFBS0UsV0FBTCxHQUFtQiwyQkFBWSxJQUFJVyxJQUFKLEdBQVdDLE9BQVgsRUFBWixFQUFrQyxhQUFsQyxDQUFuQjtBQUNEO0FBQ0Y7QUFmTyxLLFFBa0JWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQS9DZ0MsZUFBS0MsSTs7a0JBQW5CN0IsSyIsImZpbGUiOiJoZWFsdGhfY29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgQ3VzdG9tQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tQ2FyZCdcbiAgaW1wb3J0IFN0YXJDb21tZW50IGZyb20gJ0AvY29tcG9uZW50cy9zdGFyQ29tbWVudCdcblxuICBpbXBvcnQgY29udmVydERhdGUgZnJvbSAnQC91dGlscy9jb252ZXJ0RGF0ZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ivhOS7tydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkN1c3RvbUNhcmRcIjp7XCJ0aXRsZVwiOlwiVGhlcm1hZ2Ug54Ot546b5ZCJXCJ9LFwiU3RhckNvbW1lbnRcIjp7XCJjbGFzc1wiOlwic3Rhci1jb21tZW50LXdyYXBcIixcInRvdGFsXCI6XCIzXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImNvbW1lbnRTdGFyXCIsXCJ2LWJpbmQ6Y2FuUGlja2VkLnN5bmNcIjpcImNhbkNvbW1lbnRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ3VzdG9tQ2FyZCxcbiAgICAgIFN0YXJDb21tZW50XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICB0ZXh0YXJlYVZhbHVlOiAn5Zyw5pa55a6e5by55bCE5Ye7JyxcbiAgICAgIHRleHRhcmVhTWF4TGVuOiA0MCxcbiAgICAgIGNhbkNvbW1lbnQ6IHRydWUsXG4gICAgICBjb21tZW50U3RhcjogMCxcbiAgICAgIGNvbW1lbnREYXRlOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVJbnB1dCAoe2RldGFpbH0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy50ZXh0YXJlYVZhbHVlID0gdmFsdWVcbiAgICAgIH0sXG4gICAgICBzdWJtaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5jb21tZW50U3RhciA9PT0gMCkge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeivhOWIhicsXG4gICAgICAgICAgICBpbWFnZTogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbkNvbW1lbnQgPSBmYWxzZVxuICAgICAgICAgIHRoaXMuY29tbWVudERhdGUgPSBjb252ZXJ0RGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSwgJ1ktTS1EIGg6bTpzJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
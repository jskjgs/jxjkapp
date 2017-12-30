'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customCard = require('./../components/customCard.js');

var _customCard2 = _interopRequireDefault(_customCard);

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
      navigationBarTitleText: 'test'
    }, _this.$repeat = {}, _this.$props = { "CustomCard": { "title": "Thermage 热玛吉" } }, _this.$events = {}, _this.components = {
      CustomCard: _customCard2.default
    }, _this.data = {
      textareaValue: '放声大哭见风使舵剋借口借口借口借口',
      textareaMaxLen: 40,
      canCancel: true,
      cancelDate: ''
    }, _this.computed = {}, _this.methods = {
      handleInput: function handleInput(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        this.textareaValue = value;
      },
      submit: function submit() {
        this.canCancel = false;
        this.cancelDate = (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_cancel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9jYW5jZWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ3VzdG9tQ2FyZCIsImRhdGEiLCJ0ZXh0YXJlYVZhbHVlIiwidGV4dGFyZWFNYXhMZW4iLCJjYW5DYW5jZWwiLCJjYW5jZWxEYXRlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiaGFuZGxlSW5wdXQiLCJkZXRhaWwiLCJ2YWx1ZSIsInN1Ym1pdCIsIkRhdGUiLCJnZXRUaW1lIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxTQUFRLGNBQVQsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsSSxHQUFPO0FBQ0xDLHFCQUFlLG1CQURWO0FBRUxDLHNCQUFnQixFQUZYO0FBR0xDLGlCQUFXLElBSE47QUFJTEMsa0JBQVk7QUFKUCxLLFFBT1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxpQkFEUSw4QkFDZTtBQUFBLFlBQVRDLE1BQVMsU0FBVEEsTUFBUzs7QUFDckIsWUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxhQUFLUixhQUFMLEdBQXFCUSxLQUFyQjtBQUNELE9BSk87QUFLUkMsWUFMUSxvQkFLRTtBQUNSLGFBQUtQLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLDJCQUFZLElBQUlPLElBQUosR0FBV0MsT0FBWCxFQUFaLEVBQWtDLGFBQWxDLENBQWxCO0FBQ0Q7QUFSTyxLLFFBV1ZDLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBcENnQyxlQUFLQyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6ImhlYWx0aF9jYW5jZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEN1c3RvbUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbUNhcmQnXG5cbiAgaW1wb3J0IGNvbnZlcnREYXRlIGZyb20gJ0AvdXRpbHMvY29udmVydERhdGUnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQ3VzdG9tQ2FyZFwiOntcInRpdGxlXCI6XCJUaGVybWFnZSDng63njpvlkIlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ3VzdG9tQ2FyZFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB0ZXh0YXJlYVZhbHVlOiAn5pS+5aOw5aSn5ZOt6KeB6aOO5L2/6Ii15YmL5YCf5Y+j5YCf5Y+j5YCf5Y+j5YCf5Y+jJyxcbiAgICAgIHRleHRhcmVhTWF4TGVuOiA0MCxcbiAgICAgIGNhbkNhbmNlbDogdHJ1ZSxcbiAgICAgIGNhbmNlbERhdGU6ICcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUlucHV0ICh7ZGV0YWlsfSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLnRleHRhcmVhVmFsdWUgPSB2YWx1ZVxuICAgICAgfSxcbiAgICAgIHN1Ym1pdCAoKSB7XG4gICAgICAgIHRoaXMuY2FuQ2FuY2VsID0gZmFsc2VcbiAgICAgICAgdGhpcy5jYW5jZWxEYXRlID0gY29udmVydERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCksICdZLU0tRCBoOm06cycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
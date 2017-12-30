'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customCard = require('./../components/customCard.js');

var _customCard2 = _interopRequireDefault(_customCard);

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
    }, _this.$repeat = {}, _this.$props = { "CustomCard": { "title": "Thermage 热玛吉" } }, _this.$events = {}, _this.components = {
      CustomCard: _customCard2.default
    }, _this.mixins = [], _this.data = {
      textareaValue: '',
      textareaMaxLen: 40
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_appraise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9hcHByYWlzZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDdXN0b21DYXJkIiwibWl4aW5zIiwiZGF0YSIsInRleHRhcmVhVmFsdWUiLCJ0ZXh0YXJlYU1heExlbiIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZUlucHV0IiwiZGV0YWlsIiwidmFsdWUiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxTQUFRLGNBQVQsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEssUUFJVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLHFCQUFlLEVBRFY7QUFFTEMsc0JBQWdCO0FBRlgsSyxRQUtQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsaUJBRFEsOEJBQ2U7QUFBQSxZQUFUQyxNQUFTLFNBQVRBLE1BQVM7O0FBQ3JCLFlBQU1DLFFBQVFELE9BQU9DLEtBQXJCO0FBQ0EsYUFBS04sYUFBTCxHQUFxQk0sS0FBckI7QUFDRDtBQUpPLEssUUFPVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUFoQ2dDLGVBQUtDLEk7O2tCQUFuQmxCLEsiLCJmaWxlIjoiaGVhbHRoX2FwcHJhaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBDdXN0b21DYXJkIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b21DYXJkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K+E5Lu3J1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQ3VzdG9tQ2FyZFwiOntcInRpdGxlXCI6XCJUaGVybWFnZSDng63njpvlkIlcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgQ3VzdG9tQ2FyZFxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgdGV4dGFyZWFWYWx1ZTogJycsXG4gICAgICB0ZXh0YXJlYU1heExlbjogNDBcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlSW5wdXQgKHtkZXRhaWx9KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMudGV4dGFyZWFWYWx1ZSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
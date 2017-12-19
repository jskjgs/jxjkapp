'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarComment = function (_wepy$component) {
  _inherits(StarComment, _wepy$component);

  function StarComment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StarComment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StarComment.__proto__ || Object.getPrototypeOf(StarComment)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {
      canPicked: {
        type: Boolean,
        default: false
      },
      value: {
        type: Number,
        twoWay: true,
        default: 0
      },
      text: {
        type: Array,
        default: ['差评', '一般', '满意']
      },
      total: {
        type: String, // 数值字符串
        default: '3'
      },
      title: String
    }, _this.mixins = [], _this.data = {}, _this.computed = {
      starTip: function starTip() {
        return this.text[this.value - 1] || '  ';
      }
    }, _this.watch = {
      value: function value(val) {}
    }, _this.methods = {
      pickStar: function pickStar(index, canPicked) {
        console.log('canPicked', canPicked);
        if (canPicked) {
          this.value = index + 1;
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StarComment, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return StarComment;
}(_wepy2.default.component);

exports.default = StarComment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJDb21tZW50LmpzIl0sIm5hbWVzIjpbIlN0YXJDb21tZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiY2FuUGlja2VkIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidmFsdWUiLCJOdW1iZXIiLCJ0d29XYXkiLCJ0ZXh0IiwiQXJyYXkiLCJ0b3RhbCIsIlN0cmluZyIsInRpdGxlIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwic3RhclRpcCIsIndhdGNoIiwidmFsIiwibWV0aG9kcyIsInBpY2tTdGFyIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLFUsR0FBYSxFLFFBR2JDLEssR0FBUTtBQUNOQyxpQkFBVztBQUNUQyxjQUFNQyxPQURHO0FBRVRDLGlCQUFTO0FBRkEsT0FETDtBQUtOQyxhQUFPO0FBQ0xILGNBQU1JLE1BREQ7QUFFTEMsZ0JBQVEsSUFGSDtBQUdMSCxpQkFBUztBQUhKLE9BTEQ7QUFVTkksWUFBTTtBQUNKTixjQUFNTyxLQURGO0FBRUpMLGlCQUFTLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiO0FBRkwsT0FWQTtBQWNOTSxhQUFPO0FBQ0xSLGNBQU1TLE1BREQsRUFDUztBQUNkUCxpQkFBUztBQUZKLE9BZEQ7QUFrQk5RLGFBQU9EO0FBbEJELEssUUFxQlJFLE0sR0FBUyxFLFFBRVRDLEksR0FBTyxFLFFBR1BDLFEsR0FBVztBQUNUQyxhQURTLHFCQUNFO0FBQ1QsZUFBTyxLQUFLUixJQUFMLENBQVUsS0FBS0gsS0FBTCxHQUFhLENBQXZCLEtBQTZCLElBQXBDO0FBQ0Q7QUFIUSxLLFFBTVhZLEssR0FBUTtBQUNOWixXQURNLGlCQUNDYSxHQURELEVBQ00sQ0FDWDtBQUZLLEssUUFLUkMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0VDLEtBREYsRUFDU3BCLFNBRFQsRUFDb0I7QUFDMUJxQixnQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJ0QixTQUF6QjtBQUNBLFlBQUlBLFNBQUosRUFBZTtBQUNiLGVBQUtJLEtBQUwsR0FBYWdCLFFBQVEsQ0FBckI7QUFDRDtBQUNGO0FBTk8sSyxRQVNWRyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQXREc0MsZUFBS0MsUzs7a0JBQXpCM0IsVyIsImZpbGUiOiJzdGFyQ29tbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJDb21tZW50IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICBjYW5QaWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogMFxuICAgICAgfSxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFsn5beu6K+EJywgJ+S4gOiIrCcsICfmu6HmhI8nXVxuICAgICAgfSxcbiAgICAgIHRvdGFsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZywgLy8g5pWw5YC85a2X56ym5LiyXG4gICAgICAgIGRlZmF1bHQ6ICczJ1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiBTdHJpbmdcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHN0YXJUaXAgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0W3RoaXMudmFsdWUgLSAxXSB8fCAnICAnXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHBpY2tTdGFyIChpbmRleCwgY2FuUGlja2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYW5QaWNrZWQnLCBjYW5QaWNrZWQpXG4gICAgICAgIGlmIChjYW5QaWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gaW5kZXggKyAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
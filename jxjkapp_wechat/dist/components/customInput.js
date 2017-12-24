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

var CustomInput = function (_wepy$component) {
  _inherits(CustomInput, _wepy$component);

  function CustomInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: '',
        twoWay: true
      },
      password: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 140
      },
      placeholder: {
        type: String,
        default: ''
      },
      placeholderStyle: {
        type: String,
        default: ''
      }
    }, _this.mixins = [], _this.data = {}, _this.computed = {}, _this.methods = {
      handleInput: function handleInput(_ref2) {
        var detail = _ref2.detail;

        this.value = detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomInput, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return CustomInput;
}(_wepy2.default.component);

exports.default = CustomInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUlucHV0LmpzIl0sIm5hbWVzIjpbIkN1c3RvbUlucHV0IiwiY29tcG9uZW50cyIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ2YWx1ZSIsInR3b1dheSIsInBhc3N3b3JkIiwiQm9vbGVhbiIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiTnVtYmVyIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZUlucHV0IiwiZGV0YWlsIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLFUsR0FBYSxFLFFBR2JDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pBLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGFBQU87QUFDTEgsY0FBTUMsTUFERDtBQUVMQyxpQkFBUyxFQUZKO0FBR0xFLGdCQUFRO0FBSEgsT0FMRDtBQVVOQyxnQkFBVTtBQUNSTCxjQUFNTSxPQURFO0FBRVJKLGlCQUFTO0FBRkQsT0FWSjtBQWNOSyxnQkFBVTtBQUNSUCxjQUFNTSxPQURFO0FBRVJKLGlCQUFTO0FBRkQsT0FkSjtBQWtCTk0saUJBQVc7QUFDVFIsY0FBTVMsTUFERztBQUVUUCxpQkFBUztBQUZBLE9BbEJMO0FBc0JOUSxtQkFBYTtBQUNYVixjQUFNQyxNQURLO0FBRVhDLGlCQUFTO0FBRkUsT0F0QlA7QUEwQk5TLHdCQUFrQjtBQUNoQlgsY0FBTUMsTUFEVTtBQUVoQkMsaUJBQVM7QUFGTztBQTFCWixLLFFBZ0NSVSxNLEdBQVMsRSxRQUVUQyxJLEdBQU8sRSxRQUdQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsaUJBRFEsOEJBQ2lCO0FBQUEsWUFBVkMsTUFBVSxTQUFWQSxNQUFVOztBQUN2QixhQUFLZCxLQUFMLEdBQWFjLE9BQU9kLEtBQXBCO0FBQ0Q7QUFITyxLLFFBTVZlLE0sR0FBUyxFOzs7Ozs2QkFHQSxDQUNSOzs7O0VBdERzQyxlQUFLQyxTOztrQkFBekJ0QixXIiwiZmlsZSI6ImN1c3RvbUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tSW5wdXQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMTQwXG4gICAgICB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyU3R5bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVJbnB1dCAoeyBkZXRhaWwgfSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==
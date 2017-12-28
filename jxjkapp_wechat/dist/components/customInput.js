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
    value: function onLoad() {
      console.log('disabled', this.disabled);
    }
  }]);

  return CustomInput;
}(_wepy2.default.component);

exports.default = CustomInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUlucHV0LmpzIl0sIm5hbWVzIjpbIkN1c3RvbUlucHV0IiwiY29tcG9uZW50cyIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ2YWx1ZSIsInR3b1dheSIsInBhc3N3b3JkIiwiQm9vbGVhbiIsImRpc2FibGVkIiwibWF4bGVuZ3RoIiwiTnVtYmVyIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZUlucHV0IiwiZGV0YWlsIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxVLEdBQWEsRSxRQUdiQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQSxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkwsT0FEQTtBQUtOQyxhQUFPO0FBQ0xILGNBQU1DLE1BREQ7QUFFTEMsaUJBQVMsRUFGSjtBQUdMRSxnQkFBUTtBQUhILE9BTEQ7QUFVTkMsZ0JBQVU7QUFDUkwsY0FBTU0sT0FERTtBQUVSSixpQkFBUztBQUZELE9BVko7QUFjTkssZ0JBQVU7QUFDUlAsY0FBTU0sT0FERTtBQUVSSixpQkFBUztBQUZELE9BZEo7QUFrQk5NLGlCQUFXO0FBQ1RSLGNBQU1TLE1BREc7QUFFVFAsaUJBQVM7QUFGQSxPQWxCTDtBQXNCTlEsbUJBQWE7QUFDWFYsY0FBTUMsTUFESztBQUVYQyxpQkFBUztBQUZFLE9BdEJQO0FBMEJOUyx3QkFBa0I7QUFDaEJYLGNBQU1DLE1BRFU7QUFFaEJDLGlCQUFTO0FBRk87QUExQlosSyxRQWdDUlUsTSxHQUFTLEUsUUFFVEMsSSxHQUFPLEUsUUFHUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVO0FBQ1JDLGlCQURRLDhCQUNpQjtBQUFBLFlBQVZDLE1BQVUsU0FBVkEsTUFBVTs7QUFDdkIsYUFBS2QsS0FBTCxHQUFhYyxPQUFPZCxLQUFwQjtBQUNEO0FBSE8sSyxRQU1WZSxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBd0IsS0FBS2IsUUFBN0I7QUFDRDs7OztFQXZEc0MsZUFBS2MsUzs7a0JBQXpCeEIsVyIsImZpbGUiOiJjdXN0b21JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUlucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgcHJvcHMgPSB7XG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDE0MFxuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlclN0eWxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlSW5wdXQgKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGRldGFpbC52YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGlzYWJsZWQnLCB0aGlzLmRpc2FibGVkKVxuICAgIH1cbiAgfVxuIl19
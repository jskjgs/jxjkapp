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

var Dialog = function (_wepy$component) {
  _inherits(Dialog, _wepy$component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.props = {
      visible: {
        type: Boolean,
        twoWay: true
      },
      innerStyle: {
        type: String
      }
    }, _this.mixins = [], _this.data = {}, _this.computed = {}, _this.methods = {
      modalClick: function modalClick() {
        this.visible = false;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.visible, 111);
    }
  }]);

  return Dialog;
}(_wepy2.default.component);

exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJjb21wb25lbnRzIiwicHJvcHMiLCJ2aXNpYmxlIiwidHlwZSIsIkJvb2xlYW4iLCJ0d29XYXkiLCJpbm5lclN0eWxlIiwiU3RyaW5nIiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm1vZGFsQ2xpY2siLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLFUsR0FBYSxFLFFBR2JDLEssR0FBUTtBQUNOQyxlQUFTO0FBQ1BDLGNBQU1DLE9BREM7QUFFUEMsZ0JBQVE7QUFGRCxPQURIO0FBS05DLGtCQUFZO0FBQ1ZILGNBQU1JO0FBREk7QUFMTixLLFFBU1JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTyxFLFFBR1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDTTtBQUNaLGFBQUtWLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUFITyxLLFFBTVZXLE0sR0FBUyxFOzs7Ozs2QkFHQTtBQUNQQyxjQUFRQyxHQUFSLENBQVksS0FBS2IsT0FBakIsRUFBMEIsR0FBMUI7QUFDRDs7OztFQWhDaUMsZUFBS2MsUzs7a0JBQXBCakIsTSIsImZpbGUiOiJkaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIHZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9LFxuICAgICAgaW5uZXJTdHlsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH1cbiAgICB9XG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG1vZGFsQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnZpc2libGUsIDExMSlcbiAgICB9XG4gIH1cbiJdfQ==
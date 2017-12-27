'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _personInfo = require('./../components/personInfo.js');

var _personInfo2 = _interopRequireDefault(_personInfo);

var _validator = require('./../utils/validator.js');

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
      navigationBarTitleText: '注册信息'
    }, _this.$repeat = {}, _this.$props = { "PersonInfo": { "xmlns:v-on": "" } }, _this.$events = { "PersonInfo": { "v-on:pickedsChange": "handlePickedsChange" } }, _this.components = {
      PersonInfo: _personInfo2.default
    }, _this.mixins = [], _this.data = {
      formData: '',
      canSubmit: false
    }, _this.computed = {}, _this.watch = {
      formData: function formData(newVal) {
        var id = newVal.id.trim();
        var cardId = newVal.cardId.trim();
        if (id && (0, _validator.validCardId)(cardId)) {
          this.canSubmit = true;
        } else {
          this.canSubmit = false;
        }
      }
    }, _this.methods = {
      handlePickedsChange: function handlePickedsChange(formData) {
        this.formData = formData;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/signup_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cF9pbmZvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBlcnNvbkluZm8iLCJtaXhpbnMiLCJkYXRhIiwiZm9ybURhdGEiLCJjYW5TdWJtaXQiLCJjb21wdXRlZCIsIndhdGNoIiwibmV3VmFsIiwiaWQiLCJ0cmltIiwiY2FyZElkIiwibWV0aG9kcyIsImhhbmRsZVBpY2tlZHNDaGFuZ2UiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFJcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxjQUFhLEVBQWQsRUFBZCxFLFFBQ1RDLE8sR0FBVSxFQUFDLGNBQWEsRUFBQyxzQkFBcUIscUJBQXRCLEVBQWQsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGlCQUFXO0FBRk4sSyxRQUtQQyxRLEdBQVcsRSxRQUdYQyxLLEdBQVE7QUFDTkgsY0FETSxvQkFDSUksTUFESixFQUNZO0FBQ2hCLFlBQU1DLEtBQUtELE9BQU9DLEVBQVAsQ0FBVUMsSUFBVixFQUFYO0FBQ0EsWUFBTUMsU0FBU0gsT0FBT0csTUFBUCxDQUFjRCxJQUFkLEVBQWY7QUFDQSxZQUFJRCxNQUFNLDRCQUFZRSxNQUFaLENBQVYsRUFBK0I7QUFDN0IsZUFBS04sU0FBTCxHQUFpQixJQUFqQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLFNBQUwsR0FBaUIsS0FBakI7QUFDRDtBQUNGO0FBVEssSyxRQVlSTyxPLEdBQVU7QUFDUkMseUJBRFEsK0JBQ2FULFFBRGIsRUFDdUI7QUFDN0IsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUhPLEssUUFNVlUsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUEzQ2dDLGVBQUtDLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoic2lnbnVwX2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgUGVyc29uSW5mbyBmcm9tICdAL2NvbXBvbmVudHMvcGVyc29uSW5mbydcbiAgaW1wb3J0IHtcbiAgICB2YWxpZENhcmRJZFxuICB9IGZyb20gJ0AvdXRpbHMvdmFsaWRhdG9yJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rOo5YaM5L+h5oGvJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUGVyc29uSW5mb1wiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJQZXJzb25JbmZvXCI6e1widi1vbjpwaWNrZWRzQ2hhbmdlXCI6XCJoYW5kbGVQaWNrZWRzQ2hhbmdlXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBQZXJzb25JbmZvXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBmb3JtRGF0YTogJycsXG4gICAgICBjYW5TdWJtaXQ6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBmb3JtRGF0YSAobmV3VmFsKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbmV3VmFsLmlkLnRyaW0oKVxuICAgICAgICBjb25zdCBjYXJkSWQgPSBuZXdWYWwuY2FyZElkLnRyaW0oKVxuICAgICAgICBpZiAoaWQgJiYgdmFsaWRDYXJkSWQoY2FyZElkKSkge1xuICAgICAgICAgIHRoaXMuY2FuU3VibWl0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FuU3VibWl0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVQaWNrZWRzQ2hhbmdlIChmb3JtRGF0YSkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
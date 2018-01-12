'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
      navigationBarTitleText: '医生介绍'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      name: '',
      description: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(_ref2) {
      var _this2 = this;

      var id = _ref2.id;

      this.$_request({
        url: '/doctorInfo/',
        data: {
          id: id
        }
      }).then(function (content) {
        content = content || {};
        _this2.name = content.name;
        _this2.description = content.description;
        _this2.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/doctor_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvcl9kZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJpZCIsIiRfcmVxdWVzdCIsInVybCIsInRoZW4iLCJjb250ZW50IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxtQkFBYTtBQUZSLEssUUFLUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7O2tDQUdNO0FBQUE7O0FBQUEsVUFBTkMsRUFBTSxTQUFOQSxFQUFNOztBQUNiLFdBQUtDLFNBQUwsQ0FBZTtBQUNiQyxhQUFLLGNBRFE7QUFFYlIsY0FBTTtBQUNKTTtBQURJO0FBRk8sT0FBZixFQUtHRyxJQUxILENBS1EsbUJBQVc7QUFDakJDLGtCQUFVQSxXQUFXLEVBQXJCO0FBQ0EsZUFBS1QsSUFBTCxHQUFZUyxRQUFRVCxJQUFwQjtBQUNBLGVBQUtDLFdBQUwsR0FBbUJRLFFBQVFSLFdBQTNCO0FBQ0EsZUFBS1MsTUFBTDtBQUNELE9BVkQ7QUFXRDs7OztFQWxDZ0MsZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJkb2N0b3JfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljLvnlJ/ku4vnu40nXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7fVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCh7IGlkIH0pIHtcbiAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnL2RvY3RvckluZm8vJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IHt9XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbnRlbnQubmFtZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gY29udGVudC5kZXNjcmlwdGlvblxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19
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
      navigationBarTitleText: '新闻中心'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      listData: [{
        photo: '../assets/images/demo.png',
        title: '为何产后关节痛？如何预防？',
        des: '提供医疗卫生行业资讯,提供医疗卫生行业资讯,报道最新医疗科研动态,追踪提供医疗卫生行业资讯,报道最新医疗科研动态,追踪,追踪',
        data: '2017-09-02'
      }, {
        photo: '../assets/images/demo.png',
        title: '为何产后关节痛？如何预防？',
        des: '提供医疗卫生行业资讯,提供医疗卫生行业资讯,报道最新医疗科研动态,追踪提供医疗卫生行业资讯,报道最新医疗科研动态,追踪,追踪',
        data: '2017-09-02'
      }, {
        photo: '../assets/images/demo.png',
        title: '为何产后关节痛？如何预防？',
        des: '提供医疗卫生行业资讯,提供医疗卫生行业资讯,报道最新医疗科研动态,追踪提供医疗卫生行业资讯,报道最新医疗科研动态,追踪,追踪',
        data: '2017-09-02'
      }]
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/news'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJsaXN0RGF0YSIsInBob3RvIiwidGl0bGUiLCJkZXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVUsQ0FBQztBQUNUQyxlQUFPLDJCQURFO0FBRVRDLGVBQU8sZUFGRTtBQUdUQyxhQUFLLGdFQUhJO0FBSVRKLGNBQU07QUFKRyxPQUFELEVBS1A7QUFDREUsZUFBTywyQkFETjtBQUVEQyxlQUFPLGVBRk47QUFHREMsYUFBSyxnRUFISjtBQUlESixjQUFNO0FBSkwsT0FMTyxFQVVQO0FBQ0RFLGVBQU8sMkJBRE47QUFFREMsZUFBTyxlQUZOO0FBR0RDLGFBQUssZ0VBSEo7QUFJREosY0FBTTtBQUpMLE9BVk87QUFETCxLLFFBbUJQSyxRLEdBQVcsRSxRQUdYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7NkJBR0EsQ0FDUjs7OztFQXJDZ0MsZUFBS0MsSTs7a0JBQW5CYixLIiwiZmlsZSI6Im5ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWsOmXu+S4reW/gydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3REYXRhOiBbe1xuICAgICAgICBwaG90bzogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4uuS9leS6p+WQjuWFs+iKgueXm++8n+WmguS9lemihOmYsu+8nycsXG4gICAgICAgIGRlczogJ+aPkOS+m+WMu+eWl+WNq+eUn+ihjOS4mui1hOiuryzmj5DkvpvljLvnlpfljavnlJ/ooYzkuJrotYTorq8s5oql6YGT5pyA5paw5Yy755aX56eR56CU5Yqo5oCBLOi/vei4quaPkOS+m+WMu+eWl+WNq+eUn+ihjOS4mui1hOiuryzmiqXpgZPmnIDmlrDljLvnlpfnp5HnoJTliqjmgIEs6L+96LiqLOi/vei4qicsXG4gICAgICAgIGRhdGE6ICcyMDE3LTA5LTAyJ1xuICAgICAgfSwge1xuICAgICAgICBwaG90bzogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4uuS9leS6p+WQjuWFs+iKgueXm++8n+WmguS9lemihOmYsu+8nycsXG4gICAgICAgIGRlczogJ+aPkOS+m+WMu+eWl+WNq+eUn+ihjOS4mui1hOiuryzmj5DkvpvljLvnlpfljavnlJ/ooYzkuJrotYTorq8s5oql6YGT5pyA5paw5Yy755aX56eR56CU5Yqo5oCBLOi/vei4quaPkOS+m+WMu+eWl+WNq+eUn+ihjOS4mui1hOiuryzmiqXpgZPmnIDmlrDljLvnlpfnp5HnoJTliqjmgIEs6L+96LiqLOi/vei4qicsXG4gICAgICAgIGRhdGE6ICcyMDE3LTA5LTAyJ1xuICAgICAgfSwge1xuICAgICAgICBwaG90bzogJy4uL2Fzc2V0cy9pbWFnZXMvZGVtby5wbmcnLFxuICAgICAgICB0aXRsZTogJ+S4uuS9leS6p+WQjuWFs+iKgueXm++8n+WmguS9lemihOmYsu+8nycsXG4gICAgICAgIGRlczogJ+aPkOS+m+WMu+eWl+WNq+eUn+ihjOS4mui1hOiuryzmj5DkvpvljLvnlpfljavnlJ/ooYzkuJrotYTorq8s5oql6YGT5pyA5paw5Yy755aX56eR56CU5Yqo5oCBLOi/vei4quaPkOS+m+WMu+eWl+WNq+eUn+ihjOS4mui1hOiuryzmiqXpgZPmnIDmlrDljLvnlpfnp5HnoJTliqjmgIEs6L+96LiqLOi/vei4qicsXG4gICAgICAgIGRhdGE6ICcyMDE3LTA5LTAyJ1xuICAgICAgfV1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuICB9XG4iXX0=
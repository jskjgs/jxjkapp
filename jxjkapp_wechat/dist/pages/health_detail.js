'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _convertDate = require('./../utils/convertDate.js');

var _convertDate2 = _interopRequireDefault(_convertDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//   评价和申请作废状态说明：

// ① 未评价和未申请作废的项目，按钮展示为“评价”和“申请作废”；

// ② 已评价的项目，按钮变为“已评价”；

// ③ 已申请作废&后台还未通过，按钮变为“处理中”；

// ④ 申请作废后台通过，该项目从列表中去掉；

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
      navigationBarTitleText: '健康记录'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      projectDesVisible: false,
      processList: [{
        _symptomSpread: undefined,
        date: (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s'),
        server: '赵雪晴',
        symptom: Array.from({ length: 120 }).map(function (item) {
          return '字';
        }).join(''),
        status: ''
      }, {
        _symptomSpread: undefined,
        date: (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s'),
        server: '赵雪晴',
        symptom: Array.from({ length: 40 }).map(function (item) {
          return '字';
        }).join(''),
        status: 'commented'
      }, {
        _symptomSpread: undefined,
        date: (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s'),
        server: '赵雪晴',
        symptom: Array.from({ length: 40 }).map(function (item) {
          return '字';
        }).join(''),
        status: 'processing'
      }]
    }, _this.computed = {}, _this.methods = {
      dropdown: function dropdown() {
        this.projectDesVisible = true;
      },
      dropup: function dropup() {
        this.projectDesVisible = false;
      },
      spreadSymptom: function spreadSymptom(canSpread, index) {
        if (canSpread) {
          this.processList[index]._symptomSpread = !this.processList[index]._symptomSpread;
        }
      },
      toComment: function toComment() {
        wx.navigateTo({
          url: '/pages/health_comment'
        });
      },
      toCancel: function toCancel() {
        wx.navigateTo({
          url: '/pages/health_cancel'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initData();
    }
  }, {
    key: 'initData',
    value: function initData() {
      var vm = this;
      setTimeout(function () {
        vm.initSymptom();
      }, 1000);
    }
    // 初始化症状文字

  }, {
    key: 'initSymptom',
    value: function initSymptom() {
      var vm = this;
      var query = wx.createSelectorQuery();
      query.selectAll('.item-symptom .item-symptom__text').boundingClientRect();
      query.selectAll('.item-symptom--clone .item-symptom__text').boundingClientRect().exec(function () {
        var reality = arguments[0][0];
        var clone = arguments[0][1];
        reality.forEach(function (item, index) {
          if (item.height !== clone[index].height) {
            vm.processList[index]._symptomSpread = false;
            vm.$apply();
          }
        });
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9kZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJwcm9qZWN0RGVzVmlzaWJsZSIsInByb2Nlc3NMaXN0IiwiX3N5bXB0b21TcHJlYWQiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZXJ2ZXIiLCJzeW1wdG9tIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWFwIiwiam9pbiIsInN0YXR1cyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImRyb3Bkb3duIiwiZHJvcHVwIiwic3ByZWFkU3ltcHRvbSIsImNhblNwcmVhZCIsImluZGV4IiwidG9Db21tZW50Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9DYW5jZWwiLCJldmVudHMiLCJpbml0RGF0YSIsInZtIiwic2V0VGltZW91dCIsImluaXRTeW1wdG9tIiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0QWxsIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsInJlYWxpdHkiLCJhcmd1bWVudHMiLCJjbG9uZSIsImZvckVhY2giLCJpdGVtIiwiaGVpZ2h0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0lBRXVCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUdiQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMseUJBQW1CLEtBRGQ7QUFFTEMsbUJBQWEsQ0FBQztBQUNaQyx3QkFBZ0JDLFNBREo7QUFFWkMsY0FBTSwyQkFBWSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBWixFQUFrQyxhQUFsQyxDQUZNO0FBR1pDLGdCQUFRLEtB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dGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBjb252ZXJ0RGF0ZSBmcm9tICdAL3V0aWxzL2NvbnZlcnREYXRlJ1xuXG4vLyAgIOivhOS7t+WSjOeUs+ivt+S9nOW6n+eKtuaAgeivtOaYju+8mlxuXG4vLyDikaAg5pyq6K+E5Lu35ZKM5pyq55Sz6K+35L2c5bqf55qE6aG555uu77yM5oyJ6ZKu5bGV56S65Li64oCc6K+E5Lu34oCd5ZKM4oCc55Sz6K+35L2c5bqf4oCd77ybXG5cbi8vIOKRoSDlt7Lor4Tku7fnmoTpobnnm67vvIzmjInpkq7lj5jkuLrigJzlt7Lor4Tku7figJ3vvJtcblxuLy8g4pGiIOW3sueUs+ivt+S9nOW6nyblkI7lj7Dov5jmnKrpgJrov4fvvIzmjInpkq7lj5jkuLrigJzlpITnkIbkuK3igJ3vvJtcblxuLy8g4pGjIOeUs+ivt+S9nOW6n+WQjuWPsOmAmui/h++8jOivpemhueebruS7juWIl+ihqOS4reWOu+aOie+8m1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YGl5bq36K6w5b2VJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcHJvamVjdERlc1Zpc2libGU6IGZhbHNlLFxuICAgICAgcHJvY2Vzc0xpc3Q6IFt7XG4gICAgICAgIF9zeW1wdG9tU3ByZWFkOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGU6IGNvbnZlcnREYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCAnWS1NLUQgaDptOnMnKSxcbiAgICAgICAgc2VydmVyOiAn6LW16Zuq5pm0JyxcbiAgICAgICAgc3ltcHRvbTogQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMjB9KS5tYXAoaXRlbSA9PiAn5a2XJykuam9pbignJyksXG4gICAgICAgIHN0YXR1czogJydcbiAgICAgIH0sIHtcbiAgICAgICAgX3N5bXB0b21TcHJlYWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0ZTogY29udmVydERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCksICdZLU0tRCBoOm06cycpLFxuICAgICAgICBzZXJ2ZXI6ICfotbXpm6rmmbQnLFxuICAgICAgICBzeW1wdG9tOiBBcnJheS5mcm9tKHtsZW5ndGg6IDQwfSkubWFwKGl0ZW0gPT4gJ+WtlycpLmpvaW4oJycpLFxuICAgICAgICBzdGF0dXM6ICdjb21tZW50ZWQnXG4gICAgICB9LCB7XG4gICAgICAgIF9zeW1wdG9tU3ByZWFkOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGU6IGNvbnZlcnREYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCAnWS1NLUQgaDptOnMnKSxcbiAgICAgICAgc2VydmVyOiAn6LW16Zuq5pm0JyxcbiAgICAgICAgc3ltcHRvbTogQXJyYXkuZnJvbSh7bGVuZ3RoOiA0MH0pLm1hcChpdGVtID0+ICflrZcnKS5qb2luKCcnKSxcbiAgICAgICAgc3RhdHVzOiAncHJvY2Vzc2luZydcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGRyb3Bkb3duICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0RGVzVmlzaWJsZSA9IHRydWVcbiAgICAgIH0sXG4gICAgICBkcm9wdXAgKCkge1xuICAgICAgICB0aGlzLnByb2plY3REZXNWaXNpYmxlID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBzcHJlYWRTeW1wdG9tIChjYW5TcHJlYWQsIGluZGV4KSB7XG4gICAgICAgIGlmIChjYW5TcHJlYWQpIHtcbiAgICAgICAgICB0aGlzLnByb2Nlc3NMaXN0W2luZGV4XS5fc3ltcHRvbVNwcmVhZCA9ICF0aGlzLnByb2Nlc3NMaXN0W2luZGV4XS5fc3ltcHRvbVNwcmVhZFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9Db21tZW50ICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2hlYWx0aF9jb21tZW50J1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvQ2FuY2VsICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2hlYWx0aF9jYW5jZWwnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG5cbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoKVxuICAgIH1cblxuICAgIGluaXREYXRhICgpIHtcbiAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2bS5pbml0U3ltcHRvbSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgICAvLyDliJ3lp4vljJbnl4fnirbmloflrZdcbiAgICBpbml0U3ltcHRvbSAoKSB7XG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgcXVlcnlcbiAgICAgICAgLnNlbGVjdEFsbCgnLml0ZW0tc3ltcHRvbSAuaXRlbS1zeW1wdG9tX190ZXh0JylcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBxdWVyeVxuICAgICAgICAuc2VsZWN0QWxsKCcuaXRlbS1zeW1wdG9tLS1jbG9uZSAuaXRlbS1zeW1wdG9tX190ZXh0JylcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCByZWFsaXR5ID0gYXJndW1lbnRzWzBdWzBdXG4gICAgICAgICAgY29uc3QgY2xvbmUgPSBhcmd1bWVudHNbMF1bMV1cbiAgICAgICAgICByZWFsaXR5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oZWlnaHQgIT09IGNsb25lW2luZGV4XS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgdm0ucHJvY2Vzc0xpc3RbaW5kZXhdLl9zeW1wdG9tU3ByZWFkID0gZmFsc2VcbiAgICAgICAgICAgICAgdm0uJGFwcGx5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuIl19
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
        symptomSpread: undefined,
        date: (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s'),
        server: '赵雪晴',
        symptom: Array.from({ length: 120 }).map(function (item) {
          return '字';
        }).join('')
      }, {
        symptomSpread: undefined,
        date: (0, _convertDate2.default)(new Date().getTime(), 'Y-M-D h:m:s'),
        server: '赵雪晴',
        symptom: Array.from({ length: 40 }).map(function (item) {
          return '字';
        }).join('')
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
          this.processList[index].symptomSpread = !this.processList[index].symptomSpread;
        }
      },
      toAppraise: function toAppraise() {
        wx.navigateTo({
          url: '/pages/health_comment'
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
            vm.processList[index].symptomSpread = false;
            vm.$apply();
          }
        });
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/health_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aF9kZXRhaWwuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJwcm9qZWN0RGVzVmlzaWJsZSIsInByb2Nlc3NMaXN0Iiwic3ltcHRvbVNwcmVhZCIsInVuZGVmaW5lZCIsImRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsInNlcnZlciIsInN5bXB0b20iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJqb2luIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZHJvcGRvd24iLCJkcm9wdXAiLCJzcHJlYWRTeW1wdG9tIiwiY2FuU3ByZWFkIiwiaW5kZXgiLCJ0b0FwcHJhaXNlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwiaW5pdERhdGEiLCJ2bSIsInNldFRpbWVvdXQiLCJpbml0U3ltcHRvbSIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdEFsbCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJyZWFsaXR5IiwiYXJndW1lbnRzIiwiY2xvbmUiLCJmb3JFYWNoIiwiaXRlbSIsImhlaWdodCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLHlCQUFtQixLQURkO0FBRUxDLG1CQUFhLENBQUM7QUFDWkMsdUJBQWVDLFNBREg7QUFFWkMsY0FBTSwyQkFBWSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBWixFQUFrQyxhQUFsQyxDQUZNO0FBR1pDLGdCQUFRLEtBSEk7QUFJWkMsaUJBQVNDLE1BQU1DLElBQU4sQ0FBVyxFQUFDQyxRQUFRLEdBQVQsRUFBWCxFQUEwQkMsR0FBMUIsQ0FBOEI7QUFBQSxpQkFBUSxHQUFSO0FBQUEsU0FBOUIsRUFBMkNDLElBQTNDLENBQWdELEVBQWhEO0FBSkcsT0FBRCxFQUtWO0FBQ0RYLHVCQUFlQyxTQURkO0FBRURDLGNBQU0sMkJBQVksSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVosRUFBa0MsYUFBbEMsQ0FGTDtBQUdEQyxnQkFBUSxLQUhQO0FBSURDLGlCQUFTQyxNQUFNQyxJQUFOLENBQVcsRUFBQ0MsUUFBUSxFQUFULEVBQVgsRUFBeUJDLEdBQXpCLENBQTZCO0FBQUEsaUJBQVEsR0FBUjtBQUFBLFNBQTdCLEVBQTBDQyxJQUExQyxDQUErQyxFQUEvQztBQUpSLE9BTFU7QUFGUixLLFFBZVBDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNJO0FBQ1YsYUFBS2hCLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0QsT0FITztBQUlSaUIsWUFKUSxvQkFJRTtBQUNSLGFBQUtqQixpQkFBTCxHQUF5QixLQUF6QjtBQUNELE9BTk87QUFPUmtCLG1CQVBRLHlCQU9PQyxTQVBQLEVBT2tCQyxLQVBsQixFQU95QjtBQUMvQixZQUFJRCxTQUFKLEVBQWU7QUFDYixlQUFLbEIsV0FBTCxDQUFpQm1CLEtBQWpCLEVBQXdCbEIsYUFBeEIsR0FBd0MsQ0FBQyxLQUFLRCxXQUFMLENBQWlCbUIsS0FBakIsRUFBd0JsQixhQUFqRTtBQUNEO0FBQ0YsT0FYTztBQVlSbUIsZ0JBWlEsd0JBWU07QUFDWkMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0Q7QUFoQk8sSyxRQW1CVkMsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs4QkFFVTtBQUNULFdBQUtDLFFBQUw7QUFDRDs7OytCQUVXO0FBQ1YsVUFBSUMsS0FBSyxJQUFUO0FBQ0FDLGlCQUFXLFlBQU07QUFDZkQsV0FBR0UsV0FBSDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7QUFDRDs7OztrQ0FDZTtBQUNiLFVBQUlGLEtBQUssSUFBVDtBQUNBLFVBQU1HLFFBQVFSLEdBQUdTLG1CQUFILEVBQWQ7QUFDQUQsWUFDR0UsU0FESCxDQUNhLG1DQURiLEVBRUdDLGtCQUZIO0FBR0FILFlBQ0dFLFNBREgsQ0FDYSwwQ0FEYixFQUVHQyxrQkFGSCxHQUdHQyxJQUhILENBR1EsWUFBWTtBQUNoQixZQUFNQyxVQUFVQyxVQUFVLENBQVYsRUFBYSxDQUFiLENBQWhCO0FBQ0EsWUFBTUMsUUFBUUQsVUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFkO0FBQ0FELGdCQUFRRyxPQUFSLENBQWdCLFVBQVVDLElBQVYsRUFBZ0JuQixLQUFoQixFQUF1QjtBQUNyQyxjQUFJbUIsS0FBS0MsTUFBTCxLQUFnQkgsTUFBTWpCLEtBQU4sRUFBYW9CLE1BQWpDLEVBQXlDO0FBQ3ZDYixlQUFHMUIsV0FBSCxDQUFlbUIsS0FBZixFQUFzQmxCLGFBQXRCLEdBQXNDLEtBQXRDO0FBQ0F5QixlQUFHYyxNQUFIO0FBQ0Q7QUFDRixTQUxEO0FBTUQsT0FaSDtBQWFEOzs7O0VBbEZnQyxlQUFLQyxJOztrQkFBbkJoRCxLIiwiZmlsZSI6ImhlYWx0aF9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBpbXBvcnQgY29udmVydERhdGUgZnJvbSAnQC91dGlscy9jb252ZXJ0RGF0ZSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WBpeW6t+iusOW9lSdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHByb2plY3REZXNWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHByb2Nlc3NMaXN0OiBbe1xuICAgICAgICBzeW1wdG9tU3ByZWFkOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGU6IGNvbnZlcnREYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCAnWS1NLUQgaDptOnMnKSxcbiAgICAgICAgc2VydmVyOiAn6LW16Zuq5pm0JyxcbiAgICAgICAgc3ltcHRvbTogQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMjB9KS5tYXAoaXRlbSA9PiAn5a2XJykuam9pbignJylcbiAgICAgIH0sIHtcbiAgICAgICAgc3ltcHRvbVNwcmVhZDogdW5kZWZpbmVkLFxuICAgICAgICBkYXRlOiBjb252ZXJ0RGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSwgJ1ktTS1EIGg6bTpzJyksXG4gICAgICAgIHNlcnZlcjogJ+i1tembquaZtCcsXG4gICAgICAgIHN5bXB0b206IEFycmF5LmZyb20oe2xlbmd0aDogNDB9KS5tYXAoaXRlbSA9PiAn5a2XJykuam9pbignJylcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGRyb3Bkb3duICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0RGVzVmlzaWJsZSA9IHRydWVcbiAgICAgIH0sXG4gICAgICBkcm9wdXAgKCkge1xuICAgICAgICB0aGlzLnByb2plY3REZXNWaXNpYmxlID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBzcHJlYWRTeW1wdG9tIChjYW5TcHJlYWQsIGluZGV4KSB7XG4gICAgICAgIGlmIChjYW5TcHJlYWQpIHtcbiAgICAgICAgICB0aGlzLnByb2Nlc3NMaXN0W2luZGV4XS5zeW1wdG9tU3ByZWFkID0gIXRoaXMucHJvY2Vzc0xpc3RbaW5kZXhdLnN5bXB0b21TcHJlYWRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvQXBwcmFpc2UgKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvaGVhbHRoX2NvbW1lbnQnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG5cbiAgICBvblJlYWR5ICgpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoKVxuICAgIH1cblxuICAgIGluaXREYXRhICgpIHtcbiAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2bS5pbml0U3ltcHRvbSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgICAvLyDliJ3lp4vljJbnl4fnirbmloflrZdcbiAgICBpbml0U3ltcHRvbSAoKSB7XG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICBjb25zdCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgcXVlcnlcbiAgICAgICAgLnNlbGVjdEFsbCgnLml0ZW0tc3ltcHRvbSAuaXRlbS1zeW1wdG9tX190ZXh0JylcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBxdWVyeVxuICAgICAgICAuc2VsZWN0QWxsKCcuaXRlbS1zeW1wdG9tLS1jbG9uZSAuaXRlbS1zeW1wdG9tX190ZXh0JylcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC5leGVjKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCByZWFsaXR5ID0gYXJndW1lbnRzWzBdWzBdXG4gICAgICAgICAgY29uc3QgY2xvbmUgPSBhcmd1bWVudHNbMF1bMV1cbiAgICAgICAgICByZWFsaXR5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5oZWlnaHQgIT09IGNsb25lW2luZGV4XS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgdm0ucHJvY2Vzc0xpc3RbaW5kZXhdLnN5bXB0b21TcHJlYWQgPSBmYWxzZVxuICAgICAgICAgICAgICB2bS4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=
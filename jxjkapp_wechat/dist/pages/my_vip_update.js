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
      navigationBarTitleText: '修改信息'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      hospitalList: [{
        id: 0,
        name: '医院一'
      }, {
        id: 1,
        name: '医院二'
      }],
      hospitalIndex: '',
      projectList: [{
        id: 0,
        name: '项目一'
      }, {
        id: 1,
        name: '项目二'
      }],
      projectIndex: ''
    }, _this.computed = {
      hospital: function hospital() {
        return this.hospitalIndex !== '' ? this.hospitalList[this.hospitalIndex].name : '';
      },
      projectName: function projectName() {
        return this.projectIndex !== '' ? this.projectList[this.projectIndex].name : '';
      }
    }, _this.methods = {
      handleHospitalChange: function handleHospitalChange(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        if (value) {
          this.hospitalIndex = value;
        }
      },
      handleProjectChange: function handleProjectChange(_ref3) {
        var detail = _ref3.detail;

        var value = detail.value;
        if (value) {
          this.projectIndex = value;
        }
      },
      handleDateChange: function handleDateChange(_ref4) {
        var detail = _ref4.detail;

        var value = detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_vip_update'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3ZpcF91cGRhdGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJob3NwaXRhbExpc3QiLCJpZCIsIm5hbWUiLCJob3NwaXRhbEluZGV4IiwicHJvamVjdExpc3QiLCJwcm9qZWN0SW5kZXgiLCJjb21wdXRlZCIsImhvc3BpdGFsIiwicHJvamVjdE5hbWUiLCJtZXRob2RzIiwiaGFuZGxlSG9zcGl0YWxDaGFuZ2UiLCJkZXRhaWwiLCJ2YWx1ZSIsImhhbmRsZVByb2plY3RDaGFuZ2UiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFHYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLG9CQUFjLENBQUM7QUFDYkMsWUFBSSxDQURTO0FBRWJDLGNBQU07QUFGTyxPQUFELEVBR1g7QUFDREQsWUFBSSxDQURIO0FBRURDLGNBQU07QUFGTCxPQUhXLENBRFQ7QUFRTEMscUJBQWUsRUFSVjtBQVNMQyxtQkFBYSxDQUFDO0FBQ1pILFlBQUksQ0FEUTtBQUVaQyxjQUFNO0FBRk0sT0FBRCxFQUdWO0FBQ0RELFlBQUksQ0FESDtBQUVEQyxjQUFNO0FBRkwsT0FIVSxDQVRSO0FBZ0JMRyxvQkFBYztBQWhCVCxLLFFBbUJQQyxRLEdBQVc7QUFDVEMsY0FEUyxzQkFDRztBQUNWLGVBQU8sS0FBS0osYUFBTCxLQUF1QixFQUF2QixHQUE0QixLQUFLSCxZQUFMLENBQWtCLEtBQUtHLGFBQXZCLEVBQXNDRCxJQUFsRSxHQUF5RSxFQUFoRjtBQUNELE9BSFE7QUFJVE0saUJBSlMseUJBSU07QUFDYixlQUFPLEtBQUtILFlBQUwsS0FBc0IsRUFBdEIsR0FBMkIsS0FBS0QsV0FBTCxDQUFpQixLQUFLQyxZQUF0QixFQUFvQ0gsSUFBL0QsR0FBc0UsRUFBN0U7QUFDRDtBQU5RLEssUUFTWE8sTyxHQUFVO0FBQ1JDLDBCQURRLHVDQUMwQjtBQUFBLFlBQVZDLE1BQVUsU0FBVkEsTUFBVTs7QUFDaEMsWUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxZQUFJQSxLQUFKLEVBQVc7QUFDVCxlQUFLVCxhQUFMLEdBQXFCUyxLQUFyQjtBQUNEO0FBQ0YsT0FOTztBQU9SQyx5QkFQUSxzQ0FPeUI7QUFBQSxZQUFWRixNQUFVLFNBQVZBLE1BQVU7O0FBQy9CLFlBQU1DLFFBQVFELE9BQU9DLEtBQXJCO0FBQ0EsWUFBSUEsS0FBSixFQUFXO0FBQ1QsZUFBS1AsWUFBTCxHQUFvQk8sS0FBcEI7QUFDRDtBQUNGLE9BWk87QUFhUkUsc0JBYlEsbUNBYXNCO0FBQUEsWUFBVkgsTUFBVSxTQUFWQSxNQUFVOztBQUM1QixZQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNEO0FBZk8sSyxRQWtCVkcsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUEzRGdDLGVBQUtDLEk7O2tCQUFuQnRCLEsiLCJmaWxlIjoibXlfdmlwX3VwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L+u5pS55L+h5oGvJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaG9zcGl0YWxMaXN0OiBbe1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ+WMu+mZouS4gCdcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICfljLvpmaLkuownXG4gICAgICB9XSxcbiAgICAgIGhvc3BpdGFsSW5kZXg6ICcnLFxuICAgICAgcHJvamVjdExpc3Q6IFt7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAn6aG555uu5LiAJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+mhueebruS6jCdcbiAgICAgIH1dLFxuICAgICAgcHJvamVjdEluZGV4OiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaG9zcGl0YWwgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3NwaXRhbEluZGV4ICE9PSAnJyA/IHRoaXMuaG9zcGl0YWxMaXN0W3RoaXMuaG9zcGl0YWxJbmRleF0ubmFtZSA6ICcnXG4gICAgICB9LFxuICAgICAgcHJvamVjdE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0SW5kZXggIT09ICcnID8gdGhpcy5wcm9qZWN0TGlzdFt0aGlzLnByb2plY3RJbmRleF0ubmFtZSA6ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUhvc3BpdGFsQ2hhbmdlICh7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuaG9zcGl0YWxJbmRleCA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYW5kbGVQcm9qZWN0Q2hhbmdlICh7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMucHJvamVjdEluZGV4ID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZURhdGVDaGFuZ2UgKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
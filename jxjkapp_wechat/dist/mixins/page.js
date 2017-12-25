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

var PageMixin = function (_wepy$mixin) {
  _inherits(PageMixin, _wepy$mixin);

  function PageMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageMixin.__proto__ || Object.getPrototypeOf(PageMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      pageNum: 1,
      isLastPage: false, // 是否最后一页
      listData: []

      // 下拉刷新
    }, _this.watch = {
      pageNum: function pageNum(newVal) {
        wx.stopPullDownRefresh();
        this.initData();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageMixin, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      if (this.pageNum === 1) {
        this.initData();
      } else {
        this.pageNum = 1;
      }
    }
    // 页面上拉触底加载更多

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      if (this.isLastPage === false) {
        this.pageNum++;
      }
    }
  }, {
    key: 'initData',
    value: function initData(reqParams, resCb) {
      var _this2 = this;

      if (!this.initFnAgrs) {
        this.initFnAgrs = {
          reqParams: reqParams,
          resCb: resCb
        };
      } else {
        reqParams = this.initFnAgrs.reqParams;
        resCb = this.initFnAgrs.resCb;
      }
      var pageNum = this.pageNum || 1;
      reqParams.data.pageNum = pageNum;
      return this.$_request(reqParams).then(function (res) {
        var content = res.content || {};
        _this2.isLastPage = !!content.isLastPage;
        var list = content.list || [];
        if (pageNum > 1) {
          if (list.length === 0) {
            _this2.$invoke('CustomPage', 'initPage', {
              noData: true
            });
          } else {
            _this2.listData = _this2.listData.concat(list.map(function (item) {
              return resCb(item, res);
            }));
          }
        } else {
          _this2.listData = list.map(function (item) {
            return resCb(item, res);
          });
        }
        _this2.$apply();
        _this2.$invoke('CustomPage', 'initPage', {
          dataInited: true
        });
      }).catch(function () {
        if (pageNum > 1) {
          wx.showToast({
            title: '加载失败'
          });
        } else {
          _this2.$invoke('CustomPage', 'initPage', {
            noServer: true
          });
        }
      }).finally(function () {
        wx.stopPullDownRefresh();
      });
    }
  }]);

  return PageMixin;
}(_wepy2.default.mixin);

exports.default = PageMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiXSwibmFtZXMiOlsiUGFnZU1peGluIiwiZGF0YSIsInBhZ2VOdW0iLCJpc0xhc3RQYWdlIiwibGlzdERhdGEiLCJ3YXRjaCIsIm5ld1ZhbCIsInd4Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImluaXREYXRhIiwicmVxUGFyYW1zIiwicmVzQ2IiLCJpbml0Rm5BZ3JzIiwiJF9yZXF1ZXN0IiwidGhlbiIsImNvbnRlbnQiLCJyZXMiLCJsaXN0IiwibGVuZ3RoIiwiJGludm9rZSIsIm5vRGF0YSIsImNvbmNhdCIsIm1hcCIsIml0ZW0iLCIkYXBwbHkiLCJkYXRhSW5pdGVkIiwiY2F0Y2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm5vU2VydmVyIiwiZmluYWxseSIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxlQUFTLENBREo7QUFFTEMsa0JBQVksS0FGUCxFQUVjO0FBQ25CQyxnQkFBVTs7QUFHWjtBQU5PLEssUUFxQlBDLEssR0FBUTtBQUNOSCxhQURNLG1CQUNHSSxNQURILEVBQ1c7QUFDZkMsV0FBR0MsbUJBQUg7QUFDQSxhQUFLQyxRQUFMO0FBQ0Q7QUFKSyxLOzs7Ozt3Q0FkYTtBQUNuQixVQUFJLEtBQUtQLE9BQUwsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsYUFBS08sUUFBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtQLE9BQUwsR0FBZSxDQUFmO0FBQ0Q7QUFDRjtBQUNEOzs7O29DQUNpQjtBQUNmLFVBQUksS0FBS0MsVUFBTCxLQUFvQixLQUF4QixFQUErQjtBQUM3QixhQUFLRCxPQUFMO0FBQ0Q7QUFDRjs7OzZCQVNTUSxTLEVBQVdDLEssRUFBTztBQUFBOztBQUMxQixVQUFJLENBQUMsS0FBS0MsVUFBVixFQUFzQjtBQUNwQixhQUFLQSxVQUFMLEdBQWtCO0FBQ2hCRiw4QkFEZ0I7QUFFaEJDO0FBRmdCLFNBQWxCO0FBSUQsT0FMRCxNQUtPO0FBQ0xELG9CQUFZLEtBQUtFLFVBQUwsQ0FBZ0JGLFNBQTVCO0FBQ0FDLGdCQUFRLEtBQUtDLFVBQUwsQ0FBZ0JELEtBQXhCO0FBQ0Q7QUFDRCxVQUFNVCxVQUFVLEtBQUtBLE9BQUwsSUFBZ0IsQ0FBaEM7QUFDQVEsZ0JBQVVULElBQVYsQ0FBZUMsT0FBZixHQUF5QkEsT0FBekI7QUFDQSxhQUFPLEtBQUtXLFNBQUwsQ0FBZUgsU0FBZixFQUEwQkksSUFBMUIsQ0FBK0IsZUFBTztBQUMzQyxZQUFNQyxVQUFVQyxJQUFJRCxPQUFKLElBQWUsRUFBL0I7QUFDQSxlQUFLWixVQUFMLEdBQWtCLENBQUMsQ0FBQ1ksUUFBUVosVUFBNUI7QUFDQSxZQUFNYyxPQUFPRixRQUFRRSxJQUFSLElBQWdCLEVBQTdCO0FBQ0EsWUFBSWYsVUFBVSxDQUFkLEVBQWlCO0FBQ2YsY0FBSWUsS0FBS0MsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQixtQkFBS0MsT0FBTCxDQUFhLFlBQWIsRUFBMkIsVUFBM0IsRUFBdUM7QUFDckNDLHNCQUFRO0FBRDZCLGFBQXZDO0FBR0QsV0FKRCxNQUlPO0FBQ0wsbUJBQUtoQixRQUFMLEdBQWdCLE9BQUtBLFFBQUwsQ0FBY2lCLE1BQWQsQ0FBcUJKLEtBQUtLLEdBQUwsQ0FBUyxnQkFBUTtBQUNwRCxxQkFBT1gsTUFBTVksSUFBTixFQUFZUCxHQUFaLENBQVA7QUFDRCxhQUZvQyxDQUFyQixDQUFoQjtBQUdEO0FBQ0YsU0FWRCxNQVVPO0FBQ0wsaUJBQUtaLFFBQUwsR0FBZ0JhLEtBQUtLLEdBQUwsQ0FBUyxnQkFBUTtBQUMvQixtQkFBT1gsTUFBTVksSUFBTixFQUFZUCxHQUFaLENBQVA7QUFDRCxXQUZlLENBQWhCO0FBR0Q7QUFDRCxlQUFLUSxNQUFMO0FBQ0EsZUFBS0wsT0FBTCxDQUFhLFlBQWIsRUFBMkIsVUFBM0IsRUFBdUM7QUFDckNNLHNCQUFZO0FBRHlCLFNBQXZDO0FBR0QsT0F2Qk0sRUF1QkpDLEtBdkJJLENBdUJFLFlBQU07QUFDYixZQUFJeEIsVUFBVSxDQUFkLEVBQWlCO0FBQ2ZLLGFBQUdvQixTQUFILENBQWE7QUFDWEMsbUJBQU87QUFESSxXQUFiO0FBR0QsU0FKRCxNQUlPO0FBQ0wsaUJBQUtULE9BQUwsQ0FBYSxZQUFiLEVBQTJCLFVBQTNCLEVBQXVDO0FBQ3JDVSxzQkFBVTtBQUQyQixXQUF2QztBQUdEO0FBQ0YsT0FqQ00sRUFpQ0pDLE9BakNJLENBaUNJLFlBQU07QUFDZnZCLFdBQUdDLG1CQUFIO0FBQ0QsT0FuQ00sQ0FBUDtBQW9DRDs7OztFQTdFb0MsZUFBS3VCLEs7O2tCQUF2Qi9CLFMiLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xuICBkYXRhID0ge1xuICAgIHBhZ2VOdW06IDEsXG4gICAgaXNMYXN0UGFnZTogZmFsc2UsIC8vIOaYr+WQpuacgOWQjuS4gOmhtVxuICAgIGxpc3REYXRhOiBbXVxuICB9XG5cbiAgLy8g5LiL5ouJ5Yi35pawXG4gIG9uUHVsbERvd25SZWZyZXNoICgpIHtcbiAgICBpZiAodGhpcy5wYWdlTnVtID09PSAxKSB7XG4gICAgICB0aGlzLmluaXREYXRhKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWdlTnVtID0gMVxuICAgIH1cbiAgfVxuICAvLyDpobXpnaLkuIrmi4nop6blupXliqDovb3mm7TlpJpcbiAgb25SZWFjaEJvdHRvbSAoKSB7XG4gICAgaWYgKHRoaXMuaXNMYXN0UGFnZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucGFnZU51bSsrXG4gICAgfVxuICB9XG5cbiAgd2F0Y2ggPSB7XG4gICAgcGFnZU51bSAobmV3VmFsKSB7XG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICAgIHRoaXMuaW5pdERhdGEoKVxuICAgIH1cbiAgfVxuXG4gIGluaXREYXRhIChyZXFQYXJhbXMsIHJlc0NiKSB7XG4gICAgaWYgKCF0aGlzLmluaXRGbkFncnMpIHtcbiAgICAgIHRoaXMuaW5pdEZuQWdycyA9IHtcbiAgICAgICAgcmVxUGFyYW1zLFxuICAgICAgICByZXNDYlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXFQYXJhbXMgPSB0aGlzLmluaXRGbkFncnMucmVxUGFyYW1zXG4gICAgICByZXNDYiA9IHRoaXMuaW5pdEZuQWdycy5yZXNDYlxuICAgIH1cbiAgICBjb25zdCBwYWdlTnVtID0gdGhpcy5wYWdlTnVtIHx8IDFcbiAgICByZXFQYXJhbXMuZGF0YS5wYWdlTnVtID0gcGFnZU51bVxuICAgIHJldHVybiB0aGlzLiRfcmVxdWVzdChyZXFQYXJhbXMpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXMuY29udGVudCB8fCB7fVxuICAgICAgdGhpcy5pc0xhc3RQYWdlID0gISFjb250ZW50LmlzTGFzdFBhZ2VcbiAgICAgIGNvbnN0IGxpc3QgPSBjb250ZW50Lmxpc3QgfHwgW11cbiAgICAgIGlmIChwYWdlTnVtID4gMSkge1xuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ0N1c3RvbVBhZ2UnLCAnaW5pdFBhZ2UnLCB7XG4gICAgICAgICAgICBub0RhdGE6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdERhdGEgPSB0aGlzLmxpc3REYXRhLmNvbmNhdChsaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNDYihpdGVtLCByZXMpXG4gICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdERhdGEgPSBsaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzQ2IoaXRlbSwgcmVzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgdGhpcy4kaW52b2tlKCdDdXN0b21QYWdlJywgJ2luaXRQYWdlJywge1xuICAgICAgICBkYXRhSW5pdGVkOiB0cnVlXG4gICAgICB9KVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIGlmIChwYWdlTnVtID4gMSkge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295aSx6LSlJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdDdXN0b21QYWdlJywgJ2luaXRQYWdlJywge1xuICAgICAgICAgIG5vU2VydmVyOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9KVxuICB9XG59XG4iXX0=
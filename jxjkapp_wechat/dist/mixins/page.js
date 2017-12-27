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
        reqParams = reqParams || this.initFnAgrs.reqParams;
        resCb = resCb || this.initFnAgrs.resCb;
      }
      var pageNum = this.pageNum || 1;
      reqParams.data.pageNum = pageNum;
      console.log('reqParams', reqParams);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiXSwibmFtZXMiOlsiUGFnZU1peGluIiwiZGF0YSIsInBhZ2VOdW0iLCJpc0xhc3RQYWdlIiwibGlzdERhdGEiLCJ3YXRjaCIsIm5ld1ZhbCIsInd4Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImluaXREYXRhIiwicmVxUGFyYW1zIiwicmVzQ2IiLCJpbml0Rm5BZ3JzIiwiY29uc29sZSIsImxvZyIsIiRfcmVxdWVzdCIsInRoZW4iLCJjb250ZW50IiwicmVzIiwibGlzdCIsImxlbmd0aCIsIiRpbnZva2UiLCJub0RhdGEiLCJjb25jYXQiLCJtYXAiLCJpdGVtIiwiJGFwcGx5IiwiZGF0YUluaXRlZCIsImNhdGNoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJub1NlcnZlciIsImZpbmFsbHkiLCJtaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsZUFBUyxDQURKO0FBRUxDLGtCQUFZLEtBRlAsRUFFYztBQUNuQkMsZ0JBQVU7O0FBR1o7QUFOTyxLLFFBcUJQQyxLLEdBQVE7QUFDTkgsYUFETSxtQkFDR0ksTUFESCxFQUNXO0FBQ2ZDLFdBQUdDLG1CQUFIO0FBQ0EsYUFBS0MsUUFBTDtBQUNEO0FBSkssSzs7Ozs7d0NBZGE7QUFDbkIsVUFBSSxLQUFLUCxPQUFMLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGFBQUtPLFFBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLUCxPQUFMLEdBQWUsQ0FBZjtBQUNEO0FBQ0Y7QUFDRDs7OztvQ0FDaUI7QUFDZixVQUFJLEtBQUtDLFVBQUwsS0FBb0IsS0FBeEIsRUFBK0I7QUFDN0IsYUFBS0QsT0FBTDtBQUNEO0FBQ0Y7Ozs2QkFTU1EsUyxFQUFXQyxLLEVBQU87QUFBQTs7QUFDMUIsVUFBSSxDQUFDLEtBQUtDLFVBQVYsRUFBc0I7QUFDcEIsYUFBS0EsVUFBTCxHQUFrQjtBQUNoQkYsOEJBRGdCO0FBRWhCQztBQUZnQixTQUFsQjtBQUlELE9BTEQsTUFLTztBQUNMRCxvQkFBWUEsYUFBYSxLQUFLRSxVQUFMLENBQWdCRixTQUF6QztBQUNBQyxnQkFBUUEsU0FBUyxLQUFLQyxVQUFMLENBQWdCRCxLQUFqQztBQUNEO0FBQ0QsVUFBTVQsVUFBVSxLQUFLQSxPQUFMLElBQWdCLENBQWhDO0FBQ0FRLGdCQUFVVCxJQUFWLENBQWVDLE9BQWYsR0FBeUJBLE9BQXpCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSixTQUF6QjtBQUNBLGFBQU8sS0FBS0ssU0FBTCxDQUFlTCxTQUFmLEVBQTBCTSxJQUExQixDQUErQixlQUFPO0FBQzNDLFlBQU1DLFVBQVVDLElBQUlELE9BQUosSUFBZSxFQUEvQjtBQUNBLGVBQUtkLFVBQUwsR0FBa0IsQ0FBQyxDQUFDYyxRQUFRZCxVQUE1QjtBQUNBLFlBQU1nQixPQUFPRixRQUFRRSxJQUFSLElBQWdCLEVBQTdCO0FBQ0EsWUFBSWpCLFVBQVUsQ0FBZCxFQUFpQjtBQUNmLGNBQUlpQixLQUFLQyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLG1CQUFLQyxPQUFMLENBQWEsWUFBYixFQUEyQixVQUEzQixFQUF1QztBQUNyQ0Msc0JBQVE7QUFENkIsYUFBdkM7QUFHRCxXQUpELE1BSU87QUFDTCxtQkFBS2xCLFFBQUwsR0FBZ0IsT0FBS0EsUUFBTCxDQUFjbUIsTUFBZCxDQUFxQkosS0FBS0ssR0FBTCxDQUFTLGdCQUFRO0FBQ3BELHFCQUFPYixNQUFNYyxJQUFOLEVBQVlQLEdBQVosQ0FBUDtBQUNELGFBRm9DLENBQXJCLENBQWhCO0FBR0Q7QUFDRixTQVZELE1BVU87QUFDTCxpQkFBS2QsUUFBTCxHQUFnQmUsS0FBS0ssR0FBTCxDQUFTLGdCQUFRO0FBQy9CLG1CQUFPYixNQUFNYyxJQUFOLEVBQVlQLEdBQVosQ0FBUDtBQUNELFdBRmUsQ0FBaEI7QUFHRDtBQUNELGVBQUtRLE1BQUw7QUFDQSxlQUFLTCxPQUFMLENBQWEsWUFBYixFQUEyQixVQUEzQixFQUF1QztBQUNyQ00sc0JBQVk7QUFEeUIsU0FBdkM7QUFHRCxPQXZCTSxFQXVCSkMsS0F2QkksQ0F1QkUsWUFBTTtBQUNiLFlBQUkxQixVQUFVLENBQWQsRUFBaUI7QUFDZkssYUFBR3NCLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTztBQURJLFdBQWI7QUFHRCxTQUpELE1BSU87QUFDTCxpQkFBS1QsT0FBTCxDQUFhLFlBQWIsRUFBMkIsVUFBM0IsRUFBdUM7QUFDckNVLHNCQUFVO0FBRDJCLFdBQXZDO0FBR0Q7QUFDRixPQWpDTSxFQWlDSkMsT0FqQ0ksQ0FpQ0ksWUFBTTtBQUNmekIsV0FBR0MsbUJBQUg7QUFDRCxPQW5DTSxDQUFQO0FBb0NEOzs7O0VBOUVvQyxlQUFLeUIsSzs7a0JBQXZCakMsUyIsImZpbGUiOiJwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XG4gIGRhdGEgPSB7XG4gICAgcGFnZU51bTogMSxcbiAgICBpc0xhc3RQYWdlOiBmYWxzZSwgLy8g5piv5ZCm5pyA5ZCO5LiA6aG1XG4gICAgbGlzdERhdGE6IFtdXG4gIH1cblxuICAvLyDkuIvmi4nliLfmlrBcbiAgb25QdWxsRG93blJlZnJlc2ggKCkge1xuICAgIGlmICh0aGlzLnBhZ2VOdW0gPT09IDEpIHtcbiAgICAgIHRoaXMuaW5pdERhdGEoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhZ2VOdW0gPSAxXG4gICAgfVxuICB9XG4gIC8vIOmhtemdouS4iuaLieinpuW6leWKoOi9veabtOWkmlxuICBvblJlYWNoQm90dG9tICgpIHtcbiAgICBpZiAodGhpcy5pc0xhc3RQYWdlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5wYWdlTnVtKytcbiAgICB9XG4gIH1cblxuICB3YXRjaCA9IHtcbiAgICBwYWdlTnVtIChuZXdWYWwpIHtcbiAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgICAgdGhpcy5pbml0RGF0YSgpXG4gICAgfVxuICB9XG5cbiAgaW5pdERhdGEgKHJlcVBhcmFtcywgcmVzQ2IpIHtcbiAgICBpZiAoIXRoaXMuaW5pdEZuQWdycykge1xuICAgICAgdGhpcy5pbml0Rm5BZ3JzID0ge1xuICAgICAgICByZXFQYXJhbXMsXG4gICAgICAgIHJlc0NiXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcVBhcmFtcyA9IHJlcVBhcmFtcyB8fCB0aGlzLmluaXRGbkFncnMucmVxUGFyYW1zXG4gICAgICByZXNDYiA9IHJlc0NiIHx8IHRoaXMuaW5pdEZuQWdycy5yZXNDYlxuICAgIH1cbiAgICBjb25zdCBwYWdlTnVtID0gdGhpcy5wYWdlTnVtIHx8IDFcbiAgICByZXFQYXJhbXMuZGF0YS5wYWdlTnVtID0gcGFnZU51bVxuICAgIGNvbnNvbGUubG9nKCdyZXFQYXJhbXMnLCByZXFQYXJhbXMpXG4gICAgcmV0dXJuIHRoaXMuJF9yZXF1ZXN0KHJlcVBhcmFtcykudGhlbihyZXMgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHJlcy5jb250ZW50IHx8IHt9XG4gICAgICB0aGlzLmlzTGFzdFBhZ2UgPSAhIWNvbnRlbnQuaXNMYXN0UGFnZVxuICAgICAgY29uc3QgbGlzdCA9IGNvbnRlbnQubGlzdCB8fCBbXVxuICAgICAgaWYgKHBhZ2VOdW0gPiAxKSB7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuJGludm9rZSgnQ3VzdG9tUGFnZScsICdpbml0UGFnZScsIHtcbiAgICAgICAgICAgIG5vRGF0YTogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5saXN0RGF0YSA9IHRoaXMubGlzdERhdGEuY29uY2F0KGxpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc0NiKGl0ZW0sIHJlcylcbiAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IGxpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiByZXNDYihpdGVtLCByZXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB0aGlzLiRpbnZva2UoJ0N1c3RvbVBhZ2UnLCAnaW5pdFBhZ2UnLCB7XG4gICAgICAgIGRhdGFJbml0ZWQ6IHRydWVcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgaWYgKHBhZ2VOdW0gPiAxKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfliqDovb3lpLHotKUnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRpbnZva2UoJ0N1c3RvbVBhZ2UnLCAnaW5pdFBhZ2UnLCB7XG4gICAgICAgICAgbm9TZXJ2ZXI6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==
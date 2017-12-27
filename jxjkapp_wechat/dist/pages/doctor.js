'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPage = require('./../components/customPage.js');

var _customPage2 = _interopRequireDefault(_customPage);

var _page = require('./../mixins/page.js');

var _page2 = _interopRequireDefault(_page);

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
      navigationBarTitleText: '医护人员'
    }, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [_page2.default], _this.data = {
      searchParams: {
        searchWord: undefined,
        hospArea: undefined,
        doctorType: undefined
      },
      onSearch: false, // 表示是否在搜索输入中
      filterVisible: false, // 筛选组件显示
      hospAreaList: [], // 院区列表
      doctorTypeList: [], // 医生类别列表
      listData: [] // 医生列表
    }, _this.computed = {}, _this.watch = {
      searchParams: function searchParams(newVal, oldVal) {
        console.log('searchParams', newVal);
        this.getList({
          doctorType: newVal.doctorType,
          hospArea: newVal.doctorType,
          searchWord: newVal.searchWord
        });
      }
    }, _this.methods = {
      handleSearchFocus: function handleSearchFocus() {
        if (this.filterVisible) {
          this.filterVisible = false;
          var searchParams = this.searchParams;
          this.hospAreaList.forEach(function (item) {
            item.picked = searchParams.hospArea === item.id;
          });
          this.doctorTypeList.forEach(function (item) {
            item.picked = searchParams.doctorType === item.id;
          });
        }
        this.onSearch = true;
      },
      handleSearchBlur: function handleSearchBlur() {
        this.onSearch = false;
      },
      openFilterBox: function openFilterBox() {
        this.filterVisible = true;
      },
      pickedItem: function pickedItem(listType, id) {
        var list = this[listType];
        id = id === '' ? undefined : id;
        list.forEach(function (item) {
          item.picked = item.id === id;
        });
      },
      resetFilters: function resetFilters() {
        this.hospAreaList.forEach(function (item) {
          item.picked = undefined === item.id;
        });
        this.doctorTypeList.forEach(function (item) {
          item.picked = undefined === item.id;
        });
      },
      submitFilters: function submitFilters() {
        this.filterVisible = false;
        this.searchParams.hospArea = this.hospAreaList.find(function (item) {
          return item.picked;
        }).id;
        this.searchParams.doctorType = this.doctorTypeList.find(function (item) {
          return item.picked;
        }).id;
      },
      handleSearch: function handleSearch(_ref2) {
        var detail = _ref2.detail;

        var value = detail.value;
        this.searchParams.searchWord = value;
      },
      handleMaskTap: function handleMaskTap() {
        if (this.onSearch) {} else if (this.filterVisible) {
          var searchParams = this.searchParams;
          this.hospAreaList.forEach(function (item) {
            item.picked = searchParams.hospArea === item.id;
          });
          this.doctorTypeList.forEach(function (item) {
            item.picked = searchParams.doctorType === item.id;
          });
          this.filterVisible = false;
        }
      },
      handleCancelSearch: function handleCancelSearch() {
        this.onSearch = false;
      },
      handleItemTap: function handleItemTap(id) {
        wx.navigateTo({
          url: '/pages/doctor_detail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      this.getList();
      this.$_request({
        url: '/hospArea/all',
        method: 'POST',
        data: {}
      }).then(function (res) {
        var content = res.content || {};
        var list = content.list;
        _this2.hospAreaList = list.map(function (item) {
          return {
            name: item.name,
            id: item.id
          };
        });
        _this2.hospAreaList = [{
          name: '全部',
          picked: true
        }].concat(_this2.hospAreaList);
      });
      this.$_request({
        url: '/doctorType/all',
        method: 'POST',
        data: {}
      }).then(function (res) {
        console.log('res', res);
        var content = res.content || {};
        var list = content.list;
        _this2.doctorTypeList = list.map(function (item) {
          return {
            name: item.name,
            id: item.id
          };
        });
        _this2.doctorTypeList = [{
          name: '全部',
          picked: true
        }].concat(_this2.doctorTypeList);
      });
    }
  }, {
    key: 'getList',
    value: function getList(params) {
      this.initData({
        url: '/doctorInfo/all',
        method: 'POST',
        data: Object.assign({}, params, {
          pageSize: 10
        })
      }, function (listItem, res) {
        return {
          avatar: listItem.headPortrait,
          name: listItem.name,
          intro: listItem.description,
          id: listItem.id
        };
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/doctor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiQ3VzdG9tUGFnZSIsIm1peGlucyIsImRhdGEiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hXb3JkIiwidW5kZWZpbmVkIiwiaG9zcEFyZWEiLCJkb2N0b3JUeXBlIiwib25TZWFyY2giLCJmaWx0ZXJWaXNpYmxlIiwiaG9zcEFyZWFMaXN0IiwiZG9jdG9yVHlwZUxpc3QiLCJsaXN0RGF0YSIsImNvbXB1dGVkIiwid2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiLCJjb25zb2xlIiwibG9nIiwiZ2V0TGlzdCIsIm1ldGhvZHMiLCJoYW5kbGVTZWFyY2hGb2N1cyIsImZvckVhY2giLCJpdGVtIiwicGlja2VkIiwiaWQiLCJoYW5kbGVTZWFyY2hCbHVyIiwib3BlbkZpbHRlckJveCIsInBpY2tlZEl0ZW0iLCJsaXN0VHlwZSIsImxpc3QiLCJyZXNldEZpbHRlcnMiLCJzdWJtaXRGaWx0ZXJzIiwiZmluZCIsImhhbmRsZVNlYXJjaCIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlTWFza1RhcCIsImhhbmRsZUNhbmNlbFNlYXJjaCIsImhhbmRsZUl0ZW1UYXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCIkX3JlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwiY29udGVudCIsInJlcyIsIm1hcCIsIm5hbWUiLCJjb25jYXQiLCJwYXJhbXMiLCJpbml0RGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInBhZ2VTaXplIiwibGlzdEl0ZW0iLCJhdmF0YXIiLCJoZWFkUG9ydHJhaXQiLCJpbnRybyIsImRlc2NyaXB0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUs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QUFNTyxTQUFTUCxJQUZWO0FBR0xVLGlCQUFPSCxTQUFTSSxXQUhYO0FBSUxuQyxjQUFJK0IsU0FBUy9CO0FBSlIsU0FBUDtBQU1ELE9BYkQ7QUFjRDs7OztFQWhLZ0MsZUFBS29DLEk7O2tCQUFuQmpFLEsiLCJmaWxlIjoiZG9jdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IEN1c3RvbVBhZ2UgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbVBhZ2UnXG4gIGltcG9ydCBwYWdlTWl4aW4gZnJvbSAnQC9taXhpbnMvcGFnZSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljLvmiqTkurrlkZgnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBDdXN0b21QYWdlXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW3BhZ2VNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICBzZWFyY2hQYXJhbXM6IHtcbiAgICAgICAgc2VhcmNoV29yZDogdW5kZWZpbmVkLFxuICAgICAgICBob3NwQXJlYTogdW5kZWZpbmVkLFxuICAgICAgICBkb2N0b3JUeXBlOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBvblNlYXJjaDogZmFsc2UsIC8vIOihqOekuuaYr+WQpuWcqOaQnOe0oui+k+WFpeS4rVxuICAgICAgZmlsdGVyVmlzaWJsZTogZmFsc2UsIC8vIOetm+mAiee7hOS7tuaYvuekulxuICAgICAgaG9zcEFyZWFMaXN0OiBbXSwgLy8g6Zmi5Yy65YiX6KGoXG4gICAgICBkb2N0b3JUeXBlTGlzdDogW10sIC8vIOWMu+eUn+exu+WIq+WIl+ihqFxuICAgICAgbGlzdERhdGE6IFtdIC8vIOWMu+eUn+WIl+ihqFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgc2VhcmNoUGFyYW1zIChuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNoUGFyYW1zJywgbmV3VmFsKVxuICAgICAgICB0aGlzLmdldExpc3Qoe1xuICAgICAgICAgIGRvY3RvclR5cGU6IG5ld1ZhbC5kb2N0b3JUeXBlLFxuICAgICAgICAgIGhvc3BBcmVhOiBuZXdWYWwuZG9jdG9yVHlwZSxcbiAgICAgICAgICBzZWFyY2hXb3JkOiBuZXdWYWwuc2VhcmNoV29yZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVTZWFyY2hGb2N1cyAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlclZpc2libGUgPSBmYWxzZVxuICAgICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHRoaXMuc2VhcmNoUGFyYW1zXG4gICAgICAgICAgdGhpcy5ob3NwQXJlYUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5waWNrZWQgPSBzZWFyY2hQYXJhbXMuaG9zcEFyZWEgPT09IGl0ZW0uaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuZG9jdG9yVHlwZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5waWNrZWQgPSBzZWFyY2hQYXJhbXMuZG9jdG9yVHlwZSA9PT0gaXRlbS5pZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblNlYXJjaCA9IHRydWVcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTZWFyY2hCbHVyICgpIHtcbiAgICAgICAgdGhpcy5vblNlYXJjaCA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgb3BlbkZpbHRlckJveCAoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IHRydWVcbiAgICAgIH0sXG4gICAgICBwaWNrZWRJdGVtIChsaXN0VHlwZSwgaWQpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzW2xpc3RUeXBlXVxuICAgICAgICBpZCA9IGlkID09PSAnJyA/IHVuZGVmaW5lZCA6IGlkXG4gICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBpdGVtLnBpY2tlZCA9IGl0ZW0uaWQgPT09IGlkXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgcmVzZXRGaWx0ZXJzICgpIHtcbiAgICAgICAgdGhpcy5ob3NwQXJlYUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0ucGlja2VkID0gdW5kZWZpbmVkID09PSBpdGVtLmlkXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZG9jdG9yVHlwZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0ucGlja2VkID0gdW5kZWZpbmVkID09PSBpdGVtLmlkXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgc3VibWl0RmlsdGVycyAoKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLmhvc3BBcmVhID0gdGhpcy5ob3NwQXJlYUxpc3QuZmluZChpdGVtID0+IGl0ZW0ucGlja2VkKS5pZFxuICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5kb2N0b3JUeXBlID0gdGhpcy5kb2N0b3JUeXBlTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5waWNrZWQpLmlkXG4gICAgICB9LFxuICAgICAgaGFuZGxlU2VhcmNoICh7IGRldGFpbCB9KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLnNlYXJjaFdvcmQgPSB2YWx1ZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZU1hc2tUYXAgKCkge1xuICAgICAgICBpZiAodGhpcy5vblNlYXJjaCkge1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmlzaWJsZSkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHRoaXMuc2VhcmNoUGFyYW1zXG4gICAgICAgICAgdGhpcy5ob3NwQXJlYUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5waWNrZWQgPSBzZWFyY2hQYXJhbXMuaG9zcEFyZWEgPT09IGl0ZW0uaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuZG9jdG9yVHlwZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5waWNrZWQgPSBzZWFyY2hQYXJhbXMuZG9jdG9yVHlwZSA9PT0gaXRlbS5pZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUNhbmNlbFNlYXJjaCAoKSB7XG4gICAgICAgIHRoaXMub25TZWFyY2ggPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUl0ZW1UYXAgKGlkKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9kb2N0b3JfZGV0YWlsP2lkPScgKyBpZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICB0aGlzLmdldExpc3QoKVxuICAgICAgdGhpcy4kX3JlcXVlc3Qoe1xuICAgICAgICB1cmw6ICcvaG9zcEFyZWEvYWxsJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXMuY29udGVudCB8fCB7fVxuICAgICAgICBjb25zdCBsaXN0ID0gY29udGVudC5saXN0XG4gICAgICAgIHRoaXMuaG9zcEFyZWFMaXN0ID0gbGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmhvc3BBcmVhTGlzdCA9IFt7XG4gICAgICAgICAgbmFtZTogJ+WFqOmDqCcsXG4gICAgICAgICAgcGlja2VkOiB0cnVlXG4gICAgICAgIH1dLmNvbmNhdCh0aGlzLmhvc3BBcmVhTGlzdClcbiAgICAgIH0pXG4gICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgIHVybDogJy9kb2N0b3JUeXBlL2FsbCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7fVxuICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzJywgcmVzKVxuICAgICAgICBjb25zdCBjb250ZW50ID0gcmVzLmNvbnRlbnQgfHwge31cbiAgICAgICAgY29uc3QgbGlzdCA9IGNvbnRlbnQubGlzdFxuICAgICAgICB0aGlzLmRvY3RvclR5cGVMaXN0ID0gbGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmRvY3RvclR5cGVMaXN0ID0gW3tcbiAgICAgICAgICBuYW1lOiAn5YWo6YOoJyxcbiAgICAgICAgICBwaWNrZWQ6IHRydWVcbiAgICAgICAgfV0uY29uY2F0KHRoaXMuZG9jdG9yVHlwZUxpc3QpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldExpc3QgKHBhcmFtcykge1xuICAgICAgdGhpcy5pbml0RGF0YSh7XG4gICAgICAgIHVybDogJy9kb2N0b3JJbmZvL2FsbCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBwYWdlU2l6ZTogMTBcbiAgICAgICAgfSlcbiAgICAgIH0sIChsaXN0SXRlbSwgcmVzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYXZhdGFyOiBsaXN0SXRlbS5oZWFkUG9ydHJhaXQsXG4gICAgICAgICAgbmFtZTogbGlzdEl0ZW0ubmFtZSxcbiAgICAgICAgICBpbnRybzogbGlzdEl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgaWQ6IGxpc3RJdGVtLmlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=
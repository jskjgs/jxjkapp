'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customPage = require('./../components/customPage.js');

var _customPage2 = _interopRequireDefault(_customPage);

var _listPage = require('./../mixins/listPage.js');

var _listPage2 = _interopRequireDefault(_listPage);

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
      navigationBarTitleText: '医护人员',
      enablePullDownRefresh: true
    }, _this.$repeat = {}, _this.$props = { "CustomPage": { "xmlns:v-bind": "", "v-bind:isLastPage.sync": "isLastPage" } }, _this.$events = {}, _this.components = {
      CustomPage: _customPage2.default
    }, _this.mixins = [_listPage2.default], _this.data = {
      searchParams: {
        searchWord: undefined,
        hospAreaId: undefined,
        doctorTypeId: undefined
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
          doctorTypeId: newVal.doctorTypeId,
          hospAreaId: newVal.hospAreaId,
          searchWord: newVal.searchWord
        });
      }
    }, _this.methods = {
      handleSearchFocus: function handleSearchFocus() {
        if (this.filterVisible) {
          this.filterVisible = false;
          var searchParams = this.searchParams;
          this.hospAreaList.forEach(function (item) {
            item.picked = searchParams.hospAreaId === item.id;
          });
          this.doctorTypeList.forEach(function (item) {
            item.picked = searchParams.doctorTypeId === item.id;
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
        this.searchParams.hospAreaId = this.hospAreaList.find(function (item) {
          return item.picked;
        }).id;
        this.searchParams.doctorTypeId = this.doctorTypeList.find(function (item) {
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
      this.initPageData();
    }
    // 固定方法

  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this2 = this;

      this.getList();
      this.$_request({
        url: '/hospArea/all',
        method: 'POST',
        data: {}
      }).then(function (content) {
        content = content || {};
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
      }).then(function (content) {
        content = content || {};
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
        url: '/doctorInfo/query',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDdXN0b21QYWdlIiwibWl4aW5zIiwiZGF0YSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFdvcmQiLCJ1bmRlZmluZWQiLCJob3NwQXJlYUlkIiwiZG9jdG9yVHlwZUlkIiwib25TZWFyY2giLCJmaWx0ZXJWaXNpYmxlIiwiaG9zcEFyZWFMaXN0IiwiZG9jdG9yVHlwZUxpc3QiLCJsaXN0RGF0YSIsImNvbXB1dGVkIiwid2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiLCJjb25zb2xlIiwibG9nIiwiZ2V0TGlzdCIsIm1ldGhvZHMiLCJoYW5kbGVTZWFyY2hGb2N1cyIsImZvckVhY2giLCJpdGVtIiwicGlja2VkIiwiaWQiLCJoYW5kbGVTZWFyY2hCbHVyIiwib3BlbkZpbHRlckJveCIsInBpY2tlZEl0ZW0iLCJsaXN0VHlwZSIsImxpc3QiLCJyZXNldEZpbHRlcnMiLCJzdWJtaXRGaWx0ZXJzIiwiZmluZCIsImhhbmRsZVNlYXJjaCIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlTWFza1RhcCIsImhvc3BBcmVhIiwiZG9jdG9yVHlwZSIsImhhbmRsZUNhbmNlbFNlYXJjaCIsImhhbmRsZUl0ZW1UYXAiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbml0UGFnZURhdGEiLCIkX3JlcXVlc3QiLCJtZXRob2QiLCJ0aGVuIiwiY29udGVudCIsIm1hcCIsIm5hbWUiLCJjb25jYXQiLCJwYXJhbXMiLCJpbml0RGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInBhZ2VTaXplIiwibGlzdEl0ZW0iLCJyZXMiLCJhdmF0YXIiLCJoZWFkUG9ydHJhaXQiLCJpbnRybyIsImRlc2NyaXB0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FB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O0FBRVpHLGdCQUFRLE1BRkk7QUFHWjdDLGNBQU1xRCxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsTUFBbEIsRUFBMEI7QUFDOUJJLG9CQUFVO0FBRG9CLFNBQTFCO0FBSE0sT0FBZCxFQU1HLFVBQUNDLFFBQUQsRUFBV0MsR0FBWCxFQUFtQjtBQUNwQixlQUFPO0FBQ0xDLGtCQUFRRixTQUFTRyxZQURaO0FBRUxWLGdCQUFNTyxTQUFTUCxJQUZWO0FBR0xXLGlCQUFPSixTQUFTSyxXQUhYO0FBSUx0QyxjQUFJaUMsU0FBU2pDO0FBSlIsU0FBUDtBQU1ELE9BYkQ7QUFjRDs7OztFQXZLZ0MsZUFBS3VDLEk7O2tCQUFuQnhFLEsiLCJmaWxlIjoiZG9jdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IEN1c3RvbVBhZ2UgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbVBhZ2UnXG4gIGltcG9ydCBwYWdlTWl4aW4gZnJvbSAnQC9taXhpbnMvbGlzdFBhZ2UnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Yy75oqk5Lq65ZGYJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQ3VzdG9tUGFnZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6aXNMYXN0UGFnZS5zeW5jXCI6XCJpc0xhc3RQYWdlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIEN1c3RvbVBhZ2VcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbcGFnZU1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHNlYXJjaFBhcmFtczoge1xuICAgICAgICBzZWFyY2hXb3JkOiB1bmRlZmluZWQsXG4gICAgICAgIGhvc3BBcmVhSWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZG9jdG9yVHlwZUlkOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICBvblNlYXJjaDogZmFsc2UsIC8vIOihqOekuuaYr+WQpuWcqOaQnOe0oui+k+WFpeS4rVxuICAgICAgZmlsdGVyVmlzaWJsZTogZmFsc2UsIC8vIOetm+mAiee7hOS7tuaYvuekulxuICAgICAgaG9zcEFyZWFMaXN0OiBbXSwgLy8g6Zmi5Yy65YiX6KGoXG4gICAgICBkb2N0b3JUeXBlTGlzdDogW10sIC8vIOWMu+eUn+exu+WIq+WIl+ihqFxuICAgICAgbGlzdERhdGE6IFtdIC8vIOWMu+eUn+WIl+ihqFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgc2VhcmNoUGFyYW1zIChuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNoUGFyYW1zJywgbmV3VmFsKVxuICAgICAgICB0aGlzLmdldExpc3Qoe1xuICAgICAgICAgIGRvY3RvclR5cGVJZDogbmV3VmFsLmRvY3RvclR5cGVJZCxcbiAgICAgICAgICBob3NwQXJlYUlkOiBuZXdWYWwuaG9zcEFyZWFJZCxcbiAgICAgICAgICBzZWFyY2hXb3JkOiBuZXdWYWwuc2VhcmNoV29yZFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVTZWFyY2hGb2N1cyAoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlclZpc2libGUgPSBmYWxzZVxuICAgICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHRoaXMuc2VhcmNoUGFyYW1zXG4gICAgICAgICAgdGhpcy5ob3NwQXJlYUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5waWNrZWQgPSBzZWFyY2hQYXJhbXMuaG9zcEFyZWFJZCA9PT0gaXRlbS5pZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5kb2N0b3JUeXBlTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnBpY2tlZCA9IHNlYXJjaFBhcmFtcy5kb2N0b3JUeXBlSWQgPT09IGl0ZW0uaWRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TZWFyY2ggPSB0cnVlXG4gICAgICB9LFxuICAgICAgaGFuZGxlU2VhcmNoQmx1ciAoKSB7XG4gICAgICAgIHRoaXMub25TZWFyY2ggPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9wZW5GaWx0ZXJCb3ggKCkge1xuICAgICAgICB0aGlzLmZpbHRlclZpc2libGUgPSB0cnVlXG4gICAgICB9LFxuICAgICAgcGlja2VkSXRlbSAobGlzdFR5cGUsIGlkKSB7XG4gICAgICAgIGxldCBsaXN0ID0gdGhpc1tsaXN0VHlwZV1cbiAgICAgICAgaWQgPSBpZCA9PT0gJycgPyB1bmRlZmluZWQgOiBpZFxuICAgICAgICBsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgaXRlbS5waWNrZWQgPSBpdGVtLmlkID09PSBpZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHJlc2V0RmlsdGVycyAoKSB7XG4gICAgICAgIHRoaXMuaG9zcEFyZWFMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLnBpY2tlZCA9IHVuZGVmaW5lZCA9PT0gaXRlbS5pZFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmRvY3RvclR5cGVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLnBpY2tlZCA9IHVuZGVmaW5lZCA9PT0gaXRlbS5pZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHN1Ym1pdEZpbHRlcnMgKCkge1xuICAgICAgICB0aGlzLmZpbHRlclZpc2libGUgPSBmYWxzZVxuICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5ob3NwQXJlYUlkID0gdGhpcy5ob3NwQXJlYUxpc3QuZmluZChpdGVtID0+IGl0ZW0ucGlja2VkKS5pZFxuICAgICAgICB0aGlzLnNlYXJjaFBhcmFtcy5kb2N0b3JUeXBlSWQgPSB0aGlzLmRvY3RvclR5cGVMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLnBpY2tlZCkuaWRcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTZWFyY2ggKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkZXRhaWwudmFsdWVcbiAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMuc2VhcmNoV29yZCA9IHZhbHVlXG4gICAgICB9LFxuICAgICAgaGFuZGxlTWFza1RhcCAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uU2VhcmNoKSB7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWaXNpYmxlKSB7XG4gICAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdGhpcy5zZWFyY2hQYXJhbXNcbiAgICAgICAgICB0aGlzLmhvc3BBcmVhTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnBpY2tlZCA9IHNlYXJjaFBhcmFtcy5ob3NwQXJlYSA9PT0gaXRlbS5pZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5kb2N0b3JUeXBlTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnBpY2tlZCA9IHNlYXJjaFBhcmFtcy5kb2N0b3JUeXBlID09PSBpdGVtLmlkXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmZpbHRlclZpc2libGUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFuZGxlQ2FuY2VsU2VhcmNoICgpIHtcbiAgICAgICAgdGhpcy5vblNlYXJjaCA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgaGFuZGxlSXRlbVRhcCAoaWQpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2RvY3Rvcl9kZXRhaWw/aWQ9JyArIGlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG4gICAgLy8g5Zu65a6a5pa55rOVXG4gICAgaW5pdFBhZ2VEYXRhICgpIHtcbiAgICAgIHRoaXMuZ2V0TGlzdCgpXG4gICAgICB0aGlzLiRfcmVxdWVzdCh7XG4gICAgICAgIHVybDogJy9ob3NwQXJlYS9hbGwnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge31cbiAgICAgIH0pLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IHt9XG4gICAgICAgIGNvbnN0IGxpc3QgPSBjb250ZW50Lmxpc3RcbiAgICAgICAgdGhpcy5ob3NwQXJlYUxpc3QgPSBsaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaG9zcEFyZWFMaXN0ID0gW3tcbiAgICAgICAgICBuYW1lOiAn5YWo6YOoJyxcbiAgICAgICAgICBwaWNrZWQ6IHRydWVcbiAgICAgICAgfV0uY29uY2F0KHRoaXMuaG9zcEFyZWFMaXN0KVxuICAgICAgfSlcbiAgICAgIHRoaXMuJF9yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnL2RvY3RvclR5cGUvYWxsJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9KS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICBjb250ZW50ID0gY29udGVudCB8fCB7fVxuICAgICAgICBjb25zdCBsaXN0ID0gY29udGVudC5saXN0XG4gICAgICAgIHRoaXMuZG9jdG9yVHlwZUxpc3QgPSBsaXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZG9jdG9yVHlwZUxpc3QgPSBbe1xuICAgICAgICAgIG5hbWU6ICflhajpg6gnLFxuICAgICAgICAgIHBpY2tlZDogdHJ1ZVxuICAgICAgICB9XS5jb25jYXQodGhpcy5kb2N0b3JUeXBlTGlzdClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0TGlzdCAocGFyYW1zKSB7XG4gICAgICB0aGlzLmluaXREYXRhKHtcbiAgICAgICAgdXJsOiAnL2RvY3RvckluZm8vcXVlcnknLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcGFyYW1zLCB7XG4gICAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgICAgIH0pXG4gICAgICB9LCAobGlzdEl0ZW0sIHJlcykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGF2YXRhcjogbGlzdEl0ZW0uaGVhZFBvcnRyYWl0LFxuICAgICAgICAgIG5hbWU6IGxpc3RJdGVtLm5hbWUsXG4gICAgICAgICAgaW50cm86IGxpc3RJdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGlkOiBsaXN0SXRlbS5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19
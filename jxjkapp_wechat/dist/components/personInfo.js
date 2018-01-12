'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _customInput = require('./customInput.js');

var _customInput2 = _interopRequireDefault(_customInput);

var _pickerList = require('./pickerList.js');

var _pickerList2 = _interopRequireDefault(_pickerList);

var _validator = require('./../utils/validator.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PICKER_ITEMS = [{
  label: '分娩日期',
  picker: {
    mode: 'date',
    valueBind: 'deliveryDate',
    rangeBind: 'deliveryDate'
  }
}, {
  label: '分娩情况',
  picker: {
    valueBind: 'deliveryInfo',
    rangeBind: 'deliveryInfo'
  }
}, {
  label: '婴儿性别',
  picker: {
    valueBind: 'babySex',
    rangeBind: 'babySex'
  }
}, {
  label: '客户来源',
  picker: {
    valueBind: 'userSource',
    rangeBind: 'userSource'
  }
}];

var CustomCard = function (_wepy$component) {
  _inherits(CustomCard, _wepy$component);

  function CustomCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CustomCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PickerList": { "v-bind:readonly.sync": "readonly", "v-bind:ITEMS.once": "PICKER_ITEMS", "v-bind:lists.sync": "pickerLists", "v-bind:pickeds.sync": "pickerPickeds" }, "IdInput": { "class": "item-input__inner", "xmlns:v-bind": "", "v-bind:disabled.sync": "readonly", "v-bind:value.sync": "id" }, "CardIdInput": { "type": "idcard", "class": "item-input__inner", "v-bind:disabled.sync": "readonly", "v-bind:value.sync": "cardId" }, "AllergiesInput": { "class": "item-input__inner", "v-bind:disabled.sync": "readonly", "v-bind:value.sync": "allergies" }, "DiseaseInput": { "class": "item-input__inner", "v-bind:disabled.sync": "readonly", "v-bind:value.sync": "disease" }, "AddressInput": { "class": "item-input__inner", "type": "textarea", "v-bind:disabled.sync": "readonly", "v-bind:value.sync": "address" } }, _this.$events = {}, _this.components = {
      PickerList: _pickerList2.default,
      IdInput: _customInput2.default,
      CardIdInput: _customInput2.default,
      AllergiesInput: _customInput2.default,
      DiseaseInput: _customInput2.default,
      AddressInput: _customInput2.default
    }, _this.props = {
      readonly: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      canEdit: { // 依托于readonly参数
        type: Boolean,
        default: false
      },
      isMaster: { // 是否是主绑定人
        type: Boolean,
        default: true
      },
      submitBtnText: {
        type: String
      }
    }, _this.mixins = [], _this.data = {
      canSubmit: false,
      id: '', // 卡号
      cardId: '', // 身份证号
      allergies: '', // 过敏史
      disease: '', // 疾病史
      address: '', // 联系地址
      PICKER_ITEMS: PICKER_ITEMS,
      pickerLists: {
        // deliveryDate: [{
        //   value: 1,
        //   label: '232'
        // }],
        deliveryInfo: [{
          value: '顺利',
          label: '顺利'
        }, {
          value: '不顺利',
          label: '不顺利'
        }],
        babySex: [{
          value: 0,
          label: '女'
        }, {
          value: 1,
          label: '男'
        }],
        userSource: [{
          value: '介绍',
          label: '介绍'
        }]
      },
      pickerPickeds: {}
    }, _this.computed = {
      formData: function formData() {
        return _extends({
          id: this.id,
          cardId: this.cardId,
          allergies: this.allergies,
          disease: this.disease,
          address: this.address
        }, this.pickerPickeds);
      }
    }, _this.watch = {
      formData: function formData(newVal) {
        var id = newVal.id && (newVal.id + '').trim();
        var cardId = newVal.cardId && newVal.cardId.trim();
        if (id && (0, _validator.validCardId)(cardId)) {
          this.canSubmit = true;
        } else {
          this.canSubmit = false;
        }
        this.$apply();
        this.$emit('pickedsChange', newVal);
      }
    }, _this.methods = {
      handleEditTap: function handleEditTap() {
        if (this.readonly) {
          this.readonly = false;
        } else {
          this.$emit('editSubmit');
        }
      },
      submit: function submit() {
        this.$emit('submit', this.formData);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomCard, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'syncFormData',
    value: function syncFormData(formData) {
      var id = formData.id,
          cardId = formData.cardId,
          allergies = formData.allergies,
          disease = formData.disease,
          address = formData.address,
          pickerPickeds = _objectWithoutProperties(formData, ['id', 'cardId', 'allergies', 'disease', 'address']);

      this.id = id;
      this.cardId = cardId;
      this.allergies = allergies;
      this.disease = disease;
      this.address = address;
      this.pickerPickeds = pickerPickeds;
      console.log('pickerPickeds', pickerPickeds);
      this.$apply();
    }
  }]);

  return CustomCard;
}(_wepy2.default.component);

exports.default = CustomCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbkluZm8uanMiXSwibmFtZXMiOlsiUElDS0VSX0lURU1TIiwibGFiZWwiLCJwaWNrZXIiLCJtb2RlIiwidmFsdWVCaW5kIiwicmFuZ2VCaW5kIiwiQ3VzdG9tQ2FyZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBpY2tlckxpc3QiLCJJZElucHV0IiwiQ2FyZElkSW5wdXQiLCJBbGxlcmdpZXNJbnB1dCIsIkRpc2Vhc2VJbnB1dCIsIkFkZHJlc3NJbnB1dCIsInByb3BzIiwicmVhZG9ubHkiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0d29XYXkiLCJjYW5FZGl0IiwiaXNNYXN0ZXIiLCJzdWJtaXRCdG5UZXh0IiwiU3RyaW5nIiwibWl4aW5zIiwiZGF0YSIsImNhblN1Ym1pdCIsImlkIiwiY2FyZElkIiwiYWxsZXJnaWVzIiwiZGlzZWFzZSIsImFkZHJlc3MiLCJwaWNrZXJMaXN0cyIsImRlbGl2ZXJ5SW5mbyIsInZhbHVlIiwiYmFieVNleCIsInVzZXJTb3VyY2UiLCJwaWNrZXJQaWNrZWRzIiwiY29tcHV0ZWQiLCJmb3JtRGF0YSIsIndhdGNoIiwibmV3VmFsIiwidHJpbSIsIiRhcHBseSIsIiRlbWl0IiwibWV0aG9kcyIsImhhbmRsZUVkaXRUYXAiLCJzdWJtaXQiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxlQUFlLENBQUM7QUFDcEJDLFNBQU8sTUFEYTtBQUVwQkMsVUFBUTtBQUNOQyxVQUFNLE1BREE7QUFFTkMsZUFBVyxjQUZMO0FBR05DLGVBQVc7QUFITDtBQUZZLENBQUQsRUFPbEI7QUFDREosU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkUsZUFBVyxjQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBUGtCLEVBYWxCO0FBQ0RKLFNB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QWY7QUFDQSxXQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLTSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBWSxjQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QmIsYUFBN0I7QUFDQSxXQUFLTSxNQUFMO0FBQ0Q7Ozs7RUE5SHFDLGVBQUtRLFM7O2tCQUF4QmhELFUiLCJmaWxlIjoicGVyc29uSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tSW5wdXQnXG4gIGltcG9ydCBQaWNrZXJMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9waWNrZXJMaXN0J1xuXG4gIGltcG9ydCB7XG4gICAgdmFsaWRDYXJkSWRcbiAgfSBmcm9tICdAL3V0aWxzL3ZhbGlkYXRvcidcblxuICBjb25zdCBQSUNLRVJfSVRFTVMgPSBbe1xuICAgIGxhYmVsOiAn5YiG5aip5pel5pyfJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIG1vZGU6ICdkYXRlJyxcbiAgICAgIHZhbHVlQmluZDogJ2RlbGl2ZXJ5RGF0ZScsXG4gICAgICByYW5nZUJpbmQ6ICdkZWxpdmVyeURhdGUnXG4gICAgfVxuICB9LCB7XG4gICAgbGFiZWw6ICfliIblqKnmg4XlhrUnLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnZGVsaXZlcnlJbmZvJyxcbiAgICAgIHJhbmdlQmluZDogJ2RlbGl2ZXJ5SW5mbydcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+WptOWEv+aAp+WIqycsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdiYWJ5U2V4JyxcbiAgICAgIHJhbmdlQmluZDogJ2JhYnlTZXgnXG4gICAgfVxuICB9LCB7XG4gICAgbGFiZWw6ICflrqLmiLfmnaXmupAnLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAndXNlclNvdXJjZScsXG4gICAgICByYW5nZUJpbmQ6ICd1c2VyU291cmNlJ1xuICAgIH1cbiAgfV1cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUGlja2VyTGlzdFwiOntcInYtYmluZDpyZWFkb25seS5zeW5jXCI6XCJyZWFkb25seVwiLFwidi1iaW5kOklURU1TLm9uY2VcIjpcIlBJQ0tFUl9JVEVNU1wiLFwidi1iaW5kOmxpc3RzLnN5bmNcIjpcInBpY2tlckxpc3RzXCIsXCJ2LWJpbmQ6cGlja2Vkcy5zeW5jXCI6XCJwaWNrZXJQaWNrZWRzXCJ9LFwiSWRJbnB1dFwiOntcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpkaXNhYmxlZC5zeW5jXCI6XCJyZWFkb25seVwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImlkXCJ9LFwiQ2FyZElkSW5wdXRcIjp7XCJ0eXBlXCI6XCJpZGNhcmRcIixcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwidi1iaW5kOmRpc2FibGVkLnN5bmNcIjpcInJlYWRvbmx5XCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiY2FyZElkXCJ9LFwiQWxsZXJnaWVzSW5wdXRcIjp7XCJjbGFzc1wiOlwiaXRlbS1pbnB1dF9faW5uZXJcIixcInYtYmluZDpkaXNhYmxlZC5zeW5jXCI6XCJyZWFkb25seVwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImFsbGVyZ2llc1wifSxcIkRpc2Vhc2VJbnB1dFwiOntcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwidi1iaW5kOmRpc2FibGVkLnN5bmNcIjpcInJlYWRvbmx5XCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiZGlzZWFzZVwifSxcIkFkZHJlc3NJbnB1dFwiOntcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwidHlwZVwiOlwidGV4dGFyZWFcIixcInYtYmluZDpkaXNhYmxlZC5zeW5jXCI6XCJyZWFkb25seVwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImFkZHJlc3NcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgUGlja2VyTGlzdCxcbiAgICAgIElkSW5wdXQ6IEN1c3RvbUlucHV0LFxuICAgICAgQ2FyZElkSW5wdXQ6IEN1c3RvbUlucHV0LFxuICAgICAgQWxsZXJnaWVzSW5wdXQ6IEN1c3RvbUlucHV0LFxuICAgICAgRGlzZWFzZUlucHV0OiBDdXN0b21JbnB1dCxcbiAgICAgIEFkZHJlc3NJbnB1dDogQ3VzdG9tSW5wdXRcbiAgICB9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIHJlYWRvbmx5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBjYW5FZGl0OiB7IC8vIOS+neaJmOS6jnJlYWRvbmx55Y+C5pWwXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgaXNNYXN0ZXI6IHsgLy8g5piv5ZCm5piv5Li757uR5a6a5Lq6XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBzdWJtaXRCdG5UZXh0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfVxuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgY2FuU3VibWl0OiBmYWxzZSxcbiAgICAgIGlkOiAnJywgLy8g5Y2h5Y+3XG4gICAgICBjYXJkSWQ6ICcnLCAvLyDouqvku73or4Hlj7dcbiAgICAgIGFsbGVyZ2llczogJycsIC8vIOi/h+aVj+WPslxuICAgICAgZGlzZWFzZTogJycsIC8vIOeWvueXheWPslxuICAgICAgYWRkcmVzczogJycsIC8vIOiBlOezu+WcsOWdgFxuICAgICAgUElDS0VSX0lURU1TLFxuICAgICAgcGlja2VyTGlzdHM6IHtcbiAgICAgICAgLy8gZGVsaXZlcnlEYXRlOiBbe1xuICAgICAgICAvLyAgIHZhbHVlOiAxLFxuICAgICAgICAvLyAgIGxhYmVsOiAnMjMyJ1xuICAgICAgICAvLyB9XSxcbiAgICAgICAgZGVsaXZlcnlJbmZvOiBbe1xuICAgICAgICAgIHZhbHVlOiAn6aG65YipJyxcbiAgICAgICAgICBsYWJlbDogJ+mhuuWIqSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHZhbHVlOiAn5LiN6aG65YipJyxcbiAgICAgICAgICBsYWJlbDogJ+S4jemhuuWIqSdcbiAgICAgICAgfV0sXG4gICAgICAgIGJhYnlTZXg6IFt7XG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgbGFiZWw6ICflpbMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICBsYWJlbDogJ+eUtydcbiAgICAgICAgfV0sXG4gICAgICAgIHVzZXJTb3VyY2U6IFt7XG4gICAgICAgICAgdmFsdWU6ICfku4vnu40nLFxuICAgICAgICAgIGxhYmVsOiAn5LuL57uNJ1xuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHBpY2tlclBpY2tlZHM6IHtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGZvcm1EYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICBjYXJkSWQ6IHRoaXMuY2FyZElkLFxuICAgICAgICAgIGFsbGVyZ2llczogdGhpcy5hbGxlcmdpZXMsXG4gICAgICAgICAgZGlzZWFzZTogdGhpcy5kaXNlYXNlLFxuICAgICAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcyxcbiAgICAgICAgICAuLi50aGlzLnBpY2tlclBpY2tlZHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgZm9ybURhdGEgKG5ld1ZhbCkge1xuICAgICAgICBjb25zdCBpZCA9IG5ld1ZhbC5pZCAmJiAobmV3VmFsLmlkICsgJycpLnRyaW0oKVxuICAgICAgICBjb25zdCBjYXJkSWQgPSBuZXdWYWwuY2FyZElkICYmIG5ld1ZhbC5jYXJkSWQudHJpbSgpXG4gICAgICAgIGlmIChpZCAmJiB2YWxpZENhcmRJZChjYXJkSWQpKSB7XG4gICAgICAgICAgdGhpcy5jYW5TdWJtaXQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYW5TdWJtaXQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgdGhpcy4kZW1pdCgncGlja2Vkc0NoYW5nZScsIG5ld1ZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgaGFuZGxlRWRpdFRhcCAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgdGhpcy5yZWFkb25seSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnZWRpdFN1Ym1pdCcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWJtaXQgKCkge1xuICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnLCB0aGlzLmZvcm1EYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgc3luY0Zvcm1EYXRhIChmb3JtRGF0YSkge1xuICAgICAgY29uc3Qge2lkLCBjYXJkSWQsIGFsbGVyZ2llcywgZGlzZWFzZSwgYWRkcmVzcywgLi4ucGlja2VyUGlja2Vkc30gPSBmb3JtRGF0YVxuICAgICAgdGhpcy5pZCA9IGlkXG4gICAgICB0aGlzLmNhcmRJZCA9IGNhcmRJZFxuICAgICAgdGhpcy5hbGxlcmdpZXMgPSBhbGxlcmdpZXNcbiAgICAgIHRoaXMuZGlzZWFzZSA9IGRpc2Vhc2VcbiAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3NcbiAgICAgIHRoaXMucGlja2VyUGlja2VkcyA9IHBpY2tlclBpY2tlZHNcbiAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXJQaWNrZWRzJywgcGlja2VyUGlja2VkcylcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbiJdfQ==
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
        deliveryDate: [{
          value: 1,
          label: '232'
        }],
        deliveryInfo: [{
          value: 0,
          label: 'labor0'
        }],
        babySex: [{
          value: 0,
          label: '女'
        }, {
          value: 1,
          label: '男'
        }],
        userSource: [{
          value: 0,
          label: 'userSource0'
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
        var id = newVal.id && newVal.id.trim();
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
      this.$apply();
    }
  }]);

  return CustomCard;
}(_wepy2.default.component);

exports.default = CustomCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbkluZm8uanMiXSwibmFtZXMiOlsiUElDS0VSX0lURU1TIiwibGFiZWwiLCJwaWNrZXIiLCJ2YWx1ZUJpbmQiLCJyYW5nZUJpbmQiLCJDdXN0b21DYXJkIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUGlja2VyTGlzdCIsIklkSW5wdXQiLCJDYXJkSWRJbnB1dCIsIkFsbGVyZ2llc0lucHV0IiwiRGlzZWFzZUlucHV0IiwiQWRkcmVzc0lucHV0IiwicHJvcHMiLCJyZWFkb25seSIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsInR3b1dheSIsImNhbkVkaXQiLCJpc01hc3RlciIsInN1Ym1pdEJ0blRleHQiLCJTdHJpbmciLCJtaXhpbnMiLCJkYXRhIiwiY2FuU3VibWl0IiwiaWQiLCJjYXJkSWQiLCJhbGxlcmdpZXMiLCJkaXNlYXNlIiwiYWRkcmVzcyIsInBpY2tlckxpc3RzIiwiZGVsaXZlcnlEYXRlIiwidmFsdWUiLCJkZWxpdmVyeUluZm8iLCJiYWJ5U2V4IiwidXNlclNvdXJjZSIsInBpY2tlclBpY2tlZHMiLCJjb21wdXRlZCIsImZvcm1EYXRhIiwid2F0Y2giLCJuZXdWYWwiLCJ0cmltIiwiJGFwcGx5IiwiJGVtaXQiLCJtZXRob2RzIiwiaGFuZGxlRWRpdFRhcCIsInN1Ym1pdCIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUEsZUFBZSxDQUFDO0FBQ3BCQyxTQUFPLE1BRGE7QUFFcEJDLFVBQVE7QUFDTkMsZUFBVyxjQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZZLENBQUQsRUFNbEI7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxjQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBTmtCLEVBWWxCO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05D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QUFMLEdBQXFCQSxhQUFyQjtBQUNBLFdBQUtNLE1BQUw7QUFDRDs7OztFQTFIcUMsZUFBS00sUzs7a0JBQXhCL0MsVSIsImZpbGUiOiJwZXJzb25JbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b21JbnB1dCdcbiAgaW1wb3J0IFBpY2tlckxpc3QgZnJvbSAnQC9jb21wb25lbnRzL3BpY2tlckxpc3QnXG5cbiAgaW1wb3J0IHtcbiAgICB2YWxpZENhcmRJZFxuICB9IGZyb20gJ0AvdXRpbHMvdmFsaWRhdG9yJ1xuXG4gIGNvbnN0IFBJQ0tFUl9JVEVNUyA9IFt7XG4gICAgbGFiZWw6ICfliIblqKnml6XmnJ8nLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnZGVsaXZlcnlEYXRlJyxcbiAgICAgIHJhbmdlQmluZDogJ2RlbGl2ZXJ5RGF0ZSdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+WIhuWoqeaDheWGtScsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdkZWxpdmVyeUluZm8nLFxuICAgICAgcmFuZ2VCaW5kOiAnZGVsaXZlcnlJbmZvJ1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn5am05YS/5oCn5YirJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ2JhYnlTZXgnLFxuICAgICAgcmFuZ2VCaW5kOiAnYmFieVNleCdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+WuouaIt+adpea6kCcsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICd1c2VyU291cmNlJyxcbiAgICAgIHJhbmdlQmluZDogJ3VzZXJTb3VyY2UnXG4gICAgfVxuICB9XVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQaWNrZXJMaXN0XCI6e1widi1iaW5kOnJlYWRvbmx5LnN5bmNcIjpcInJlYWRvbmx5XCIsXCJ2LWJpbmQ6SVRFTVMub25jZVwiOlwiUElDS0VSX0lURU1TXCIsXCJ2LWJpbmQ6bGlzdHMuc3luY1wiOlwicGlja2VyTGlzdHNcIixcInYtYmluZDpwaWNrZWRzLnN5bmNcIjpcInBpY2tlclBpY2tlZHNcIn0sXCJJZElucHV0XCI6e1wiY2xhc3NcIjpcIml0ZW0taW5wdXRfX2lubmVyXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmRpc2FibGVkLnN5bmNcIjpcInJlYWRvbmx5XCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiaWRcIn0sXCJDYXJkSWRJbnB1dFwiOntcInR5cGVcIjpcImlkY2FyZFwiLFwiY2xhc3NcIjpcIml0ZW0taW5wdXRfX2lubmVyXCIsXCJ2LWJpbmQ6ZGlzYWJsZWQuc3luY1wiOlwicmVhZG9ubHlcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJjYXJkSWRcIn0sXCJBbGxlcmdpZXNJbnB1dFwiOntcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwidi1iaW5kOmRpc2FibGVkLnN5bmNcIjpcInJlYWRvbmx5XCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiYWxsZXJnaWVzXCJ9LFwiRGlzZWFzZUlucHV0XCI6e1wiY2xhc3NcIjpcIml0ZW0taW5wdXRfX2lubmVyXCIsXCJ2LWJpbmQ6ZGlzYWJsZWQuc3luY1wiOlwicmVhZG9ubHlcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJkaXNlYXNlXCJ9LFwiQWRkcmVzc0lucHV0XCI6e1wiY2xhc3NcIjpcIml0ZW0taW5wdXRfX2lubmVyXCIsXCJ0eXBlXCI6XCJ0ZXh0YXJlYVwiLFwidi1iaW5kOmRpc2FibGVkLnN5bmNcIjpcInJlYWRvbmx5XCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiYWRkcmVzc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBQaWNrZXJMaXN0LFxuICAgICAgSWRJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBDYXJkSWRJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBBbGxlcmdpZXNJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBEaXNlYXNlSW5wdXQ6IEN1c3RvbUlucHV0LFxuICAgICAgQWRkcmVzc0lucHV0OiBDdXN0b21JbnB1dFxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNhbkVkaXQ6IHsgLy8g5L6d5omY5LqOcmVhZG9ubHnlj4LmlbBcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBpc01hc3RlcjogeyAvLyDmmK/lkKbmmK/kuLvnu5HlrprkurpcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN1Ym1pdEJ0blRleHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBjYW5TdWJtaXQ6IGZhbHNlLFxuICAgICAgaWQ6ICcnLCAvLyDljaHlj7dcbiAgICAgIGNhcmRJZDogJycsIC8vIOi6q+S7veivgeWPt1xuICAgICAgYWxsZXJnaWVzOiAnJywgLy8g6L+H5pWP5Y+yXG4gICAgICBkaXNlYXNlOiAnJywgLy8g55a+55eF5Y+yXG4gICAgICBhZGRyZXNzOiAnJywgLy8g6IGU57O75Zyw5Z2AXG4gICAgICBQSUNLRVJfSVRFTVMsXG4gICAgICBwaWNrZXJMaXN0czoge1xuICAgICAgICBkZWxpdmVyeURhdGU6IFt7XG4gICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgbGFiZWw6ICcyMzInXG4gICAgICAgIH1dLFxuICAgICAgICBkZWxpdmVyeUluZm86IFt7XG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgbGFiZWw6ICdsYWJvcjAnXG4gICAgICAgIH1dLFxuICAgICAgICBiYWJ5U2V4OiBbe1xuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgIGxhYmVsOiAn5aWzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgbGFiZWw6ICfnlLcnXG4gICAgICAgIH1dLFxuICAgICAgICB1c2VyU291cmNlOiBbe1xuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgIGxhYmVsOiAndXNlclNvdXJjZTAnXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgcGlja2VyUGlja2Vkczoge1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgZm9ybURhdGEgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIGNhcmRJZDogdGhpcy5jYXJkSWQsXG4gICAgICAgICAgYWxsZXJnaWVzOiB0aGlzLmFsbGVyZ2llcyxcbiAgICAgICAgICBkaXNlYXNlOiB0aGlzLmRpc2Vhc2UsXG4gICAgICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLFxuICAgICAgICAgIC4uLnRoaXMucGlja2VyUGlja2Vkc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBmb3JtRGF0YSAobmV3VmFsKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbmV3VmFsLmlkICYmIG5ld1ZhbC5pZC50cmltKClcbiAgICAgICAgY29uc3QgY2FyZElkID0gbmV3VmFsLmNhcmRJZCAmJiBuZXdWYWwuY2FyZElkLnRyaW0oKVxuICAgICAgICBpZiAoaWQgJiYgdmFsaWRDYXJkSWQoY2FyZElkKSkge1xuICAgICAgICAgIHRoaXMuY2FuU3VibWl0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FuU3VibWl0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIHRoaXMuJGVtaXQoJ3BpY2tlZHNDaGFuZ2UnLCBuZXdWYWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUVkaXRUYXAgKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkb25seSkge1xuICAgICAgICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGVtaXQoJ2VkaXRTdWJtaXQnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3VibWl0ICgpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgdGhpcy5mb3JtRGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cblxuICAgIHN5bmNGb3JtRGF0YSAoZm9ybURhdGEpIHtcbiAgICAgIGNvbnN0IHtpZCwgY2FyZElkLCBhbGxlcmdpZXMsIGRpc2Vhc2UsIGFkZHJlc3MsIC4uLnBpY2tlclBpY2tlZHN9ID0gZm9ybURhdGFcbiAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgdGhpcy5jYXJkSWQgPSBjYXJkSWRcbiAgICAgIHRoaXMuYWxsZXJnaWVzID0gYWxsZXJnaWVzXG4gICAgICB0aGlzLmRpc2Vhc2UgPSBkaXNlYXNlXG4gICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzXG4gICAgICB0aGlzLnBpY2tlclBpY2tlZHMgPSBwaWNrZXJQaWNrZWRzXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4iXX0=
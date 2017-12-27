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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomCard.__proto__ || Object.getPrototypeOf(CustomCard)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "PickerList": { "v-bind:ITEMS.once": "PICKER_ITEMS", "v-bind:lists.sync": "pickerLists", "v-bind:pickeds.sync": "pickerPickeds" }, "IdInput": { "class": "item-input__inner", "xmlns:v-bind": "", "v-bind:value.sync": "id" }, "CardIdInput": { "type": "idcard", "class": "item-input__inner", "v-bind:value.sync": "cardId" }, "AllergiesInput": { "class": "item-input__inner", "v-bind:value.sync": "allergies" }, "DiseaseInput": { "class": "item-input__inner", "v-bind:value.sync": "disease" }, "AddressInput": { "class": "item-input__inner", "type": "textarea", "v-bind:value.sync": "address" } }, _this.$events = {}, _this.components = {
      PickerList: _pickerList2.default,
      IdInput: _customInput2.default,
      CardIdInput: _customInput2.default,
      AllergiesInput: _customInput2.default,
      DiseaseInput: _customInput2.default,
      AddressInput: _customInput2.default
    }, _this.props = {
      page: {
        type: String,
        default: 'signup' // signup / relation
      }
    }, _this.mixins = [], _this.data = {
      id: '222', // 卡号
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
        console.log(newVal, 111);
        this.$emit('pickedsChange', newVal);
      }
    }, _this.methods = {
      handleInput: function handleInput(valBind, _ref2) {
        var detail = _ref2.detail;

        this[valBind] = detail.value;
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CustomCard, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return CustomCard;
}(_wepy2.default.component);

exports.default = CustomCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbkluZm8uanMiXSwibmFtZXMiOlsiUElDS0VSX0lURU1TIiwibGFiZWwiLCJwaWNrZXIiLCJ2YWx1ZUJpbmQiLCJyYW5nZUJpbmQiLCJDdXN0b21DYXJkIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUGlja2VyTGlzdCIsIklkSW5wdXQiLCJDYXJkSWRJbnB1dCIsIkFsbGVyZ2llc0lucHV0IiwiRGlzZWFzZUlucHV0IiwiQWRkcmVzc0lucHV0IiwicHJvcHMiLCJwYWdlIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJtaXhpbnMiLCJkYXRhIiwiaWQiLCJjYXJkSWQiLCJhbGxlcmdpZXMiLCJkaXNlYXNlIiwiYWRkcmVzcyIsInBpY2tlckxpc3RzIiwiZGVsaXZlcnlEYXRlIiwidmFsdWUiLCJkZWxpdmVyeUluZm8iLCJiYWJ5U2V4IiwidXNlclNvdXJjZSIsInBpY2tlclBpY2tlZHMiLCJjb21wdXRlZCIsImZvcm1EYXRhIiwid2F0Y2giLCJuZXdWYWwiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJtZXRob2RzIiwiaGFuZGxlSW5wdXQiLCJ2YWxCaW5kIiwiZGV0YWlsIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxDQUFDO0FBQ3BCQyxTQUFPLE1BRGE7QUFFcEJDLFVBQVE7QUFDTkMsZUFBVyxjQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZZLENBQUQsRUFNbEI7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxjQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBTmtCLEVBWWxCO0FBQ0RILFNBQU8sTUFETjtBQUVEQyxVQUFRO0FBQ05DLGVBQVcsU0FETDtBQUVOQyxlQUFXO0FBRkw7QUFGUCxDQVprQixFQWtCbEI7QUFDREgsU0FBTyxNQUROO0FBRURDLFVBQVE7QUFDTkMsZUFBVyxZQURMO0FBRU5DLGVBQVc7QUFGTDtBQUZQLENBbEJrQixDQUFyQjs7SUF5QnFCQyxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxxQkFBb0IsY0FBckIsRUFBb0MscUJBQW9CLGFBQXhELEVBQXNFLHVCQUFzQixlQUE1RixFQUFkLEVBQTJILFdBQVUsRUFBQyxTQUFRLG1CQUFULEVBQTZCLGdCQUFlLEVBQTVDLEVBQStDLHFCQUFvQixJQUFuRSxFQUFySSxFQUE4TSxlQUFjLEVBQUMsUUFBTyxRQUFSLEVBQWlCLFNBQVEsbUJBQXpCLEVBQTZDLHFCQUFvQixRQUFqRSxFQUE1TixFQUF1UyxrQkFBaUIsRUFBQyxTQUFRLG1CQUFULEVBQTZCLHFCQUFvQixXQUFqRCxFQUF4VCxFQUFzWCxnQkFBZSxFQUFDLFNBQVEsbUJBQVQsRUFBNkIscUJBQW9CLFNBQWpELEVBQXJZLEVBQWljLGdCQUFlLEVBQUMsU0FBUSxtQkFBVCxFQUE2QixRQUFPLFVBQXBDLEVBQStDLHFCQUFvQixTQUFuRSxFQUFoZCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxzQ0FEUTtBQUVSQyxvQ0FGUTtBQUdSQyx3Q0FIUTtBQUlSQywyQ0FKUTtBQUtSQyx5Q0FMUTtBQU1SQztBQU5RLEssUUFTVkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsTUFERjtBQUVKQyxpQkFBUyxRQUZMLENBRWM7QUFGZDtBQURBLEssUUFPUkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLFVBQUksS0FEQyxFQUNNO0FBQ1hDLGNBQVEsRUFGSCxFQUVPO0FBQ1pDLGlCQUFXLEVBSE4sRUFHVTtBQUNmQyxlQUFTLEVBSkosRUFJUTtBQUNiQyxlQUFTLEVBTEosRUFLUTtBQUNiM0IsZ0NBTks7QUFPTDRCLG1CQUFhO0FBQ1hDLHNCQUFjLENBQUM7QUFDYkMsaUJBQU8sQ0FETTtBQUViN0IsaUJBQU87QUFGTSxTQUFELENBREg7QUFLWDhCLHNCQUFjLENBQUM7QUFDYkQsaUJBQU8sQ0FETTtBQUViN0IsaUJBQU87QUFGTSxTQUFELENBTEg7QUFTWCtCLGlCQUFTLENBQUM7QUFDUkYsaUJBQU8sQ0FEQztBQUVSN0IsaUJBQU87QUFGQyxTQUFELEVBR047QUFDRDZCLGlCQUFPLENBRE47QUFFRDdCLGlCQUFPO0FBRk4sU0FITSxDQVRFO0FBZ0JYZ0Msb0JBQVksQ0FBQztBQUNYSCxpQkFBTyxDQURJO0FBRVg3QixpQkFBTztBQUZJLFNBQUQ7QUFoQkQsT0FQUjtBQTRCTGlDLHFCQUFlO0FBNUJWLEssUUFnQ1BDLFEsR0FBVztBQUNUQyxjQURTLHNCQUNHO0FBQ1Y7QUFDRWIsY0FBSSxLQUFLQSxFQURYO0FBRUVDLGtCQUFRLEtBQUtBLE1BRmY7QUFHRUMscUJBQVcsS0FBS0EsU0FIbEI7QUFJRUMsbUJBQVMsS0FBS0EsT0FKaEI7QUFLRUMsbUJBQVMsS0FBS0E7QUFMaEIsV0FNSyxLQUFLTyxhQU5WO0FBUUQ7QUFWUSxLLFFBYVhHLEssR0FBUTtBQUNORCxjQURNLG9CQUNJRSxNQURKLEVBQ1k7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVlGLE1BQVosRUFBb0IsR0FBcEI7QUFDQSxhQUFLRyxLQUFMLENBQVcsZUFBWCxFQUE0QkgsTUFBNUI7QUFDRDtBQUpLLEssUUFPUkksTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNLQyxPQURMLFNBQzBCO0FBQUEsWUFBVkMsTUFBVSxTQUFWQSxNQUFVOztBQUNoQyxhQUFLRCxPQUFMLElBQWdCQyxPQUFPZixLQUF2QjtBQUNEO0FBSE8sSyxRQU1WZ0IsTSxHQUFTLEU7Ozs7OzZCQUdBLENBQ1I7Ozs7RUFwRnFDLGVBQUtDLFM7O2tCQUF4QjFDLFUiLCJmaWxlIjoicGVyc29uSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBDdXN0b21JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tSW5wdXQnXG4gIGltcG9ydCBQaWNrZXJMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9waWNrZXJMaXN0J1xuXG4gIGNvbnN0IFBJQ0tFUl9JVEVNUyA9IFt7XG4gICAgbGFiZWw6ICfliIblqKnml6XmnJ8nLFxuICAgIHBpY2tlcjoge1xuICAgICAgdmFsdWVCaW5kOiAnZGVsaXZlcnlEYXRlJyxcbiAgICAgIHJhbmdlQmluZDogJ2RlbGl2ZXJ5RGF0ZSdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+WIhuWoqeaDheWGtScsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICdkZWxpdmVyeUluZm8nLFxuICAgICAgcmFuZ2VCaW5kOiAnZGVsaXZlcnlJbmZvJ1xuICAgIH1cbiAgfSwge1xuICAgIGxhYmVsOiAn5am05YS/5oCn5YirJyxcbiAgICBwaWNrZXI6IHtcbiAgICAgIHZhbHVlQmluZDogJ2JhYnlTZXgnLFxuICAgICAgcmFuZ2VCaW5kOiAnYmFieVNleCdcbiAgICB9XG4gIH0sIHtcbiAgICBsYWJlbDogJ+WuouaIt+adpea6kCcsXG4gICAgcGlja2VyOiB7XG4gICAgICB2YWx1ZUJpbmQ6ICd1c2VyU291cmNlJyxcbiAgICAgIHJhbmdlQmluZDogJ3VzZXJTb3VyY2UnXG4gICAgfVxuICB9XVxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJQaWNrZXJMaXN0XCI6e1widi1iaW5kOklURU1TLm9uY2VcIjpcIlBJQ0tFUl9JVEVNU1wiLFwidi1iaW5kOmxpc3RzLnN5bmNcIjpcInBpY2tlckxpc3RzXCIsXCJ2LWJpbmQ6cGlja2Vkcy5zeW5jXCI6XCJwaWNrZXJQaWNrZWRzXCJ9LFwiSWRJbnB1dFwiOntcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJpZFwifSxcIkNhcmRJZElucHV0XCI6e1widHlwZVwiOlwiaWRjYXJkXCIsXCJjbGFzc1wiOlwiaXRlbS1pbnB1dF9faW5uZXJcIixcInYtYmluZDp2YWx1ZS5zeW5jXCI6XCJjYXJkSWRcIn0sXCJBbGxlcmdpZXNJbnB1dFwiOntcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImFsbGVyZ2llc1wifSxcIkRpc2Vhc2VJbnB1dFwiOntcImNsYXNzXCI6XCJpdGVtLWlucHV0X19pbm5lclwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcImRpc2Vhc2VcIn0sXCJBZGRyZXNzSW5wdXRcIjp7XCJjbGFzc1wiOlwiaXRlbS1pbnB1dF9faW5uZXJcIixcInR5cGVcIjpcInRleHRhcmVhXCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwiYWRkcmVzc1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBQaWNrZXJMaXN0LFxuICAgICAgSWRJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBDYXJkSWRJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBBbGxlcmdpZXNJbnB1dDogQ3VzdG9tSW5wdXQsXG4gICAgICBEaXNlYXNlSW5wdXQ6IEN1c3RvbUlucHV0LFxuICAgICAgQWRkcmVzc0lucHV0OiBDdXN0b21JbnB1dFxuICAgIH1cblxuICAgIHByb3BzID0ge1xuICAgICAgcGFnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdzaWdudXAnIC8vIHNpZ251cCAvIHJlbGF0aW9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBpZDogJzIyMicsIC8vIOWNoeWPt1xuICAgICAgY2FyZElkOiAnJywgLy8g6Lqr5Lu96K+B5Y+3XG4gICAgICBhbGxlcmdpZXM6ICcnLCAvLyDov4fmlY/lj7JcbiAgICAgIGRpc2Vhc2U6ICcnLCAvLyDnlr7nl4Xlj7JcbiAgICAgIGFkZHJlc3M6ICcnLCAvLyDogZTns7vlnLDlnYBcbiAgICAgIFBJQ0tFUl9JVEVNUyxcbiAgICAgIHBpY2tlckxpc3RzOiB7XG4gICAgICAgIGRlbGl2ZXJ5RGF0ZTogW3tcbiAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICBsYWJlbDogJzIzMidcbiAgICAgICAgfV0sXG4gICAgICAgIGRlbGl2ZXJ5SW5mbzogW3tcbiAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICBsYWJlbDogJ2xhYm9yMCdcbiAgICAgICAgfV0sXG4gICAgICAgIGJhYnlTZXg6IFt7XG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgbGFiZWw6ICflpbMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICBsYWJlbDogJ+eUtydcbiAgICAgICAgfV0sXG4gICAgICAgIHVzZXJTb3VyY2U6IFt7XG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgbGFiZWw6ICd1c2VyU291cmNlMCdcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBwaWNrZXJQaWNrZWRzOiB7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBmb3JtRGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgY2FyZElkOiB0aGlzLmNhcmRJZCxcbiAgICAgICAgICBhbGxlcmdpZXM6IHRoaXMuYWxsZXJnaWVzLFxuICAgICAgICAgIGRpc2Vhc2U6IHRoaXMuZGlzZWFzZSxcbiAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgICAgLi4udGhpcy5waWNrZXJQaWNrZWRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIGZvcm1EYXRhIChuZXdWYWwpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3VmFsLCAxMTEpXG4gICAgICAgIHRoaXMuJGVtaXQoJ3BpY2tlZHNDaGFuZ2UnLCBuZXdWYWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGhhbmRsZUlucHV0ICh2YWxCaW5kLCB7IGRldGFpbCB9KSB7XG4gICAgICAgIHRoaXNbdmFsQmluZF0gPSBkZXRhaWwudmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgfVxuIl19
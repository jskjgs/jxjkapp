"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 验证手机号
var validTel = exports.validTel = function validTel(tel) {
  return (/^\d{11}$/.test(tel)
  );
};

// 验证身份证
var validCardId = exports.validCardId = function validCardId(cardId) {
  return (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(cardId)
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJ2YWxpZFRlbCIsInRlbCIsInRlc3QiLCJ2YWxpZENhcmRJZCIsImNhcmRJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsQ0FBVUMsR0FBVixFQUFlO0FBQ3JDLFNBQU8sWUFBV0MsSUFBWCxDQUFnQkQsR0FBaEI7QUFBUDtBQUNELENBRk07O0FBSVA7QUFDTyxJQUFNRSxvQ0FBYyxTQUFkQSxXQUFjLENBQVVDLE1BQVYsRUFBa0I7QUFDM0MsU0FBTyxnR0FBK0ZGLElBQS9GLENBQW9HRSxNQUFwRztBQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiJ2YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDpqozor4HmiYvmnLrlj7dcbmV4cG9ydCBjb25zdCB2YWxpZFRlbCA9IGZ1bmN0aW9uICh0ZWwpIHtcbiAgcmV0dXJuIC9eXFxkezExfSQvLnRlc3QodGVsKVxufVxuXG4vLyDpqozor4Houqvku73or4FcbmV4cG9ydCBjb25zdCB2YWxpZENhcmRJZCA9IGZ1bmN0aW9uIChjYXJkSWQpIHtcbiAgcmV0dXJuIC9eWzEtOV1cXGR7NX0oMTh8MTl8KFsyM11cXGQpKVxcZHsyfSgoMFsxLTldKXwoMTB8MTF8MTIpKSgoWzAtMl1bMS05XSl8MTB8MjB8MzB8MzEpXFxkezN9WzAtOVh4XSQvLnRlc3QoY2FyZElkKVxufVxuIl19
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 验证密码
var validPsd = exports.validPsd = function validPsd(psd) {
  return new Promise(function (resolve, reject) {
    psd = psd.trim();
    if (psd.test(/^[a-zA-Z0-9!@#$%^&*()_]{6, 16}$/)) {
      resolve();
    } else {
      reject();
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJ2YWxpZFBzZCIsInBzZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHJpbSIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXLENBQVVDLEdBQVYsRUFBZTtBQUNyQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM1Q0gsVUFBTUEsSUFBSUksSUFBSixFQUFOO0FBQ0EsUUFBSUosSUFBSUssSUFBSixDQUFTLGlDQUFULENBQUosRUFBaUQ7QUFDL0NIO0FBQ0QsS0FGRCxNQUVPO0FBQ0xDO0FBQ0Q7QUFDRixHQVBNLENBQVA7QUFRRCxDQVRNIiwiZmlsZSI6InZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOmqjOivgeWvhueggVxuZXhwb3J0IGNvbnN0IHZhbGlkUHNkID0gZnVuY3Rpb24gKHBzZCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBzZCA9IHBzZC50cmltKClcbiAgICBpZiAocHNkLnRlc3QoL15bYS16QS1aMC05IUAjJCVeJiooKV9dezYsIDE2fSQvKSkge1xuICAgICAgcmVzb2x2ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdCgpXG4gICAgfVxuICB9KVxufVxuIl19
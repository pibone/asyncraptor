"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncGenerator = function () { function AwaitValue(value) { this.value = value; } function AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; if (value instanceof AwaitValue) { Promise.resolve(value.value).then(function (arg) { resume("next", arg); }, function (arg) { resume("throw", arg); }); } else { settle(result.done ? "return" : "normal", result.value); } } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } } if (typeof Symbol === "function" && Symbol.asyncIterator) { AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; } AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }; AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); }; AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); }; return { wrap: function wrap(fn) { return function () { return new AsyncGenerator(fn.apply(this, arguments)); }; }, await: function _await(value) { return new AwaitValue(value); } }; }();

var innerEach = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(values) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!values[Symbol.asyncIterator]) {
              _context.next = 37;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = _asyncIterator(values);

          case 6:
            _context.next = 8;
            return _iterator.next();

          case 8:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 12;
            return _step.value;

          case 12:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 19;
              break;
            }

            value = _value;
            this(value);

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!(!_iteratorNormalCompletion && _iterator.return)) {
              _context.next = 30;
              break;
            }

            _context.next = 30;
            return _iterator.return();

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(25);

          case 35:
            _context.next = 56;
            break;

          case 37:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 40;

            for (_iterator2 = values[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _value2 = _step2.value;
              this(_value2);
            }_context.next = 48;
            break;

          case 44:
            _context.prev = 44;
            _context.t1 = _context["catch"](40);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 48:
            _context.prev = 48;
            _context.prev = 49;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 51:
            _context.prev = 51;

            if (!_didIteratorError2) {
              _context.next = 54;
              break;
            }

            throw _iteratorError2;

          case 54:
            return _context.finish(51);

          case 55:
            return _context.finish(48);

          case 56:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 21, 25, 35], [26,, 30, 34], [40, 44, 48, 56], [49,, 51, 55]]);
  }));

  return function innerEach(_x) {
    return _ref.apply(this, arguments);
  };
}();

var innerMap = function () {
  var _ref2 = _asyncGenerator.wrap(regeneratorRuntime.mark(function _callee2(values) {
    var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _value3, value, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _value4;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!values[Symbol.asyncIterator]) {
              _context2.next = 38;
              break;
            }

            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context2.prev = 4;
            _iterator3 = _asyncIterator(values);

          case 6:
            _context2.next = 8;
            return _asyncGenerator.await(_iterator3.next());

          case 8:
            _step3 = _context2.sent;
            _iteratorNormalCompletion3 = _step3.done;
            _context2.next = 12;
            return _asyncGenerator.await(_step3.value);

          case 12:
            _value3 = _context2.sent;

            if (_iteratorNormalCompletion3) {
              _context2.next = 20;
              break;
            }

            value = _value3;
            _context2.next = 17;
            return this(value);

          case 17:
            _iteratorNormalCompletion3 = true;
            _context2.next = 6;
            break;

          case 20:
            _context2.next = 26;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](4);
            _didIteratorError3 = true;
            _iteratorError3 = _context2.t0;

          case 26:
            _context2.prev = 26;
            _context2.prev = 27;

            if (!(!_iteratorNormalCompletion3 && _iterator3.return)) {
              _context2.next = 31;
              break;
            }

            _context2.next = 31;
            return _asyncGenerator.await(_iterator3.return());

          case 31:
            _context2.prev = 31;

            if (!_didIteratorError3) {
              _context2.next = 34;
              break;
            }

            throw _iteratorError3;

          case 34:
            return _context2.finish(31);

          case 35:
            return _context2.finish(26);

          case 36:
            _context2.next = 64;
            break;

          case 38:
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context2.prev = 41;
            _iterator4 = values[Symbol.iterator]();

          case 43:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
              _context2.next = 50;
              break;
            }

            _value4 = _step4.value;
            _context2.next = 47;
            return this(_value4);

          case 47:
            _iteratorNormalCompletion4 = true;
            _context2.next = 43;
            break;

          case 50:
            _context2.next = 56;
            break;

          case 52:
            _context2.prev = 52;
            _context2.t1 = _context2["catch"](41);
            _didIteratorError4 = true;
            _iteratorError4 = _context2.t1;

          case 56:
            _context2.prev = 56;
            _context2.prev = 57;

            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }

          case 59:
            _context2.prev = 59;

            if (!_didIteratorError4) {
              _context2.next = 62;
              break;
            }

            throw _iteratorError4;

          case 62:
            return _context2.finish(59);

          case 63:
            return _context2.finish(56);

          case 64:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 22, 26, 36], [27,, 31, 35], [41, 52, 56, 64], [57,, 59, 63]]);
  }));

  return function innerMap(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var innerToArray = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(values) {
    var array;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!values[Symbol.asyncIterator]) {
              _context3.next = 7;
              break;
            }

            array = [];
            _context3.next = 4;
            return innerEach.call(function (v) {
              return array.push(v);
            }, values);

          case 4:
            return _context3.abrupt("return", array);

          case 7:
            return _context3.abrupt("return", Array.of(values));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function innerToArray(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var innerFilter = function () {
  var _ref4 = _asyncGenerator.wrap(regeneratorRuntime.mark(function _callee4(values) {
    var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _value5, value, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _value6;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!values[Symbol.asyncIterator]) {
              _context4.next = 39;
              break;
            }

            _iteratorNormalCompletion5 = true;
            _didIteratorError5 = false;
            _iteratorError5 = undefined;
            _context4.prev = 4;
            _iterator5 = _asyncIterator(values);

          case 6:
            _context4.next = 8;
            return _asyncGenerator.await(_iterator5.next());

          case 8:
            _step5 = _context4.sent;
            _iteratorNormalCompletion5 = _step5.done;
            _context4.next = 12;
            return _asyncGenerator.await(_step5.value);

          case 12:
            _value5 = _context4.sent;

            if (_iteratorNormalCompletion5) {
              _context4.next = 21;
              break;
            }

            value = _value5;

            if (!this(value)) {
              _context4.next = 18;
              break;
            }

            _context4.next = 18;
            return value;

          case 18:
            _iteratorNormalCompletion5 = true;
            _context4.next = 6;
            break;

          case 21:
            _context4.next = 27;
            break;

          case 23:
            _context4.prev = 23;
            _context4.t0 = _context4["catch"](4);
            _didIteratorError5 = true;
            _iteratorError5 = _context4.t0;

          case 27:
            _context4.prev = 27;
            _context4.prev = 28;

            if (!(!_iteratorNormalCompletion5 && _iterator5.return)) {
              _context4.next = 32;
              break;
            }

            _context4.next = 32;
            return _asyncGenerator.await(_iterator5.return());

          case 32:
            _context4.prev = 32;

            if (!_didIteratorError5) {
              _context4.next = 35;
              break;
            }

            throw _iteratorError5;

          case 35:
            return _context4.finish(32);

          case 36:
            return _context4.finish(27);

          case 37:
            _context4.next = 67;
            break;

          case 39:
            _iteratorNormalCompletion6 = true;
            _didIteratorError6 = false;
            _iteratorError6 = undefined;
            _context4.prev = 42;
            _iterator6 = values[Symbol.iterator]();

          case 44:
            if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
              _context4.next = 52;
              break;
            }

            _value6 = _step6.value;

            if (!this(_value6)) {
              _context4.next = 49;
              break;
            }

            _context4.next = 49;
            return _value6;

          case 49:
            _iteratorNormalCompletion6 = true;
            _context4.next = 44;
            break;

          case 52:
            _context4.next = 58;
            break;

          case 54:
            _context4.prev = 54;
            _context4.t1 = _context4["catch"](42);
            _didIteratorError6 = true;
            _iteratorError6 = _context4.t1;

          case 58:
            _context4.prev = 58;
            _context4.prev = 59;

            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }

          case 61:
            _context4.prev = 61;

            if (!_didIteratorError6) {
              _context4.next = 64;
              break;
            }

            throw _iteratorError6;

          case 64:
            return _context4.finish(61);

          case 65:
            return _context4.finish(58);

          case 66:
            ;

          case 67:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[4, 23, 27, 37], [28,, 32, 36], [42, 54, 58, 66], [59,, 61, 65]]);
  }));

  return function innerFilter(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var innerTake = function () {
  var _ref5 = _asyncGenerator.wrap(regeneratorRuntime.mark(function _callee5(values) {
    var i, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _value7, value, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _value8;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            i = this;

            if (!values[Symbol.asyncIterator]) {
              _context5.next = 41;
              break;
            }

            _iteratorNormalCompletion7 = true;
            _didIteratorError7 = false;
            _iteratorError7 = undefined;
            _context5.prev = 5;
            _iterator7 = _asyncIterator(values);

          case 7:
            _context5.next = 9;
            return _asyncGenerator.await(_iterator7.next());

          case 9:
            _step7 = _context5.sent;
            _iteratorNormalCompletion7 = _step7.done;
            _context5.next = 13;
            return _asyncGenerator.await(_step7.value);

          case 13:
            _value7 = _context5.sent;

            if (_iteratorNormalCompletion7) {
              _context5.next = 23;
              break;
            }

            value = _value7;

            if (i--) {
              _context5.next = 18;
              break;
            }

            return _context5.abrupt("return");

          case 18:
            _context5.next = 20;
            return value;

          case 20:
            _iteratorNormalCompletion7 = true;
            _context5.next = 7;
            break;

          case 23:
            _context5.next = 29;
            break;

          case 25:
            _context5.prev = 25;
            _context5.t0 = _context5["catch"](5);
            _didIteratorError7 = true;
            _iteratorError7 = _context5.t0;

          case 29:
            _context5.prev = 29;
            _context5.prev = 30;

            if (!(!_iteratorNormalCompletion7 && _iterator7.return)) {
              _context5.next = 34;
              break;
            }

            _context5.next = 34;
            return _asyncGenerator.await(_iterator7.return());

          case 34:
            _context5.prev = 34;

            if (!_didIteratorError7) {
              _context5.next = 37;
              break;
            }

            throw _iteratorError7;

          case 37:
            return _context5.finish(34);

          case 38:
            return _context5.finish(29);

          case 39:
            _context5.next = 70;
            break;

          case 41:
            _iteratorNormalCompletion8 = true;
            _didIteratorError8 = false;
            _iteratorError8 = undefined;
            _context5.prev = 44;
            _iterator8 = values[Symbol.iterator]();

          case 46:
            if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
              _context5.next = 55;
              break;
            }

            _value8 = _step8.value;

            if (i--) {
              _context5.next = 50;
              break;
            }

            return _context5.abrupt("return");

          case 50:
            _context5.next = 52;
            return _value8;

          case 52:
            _iteratorNormalCompletion8 = true;
            _context5.next = 46;
            break;

          case 55:
            _context5.next = 61;
            break;

          case 57:
            _context5.prev = 57;
            _context5.t1 = _context5["catch"](44);
            _didIteratorError8 = true;
            _iteratorError8 = _context5.t1;

          case 61:
            _context5.prev = 61;
            _context5.prev = 62;

            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }

          case 64:
            _context5.prev = 64;

            if (!_didIteratorError8) {
              _context5.next = 67;
              break;
            }

            throw _iteratorError8;

          case 67:
            return _context5.finish(64);

          case 68:
            return _context5.finish(61);

          case 69:
            ;

          case 70:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[5, 25, 29, 39], [30,, 34, 38], [44, 57, 61, 69], [62,, 64, 68]]);
  }));

  return function innerTake(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var innerSkip = function () {
  var _ref6 = _asyncGenerator.wrap(regeneratorRuntime.mark(function _callee6(values) {
    var i, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _value9, value, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _value10;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            i = this;

            if (!values[Symbol.asyncIterator]) {
              _context6.next = 43;
              break;
            }

            _iteratorNormalCompletion9 = true;
            _didIteratorError9 = false;
            _iteratorError9 = undefined;
            _context6.prev = 5;
            _iterator9 = _asyncIterator(values);

          case 7:
            _context6.next = 9;
            return _asyncGenerator.await(_iterator9.next());

          case 9:
            _step9 = _context6.sent;
            _iteratorNormalCompletion9 = _step9.done;
            _context6.next = 13;
            return _asyncGenerator.await(_step9.value);

          case 13:
            _value9 = _context6.sent;

            if (_iteratorNormalCompletion9) {
              _context6.next = 25;
              break;
            }

            value = _value9;

            if (!i) {
              _context6.next = 19;
              break;
            }

            --i;
            return _context6.abrupt("continue", 22);

          case 19:
            ;
            _context6.next = 22;
            return value;

          case 22:
            _iteratorNormalCompletion9 = true;
            _context6.next = 7;
            break;

          case 25:
            _context6.next = 31;
            break;

          case 27:
            _context6.prev = 27;
            _context6.t0 = _context6["catch"](5);
            _didIteratorError9 = true;
            _iteratorError9 = _context6.t0;

          case 31:
            _context6.prev = 31;
            _context6.prev = 32;

            if (!(!_iteratorNormalCompletion9 && _iterator9.return)) {
              _context6.next = 36;
              break;
            }

            _context6.next = 36;
            return _asyncGenerator.await(_iterator9.return());

          case 36:
            _context6.prev = 36;

            if (!_didIteratorError9) {
              _context6.next = 39;
              break;
            }

            throw _iteratorError9;

          case 39:
            return _context6.finish(36);

          case 40:
            return _context6.finish(31);

          case 41:
            _context6.next = 74;
            break;

          case 43:
            _iteratorNormalCompletion10 = true;
            _didIteratorError10 = false;
            _iteratorError10 = undefined;
            _context6.prev = 46;
            _iterator10 = values[Symbol.iterator]();

          case 48:
            if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
              _context6.next = 59;
              break;
            }

            _value10 = _step10.value;

            if (!i) {
              _context6.next = 53;
              break;
            }

            --i;
            return _context6.abrupt("continue", 56);

          case 53:
            ;
            _context6.next = 56;
            return _value10;

          case 56:
            _iteratorNormalCompletion10 = true;
            _context6.next = 48;
            break;

          case 59:
            _context6.next = 65;
            break;

          case 61:
            _context6.prev = 61;
            _context6.t1 = _context6["catch"](46);
            _didIteratorError10 = true;
            _iteratorError10 = _context6.t1;

          case 65:
            _context6.prev = 65;
            _context6.prev = 66;

            if (!_iteratorNormalCompletion10 && _iterator10.return) {
              _iterator10.return();
            }

          case 68:
            _context6.prev = 68;

            if (!_didIteratorError10) {
              _context6.next = 71;
              break;
            }

            throw _iteratorError10;

          case 71:
            return _context6.finish(68);

          case 72:
            return _context6.finish(65);

          case 73:
            ;

          case 74:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[5, 27, 31, 41], [32,, 36, 40], [46, 61, 65, 73], [66,, 68, 72]]);
  }));

  return function innerSkip(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

var streamAsyncGenerator = function () {
  var _ref7 = _asyncGenerator.wrap(regeneratorRuntime.mark(function _callee7() {
    var stream,
        value,
        _args7 = arguments;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            stream = this.apply(undefined, _args7);
            _context7.next = 3;
            return _asyncGenerator.await(new Promise(function (r) {
              return stream.on('readable', r);
            }));

          case 3:
            if (!true) {
              _context7.next = 11;
              break;
            }

            value = stream.read();

            if (!(value === null)) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return");

          case 7:
            _context7.next = 9;
            return value;

          case 9:
            _context7.next = 3;
            break;

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function streamAsyncGenerator() {
    return _ref7.apply(this, arguments);
  };
}();

var _marked = [applySerially].map(regeneratorRuntime.mark);

function _asyncIterator(iterable) { if (typeof Symbol === "function") { if (Symbol.asyncIterator) { var method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { return iterable[Symbol.iterator](); } } throw new TypeError("Object is not async iterable"); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function applySerially(entryVal, fns) {
  var val, length, i;
  return regeneratorRuntime.wrap(function applySerially$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          val = entryVal;
          length = fns.length - 1;
          i = 0;

        case 3:
          if (!(i < length)) {
            _context8.next = 10;
            break;
          }

          _context8.next = 6;
          return fns[i](val);

        case 6:
          val = _context8.sent;

        case 7:
          i++;
          _context8.next = 3;
          break;

        case 10:
          return _context8.abrupt("return", fns[length](val));

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked[0], this);
}

function innerChain(val, fns) {
  var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var iter = applySerially(val, fns);
  var ret = void 0;
  for (ret = { value: val, done: false }; !ret.done; ret = iter.next(ret.value)) {
    capture(ret);
  }
  capture(ret);
  return ret.value;
};

var createStreamGenerator = exports.createStreamGenerator = function createStreamGenerator(fn) {
  return streamAsyncGenerator.bind(fn);
};

var innerFirst = function innerFirst(v) {
  if (v.done) {
    throw new Error("Sequence ended before emitting a single value");
  } else {
    return v.value;
  }
};

var each = exports.each = function each(fn) {
  return innerEach.bind(fn);
};
var map = exports.map = function map(mapper) {
  return innerMap.bind(mapper);
};
var filter = exports.filter = function filter(predicate) {
  return innerFilter.bind(predicate);
};
var toArray = exports.toArray = function toArray(values) {
  return innerToArray(values);
};
var take = exports.take = function take(n) {
  return innerTake.bind(n);
};
var first = exports.first = function first(values) {
  return innerTake.call(1, values).next().then(innerFirst);
};
var skip = exports.skip = function skip(n) {
  return innerSkip.bind(n);
};
var chain = exports.chain = innerChain;
// export const compose = require('lodash/flowRight');
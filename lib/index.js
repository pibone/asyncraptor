"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = [innerMap, innerFilter, innerTakeUntil, innerSkip, applySerially].map(regeneratorRuntime.mark);

function innerEach(values) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      this(value);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function innerMap(values) {
  var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, value;

  return regeneratorRuntime.wrap(function innerMap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 3;
          _iterator2 = values[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 12;
            break;
          }

          value = _step2.value;
          _context.next = 9;
          return this(value);

        case 9:
          _iteratorNormalCompletion2 = true;
          _context.next = 5;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError2) {
            _context.next = 24;
            break;
          }

          throw _iteratorError2;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

function innerToArray(values) {
  return Array.of(values);
}

function innerFilter(values) {
  var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value;

  return regeneratorRuntime.wrap(function innerFilter$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context2.prev = 3;
          _iterator3 = values[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context2.next = 13;
            break;
          }

          value = _step3.value;

          if (!this(value)) {
            _context2.next = 10;
            break;
          }

          _context2.next = 10;
          return value;

        case 10:
          _iteratorNormalCompletion3 = true;
          _context2.next = 5;
          break;

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](3);
          _didIteratorError3 = true;
          _iteratorError3 = _context2.t0;

        case 19:
          _context2.prev = 19;
          _context2.prev = 20;

          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }

        case 22:
          _context2.prev = 22;

          if (!_didIteratorError3) {
            _context2.next = 25;
            break;
          }

          throw _iteratorError3;

        case 25:
          return _context2.finish(22);

        case 26:
          return _context2.finish(19);

        case 27:
          ;

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

function innerTakeUntil(values) {
  var i, fn, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, value;

  return regeneratorRuntime.wrap(function innerTakeUntil$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          i = 0;
          fn = this;
          _iteratorNormalCompletion4 = true;
          _didIteratorError4 = false;
          _iteratorError4 = undefined;
          _context3.prev = 5;
          _iterator4 = values[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
            _context3.next = 16;
            break;
          }

          value = _step4.value;

          if (!fn(value, i--)) {
            _context3.next = 11;
            break;
          }

          return _context3.abrupt("return");

        case 11:
          _context3.next = 13;
          return value;

        case 13:
          _iteratorNormalCompletion4 = true;
          _context3.next = 7;
          break;

        case 16:
          _context3.next = 22;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](5);
          _didIteratorError4 = true;
          _iteratorError4 = _context3.t0;

        case 22:
          _context3.prev = 22;
          _context3.prev = 23;

          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }

        case 25:
          _context3.prev = 25;

          if (!_didIteratorError4) {
            _context3.next = 28;
            break;
          }

          throw _iteratorError4;

        case 28:
          return _context3.finish(25);

        case 29:
          return _context3.finish(22);

        case 30:
          ;

        case 31:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[5, 18, 22, 30], [23,, 25, 29]]);
}

function innerTakePredicate(val, n) {
  var i = this;
  return i >= n;
}
function innerTake(values) {
  return innerTakeUntil(innerTakePredicate.bind(this));
}

function innerSkip(values) {
  var i, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, value;

  return regeneratorRuntime.wrap(function innerSkip$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          i = this;
          _iteratorNormalCompletion5 = true;
          _didIteratorError5 = false;
          _iteratorError5 = undefined;
          _context4.prev = 4;
          _iterator5 = values[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
            _context4.next = 17;
            break;
          }

          value = _step5.value;

          if (!i) {
            _context4.next = 11;
            break;
          }

          --i;
          return _context4.abrupt("continue", 14);

        case 11:
          ;
          _context4.next = 14;
          return value;

        case 14:
          _iteratorNormalCompletion5 = true;
          _context4.next = 6;
          break;

        case 17:
          _context4.next = 23;
          break;

        case 19:
          _context4.prev = 19;
          _context4.t0 = _context4["catch"](4);
          _didIteratorError5 = true;
          _iteratorError5 = _context4.t0;

        case 23:
          _context4.prev = 23;
          _context4.prev = 24;

          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }

        case 26:
          _context4.prev = 26;

          if (!_didIteratorError5) {
            _context4.next = 29;
            break;
          }

          throw _iteratorError5;

        case 29:
          return _context4.finish(26);

        case 30:
          return _context4.finish(23);

        case 31:
          ;

        case 32:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[4, 19, 23, 31], [24,, 26, 30]]);
}

function applySerially(entryVal, fns) {
  var val, length, i;
  return regeneratorRuntime.wrap(function applySerially$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          val = entryVal;
          length = fns.length - 1;
          i = 0;

        case 3:
          if (!(i < length)) {
            _context5.next = 10;
            break;
          }

          _context5.next = 6;
          return fns[i](val);

        case 6:
          val = _context5.sent;

        case 7:
          i++;
          _context5.next = 3;
          break;

        case 10:
          return _context5.abrupt("return", fns[length](val));

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

var innerFirst = function innerFirst(v) {
  if (v.done) {
    throw new Error("Sequence ended before emitting a single value");
  } else {
    return v.value;
  }
};

function streamIterator() {
  var stream = this.apply(undefined, arguments);
  var readablePromise = new Promise(function (r) {
    return stream.on('readable', r);
  });
  return readablePromise.then(function () {
    var _ref;

    return _ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
      return this;
    }), _defineProperty(_ref, "next", function next() {
      var value = stream.read();
      return value === null ? { done: true } : { done: false, value: value };
    }), _ref;
  });
}

var createStreamIterator = exports.createStreamIterator = function createStreamIterator(fn) {
  return streamIterator.bind(fn);
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
var takeUntil = exports.takeUntil = function takeUntil(fn) {
  return innerTakeUntil.bind(fn);
};
var first = exports.first = function first(values) {
  return innerFirst(innerTake.call(1, values).next());
};
var skip = exports.skip = function skip(n) {
  return innerSkip.bind(n);
};
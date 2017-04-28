function innerEach(values) {
  for (const value of values) this(value);
}

function* innerMap(values) {
  for (const value of values) yield this(value);
}

function innerToArray(values){
  return Array.of(values);
}

function* innerFilter(values) {
  for (const value of values) {
    if (this(value))
      yield value;
  };
}

function* innerTakeUntil(values) {
  let i = 0;
  const fn = this;
  for (const value of values) {
    if (fn(value, i--)) return;
    yield value;
  };
}

function innerTakePredicate (val, n) {
  const i = this;
  return i >= n;
}
function innerTake(values) {
  return innerTakeUntil(innerTakePredicate.bind(this));
}

function* innerSkip(values) {
  let i = this;
  for (const value of values) {
    if (i) {
      --i;
      continue;
    };
    yield value;
  };
}

function* applySerially (entryVal, fns) {
  let val = entryVal;
  const length = fns.length - 1;
  for(let i = 0; i < length; i++) {
    val = yield fns[i](val);
  }
  return fns[length](val);
}

const innerFirst = (v) => {
  if (v.done) {
    throw new Error("Sequence ended before emitting a single value");
  } else {
    return v.value;
  }
};

function streamIterator(...args) {
  const stream = this(...args);
  const readablePromise = new Promise((r) => stream.on('readable', r));
  return readablePromise
    .then(() => ({
      [Symbol.iterator]() {
        return this;
      },
      next() {
        const value = stream.read();
        return value === null ? { done: true } : { done: false, value };
      },
    }));
}

export const createStreamIterator = (fn) => streamIterator.bind(fn);
export const each = (fn) => innerEach.bind(fn);
export const map = (mapper) => innerMap.bind(mapper);
export const filter = (predicate) => innerFilter.bind(predicate);
export const toArray = (values) => innerToArray(values);
export const take = (n) => innerTake.bind(n);
export const takeUntil = (fn) => innerTakeUntil.bind(fn);
export const first = (values) => innerFirst(innerTake.call(1, values).next());
export const skip = (n) => innerSkip.bind(n);

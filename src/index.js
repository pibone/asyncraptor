async function innerEach(values) {
  if (values[Symbol.asyncIterator])
    for await(const value of values) this(value);
  else
    for (const value of values) this(value);
}

async function* innerMap(values) {
  if (values[Symbol.asyncIterator])
    for await(const value of values) yield this(value);
  else {
    for (const value of values) yield this(value);
  }
}

async function innerToArray(values){
  if(values[Symbol.asyncIterator]) {
    const array = [];
    await innerEach.call ((v) => array.push(v), values);
    return array;
  } else {
    return Array.of(values);
  }
}

async function* innerFilter(values) {
  if (values[Symbol.asyncIterator]) {
    for await(const value of values) {
      if (this(value))
        yield value;
    }
  } else {
    for (const value of values) {
      if (this(value))
        yield value;
    };
  }
}

async function* innerTake(values) {
  let i = this;
  if (values[Symbol.asyncIterator]) {
    for await(const value of values) {
      if (!i--) return;
      yield value;
    }
  } else {
    for (const value of values) {
      if (!i--) return;
      yield value;
    };
  }
}

async function* innerSkip(values) {
  let i = this;
  if (values[Symbol.asyncIterator]) {
    for await(const value of values) {
      if (i) {
        --i;
        continue;
      };
      yield value;
    }
  } else {
    for (const value of values) {
      if (i) {
        --i;
        continue;
      };
      yield value;
    };
  }
}

async function* streamAsyncGenerator(...args) {
  const stream = this(...args);
  await new Promise((r) => stream.on('readable', r));
  while (true) {
    const value = stream.read();
    if (value === null) {
      return;
    }
    yield value;
  }
}

export const createStreamGenerator = (fn) => streamAsyncGenerator.bind(fn);

const innerFirst = (v) => {
  if (v.done) {
    throw new Error("Sequence ended before emitting a single value");
  } else {
    return v.value;
  }
};

export const each = (fn) => innerEach.bind(fn);
export const map = (mapper) => innerMap.bind(mapper);
export const filter = (predicate) => innerFilter.bind(predicate);
export const toArray = (values) => innerToArray(values);
export const take = (n) => innerTake.bind(n);
export const first = (values) => innerTake.call(1, values).next().then(innerFirst);
export const skip = (n) => innerSkip.bind(n);
export const chain = require('lodash/flow');
export const compose = require('lodash/flowRight');

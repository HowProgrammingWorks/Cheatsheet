'use strict';

const adder = initial => ({
  value: initial,
  add(value) {
    this.value += value;
    return this;
  }
});

const Adder = class {
  constructor(initial) {
    this.value = initial;
  }
  add(value) {
    this.value += value;
    return this;
  }
};

// Usage

{
  const v = new Adder(3).add(-9).add(12);
  console.log(v);
}

{
  const v = adder(3).add(-9).add(12);
  console.log(v);
}

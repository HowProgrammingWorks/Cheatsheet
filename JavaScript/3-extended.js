'use strict';

const listener = Parent => class extends Parent {
  constructor() {
    super();
    this.events = {};
  }
  on(name, listener) {
    const event = this.events[name];
    if (event) event.push(listener);
    else this.events[name] = [listener];
  }
  emit(name, ...data) {
    const event = this.events[name];
    if (!event) return;
    event.forEach(fn => fn(...data));
  }
};

const adder = Parent => class extends Parent {
  constructor(initial) {
    super();
    this.value = initial;
  }
  add(value) {
    this.value += value;
    return this;
  }
};

console.dir({
  listener,
  adder
});

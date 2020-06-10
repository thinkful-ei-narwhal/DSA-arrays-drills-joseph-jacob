'use strict';

const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) throw new Error('Out of Memory');
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index Error');
    }
    return memory.get(this.ptr + index);
  }

}

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(1);
  arr.push(2);
  arr.push(4);

  arr.pop();

  console.log(arr.get(1));
  console.log(arr);
}

main();

Array.SIZE_RATIO = 3;






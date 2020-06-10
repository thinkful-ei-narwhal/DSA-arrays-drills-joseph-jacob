const Memory = require('./memory');

class Array {
  constructor() {
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) throw new Error('Out of Memory')
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
  }

  push(value) {
    this._resize(this.length + 1);
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);

  console.log(arr);
}

main();

Array.SIZE_RATIO = 3;
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) throw new Error('Out of Memory')
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
  }

  push(value) {
    this._resize(this.length + 1);
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(2);
  arr.push(10);

  console.log(arr);
}

main();

Array.SIZE_RATIO = 3;
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.array.push();
    } else {
      this.array.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position === undefined || typeof position !== 'number' || this.array[position] === undefined || position <= 0) {
      this.array.length = 0;
      throw new Error();
    } else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.join('~~');
    this.array.length = 0;
    return result;
  }
};

module.exports = chainMaker;
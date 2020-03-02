const chainMaker = {
  array: [],
  getLength() {
    // throw 'Not implemented';
    return this.array.length;
  },
  addLink(value) {
    // throw 'Not implemented';
    if (value === undefined) {
      this.array.push(`( )`);
    } else {
      this.array.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position === undefined || typeof position !== 'number' || this.array[position] === undefined || position <= 0) {
      throw new Error();
    } else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    // throw 'Not implemented';
    this.array.reverse();
    return this;
  },
  finishChain() {
    // throw 'Not implemented';
    return this.array.join('~~');
  }
};

module.exports = chainMaker;
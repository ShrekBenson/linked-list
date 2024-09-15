export default class Node {

  #val;
  #next;

  constructor(val) {
    this.#val = val;
    this.#next = null;
  }

  get val() {
    return this.#val;
  }

  get next() {
    return this.#next;
  }

  set val(value) {
    this.#val = value;
  }

  set next(node) {
    this.#next = node;
  }

}
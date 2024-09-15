import Node from "./node.mjs";

export default class LinkedList {

  #head;

  constructor(val) {
    this.#head = new Node(val);
  }

  get head() {
    return this.#head;
  }

  tail() {
    let current = this.#head;    

    while (current) {        
      if (!current.next) return console.log(current.val);
      current = current.next;
    }    
  }

  append(val) {
    let current = this.#head;
    const node = new Node(val);

    while (current) {
      if (!current.next) {
        current.next = node;
        return;
      }
      current = current.next;
    }
  }

  prepend(val) {    
    const newHead = new Node(val);

    newHead.next = this.#head;
    this.#head = newHead;
  }

  insertAt(pos, val) {
    if (pos === 0) {
      return this.prepend(val);
    }

    let current = this.#head;
    let index = 1;
    const node = new Node(val);

    while (current) {
      let nextNode = current.next;
      if (index === pos) {
        current.next = node;
        node.next = nextNode;
        return;
      }
      current = current.next;
      index ++;
    }
  }

  removeAt(pos) {
    if (pos === 0) {
      return this.#head = this.#head.next;
    }

    let current = this.#head.next;
    let preCurrent = this.#head;
    let index = 1;

    while (current) {
      let postCurrent = current.next;
      if (index === pos) {
        preCurrent.next = postCurrent;        
        current.next = null;
        return;
      }      
      preCurrent = current;
      current = current.next;
      index ++;
    }
  }

  pop() {
    let current = this.#head;    

    while (current) {
      let nextNode = current.next;
      if (!nextNode.next) {
        current.next = null;
        return nextNode;
      }
      current = current.next;
    }
  }

  at(index) {
    let current = this.#head;
    let count = 0;

    while (current) {        
      count ++;
      if (count - 1 === index) return console.log(current.val);
      current = current.next;
    }
    console.log('The node is not in the list');
  }  

  contains(target) {
    let current = this.#head;    

    while (current) {        
      if (current.val === target) return true;
      current = current.next;
    }

    return false;
  }

  find(target) {
    let current = this.#head;
    let index = 0;

    while (current) {        
      if (current.val === target) return index;
      current = current.next;
      index ++;
    }

    return null;
  }

  size() {
    let current = this.#head;
    let count = 0;

    while (current) {        
      count ++;
      current = current.next;
    }
    console.log(count);
  }  

  toString() {
    let current = this.#head;    

    while (current) {        
      process.stdout.write(`(${current.val}) -> `);
      current = current.next;
    }
    console.log('null');
  }

}
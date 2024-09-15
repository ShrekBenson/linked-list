import LinkedList from "./linked-list.mjs";

/**
 * @param {any} head - The LinkedList class needs a head of any data type
 */
const list = new LinkedList("dog");

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString();
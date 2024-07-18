const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.wantsToBeDone = false
  }
  getDone() {
    if(this.priorityLevel < 5) {
      this.wantsToBeDone = true
    }
  }
}


class ToDoList {
  #listOfItems = [];
  
  static #allLists = []
  constructor(name) {
    this.id = getId();
    this.name = name;
    this.numOfItems = 0
    ToDoList.#allLists.push(this);
  }
  createItem(description, priorityLevel) {
    const newItem = new ToDoItem(description, priorityLevel);
    this.#listOfItems.push(newItem)
    return newItem
  }
  getItems() {
    return [...this.#listOfItems]
  }
  getCompletedCount() {
    let completed = 0
    for(let i = 0; i < this.#listOfItems.length; i++) {
      if(this.#listOfItems[i].isDone) completed++
    }
    return completed
  }
  static list() {
    return [...ToDoList.#allLists]
  }
  static findBy(id) {
    const found = ToDoList.#allLists.filter((list) => list.id === id)
    return found[0]
  }
  removeItem(id) {
    this.#listOfItems.splice(this,this.#listOfItems.findIndex((item) => item.id === id), 1);
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};
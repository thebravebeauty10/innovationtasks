const student = {
  name: "Mounika",
  age: 18,
  displayInfo() {
    return `${this.name}, ${this.age}`;
  }
};
console.log(student.displayInfo());
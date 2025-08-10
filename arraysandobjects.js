const animals = ["Dog", "Cat", "Elephant", "Tiger"];
const [firstAnimal, secondAnimal, , fourthAnimal] = animals;
console.log(firstAnimal);
console.log(secondAnimal);
console.log(fourthAnimal);

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publish: {
    year: 1925,
    country: "USA"
  }
};

const { title, author } = book;
console.log(title, author);

const { publish: { year, country } } = book;
console.log(year, country);

console.log(book.title);
console.log(book["author"]);

const detailKey = "year";
console.log(book.publish[detailKey]);

const smartphone = { brand: "Apple", model: "iPhone 15", price: 80000 };

for (let key in smartphone) {
  console.log(key, ":", smartphone[key]);
}

Object.keys(smartphone).forEach(key => {
  console.log(key, ":", smartphone[key]);
});

Object.entries(smartphone).forEach(([key, value]) => {
  console.log(key, ":", value);
});
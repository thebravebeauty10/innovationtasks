const movies = [
  { id: 1, title: "Inception", info: { director: "Christopher Nolan", year: 2010 } },
  { id: 2, title: "Interstellar", info: { director: "Christopher Nolan", year: 2014 } },
  { id: 3, title: "The Matrix", info: { director: "The Wachowskis", year: 1999 } }
];

console.log(movies[0].title);
console.log(movies[2].info.director);

function addAll(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
console.log(addAll(5, 10, 15, 20));

const list1 = ["A", "B", "C"];
const list2 = ["D", "E", "F"];
const combinedList = [...list1, ...list2];
console.log(combinedList);

const user = { id: 301, name: "Sophia", status: "Active" };
const copiedUser = { ...user };
console.log(copiedUser);

function showMovie({ title, info: { director, year } }) {
  console.log(`Title: ${title}, Director: ${director}, Year: ${year}`);
}
showMovie(movies[0]);
showMovie(movies[1]);
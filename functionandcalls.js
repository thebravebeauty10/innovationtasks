const director1 = { name: "Christopher Nolan" };
const director2 = { name: "The Wachowskis" };

function announceMovie(movie, year) {
  console.log(`${this.name} presents "${movie}" released in ${year}`);
}

announceMovie.call(director1, "Inception", 2010);
announceMovie.call(director2, "The Matrix", 1999);

announceMovie.apply(director1, ["Interstellar", 2014]);
announceMovie.apply(director2, ["The Matrix Reloaded", 2003]);

const boundAnnouncement = announceMovie.bind(director1);
boundAnnouncement("Tenet", 2020);
boundAnnouncement("Oppenheimer", 2023);
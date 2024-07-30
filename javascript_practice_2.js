const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [...game.players[0]];
console.log(players1);

const players2 = [...game.players[1]];
console.log(players2);

const [goalKeeper1, ...fieldPlayers1] = [...game.players[0]];

game.team1goalKeeper = goalKeeper1;
game.team1OutfieldPlayers = fieldPlayers1;
console.log(game.team1goalKeeper, fieldPlayers1);

console.log(
  "------------------------all Players--------------------------------"
);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log(
  "------------------------all Players of team 1 after substitues--------------------------------"
);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

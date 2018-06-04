'use strict';

const fs = require('fs');
const race = PromiseRace();
race.start();

function PromiseRace() {

  function setupRace(teams) {
    const cars = [];
    for (let j = 0; j < teams.length; j++) {
      cars.push(new Promise(function (resolve, reject) {
        setTimeout(resolve, Math.round(Math.random() * 10) + 1, teams[j]);
      }));
    }
    return cars;
  }

  return {
    start: () => {
      const teams = JSON.parse(fs.readFileSync('./wacky_cars.json'));

      let races = [];
      for (let i = 0; i < 100; i++) {
        races[i] = setupRace(teams);
      }

      let leaderboard = [];
      let numberOfRaces = 0;

      races.forEach((race) => {
        Promise.race(race)
        .then((winner) => {
          console.log("Race finished the winner was " + winner.team + " driving " + winner.car + "!");
          if (leaderboard[winner.team] === undefined) {
            leaderboard[winner.team] = 0;
          }
          leaderboard[winner.team]++;
          numberOfRaces++;

          if (numberOfRaces === 100) {
            printLeaderboard(leaderboard);
          }
        })
        .catch((error) => console.log('Failed to finish the race!', error));
      });

      function printLeaderboard(leaderboard) {
        let topLeaderboard = [];

        for (let team in leaderboard) {
          if (leaderboard.hasOwnProperty(team)) {
            topLeaderboard.push([team, leaderboard[team]]);
          }
        }

        topLeaderboard.sort(function(a, b) {
          a = a[1];
          b = b[1];

          return a < b ? 1 : (a > b ? -1 : 0);
        });

        console.log("-----------------------");
        console.log("Wacky Races Leaderboard");
        console.log("-----------------------");

        for (var i = 0; i < topLeaderboard.length; i++) {
          let team = topLeaderboard[i][0];
          let wins = topLeaderboard[i][1];
          console.log("#" + i + " " + team + " Wins " + wins);
        }
      }
    }
  }
}
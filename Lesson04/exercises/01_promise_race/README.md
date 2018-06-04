# Promisify Wacky Races

Imagine we have a number of cars that are competing in the Wacky Races...

| Team | Car |
|------|-----|
| The Slag Brothers | The Boulder Mobile |
| Rufus Ruffcut and Sawtooth | The Buzzwagon |
| The Ant Hill Mob | The Bulletproof Bomb |
| The Gruesome Twosome | The Creepy Coupe |
| Penelope Pitstop | The Compact Pussycat |
| The Red Max | The Crimson Haybaler |
| Professor Pat Pending | The Convert-A-Car |
| Luke and Blubber Bear | The Arkansas Chuggabug |
| Peter Perfect | The Turbo Terrific |
| Sergeant Blast and Private Meekly | The Army Surplus Special |
| Dick Dastardly and Muttley | The Mean Machine |

Each of these cars has a team and car with a name. Each car takes anywhere between 0 and 1s to complete the race.

We want to race them against each other by using our Promisify.race call

Using Promise.race(cars) figure out who the winner is after 100 races are determined.

In this task you will need to...
* Read the names of the teams and cars from the file `wacky_cars.json`
* Setup the cars so that they will complete the race in an random amount of time from 0-1 seconds
* Use the Promise.race function to send the cars in a race against each other
* Keep a tally of who wins each race and printout a leaderboard of winners as follows:

Please see the `sample-output.txt` file for an example of what your sample output could look like.













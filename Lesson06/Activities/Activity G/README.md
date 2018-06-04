# Exercise: Football Simulation

Imagine you are a developer for an AAA studio that produces video games such as FIFA.

What you've been tasked with is to determine what the valid interactions are for our football player when they are either, OFF_BALL, ON_BALL, NEAR_BALL.

We can characterise each state as follows:

* ON_BALL: The player is in control of the football at their feet
* OFF_BALL: The player does not have control of the ball
* NEAR_BALL: The player is within tackling distance of an opposing player or the ball itself
* SELECTED: The player is currently under-selection

In the states they can perform the following actions:

*ON_BALL*

- Pass
- Shoot
- Dribble (in any direction)
- Perform a trick

*OFF_BALL*

- Move (in any direction)
- Close down player

*NEAR_BALL*

- Soft Tackle
- Sliding Tackle
- Header

Your task is to write code that will output all of the different possibilities that a player can have when they are in a particular state.

You should use the State pattern to demonstrate this concept...



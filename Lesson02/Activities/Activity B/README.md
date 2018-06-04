# Exercise: EventEmitter TrafficLights

Implement a TrafficLights class that controls the state of a car using the EventEmitter class, showing the transition of states from a GREEN light to a RED light.

When the light is set to GREEN then the console should display `Lights are green` and the car should change state to `moving`.

We should then set the lights to AMBER and finally RED.

When the lights are set to AMBER the car should be in a state of `slowing`

When the lights are set to RED the car should be in a state of `stopped`

If we execute the following function call:

```
startTraffic("move");
```

If you execute the following command:

```
node Ch02_eventemitter_events_ex6.js
```

You should see the following output:

```
Car is on the move!
Lights are green
Lights are amber
Car is slowing down!
Lights are red
Car is stopped!
```

TIP: Your TrafficLights class can inherit from EventEmitter so that you can listen to events to drive a change of state of the car.
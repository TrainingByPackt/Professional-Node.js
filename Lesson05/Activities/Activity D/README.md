# Exercise 7: Multiplexing Species

Your task in this exercise, is to take a number of different animal objects in an Animal stream and filter then into numerous category streams such as Reptiles, Amphibians and Mammals.

This will be done by applying the following rules:

## Reptiles
* Are vertebrates: **Yes**
* Birth type: **Eggs**
* Skin-type: **Scales**
* Can regulate body heat? - **No**

## Amphibians
* Are vertebrates: **Yes**
* Birth type: **Eggs**
* Can regulate body heat? - **No**
* Skin-type: **Moist** | **No Scales**

## Mammals
* Are vertebrates: **Yes**
* Birth type: **Live Young**
* Skin-type: **Hairy** | **No Scales**
* Can regulate body heat? - **Yes**

Example objects:

Lizard

```
{
    "vertebrate": true,
    "birthType": "Eggs",
    "skinType": "Scales",
    "regulateBodyHeat": false
}
```

Frog

```
{
    "vertebrate": true,
    "birthType": "Eggs",
    "skinType": "Moist",
    "regulateBodyHeat": false
}
```

Whale

```
{
    "vertebrate": true,
    "birthType": "Live Young",
    "skinType": "Hairy",
    "regulateBodyHeat": true
}
```

_Note_: Are hairy when they are young!

In the output, each stream output for the three types, Reptile, Amphibian and Mammals should output the correct corresponding animal.
So Lizard should print in the Reptile Stream, Frog in the Amphibian Strean and Whale in the Mammal Stream.

You will need to write appropriate rules in the de-multiplexer to accomplish this.



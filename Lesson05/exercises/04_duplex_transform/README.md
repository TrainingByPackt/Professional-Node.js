# Duplex - Enigma

The Enigma machine was a series of electro-mechanical rotor cipher machines that developed in the early-to-mid 20th century. Famously Prof. Alan Turing used such a device to decode the transmissions sent by the Germans during WWII.

In this exercise you will use the cipher key we provide to decipher the following phrase:

 ```
 xfmdpnf up uif cfbvujgvm xpsme pg tusfbnt
 ```
 
 The cipher you will need is as follows:
 
 ```
    function decipherLetter(letter) {
      let key = {
        'a': 'z', 'b': 'a', 'c': 'b', 'd': 'c', 'e': 'd', 'f': 'e', 'g': 'f', 'h': 'g', 'i': 'h', 'j': 'i', 'k': 'j', 'l': 'k', 'm': 'l', 'n': 'm', 'o': 'n', 'p': 'o', 'q': 'p', 'r': 'q', 's': 'r', 't': 's', 'u': 't', 'v': 'u', 'w': 'v', 'x': 'w', 'y': 'x', 'z': 'y', ' ': ' '
      };
      return key[letter];
    }
 ```
 
 Use a duplex stream where your input is each letter from the sentence.
 
 The output of the stream is each letter which should produce a deciphered sentence which you can read.
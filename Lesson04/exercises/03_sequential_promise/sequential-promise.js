'use strict';

const sequentialPalindromes = SequentialPalindromes();
sequentialPalindromes.find();

function SequentialPalindromes() {
  const phrases = [
    'Fizz',
    'Buzz',
    'Aibohphobia',
    'Node is awesome',
    'Hannah',
    'Javascript is asynchronous by nature',
    'Nurses run',
    'Red Lorry Yellow Lorry',
    'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'
  ];

  function palindrome(phrase, index) {
    return () => {
      const lowerRegStr = phrase.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      const reverseStr = lowerRegStr.split('').reverse().join('');
      return {
        'index': index,
        'isPalindrome': reverseStr === lowerRegStr
      };
    };
  }

  return {
    find: () => {
      let tasks = [];
      let results = {};

      for (let i = 0; i < phrases.length; i++) {
        tasks[i] = palindrome(phrases[i], i);
      }

      let promise = Promise.resolve();
      tasks.forEach(task => {
        promise = promise.then(() => {
          let result = task();
          results[result.index] = result.isPalindrome;
          return results;
        });
      });
      promise.then(() => {
        console.log('-------------------');
        console.log('Palindrome Results');
        console.log('-------------------');
        for (let index in results) {
          console.log("Palindrome @ index " + index + " - is Palindrome? " + results[index] + " - " + phrases[index]);
        }
      });
    }
  }
}
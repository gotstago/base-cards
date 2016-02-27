import {Injectable} from 'angular2/core';

export class Card {
  constructor(
      public id: number, 
      public name: string,
      public rank?: string, 
      public suit?: string
      ){ }
}

@Injectable()
export class CardService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Card(1, 'Ace of Hearts','1','h'),
  new Card(2, 'Two of Hearts','2','h'),
  new Card(3, 'Three of Hearts','3','h'),
  new Card(4, 'Four of Hearts','4','h'),
  new Card(5, 'Five of Hearts','5','h'),
  new Card(6, 'Six of Hearts','6','h'),
  new Card(7, 'Seven of Hearts','7','h'),
  new Card(8, 'Eight of Hearts','8','h'),
  new Card(9, 'Nine of Hearts','9','h'),
  new Card(10, 'Ten of Hearts','T','h'),
  new Card(11, 'Jack of Hearts','J','h'),
  new Card(12, 'Queen of Hearts','Q','h'),
  new Card(13, 'King of Hearts','K','h'),
  new Card(14, 'Ace of Spades','1','s'),
  new Card(15, 'Two of Spades','2','s'),
  new Card(16, 'Three of Spades','3','s'),
  new Card(17, 'Four of Spades','4','s'),
  new Card(18, 'Five of Spades','5','s'),
  new Card(19, 'Six of Spades','6','s'),
  new Card(20, 'Seven of Spades','7','s'),
  new Card(21, 'Eight of Spades','8','s'),
  new Card(22, 'Nine of Spades','9','s'),
  new Card(23, 'Ten of Spades','T','s'),
  new Card(24, 'Jack of Spades','J','s'),
  new Card(25, 'Queen of Spades','Q','s'),
  new Card(26, 'King of Spades','K','s'),
  new Card(27, 'Ace of Diamonds','1','d'),
  new Card(28, 'Two of Diamonds','2','d'),
  new Card(29, 'Three of Diamonds','3','d'),
  new Card(30, 'Four of Diamonds','4','d'),
  new Card(31, 'Five of Diamonds','5','d'),
  new Card(32, 'Six of Diamonds','6','d'),
  new Card(33, 'Seven of Diamonds','7','d'),
  new Card(34, 'Eight of Diamonds','8','d'),
  new Card(35, 'Nine of Diamonds','9','d'),
  new Card(36, 'Ten of Diamonds','T','d'),
  new Card(37, 'Jack of Diamonds','J','d'),
  new Card(38, 'Queen of Diamonds','Q','d'),
  new Card(39, 'King of Diamonds','K','d'),
  new Card(40, 'Ace of Clubs','1','c'),
  new Card(41, 'Two of Clubs','2','c'),
  new Card(42, 'Three of Clubs','3','c'),
  new Card(43, 'Four of Clubs','4','c'),
  new Card(44, 'Five of Clubs','5','c'),
  new Card(45, 'Six of Clubs','6','c'),
  new Card(46, 'Seven of Clubs','7','c'),
  new Card(47, 'Eight of Clubs','8','c'),
  new Card(48, 'Nine of Clubs','9','c'),
  new Card(49, 'Ten of Clubs','T','c'),
  new Card(50, 'Jack of Clubs','J','c'),
  new Card(51, 'Queen of Clubs','Q','c'),
  new Card(52, 'King of Clubs','K','c'),
];

let promise = Promise.resolve(mock);

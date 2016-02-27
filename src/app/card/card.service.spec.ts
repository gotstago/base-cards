import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {CardService} from './card.service';

describe('CardService', () => {

  beforeEachProviders(() => [CardService]);

  it('should get all cards', inject([CardService], (cardService:CardService) => {
    cardService.getAll().then(cards => expect(cards.length).toBe(3));
  }));

  it('should get one card', inject([CardService], (cardService:CardService) => {
    cardService.get(1).then(card => expect(card.id).toBe(1));
  }));

});

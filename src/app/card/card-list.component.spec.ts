import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {CardListComponent} from './card-list.component';
import {Card, CardService} from './card.service';

class MockCardService {
  getAll() { return Promise.resolve([new Card(1, 'one')]); }
}

describe('CardListComponent', () => {

  beforeEachProviders(() => [
    provide(CardService, {useClass: MockCardService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(CardListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});

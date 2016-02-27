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
import {CardDetailComponent} from './card-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Card, CardService} from './card.service';

class MockCardService {
  get() { return Promise.resolve(new Card(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('CardDetailComponent', () => {

  beforeEachProviders(() => [
    provide(CardService, {useClass: MockCardService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(CardDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});

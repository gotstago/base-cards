import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CardListComponent} from './card-list.component';
import {CardDetailComponent} from './card-detail.component';
import {CardService} from './card.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [CardService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path:'/', name: 'CardList', component: CardListComponent, useAsDefault: true},
  {path:'/:id', name: 'CardDetail', component: CardDetailComponent}
])
export class CardRoot {
  constructor() {}
}

import {Component, OnInit} from 'angular2/core';
import {Card, CardService} from './card.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { CardListFilterPipe } from '../pipes/my-new-pipe/card-list-filter-pipe';

@Component({
  templateUrl: 'app/card/card-list.component.html',
  styleUrls: ['app/card/card-list.component.css'],
  pipes: [
    CardListFilterPipe
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class CardListComponent implements OnInit {
  cards: Card[];
  filter: string;
  constructor(
    private _service: CardService) {
        this.filter = 'tarabish';
    }
  ngOnInit() {
    this._service.getAll().then(cards => this.cards = cards);
  }
}

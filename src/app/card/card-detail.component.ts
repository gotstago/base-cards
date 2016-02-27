import {Component, OnInit} from 'angular2/core';
import {Card, CardService} from './card.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/card/card-detail.component.html',
  styleUrls: ['app/card/card-detail.component.css']
})
export class CardDetailComponent implements OnInit, CanDeactivate {

  card: Card;
  editName: string;

  constructor(
    private _service: CardService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.get(id).then(card => {
      if (card) {
        this.editName = card.name;
        this.card = card;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.card || this.card.name === this.editName) {
      return true;
    }
    //we will only get here if someone navigates without using buttons
    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  finished() {
    this.editName = this.card.name;
    this.gotoList();
  }

  cancel() {
    this.editName = this.card.name;
    this.gotoList();
  }

  save() {
    this.card.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['CardList']);
  }
}

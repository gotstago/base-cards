import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { CardRoot } from './card/card-root.component';


@Component({
  selector: 'sam-two-app',
  providers: [],
  templateUrl: 'app/sam-two.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
    {path:'/card/...', name: 'CardRoot', component: CardRoot}
])
export class SamTwoApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}

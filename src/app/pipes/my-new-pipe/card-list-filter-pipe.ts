import {Pipe, PipeTransform} from 'angular2/core';
import { Card } from '../../card/card.service.ts';

@Pipe({
  name: 'filterCards'
})
export class CardListFilterPipe implements PipeTransform {

  transform(list: Card[], filterType?: string[]): Card[] {
    if (!list || !filterType) {
      return list;
    }

    switch (filterType[0]) {
      case 'tarabish':
        return list.filter((card: Card) => {
          return (['2','3','4','5'].indexOf(card.rank) === -1);
        });
      default:
        return list;
    }
  }

}

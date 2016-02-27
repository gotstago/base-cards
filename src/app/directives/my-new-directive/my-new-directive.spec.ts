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
import {provide, Component} from 'angular2/core';
import {MyNewDirective} from './my-new-directive';


@Component({
  selector: 'test-component',
  template: `<div my-new-directive></div>`
})
class TestComponent {}

describe('MyNewDirective Directive', () => {

  beforeEachProviders((): any[] => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});

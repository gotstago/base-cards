import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {SamTwoApp} from '../app/sam-two';

beforeEachProviders(() => [SamTwoApp]);

describe('App: SamTwo', () => {
  it('should have the `defaultMeaning` as 42', inject([SamTwoApp], (app: SamTwoApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([SamTwoApp], (app: SamTwoApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});


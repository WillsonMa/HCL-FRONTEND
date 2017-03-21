/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HttpPipe } from './http.pipe';

describe('HttpPipe', () => {
  it('changes URLs to http', () => {
    const pipe = new HttpPipe();
		expect(pipe.transform('http://google.com')).toBe('http://google.com');
		expect(pipe.transform('https://google.com')).toBe('http://google.com');
  });
});

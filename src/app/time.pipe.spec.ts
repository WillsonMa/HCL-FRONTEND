/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
	it('formats time (change to 12-hour and remove seconds)', () => {
		const pipe = new TimePipe();
		expect(pipe.transform('00:00:00')).toBe('12:00 AM');
		expect(pipe.transform('08:00:00')).toBe('8:00 AM');
		expect(pipe.transform('11:59:00')).toBe('11:59 AM');
		expect(pipe.transform('12:00:00')).toBe('12:00 PM');
		expect(pipe.transform('17:00:00')).toBe('5:00 PM');
		expect(pipe.transform('23:59:00')).toBe('11:59 PM');
	});
});

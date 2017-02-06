import { getAvailabilityStatus } from './utils';

describe('utils', () => {
	it('getAvailabilityStatus', () => {
		expect(getAvailabilityStatus([{
			isAvailable: true, name: 'service01'
		}, {
			isAvailable: true, name: 'service02'
		}, {
			isAvailable: false, name: 'service03'
		}], [
			'service01', 'service02'
		])).toBe('all');

		expect(getAvailabilityStatus([{
			isAvailable: true, name: 'service01'
		}, {
			isAvailable: false, name: 'service02'
		}, {
			isAvailable: false, name: 'service03'
		}], [
			'service01', 'service02'
		])).toBe('some');

		expect(getAvailabilityStatus([{
			isAvailable: false, name: 'service01'
		}, {
			isAvailable: false, name: 'service02'
		}, {
			isAvailable: false, name: 'service03'
		}], [
			'service01', 'service02'
		])).toBe('none');
	});
});

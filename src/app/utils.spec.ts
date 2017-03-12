import { getAvailabilityStatus } from './utils';

describe('utils', () => {
	it('getAvailabilityStatus', () => {
		expect(getAvailabilityStatus([{
			isAvailable: true, service: { serviceCode: 'service01' }
		}, {
			isAvailable: true, service: { serviceCode: 'service02' }
		}, {
			isAvailable: false, service: { serviceCode: 'service03' }
		}], [
			'service01', 'service02'
		])).toBe('all');

		expect(getAvailabilityStatus([{
			isAvailable: true, service: { serviceCode: 'service01' }
		}, {
			isAvailable: false, service: { serviceCode: 'service02' }
		}, {
			isAvailable: false, service: { serviceCode: 'service03' }
		}], [
			'service01', 'service02'
		])).toBe('some');

		expect(getAvailabilityStatus([{
			isAvailable: false, service: { serviceCode: 'service01' }
		}, {
			isAvailable: false, service: { serviceCode: 'service02' }
		}, {
			isAvailable: false, service: { serviceCode: 'service03' }
		}], [
			'service01', 'service02'
		])).toBe('none');
	});
});

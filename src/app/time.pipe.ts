import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'time'
})
export class TimePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		const parts = value.split(':');
		const hours = parts[0];
		const displayHours = hours > 12
			? hours % 12
			: (hours >= 10
				? hours
				: (hours === '00'
					? 12
					: hours[1]));

		const minutes = parts[1];
		const meridiem = hours >= 12 ? 'PM' : 'AM';
		return `${displayHours}:${minutes} ${meridiem}`;
	}
}

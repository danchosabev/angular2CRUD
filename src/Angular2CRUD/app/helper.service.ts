import { Injectable } from '@angular/core';

import { SelectItem } from 'primeng/primeng';

@Injectable()
export class HelperService {
	newGuid(): string {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
	}

	getYears(isSelect?: boolean): SelectItem[] {
		let currYear = new Date().getFullYear(),
			years: SelectItem[] = [];

		if (isSelect) {
			years.push({ label: 'Select...', value: null});
		}
		for (var i = currYear, count = currYear - 100; i > count; i--) {
			years.push({ label: i.toString(), value: i });
		}
		return years;
	}
}
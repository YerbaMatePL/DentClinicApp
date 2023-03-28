import { timeSlots } from './constants';

let currentDays: Date[] = [];

let day = new Date();

const getCurrentDays = () => {
	for (let i = currentDays.length; i < 5; i++) {
		let nextDay = new Date(day);
		!currentDays.includes(nextDay) && currentDays.push(nextDay);
		day.setDate(day.getDate() + 1);
	}
};

export const getCurrentCalendar = () => {
	getCurrentDays();

	let formattedDates: string[];

	const formatDate = (currentDaysArr: Date[] | []) => {
		formattedDates = currentDaysArr.map((day) =>
			day.toISOString().slice(0, 10)
		);
	};

	formatDate(currentDays);

	const currentDates = timeSlots.filter((timeSlot) =>
		formattedDates.includes(new Date(timeSlot.data).toISOString().slice(0, 10))
	);

	return currentDates;
};

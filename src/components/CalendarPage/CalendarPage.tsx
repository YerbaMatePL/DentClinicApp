import style from './CalendarPage.module.css';
import { hours } from './constants';

const CalendarPage = () => {
	const timeSlots = [
		{
			data: '2023-03-25',
			slots: [
				{ start: '8:00', isBooked: true },
				{ start: '9:00', isBooked: false },
				{ start: '10:00', isBooked: false },
				{ start: '11:00', isBooked: true },
				{ start: '12:00', isBooked: true },
				{ start: '13:00', isBooked: false },
				{ start: '14:00', isBooked: true },
				{ start: '15:00', isBooked: true },
				{ start: '16:00', isBooked: true },
				{ start: '17:00', isBooked: true },
				{ start: '18:00', isBooked: false },
			],
		},
		{
			data: '2023-03-26',
			slots: [
				{ start: '8:00', isBooked: false },
				{ start: '9:00', isBooked: true },
				{ start: '10:00', isBooked: true },
				{ start: '11:00', isBooked: false },
				{ start: '12:00', isBooked: true },
				{ start: '13:00', isBooked: false },
				{ start: '14:00', isBooked: true },
				{ start: '15:00', isBooked: true },
				{ start: '16:00', isBooked: true },
				{ start: '17:00', isBooked: true },
				{ start: '18:00', isBooked: false },
			],
		},
		{
			data: '2023-03-27',
			slots: [
				{ start: '8:00', isBooked: false },
				{ start: '9:00', isBooked: true },
				{ start: '10:00', isBooked: true },
				{ start: '11:00', isBooked: false },
				{ start: '12:00', isBooked: true },
				{ start: '13:00', isBooked: false },
				{ start: '14:00', isBooked: true },
				{ start: '15:00', isBooked: true },
				{ start: '16:00', isBooked: true },
				{ start: '17:00', isBooked: true },
				{ start: '18:00', isBooked: false },
			],
		},
		{
			data: '2023-03-28',
			slots: [
				{ start: '8:00', isBooked: false },
				{ start: '9:00', isBooked: true },
				{ start: '10:00', isBooked: true },
				{ start: '11:00', isBooked: false },
				{ start: '12:00', isBooked: true },
				{ start: '13:00', isBooked: false },
				{ start: '14:00', isBooked: true },
				{ start: '15:00', isBooked: false },
				{ start: '16:00', isBooked: true },
				{ start: '17:00', isBooked: true },
				{ start: '18:00', isBooked: false },
			],
		},
		{
			data: '2023-03-29',
			slots: [
				{ start: '8:00', isBooked: true },
				{ start: '9:00', isBooked: true },
				{ start: '10:00', isBooked: true },
				{ start: '11:00', isBooked: false },
				{ start: '12:00', isBooked: true },
				{ start: '13:00', isBooked: false },
				{ start: '14:00', isBooked: true },
				{ start: '15:00', isBooked: true },
				{ start: '16:00', isBooked: false },
				{ start: '17:00', isBooked: false },
				{ start: '18:00', isBooked: false },
			],
		},
	];

	return (
		<div className={style.container}>
			<div className={style.col}>
				<div className={`${style.tableHeader} ${style.cell}`}>Godziny</div>
				{hours.map((hour) => (
					<div className={`${style.cell} ${style.hour}`}>{hour}</div>
				))}
			</div>
			{timeSlots.map((day) => (
				<div className={style.col}>
					<div className={`${style.tableHeader} ${style.cell}`}>{day.data}</div>
					{day.slots.map((slot) => (
						<div
							className={`${style.cell} ${
								slot.isBooked ? `${style.booked}` : `${style.free}`
							}`}
						>
							{slot.isBooked ? 'Zarezerwowany' : 'Wolny'}
						</div>
					))}
				</div>
			))}
		</div>
	);
};
export default CalendarPage;

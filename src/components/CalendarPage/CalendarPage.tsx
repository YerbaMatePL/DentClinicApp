import style from './CalendarPage.module.css';
import { days, hours, months } from './constants';
import { getDataForTheSchedule } from './helpers';

const CalendarPage = () => {
	const currentWeek = getDataForTheSchedule();

	return (
		<div className={style.container}>
			<div className={style.col}>
				<div className={`${style.tableHeader} ${style.cell}`}>Godziny</div>
				{hours.map((hour) => (
					<div key={hour} className={`${style.cell} ${style.hour}`}>
						{hour}
					</div>
				))}
			</div>
			{currentWeek.map((day) => (
				<div key={day.date} className={style.col}>
					<div className={`${style.tableHeader} ${style.cell}`}>
						<span>{days[new Date(day.date).getDay()]}</span>
						<p>
							{new Date(day.date).getDate()} {''}{' '}
							{months[new Date(day.date).getMonth()]}
						</p>
					</div>
					{day.slots.map((slot) => (
						<div
							key={slot.start}
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

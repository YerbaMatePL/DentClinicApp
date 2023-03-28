import style from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const goToCalendarPage = () => {
		navigate('/kalendarz');
	};
	return (
		<header>
			<div className={style.heroImg}>
				<div className={style.heroText}>
					<h1>
						<span>Dent</span>Clinic
					</h1>
					<p>
						Witaj w klinice stomatologicznej - w miejscu, gdzie leczymy z pasją
					</p>
					<button
						className={style.btnMakeAnAppointment}
						onClick={goToCalendarPage}
					>
						Umów się na wizytę
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

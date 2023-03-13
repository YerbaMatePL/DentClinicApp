import style from './Header.module.css';

const Header = () => {
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
					<button className={style.btnMakeAnAppointment}>Umów się na wizytę</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

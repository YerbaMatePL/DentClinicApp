import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import './NavBar.css';
import { useState } from 'react';

const NavBar = () => {
	const [colorChange, setColorchange] = useState(true);
	
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);

	return (
		<nav
			className={`${style.nav} ${
				colorChange ? style.navWithBackground : style.transparent
			}`}
		>
			<div className={style.logo}>
				<NavLink to='/DentClinicApp/' title='Strona główna'>
					<p>
						<span>Dent</span>Clinic
					</p>
				</NavLink>
			</div>
			<div className={style.navLinks}>
				<NavLink to='logowanie'>Logowanie</NavLink>
				<NavLink to='rejestracja'>Rejestracja</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;

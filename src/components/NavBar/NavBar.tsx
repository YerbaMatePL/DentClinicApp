import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import './NavBar.css';

const NavBar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.logo}>
				<NavLink to='/DentClinicApp/' title='Strona główna'>
					<p>
						<span>Dent</span>Clinic
					</p>
				</NavLink>
			</div>
			<div className={style.navLinks}>
				<NavLink to='login'>Logowanie</NavLink>
				<NavLink to='register'>Rejestracja</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;

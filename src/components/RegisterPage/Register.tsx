import { Link } from 'react-router-dom';
import style from './Register.module.css';

export const Register = () => {
	return (
		<div className={style.wrapper}>
			<form>
				<h1>Zarejestruj się!</h1>
				<div className={style.formBox}>
					<input type='text' id='username' required />
					<label htmlFor='username'>Nazwa użytkownika</label>
				</div>
				<p className={style.errorText}>error</p>
				<div className={style.formBox}>
					<input type='email' id='email' required />
					<label htmlFor='email'>Email</label>
				</div>
				<p className={style.errorText}>error</p>
				<div className={style.formBox}>
					<input type='password' id='password' required />
					<label htmlFor='password'>Hasło</label>
				</div>
				<p className={style.errorText}>error</p>
				<div className={style.formBox}>
					<input type='password' id='password2' required />
					<label htmlFor='password2'>Powtórz hasło</label>
				</div>
				<p className={style.errorText}>Tu coś jest żle wpisane</p>
				<button type='submit' className={style.btn}>
					Założ konto
				</button>
			</form>
			<div className={style.loginContainer}>
				<p>
					Masz już konto?&nbsp; <Link to='../login'>Zaloguj się</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;

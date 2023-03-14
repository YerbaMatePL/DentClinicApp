import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './Register.module.css';

interface FormInitialValues {
	username: string;
	email: string;
	password: string;
	repeatedPassword: string;
}

const initialValues: FormInitialValues = {
	username: '',
	email: '',
	password: '',
	repeatedPassword: '',
};

const onSubmit = (values: FormInitialValues, { resetForm }: any) => {
	alert(JSON.stringify(values, null, 2));
	resetForm(initialValues);
};

const validationSchema = Yup.object({
	username: Yup.string().required('Pole jest wymagane. Uzupełnij dane.'),
	email: Yup.string()
		.email('Wpisz poprawny adres e-mail.')
		.required('Wpisz adres e-mail.'),
	password: Yup.string()
		.min(8, 'Wpisz hasło. Powinno składać się minimum z 8 znaków.')
		.required('Wpisz hasło. Powinno składać się minimum z 8 znaków.'),
	repeatedPassword: Yup.string()
		.required('Pole jest wymagane. Uzupełnij dane.')
		.oneOf([Yup.ref('password')], 'Hasła nie są identyczne.'),
});

export const Register = () => {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<div className={style.wrapper}>
			<form onSubmit={formik.handleSubmit}>
				<h1>Zarejestruj się!</h1>
				<div className={style.formBox}>
					<input
						type='text'
						id='username'
						name='username'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
					/>
					<label htmlFor='username'>Nazwa użytkownika</label>
				</div>
				<div className={style.errorWrapper}>
					{formik.touched.username && formik.errors.username && (
						<p className={style.errorText}>{formik.errors.username}</p>
					)}
				</div>
				<div className={style.formBox}>
					<input
						type='email'
						id='email'
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					<label htmlFor='email'>Email</label>
				</div>
				<div className={style.errorWrapper}>
					{formik.touched.email && formik.errors.email && (
						<p className={style.errorText}>{formik.errors.email}</p>
					)}
				</div>
				<div className={style.formBox}>
					<input
						type='password'
						id='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					<label htmlFor='password'>Hasło</label>
				</div>
				<div className={style.errorWrapper}>
					{formik.touched.password && formik.errors.password && (
						<p className={style.errorText}>{formik.errors.password}</p>
					)}
				</div>
				<div className={style.formBox}>
					<input
						type='password'
						id='repeatedPassword'
						name='repeatedPassword'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.repeatedPassword}
					/>
					<label htmlFor='repeatedPassword'>Powtórz hasło</label>
				</div>
				<div className={style.errorWrapper}>
					{formik.touched.repeatedPassword && formik.errors && (
						<p className={style.errorText}>{formik.errors.repeatedPassword}</p>
					)}
				</div>
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

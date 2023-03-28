import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/LoginPage/Login';
import NavBar from './components/NavBar/NavBar';
import Register from './components/RegisterPage/Register';
import CalendarPage from './components/CalendarPage/CalendarPage';

function App() {
	return (
		<div className='app'>
			<NavBar />
			<Routes>
				<Route path='/DentClinicApp' element={<HomePage />} />
				<Route path='/logowanie' element={<Login />} />
				<Route path='/rejestracja' element={<Register />} />
				<Route path='/kalendarz' element={<CalendarPage />} />
			</Routes>
		</div>
	);
}

export default App;

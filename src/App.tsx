import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/LoginPage/Login';
import NavBar from './components/NavBar/NavBar';
import Register from './components/RegisterPage/Register';

function App() {
	return (
		<div className='app'>
			<NavBar />
			<Routes>
				<Route path='/DentClinicApp' element={<HomePage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;

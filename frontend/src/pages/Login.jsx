import { useState } from 'react';
import Navbar from '../components/Navbar';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [jelszo, setJelszo] = useState('');
    
    async function bejelentkezes(event) {
        event.preventDefault();
        
        const response = await fetch('http://localhost:3500/api/login-frontend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, jelszo })
        });
    
        const valasz = await response.json();
        console.log(valasz);
    
        if (response.ok) {
            window.alert(valasz.msg);
            localStorage.removeItem('isLoggedIn');
            localStorage.setItem('isLoggedIn', 0);
            localStorage.setItem('user', JSON.stringify(valasz.letezoUser[0]));
            window.location.href = '/';
        } else {
            window.alert(valasz.msg);
        }
    }
    
    return (
        <div className="login-kontener">
            <Navbar />
            <h1>Bejelentkezés</h1>
			<form>
				<table>
					<tbody>
					<tr>
						<td><label htmlFor="email">Email:</label></td>
						<td><input type="email" id="email" onChange={(e) => setEmail(e.target.value)} /></td>
					</tr>
					<tr>
						<td><label htmlFor="jelszo">Jelszó:</label></td>
						<td><input type="password" id="jelszo" onChange={(e) => setJelszo(e.target.value)} /></td>
					</tr>
					<tr>
						<td><button onClick={bejelentkezes}>Bejelentkezés </button></td>
						<td></td>
					</tr>
					</tbody>
				</table>
			</form>
        </div>
    );
};

export default Login;

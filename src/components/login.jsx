// eslint-disable-next-line no-unused-vars


import  { useState } from 'react';
import baseUrl from '../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleCode = (event) => {
        setCode(event.target.value)
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async () => {
        console.log(username, code, password)
        try {
            const response = await fetch(`${baseUrl}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    code: code,
                    password: password,
                }),
            });
        
            if (response.ok) {
                // Handle successful login
                const data = await response.json();
                console.log('Login successful');
                console.log('Received Data:', data);
                try {
                localStorage.setItem('userData', JSON.stringify(data));
                } catch (error) {
                    console.log("Somethign went wrong")
                }
                navigate("/home")
            } else {
                // Handle login failure
                console.error('Login failed');
            }
        }
        catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center w-1/4 h-1/2 p-2 shadow-xl bg-white rounded-md">
                <p className="text-7xl text-center m-4">SULUHU</p>
                <hr className="w-full mt-2 mb-2 border border-blue-400" />
                <div>
                    <input type="text" placeholder="Username"
                        className="w-64 h-16 m-4 p-2 text-lg border-2 border-green-500 rounded-lg outline-none"
                        onChange={handleUsername}
                    />
                </div>
                <div>
                    <input type="text" placeholder="MHCU CODE"
                        className="w-64 h-16 m-4 p-2 text-lg border-2 border-green-500 rounded-lg outline-none"
                        onChange={handleCode}
                    />
                </div>
                <div>
                    <input type="password" placeholder="Password"
                        className="w-64 h-16 m-4 p-2 text-lg border-2 border-green-500 rounded-lg outline-none"
                        onChange={handlePassword}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit} className="w-20 h-10 border border-green-500 active:bg-green-500 active:text-white m-4 rounded-md">LOG IN</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

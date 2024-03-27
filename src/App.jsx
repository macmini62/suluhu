import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import User from "./components/users";
import Login from "./components/login";
import Logs from "./components/logs";
import './App.css';
import Sidebar from "./components/sidebar";

const App = () => {

  const [login, setLogin] = useState(false);

  const validateLogin = () => {
	setLogin(log => !log);
  };

  return(
	<div className="relative flex w-screen bg-white">
		{login ?
			<div className="relative flex w-full p-4 pb-2">
				<Sidebar handleLogout={validateLogin}/> 
				<Routes>
					<Route path="/home" element={<Home/>}/>
					<Route path="/users" element={<User/>}/>
					<Route path="/logs" element={<Logs/>}/>
				</Routes> 
			</div> : 
			<div className="relative h-screen flex w-full">
				<Routes>
					<Route path="/" element={<Login handleLogin={validateLogin}/>}/>
				</Routes>
			</div>
		}
	</div>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import User from "./components/users";
import Login from "./components/login";
import Logs from "./components/logs";
import './App.css';
import Sidebar from "./components/sidebar";

const App = () => {
  return(
    <div className="relative flex w-screen p-4 pb-2 bg-white">
      <Sidebar/>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<User/>}/>
          <Route path="/logs" element={<Logs/>}/>
      </Routes>
    </div>
  );
};

export default App;

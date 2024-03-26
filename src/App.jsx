import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import User from "./components/home";
import Login from "./components/login";
import Logs from "./components/logs";
import './App.css';
import Sidebar from "./components/sidebar";

const App = () => {
  return(
    <div className="relative flex w-screen p-4 bg-slate-400">
      <Sidebar/>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/logs" element={<Logs/>}/>
      </Routes>
    </div>
  );
};

export default App;

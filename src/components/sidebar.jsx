import React, { useState }  from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

const [style, setStyle] = useState("");

const handleStyle = (event) => {
    const selected = event.target.innerHTML;
    setStyle(selected);
    console.log(selected);
};

    return(
        <div className="w-1/6 h-screen mr-2 rounded-3xl overflow-hidden bg-green-800 text-white">
            <div className="w-full h-1/6">
                <a href="">
                    <img src="" alt="" className="w-full h-full"/>
                </a>
            </div>
            <div className="relative flex flex-col items-center w-full h-5/6">
                <ul className="w-5/6">
                    <Link to="/home">
                        <li onClick={handleStyle} id="Home" className="flex justify-evenly w-full h-16 mt-2 mb-2 rounded-lg border-2 text-lg border-white hover:bg-white hover:text-green-700">
                            <button className="w-5/6 h-full">
                                Home
                            </button>
                            {style !== "Home" ?
                                <span className="h-full w-4"></span>
                                :
                                <span className="h-full w-4 bg-red-500 rounded-sm"></span>
                            }
                        </li>
                    </Link>
                    <Link to="/users">
                        <li onClick={handleStyle} id="Users" className="flex justify-evenly w-full h-16 mt-2 mb-2 rounded-lg border-2 text-lg border-white hover:bg-white hover:text-green-700">
                            <button className="w-5/6 h-full">
                                Users
                            </button>
                            {style !== "Users" ?
                                <span className="h-full w-4"></span>
                                :
                                <span className="h-full w-4 bg-green-500 rounded-sm"></span>
                            }
                        </li>
                    </Link>
                    <Link to="/logs">
                        <li onClick={handleStyle} id="Logs" className="flex justify-evenly w-full h-16 mt-2 mb-2 rounded-lg border-2 text-lg border-white hover:bg-white hover:text-green-700">
                            <button className="w-5/6 h-full">
                                Logs
                            </button>
                            {style !== "Logs" ?
                                <span className="h-full w-4"></span>
                                :
                                <span className="h-full w-4 bg-black rounded-sm"></span>
                            }
                        </li>
                    </Link>
                </ul>
                <Link to="/" className="absolute bottom-10 w-5/6 h-16">
                    <button onClick={handleLogout} className="w-full h-full font-semibold text-lg rounded-lg border-2 active:bg-white active:text-green-800">
                        LOG OUT
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

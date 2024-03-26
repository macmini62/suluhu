import React  from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <div className="w-1/6 h-screen mr-2 rounded-3xl overflow-hidden bg-white">
            <div className="w-full h-1/6">
                <a href="">
                    <img src="" alt="" className="w-full h-full"/>
                </a>
            </div>
            <div className="flex flex-col items-center justify-around w-full h-5/6">
                <ul className="w-5/6">
                    <Link to="/">
                        <li className="flex justify-evenly w-full h-16 mt-2 mb-2 rounded-lg border-2 text-lg">
                            <button className="w-5/6 h-full">
                                Home
                            </button>
                            <span className="h-full w-4 border-2"></span>
                        </li>
                    </Link>
                    <Link to="/users">
                        <li className="flex justify-evenly w-full h-16 mt-2 mb-2 rounded-lg border-2 text-lg">
                            <button className="w-5/6 h-full">
                                Users
                            </button>
                            <span className="h-full w-4 border-2"></span>
                        </li>
                    </Link>
                    <Link to="/logs">
                        <li className="flex justify-evenly w-full h-16 mt-2 mb-2 rounded-lg border-2 text-lg">
                            <button className="w-5/6 h-full">
                                Logs
                            </button>
                            <span className="h-full w-4 border-2"></span>
                        </li>
                    </Link>
                </ul>
                <button className="w-5/6 h-16 font-semibold text-lg rounded-lg border-2">
                    LOG OUT
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

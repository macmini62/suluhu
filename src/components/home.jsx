import { useState } from "react";
import DropButton from "../assets/dropbutton.jsx";
import { IoMdSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const Home = () => {
    const [display, setDisplay] = useState(false);
    const[toggle, setToggle] = useState(false);
    const[option, setOption] = useState("Select a region");

    const showOptions = () => {
        setToggle(toggle => !toggle);
    };

    const toggledOption = (event) => {
        const value = event.target.innerHTML;
        setOption(value);
        setToggle(toggle => !toggle);
    };

    const showData = () => {
        setDisplay(display => !display);
    };
    
    return(
        <div className="w-5/6 flex flex-col rounded-lg overflow-hidden bg-gray-200">
            <header className="w-full h-1/6 rounded-md">
                <div className="h-1/2">
                    <p className="text-5xl text-center p-4">
                        SULUHU
                    </p>
                </div>
                <div className="flex items-center justify-around">
                    <div className="w-48">
                        <div className="w-auto relative m-6">
                            <button onClick={showOptions} className="flex items-center justify-around w-full h-8 p-1 border-2 rounded-lg">
                                <p className="text-sm m-2">
                                    {option}
                                </p>
                                {
                                    toggle ? <SlArrowUp className="w-3 h-3 m-1"/> : <SlArrowDown className="w-3 h-3 m-1"/>
                                }
                            </button>
                            {
                                toggle && <div className="absolute left-10 w-24 m-1 border-2">
                                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                                        MOMBASA
                                    </p>
                                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                                        NAIROBI
                                    </p>
                                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                                        KISUMU
                                    </p>
                                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                                        NAKURU
                                    </p>
                                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                                        MARSABIT
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w-72 h-10 p-1 flex items-center rounded-lg overflow-hidden">
                        <button className="text-sm m-1 hover:underline">Search</button>
                        <hr className="h-full m-0.5 border border-red-500"/>
                        <IoMdSearch className="w-6 h-6 m-1"/>
                        <input type="text" placeholder="Type here..." className="w-2/3 h-full pl-2 pr-2 outline-none border border-red-300"/>
                    </div>
                    <div className="w-48 flex justify-around">
                        <a href="" className="hover:underline">
                            About Us
                        </a>
                        <a href="" className="hover:underline">
                            Contact us
                        </a>
                    </div>
                </div>
            </header>
            <hr className="w-full border border-red-500"/>
            <p className="text-center text-2xl m-4 ">{option} COUNTY</p>
            <div className="w-full h-5/6 overflow-auto">
                <div className="grid grid-flow-row gap-8 grid-cols-4 pt-0 p-6">
                    <div className="flex flex-col items-center h-54 p-4 border-2 border-red-400 rounded-md">
                        <p className="text-3xl text-center m-2">Malaria</p>
                        <hr className="w-5/6 border border-gray-600"/>
                        <div className="w-full h-2/3">
                            <p className="text-center text-lg m-2">
                                Number of reported cases:
                            </p>
                            <p className="text-center text-8xl m-2">
                                40
                            </p>
                        </div>
                        <p onClick={showData} className="self-end text-sm hover:underline hover:cursor-pointer">Show {!display ? "more" : "less"}</p>
                        {display && 
                            <div className="w-full border-2 rounded-md m-2 text-lg">
                            <hr className="w-full border border-gray-300"/>
                            <p className="text-center underline">Records</p>
                                <div className="flex gap-2 w-full m-2">
                                    <p>Males:</p>
                                    <div>
                                        Ages:
                                        <p>{">"} 18-30: <span>0</span></p>
                                        <p>{">"} 30-40: <span>2</span></p>
                                        <p>{">"} 40-55: <span>0</span></p>
                                        <p>{">"} 55 and above: <span>1</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full m-2">
                                    <p>Females:</p>
                                    <div>
                                        Ages:
                                        <p>{">"} 18-30: <span>0</span></p>
                                        <p>{">"} 30-40: <span>2</span></p>
                                        <p>{">"} 40-55: <span>0</span></p>
                                        <p>{">"} 55 and above: <span>1</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full m-2">
                                    <p>Children:</p>
                                    <div>
                                        Ages:
                                        <p>{">"} 7 and below: <span>0</span></p>
                                        <p>{">"} 7-15: <span>2</span></p>
                                        <p>{">"} 15-18: <span>0</span></p>
                                    </div>
                                </div>
                            <hr className="w-full border border-gray-300"/>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col items-center h-54 p-4 border-2 border-red-400 rounded-md">
                        <p className="text-3xl text-center m-2">Cholera</p>
                        <hr className="w-5/6 border border-gray-600"/>
                        <div className="w-full h-2/3">
                            <p className="text-center text-lg m-2">
                                Number of reported cases:
                            </p>
                            <p className="text-center text-8xl m-2">
                                30
                            </p>
                        </div>
                        <p onClick={showData} className="self-end text-sm hover:underline hover:cursor-pointer">Show {!display ? "more" : "less"}</p>
                        {display && 
                            <div className="w-full border-2 rounded-md m-2 text-lg">
                            <hr className="w-full border border-gray-300"/>
                            <p className="text-center underline">Records</p>
                                <div className="flex gap-2 w-full m-2">
                                    <p>Males:</p>
                                    <div>
                                        Ages:
                                        <p>{">"} 18-30: <span>0</span></p>
                                        <p>{">"}30-40: <span>2</span></p>
                                        <p>{">"} 40-55: <span>0</span></p>
                                        <p>{">"} 55 and above: <span>1</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full m-2">
                                    <p>Females:</p>
                                    <div>
                                        Ages:
                                        <p>{">"} 30: <span>0</span></p>
                                        <p>{">"} 30-40: <span>2</span></p>
                                        <p>{">"} 40-55: <span>0</span></p>
                                        <p>{">"} 55 and above: <span>1</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full m-2">
                                    <p>Children:</p>
                                    <div>
                                        Ages:
                                        <p>{">"} 7 and below: <span>0</span></p>
                                        <p>{">"} 7-15: <span>2</span></p>
                                        <p>{">"} 15-18: <span>0</span></p>
                                    </div>
                                </div>
                            <hr className="w-full border border-gray-300"/>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Home;

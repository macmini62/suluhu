import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";


const Logs = () => {

    const[toggle, setToggle] = useState(false);
    const[option, setOption] = useState("Sort");

    const showOptions = () => {
        setToggle(toggle => !toggle);
    };

    const toggledOption = (event) => {
        const value = event.target.innerHTML;
        setOption(value);
        setToggle(toggle => !toggle);
    };

    return(
        <div className="w-5/6 p-4 border-2 rounded-md bg-gray-200">
            <div className="flex w-full items-center justify-end h-20 p-4">
                <div className="w-72 h-10 p-1 flex items-center border-2 rounded-lg overflow-hidden">
                    <button className="text-sm m-1 hover:underline">Search</button>
                    <hr className="h-full m-0.5 border border-black"/>
                    <IoMdSearch className="w-6 h-6 m-1"/>
                    <input type="text" placeholder="Type here.." className="w-2/3 h-full pl-2 pr-2 outline-none border border-black"/>
                </div>
            </div>
            <hr className="w-full border border-black"/>
            <p className="text-center text-2xl mt-2 underline">Data</p>
            <div className="w-full flex flex-col items-center justify-center">
                    <div className="relative left-96 m-2">
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
                                    Descending
                                </p>
                                <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                                    Ascending
                                </p>
                            </div>
                        }
                        <hr className="border-0.5 border-black"/>
                    </div>
                <table className="m-2 overflow-hidden border-separate border-spacing-1 border border-black p-0.5 rounded-sm">
                    <thead>
                        <tr>
                            <th className="text-center p-1 border border-black">Form_id</th>
                            <th className="text-center p-1 border border-black">CHU_id</th>
                            <th className="text-center p-1 border border-black">Element</th>
                            <th className="text-center p-1 border border-black">Value</th>
                            <th className="text-center p-1 border border-black">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="text-center p-2 ">sdhf79234dfsfsa7023sf</td>
                        <td className="text-center p-2 ">l4ahd43fds53234ljsjnl</td>
                        <td className="text-center p-2 ">Death</td>
                        <td className="text-center p-2 ">20</td>
                        <td className="text-center p-2 ">2024-03-29</td>
                        <td className="text-center p-2 flex gap-2">
                            <CiEdit className="w-5 h-5 hover:cursor-pointer"/>
                            <AiOutlineDelete className="w-5 h-5 hover:cursor-pointer"/>
                        </td>
                    </tbody>
                    <tbody>
                        <td className="text-center p-2 ">sdhf79234dfsfsa7023sf</td>
                        <td className="text-center p-2 ">l4ahd43fds53234ljsjnl</td>
                        <td className="text-center p-2 ">Maternity</td>
                        <td className="text-center p-2 ">10</td>
                        <td className="text-center p-2 ">2024-02-05</td>
                        <td className="text-center p-2 flex gap-2">
                            <CiEdit className="w-5 h-5 hover:cursor-pointer"/>
                            <AiOutlineDelete className="w-5 h-5 hover:cursor-pointer"/>
                        </td>
                    </tbody>
                    <tbody>
                        <td className="text-center p-2 ">sdhf79234dfsfsa7023sf</td>
                        <td className="text-center p-2 ">l4ahd43fds53234ljsjnl</td>
                        <td className="text-center p-2 ">Birth</td>
                        <td className="text-center p-2 ">5</td>
                        <td className="text-center p-2 ">2023-11-14</td>
                        <td className="text-center p-2 flex gap-2">
                            <CiEdit className="w-5 h-5 hover:cursor-pointer"/>
                            <AiOutlineDelete className="w-5 h-5 hover:cursor-pointer"/>
                        </td>
                    </tbody>
                    <tbody>
                        <td className="text-center p-2 ">sdhf79234dfsfsa7023sf</td>
                        <td className="text-center p-2 ">l4ahd43fds53234ljsjnl</td>
                        <td className="text-center p-2 ">Chronic Diseases</td>
                        <td className="text-center p-2 ">5</td>
                        <td className="text-center p-2 ">2023-10-20</td>
                        <td className="text-center p-2 flex gap-2">
                            <CiEdit className="w-5 h-5 hover:cursor-pointer"/>
                            <AiOutlineDelete className="w-5 h-5 hover:cursor-pointer"/>
                        </td>
                    </tbody>
                </table>
            <hr className="w-full border border-black mt-2 mb-2"/>
            <p className="text-center text-2xl mt-2 underline">ERRORS</p>
            <div className="w-full flex flex-col items-center justify-center">
                    <div className="relative left-96 m-2">
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
                                    Descending
                                </p>
                                <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                                    Ascending
                                </p>
                            </div>
                        }
                        <hr className="border-0.5 border-black"/>
                    </div>
                <table className="m-2 overflow-hidden border-separate border-spacing-1 border border-black p-0.5 rounded-sm">
                    <thead>
                        <tr>
                            <th className="text-center p-1 border border-black">Level</th>
                            <th className="text-center p-1 border border-black">Message</th>
                            <th className="text-center p-1 border border-black">Type</th>
                            <th className="text-center p-1 border border-black">Date</th>
                            <th className="text-center p-1 border border-black">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="text-center p-2 ">Sub-County</td>
                        <td className="text-center p-2 ">Undocumented registred CHP's</td>
                        <td className="text-center p-2 ">Server Error</td>
                        <td className="text-center p-2 ">28.02.2024</td>
                        <td className="text-center p-2 ">08:20:44</td>
                        <td className="text-center p-2 flex gap-2">
                            <CiEdit className="w-5 h-5 hover:cursor-pointer"/>
                            <AiOutlineDelete className="w-5 h-5 hover:cursor-pointer"/>
                        </td>
                    </tbody>
                    <tbody>
                        <td className="text-center p-2 ">Sub-County</td>
                        <td className="text-center p-2 ">Failed to Upload HouseHolds</td>
                        <td className="text-center p-2 ">Server Error</td>
                        <td className="text-center p-2 ">10.01.2024</td>
                        <td className="text-center p-2 ">17:40:09</td>
                        <td className="text-center p-2 flex gap-2">
                            <CiEdit className="w-5 h-5 hover:cursor-pointer"/>
                            <AiOutlineDelete className="w-5 h-5 hover:cursor-pointer"/>
                        </td>
                    </tbody>
                    <tbody>
                        <td className="text-center p-2 ">Sub-County</td>
                        <td className="text-center p-2 ">Crucial data is accessed by unauthorised parties</td>
                        <td className="text-center p-2 ">Unauthorised Access</td>
                        <td className="text-center p-2 ">28.02.2024</td>
                        <td className="text-center p-2 ">11:23:30</td>
                        <td className="text-center p-2 flex gap-2">
                            <CiEdit className="w-5 h-5 hover:cursor-pointer"/>
                            <AiOutlineDelete className="w-5 h-5 hover:cursor-pointer"/>
                        </td>
                    </tbody>
                </table>
            </div>
            <hr className="w-full border border-black"/>
            </div>
        </div>
    );
};

export default Logs;

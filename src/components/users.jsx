import React from "react";
import { IoMdSearch } from "react-icons/io";

const Users = () => {
    return(
        <div className="w-5/6 p-4 border-2 rounded-md bg-gray-200">
            <div className="flex w-full items-center justify-end h-20 p-4">
                <div className="w-72 h-10 p-1 flex items-center border-2 rounded-lg overflow-hidden">
                    <button className="text-sm m-1 hover:underline">Search</button>
                    <hr className="h-full m-0.5 border border-green-500"/>
                    <IoMdSearch className="w-6 h-6 m-1"/>
                    <input type="text" placeholder="Type here..." className="w-2/3 h-full pl-2 pr-2 outline-none border border-green-300"/>
                </div>
            </div>
            <hr className="w-full border border-green-500"/>
            <p className="text-center text-2xl mt-2 underline">CHP's Assigned</p>
            <div className="w-full flex flex-col items-center justify-center mt-4">
                <table className="overflow-hidden border-separate border-spacing-1 p-0.5 rounded-sm border border-green-600">
                    <thead>
                        <tr>
                            <th className="p-2 text-center border border-slate-400">Index.</th>
                            <th className="p-2 text-center border border-slate-400">name</th>
                            <th className="p-2 text-center border border-slate-400">MCHUL Code</th>
                            <th className="p-2 text-center border border-slate-400">Facility</th>
                            <th className="p-2 text-center border border-slate-400">CHEW</th>
                            <th className="p-2 text-center border border-slate-400">HHs</th>
                            <th className="p-2 text-center border border-slate-400">County</th>
                            <th className="p-2 text-center border border-slate-400">Sub-County</th>
                            <th className="p-2 text-center border border-slate-400">Division</th>
                            <th className="p-2 text-center border border-slate-400">Location</th>
                            <th className="p-2 text-center border border-slate-400">Sub-Location</th>
                            <th className="p-2 text-center border border-slate-400">Start Date</th>
                            <th className="p-2 text-center border border-slate-400">End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-1 text-center">1</td>
                            <td className="p-1 text-center">Mike Munene</td>
                            <td className="p-1 text-center">E232.01</td>
                            <td className="p-1 text-center">Likoni lv5. Hospital</td>
                            <td className="p-1 text-center">Likoni</td>
                            <td className="p-1 text-center">12</td>
                            <td className="p-1 text-center">Mombasa</td>
                            <td className="p-1 text-center">Likoni</td>
                            <td className="p-1 text-center">Likoni</td>
                            <td className="p-1 text-center">Katikati</td>
                            <td className="p-1 text-center">Mwisho</td>
                            <td className="p-1 text-center">29.03.2023</td>
                            <td className="p-1 text-center">01.03.2024</td>
                        </tr>
                        <tr>
                            <td className="p-2 text-center">2</td>
                            <td className="p-2 text-center">Mike Munene</td>
                            <td className="p-2 text-center">E232.01</td>
                            <td className="p-2 text-center">Likoni lv5. Hospital</td>
                            <td className="p-2 text-center">Likoni</td>
                            <td className="p-2 text-center">12</td>
                            <td className="p-2 text-center">Mombasa</td>
                            <td className="p-2 text-center">Likoni</td>
                            <td className="p-2 text-center">Likoni</td>
                            <td className="p-2 text-center">Katikati</td>
                            <td className="p-2 text-center">Mwisho</td>
                            <td className="p-2 text-center">29.03.2023</td>
                            <td className="p-2 text-center">01.03.2024</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="w-20 h-10 bg-green-600 m-2 rounded-lg hover:bg-white hover:border hover:border-green-500">
                        Modify
                    </button>
                    <button className="w-20 h-10 bg-green-600 m-2 rounded-lg hover:bg-white hover:border hover:border-green-500">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Users;

import React from "react";
import { IoMdSearch } from "react-icons/io";

const Users = () => {
    return(
        <div className="w-5/6 p-4 border-2 rounded-md">
            <div className="flex w-full items-center justify-end h-20 p-4">
                <div className="w-72 h-10 p-1 flex items-center border-2 rounded-lg overflow-hidden">
                    <button className="text-sm m-1 hover:underline">Search</button>
                    <hr className="h-full m-0.5 border"/>
                    <IoMdSearch className="w-6 h-6 m-1"/>
                    <input type="text" placeholder="Type here.." className="w-2/3 h-full pl-2 pr-2 outline-none"/>
                </div>
            </div>
            <hr className="w-full border"/>
            <p className="text-center text-2xl mt-2 underline">CHP's Assigned</p>
            <div className="w-full flex flex-col items-center justify-center mt-4">
                <table className="overflow-hidden border-separate border-spacing-1 border p-0.5 rounded-sm">
                    <thead>
                        <tr>
                            <th className="p-2 text-center border">Index.</th>
                            <th className="p-2 text-center border">name</th>
                            <th className="p-2 text-center border">MCHUL Code</th>
                            <th className="p-2 text-center border">Facility</th>
                            <th className="p-2 text-center border">CHEW</th>
                            <th className="p-2 text-center border">HHs</th>
                            <th className="p-2 text-center border">County</th>
                            <th className="p-2 text-center border">Sub-County</th>
                            <th className="p-2 text-center border">Division</th>
                            <th className="p-2 text-center border">Location</th>
                            <th className="p-2 text-center border">Sub-Location</th>
                            <th className="p-2 text-center border">Start Date</th>
                            <th className="p-2 text-center border">End Date</th>
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
                    <button className="w-20 h-10 border-2 m-2 rounded-lg">
                        Modify
                    </button>
                    <button className="w-20 h-10 border-2 m-2 rounded-lg">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Users;

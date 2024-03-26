import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const dropButton = ({ getOption }) => {
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

    return(
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
                        Mombasa
                    </p>
                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                        Nairobi
                    </p>
                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                        Kisumu
                    </p>
                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                        Nakuru
                    </p>
                    <p onClick={toggledOption} className="text-center hover:cursor-pointer bg-slate-300 hover:bg-slate-200">
                        Marsabit
                    </p>
                </div>
            }
        </div>
    );
};


export default dropButton;
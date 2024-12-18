// ToggleSelectionBar Component with Tailwind CSS
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ToggleSelectionBar = () => {
    const [selectedOption, setSelectedOption] = useState("quiz");
    const navigate = useNavigate();

    const handleSelect = (selection) => {
        setSelectedOption(selection);
        navigate(`/${selection}`);
    };

    return (
        <div className="flex flex-col items-center w-full my-8">
            <div className="flex justify-center bg-secondary rounded-full overflow-hidden w-[70%] sm:w-[70%] md:w-[50%] lg:w-[30%]">
                <div
                    className={`flex-1 text-center py-2 px-4 cursor-pointer rounded-full transition-all duration-300 font-semibold text-lg  ${
                        selectedOption === "quiz"
                            ? "bg-primary text-white "
                            : "hover:bg-primary text-darkText"
                    }`}
                    onClick={() => handleSelect("quiz")}
                >
                    Quiz
                </div>
                <div
                    className={`flex-1 text-center py-2 px-4 cursor-pointer rounded-full transition-all duration-300 font-semibold text-lg  ${
                        selectedOption === "leaderboard"
                            ? "bg-primary text-white"
                            : " hover:bg-primary text-darkText"
                    }`}
                    onClick={() => handleSelect("leaderboard")}
                >
                    Leaderboard
                </div>
            </div>
        </div>
    );
};

export default ToggleSelectionBar;

import SwitchSelector from "react-switch-selector";
import { usePageContext } from "../../context/PageContext";

const ToggleSwitch = () => {
    const { setPage } = usePageContext();

    const options = [
        {
            label: "Quiz",
            value: "quiz",
            selectedBackgroundColor: "#6A5AE0",
        },
        {
            label: "Leaderboard",
            value: "leaderboard",
            selectedBackgroundColor: "#6A5AE0",
        },
    ];

    const onChange = (newValue) => {
        setPage(newValue);
        localStorage.setItem("page-info", JSON.stringify(newValue));
    };

    const initialSelectedIndex = options.findIndex(
        ({ value }) => value === "quiz"
    );

    return (
        <div className="w-full my-6 flex justify-center">
            <div className="w-[20rem] h-10">
                <SwitchSelector
                    onChange={onChange}
                    options={options}
                    initialSelectedIndex={initialSelectedIndex}
                    backgroundColor={"#4E42A9"}
                    fontColor={"#f5f6fa"}
                />
            </div>
        </div>
    );
};

export default ToggleSwitch;

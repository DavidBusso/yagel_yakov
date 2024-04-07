import react, { useState ,useContext } from "react"
import CurrentTime from "./CurrentTime.jsx"
import { useNavigate } from "react-router-dom";
import { byTime } from '../../Database/data.js';
import HeadeLineButtons from "../headeLine/HeadeLineButtons.jsx";
import HeadeContext from "../headeLine/HeadeContext.jsx";

export default function SearcherByTime() {
    const {isNightMode} = useContext(HeadeContext);
    const [select, setSlect] = useState(null);
    const navigate = useNavigate();
    const selectTime = (choice) => {
        navigate(`/yagelyakov/searcherbytime/${choice}`);
    }
    const currentRabbi = []
    const currentRabbiTime = []
    for (const key in byTime) {
        currentRabbi.push(key)
        currentRabbiTime.push(byTime[key][0])
    }
    document.querySelector('body').classList.remove('HomeCss');
    return (
        <div >
            <HeadeLineButtons />
            {currentRabbiTime.map((element, index) => (
                <button key={index} onClick={() => selectTime(currentRabbi[index])}>{element}</button>
            ))}
        </div>
    )
}
import react, { useState } from "react"
import CurrentRabbi from "./CurrentRabbi.jsx"
import { useNavigate } from "react-router-dom";
import { byAuthor } from '../../Database/data.js';
import HeadeLineButtons from "../headeLine/HeadeLineButtons.jsx";
// import HeadeContext from "../headeLine/HeadeContext.jsx";
export default function SearcherByRabbi() {
    // const {isNightMode} = useContext(HeadeContext);
    const [select, setSlect] = useState(null);
    const newNavigate = useNavigate();
    const selectRabbi = (choice) => {
        newNavigate(`/yagelyakov/searcherbyrabbi/${choice}`);
    }
    const currentRabbi = []
    const currentRabbiName = []
    for (const key in byAuthor) {
        currentRabbi.push(key)
        currentRabbiName.push(byAuthor[key][0])
    }
    document.querySelector('body').classList.remove('HomeCss');
    return (
        <div >
            <HeadeLineButtons />
            {currentRabbiName.map((element, index) => (
                <button key={index} onClick={() => selectRabbi(currentRabbi[index])}>{element}</button>
            ))}
        </div>
    )
}
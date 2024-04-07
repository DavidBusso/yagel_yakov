import react, { useState } from "react"
import SearcherByRabbi from "../Searchers/SearcherByRabbi"
import SearcherByTime from "../Searchers/SearcherByTime"
import { useNavigate } from "react-router-dom";
import SearcherByInput from "../SearcherByInput/SearcherByInput";
// import HeadeContext from "../headeLine/HeadeContext";
import '../Home/Home.css'


export default function Home() {
    // const {isNightMode} = useContext(HeadeContext);
    const [select, setSlect] = useState(null);
    const newNavigate = useNavigate();

    const selectSearcher = (currentChoice) => {
        console.log(currentChoice);
        newNavigate(`/yagelyakov/${currentChoice}`);
    }
    document.querySelector('body').classList.add('HomeCss');
    return (
        <div >
            <h1>ספר יגל יעקב</h1>
            <button className="chooseSearch" onClick={() => selectSearcher('searcherbyrabbi')}>חיפוש לפי מחבר</button>
            <button className="chooseSearch" onClick={() => selectSearcher('searcherbytime')}>חיפוש לפי הילולה</button>
            <SearcherByInput/>


        </div>
    )
}
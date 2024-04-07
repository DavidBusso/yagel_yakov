import react from "react"
import { useParams, useNavigate } from "react-router-dom";
import { byTime } from '../../Database/data.js';
import HeadeLineButtons from "../headeLine/HeadeLineButtons.jsx";

export default function CurrentTime() {
    const param = useParams();
    const newNavigate = useNavigate();
    const { rabbi } = param
    const chooseSong = (choice) => {
        // newNavigate(`/searcher/${choice}`);
        newNavigate(`/searcher/byTime/${rabbi}/${choice}`);
    } 
    const allCategory=()=>{
        newNavigate(`/searcher/byTime/allCategory/${rabbi}`);
    }
    return (
        <div>
            <HeadeLineButtons />
            <button onClick={allCategory}>כל השירים</button>
            {byTime[rabbi].map((element, index) => {
                return index > 0 && (
                    <button key={index} onClick={() => chooseSong(index)}>{element?.name}</button>

                )
            })}
        </div>
    )
}
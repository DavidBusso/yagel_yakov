import react from "react"
import { useParams, useNavigate } from "react-router-dom";
import { byAuthor } from '../../Database/data.js';
import HeadeLineButtons from "../headeLine/HeadeLineButtons.jsx";

export default function CurrentRabbi() {
    const newNavigate = useNavigate();
    const param = useParams();
    const { rabbi } = param
    const chooseSong = (choice) => {
        // newNavigate(`/searcher/${choice}`);
        newNavigate(`/searcher/byAuthor/${rabbi}/${choice}`);
    }
    const allCategory=()=>{
        newNavigate(`/searcher/byAuthor/allCategory/${rabbi}`);
    }
    return (
        <div>
            <HeadeLineButtons />
            <button onClick={allCategory}>כל השירים</button>
            {byAuthor[rabbi].map((element, index) => {
                return index > 0 && (
                    <button key={index} onClick={() => chooseSong(index)}>{element.name}</button>

                )
            })}
        </div>
    )
}
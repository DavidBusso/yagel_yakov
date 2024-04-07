import react ,{useState, useContext }from "react";
import { useParams, useNavigate } from "react-router-dom";
import { byAuthor, byTime } from '../../Database/data.js';
import HeadeLineText from "../headeLine/HeadeLineText.jsx";
import HeadeContext from '../headeLine/HeadeContext.jsx';

export default function AllCurrentCategory() {
    const {size} = useContext(HeadeContext);
    const param = useParams();
    const { currentSearch, rabbi } = param

   const [setBackgroun, backgroun] = useState(true);
    let currentCategory = [];
    if (currentSearch === "byAuthor") {
        currentCategory = byAuthor[rabbi];
    }
    else {
        currentCategory = byTime[rabbi];
    }

    return (
        <div>
            <HeadeLineText />
            <h2>{currentCategory[0]}</h2>
            {
                currentCategory.map((element, index) => {
                    return index > 0 && (
                        <div key={index}>
                            <h3>{element.name}</h3>
                            <div style={{ direction: 'rtl', fontSize: '16px' }}>
                                {element.text.length != 0 && element.text.split('\n\n').map((line, index) => (
                                    <div key={index} style={{ display: 'flex' }}>
                                        <div style={{ fontSize: size+5 }}>{line[0] + ' '}</div>
                                        <div style={{ fontSize: size }}>{line.slice(1)}</div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    )

                })
            }

        </div>
    )
}
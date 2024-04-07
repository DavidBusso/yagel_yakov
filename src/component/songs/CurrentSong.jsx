import { useState , useContext } from 'react'
import { useParams } from "react-router-dom";
import { byAuthor, byTime } from '../../Database/data.js';
import HeadeLine from "../headeLine/HeadeLineText.jsx";
import HeadeContext from '../headeLine/HeadeContext.jsx';
export default function CurrentSong() {
    const {size} = useContext(HeadeContext);
    const param = useParams();
    const { currentSearch, rabbi, song } = param
    let currentSong = "";
    let currentName = "";
    let currentAuthor = "";


    if (currentSearch === "byAuthor") {
        currentSong = byAuthor[rabbi][song].text;
        currentName = byAuthor[rabbi][song].name;
        currentAuthor = byAuthor[rabbi][0];
    }
    else {
        currentSong = byTime[rabbi][song].text;
        currentName = byTime[rabbi][song].name;
        currentAuthor = byTime[rabbi][0];

    }
    return (
        <div>
            <HeadeLine
                
            />
            <h3>{currentAuthor}</h3>
            <h3>{currentName}</h3>
            <div style={{ direction: 'rtl', fontSize: '16px' }}>
                {currentSong.length != 0 && currentSong.split('\n\n').map((line, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        <div style={{ fontSize: size+5 }}>{line[0] + ' '}</div>
                        <div style={{ fontSize: size}}>{line.slice(1)}</div>
                    </div>

                ))}
            </div>

        </div>
    )
}
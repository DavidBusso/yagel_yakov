import React, { useState, useContext } from 'react'
import { useParams, useNavigate, useLocation } from "react-router-dom";
import './HeadeLine.css'
import HeadeContext from '../headeLine/HeadeContext.jsx';
import { HiMoon } from "react-icons/hi2";
export default function HeadeLineText() {


    const {isNightMode, setIsNightMode, size, setSize} = useContext(HeadeContext);

    const navigate = useNavigate();

    const handleSize = (action) => {
        switch (action) {
            case '+': setSize(size + 3)
                break;
            case '-': setSize(size - 3)
                break;
        }

    }
    const backButton = () => {
        navigate(-1);
    }
    const handeleNightMode=()=>{
        setIsNightMode(!isNightMode)
         console.log(isNightMode)
    }
    return (
        <div className='headeLine'>
            <div>
                <div onClick={() => handleSize('+')} >א+
                </div>

                <div onClick={() => handleSize('-')}>א-
                </div>
            </div>
            <div>
                <div onClick={handeleNightMode}><HiMoon />
                </div>
                <div onClick={backButton}>⬅
                </div>
            </div>
        </div>
    )
}

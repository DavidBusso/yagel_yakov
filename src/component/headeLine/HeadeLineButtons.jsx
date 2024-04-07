import { useState, useContext } from 'react'
// import { useLocation, useHistory } from 'react-router-dom';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import './HeadeLine.css'
import HeadeContext from '../headeLine/HeadeContext.jsx';
import { HiMoon } from "react-icons/hi2";
export default function HeadeLineButtons() {
    const {isNightMode, setIsNightMode} = useContext(HeadeContext);

    const location = useLocation();

    const navigate = useNavigate();
     const backButton = () => {
        console.log(location.pathname);
        navigate(-1);
    }
    const handeleNightMode=()=>{
        setIsNightMode(!isNightMode)
         console.log(isNightMode)
    }

    return (
        <div className='headeLine'>
            <div>

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

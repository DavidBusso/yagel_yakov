import React, { useState } from "react";
import { byAuthor, byTime } from '../../Database/data.js';
import { useNavigate } from "react-router-dom";
export default function SearcherByInput() {
    const newNavigate = useNavigate();
    const [result, setResult] = useState([])
    //    const str1='חֲבֵרִים';
    //    const str2 = 'חברים'
    //    console.log(str1.length);
    //    for (let index = 0; index < str1.length; index++) {
    //     console.log(str1.charCodeAt(index));

    //    }
    //    for (let index = 0; index < str2.length; index++) {
    //     console.log(str2.charCodeAt(index));

    //    }

    let valueTheInput = "";
    const inputChange = (event) => {
        valueTheInput = event.target.value;
        setResult([])
        if(valueTheInput.length===0||valueTheInput===' ')
        return;
        for (const key in byAuthor) {
            byAuthor[key].map((element, index) => {
                if (index !== 0) {
                    if (isSubsequence(valueTheInput,element.text)) {
                        console.log(element);
                    }
                    if (element.text.includes(valueTheInput)) {
                        setResult((prev) => [
                            ...prev,
                            { type: 'byAuthor', rabbi: key, text: element.text.substring(0, 60), id: index }
                        ]);
                    }
                }
            });
        }
        for (const key in byTime) {
            byTime[key].map((element, index) => {
                if (index !== 0) {
                    if (element.text.includes(valueTheInput)&&element.double) {
                        setResult((prev) => [
                            ...prev,
                            { type: 'byTime', rabbi: key, text: element.text.substring(0, 60), id: index }
                        ]);
                    }
                }
            });
        }
        console.log(result);
    }
    const isSubsequence = (str1, str2) => {
        let i = 0;
        let j = 0;
        while (i < str1.length && j < str2.length) {
            if(i>0&&((str2[j]>'א'&&str2[j]<'ת')&&str1[i]!==str2[j]))
            return false;
            if (!/[א-ת]/.test(str2[j])) {
                j++;
                continue;
            }
            if (str1[i] === str2[j]) {
                i++;
            }
            j++;
        }
        return i === str1.length && (j === str2.length || str2[j] === ' ');
    }
    const chooseASong = (element) => {
        newNavigate(`/searcher/${element.type}/${element.rabbi}/${element.id}`)
    }
    return (
        <div>
            <label htmlFor="searcher">חיפוש לפי מילים</label>
            <input type="text" onChange={inputChange} />

            {
                result.map((element, index) => (<div onClick={() => chooseASong(element)}><h4 >{element.text}</h4></div>))
            }

        </div>
    )
}
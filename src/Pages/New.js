import DiaryEditor from "./../Components/DiaryEditor";
import {useEffect} from "react";


const New = () => {

    useEffect(()=>{
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장 - 새 일기`;
    })
    return (
    <div>
        <DiaryEditor/>
    </div>
    )
}

export default New;
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

const getStringDate = (date) => {
    return date.toISOString().slice(0,10);
};

const DiaryEditor = () => {
    const [date,setData] = useState();

    const navigate = useNavigate();
    return(
    <div>
        <MyHeader
        headText="{새 일기 쓰기}"
        leftchild={<MyButton text={"< 뒤로가기"}/>}
        />
        <div>
        <section>
            <h4>오늘은 언제인가요?</h4>
            <div className="input-box">
                <input 
                className="input-date"
                value={date}
                onChange={(e)=>setImmediate(e.target.value)}
                type="date"/>
            </div>
        </section>
    </div>
    </div>
    )
}
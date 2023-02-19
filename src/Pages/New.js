import {useNavigate} from "react-router-dom";
import {useState} from "react";

import MyHeader from "./../Components/MyHeader";
import MyButton from "./../Components/MyButton";
const New = () => {

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
                value={date}
                onChange={(e)=>setImmediate(e.target.value)}
                type="date"/>
            </div>
        </section>
    </div>
    </div>
    )
}

export default New;
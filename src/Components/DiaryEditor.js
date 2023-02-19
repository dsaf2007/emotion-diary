import {useNavigate} from "react-router-dom";
import {useState} from "react";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem"; 

const emotionList = [
    {
        emotion_id:1,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotipon1.png`,
        emotion_descript:'완전 좋음'
    },
    {
        emotion_id:2,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotipon2.png`,
        emotion_descript:'좋음'
    },
    {
        emotion_id:3,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotipon3.png`,
        emotion_descript:'보통'
    },
    {
        emotion_id:4,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotipon4.png`,
        emotion_descript:'나쁨'
    },
    {
        emotion_id:5,
        emotion_img: process.env.PUBLIC_URL + `/assets/emotipon5.png`,
        emotion_descript:'완전 나쁨'
    },
]

const getStringDate = (date) => {
    return date.toISOString().slice(0,10);
};

const DiaryEditor = () => {
    const [date,setData] = useState();

    const navigate = useNavigate();
    return(
    <div className="DiaryEditor">
        <MyHeader
        headText="{새 일기 쓰기}"
        leftchild={<MyButton text={"< 뒤로가기"}/>}
        />
        <div>
        <section>
            <h4>오늘은 언제인가요?</h4>
            <div className="input_box">
                <input 
                className="input_date"
                value={date}
                onChange={(e)=>setImmediate(e.target.value)}
                type="date"/>
            </div>
        </section>
        <section>
            <h4>오늘의 감정</h4>
            <div className="input_box emotion_list_wrapper">
                {emotionList.map((it)=>(
                    <EmotionItem key={it.emotion_id} {...it}/>
                    ))}
            </div>
        </section>
    </div>
    </div>
    )
}

export default DiaryEditor;
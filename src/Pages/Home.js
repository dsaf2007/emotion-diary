import {useState, useContext, useEffect} from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "./../Components/MyHeader";
import MyButton from "./../Components/MyButton"

const Home = () => {


    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]);

    const [curDate, setCurDate] = useState(new Date());

    const headDate = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;

    useEffect(()=>{
        const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(),1).getTime();
        const lastDay = new Date(curDate.getFullYear(), curDate.getMonth()+1,0).getTime();

        setData(diaryList.filter((it)=> firstDay <= it.date && it.date <= lastDay))
    },[diaryList,curDate]);

    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1,curDate.getDate()));
    }

    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
    }

    return(
    <div>
        <MyHeader
        headText={headDate}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth}/>}
        rightChild={<MyButton text={">"} onClick={increaseMonth}/>}
        />
        <h1>Home</h1>
        <p>이곳은 홈 입니다.</p>
    </div>);
}

export default Home;
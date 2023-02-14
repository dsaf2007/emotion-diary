import {useState} from "react";

import MyHeader from "./../Components/MyHeader";
import MyButton from "./../Components/MyButton"

const Home = () => {

    const [curDate, setCurDate] = useState(new Date());

    const headDate = `${curDate.getFullYear()}년 ${curDate.getMonth()+1}월`;

    return(
    <div>
        <MyHeader
        headText={headDate}
        leftChild={<MyButton text={"<"} onClick={() =>{}}/>}
        rightChild={<MyButton text={">"} onClick={()=>{}}/>}
        <h1>Home</h1>
        <p>이곳은 홈 입니다.</p>
    </div>);
}

export default Home;
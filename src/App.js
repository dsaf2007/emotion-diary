import "./App.css";
import React, {useReducer, useRef} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Diary from "./Pages/Diary";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

const reducer = (state, action) => {
    let newState = [];
    switch(action.type){
        case 'INIT':{
            return action.data;
        }
        case 'CREATE':{
            const newItem = {
                ...action.data
            };
            newState = [newItem, ...state];
            break;
        }
        case 'REMOVE':{
            newState = state.filter((it)=>it.id !== action.targetId);
            break;
        }
        case 'EDIT':{
            newState = state.map((it)=>it.id === action.data.id? {...action.data}: it);
            break;
        }
        default:
            return state;
    }

    return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
    {
        id:1,
        emotion:1,
        content:"오늘의 일기 1번",
        date: 1676553436450,
    },
    {
        id:2,
        emotion:2,
        content:"오늘의 일기 2번",
        date: 1676553436451,
    },
    {
        id:3,
        emotion:3,
        content:"오늘의 일기 3번",
        date: 1676553436452,
    },
    {
        id:4,
        emotion:4,
        content:"오늘의 일기 4번",
        date: 1676553436453,
    },
    {
        id:5,
        emotion:5,
        content:"오늘의 일기 5번",
        date: 1676553436454,
    },
    {
        id:6,
        emotion:5,
        content:"오늘의 일기 5번",
        date: 1776553436454,
    }
]

function App() {

    const [data, dispatch] = useReducer(reducer, dummyData);

    const dataId = useRef(0);

    console.log(new Date().getTime())

    //CREATE
    const onCreate = (date, content, emotion) =>{
        dispatch({type :"CREATE", data:{
            id: dataId.current,
            date: new Date(date).getTime(),
            content,
            emotion,
        },
    });};
    // REMOVE
    const onRemove = (targetId)=>{
        dispatch({type:"REMOVE",targetId});
    };
    //EDIT
    const onEdit = (targetId, date, content, emotion) => {
        dispatch({
            type: "EDIT",
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotion,
            },
        });
    };
	return (
        <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
            value={{
                onCreate,
                onEdit,
                onRemove,
            }}>
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/New" element={<New />} />
					<Route path="/Edit" element={<Edit />} />
					<Route path="/Diary/:id" element={<Diary />} />
				</Routes>
			</div>
		</BrowserRouter>
        </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
	);
}

export default App;

import {Test} from "./components/Test";
import React from "react";

function App() {
    return (
        <div className={"bg-gray-700 text-white min-h-screen flex justify-center items-center px-2"}>
            <h1 className={"text-xl md:text-3xl absolute top-20"}>Тест на выбор языка для изучения</h1>
            <Test/>
        </div>
    )
}

export default App

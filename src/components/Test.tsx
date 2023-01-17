import React, {FC, useState} from 'react';
import {CurrentQuestion} from "./CurrentQuestion";
import {testTree} from "../constants/testTree";
import {ITreeNode} from "../types/ITreeNode";
import {Result} from "./Result";


export const Test: FC = () => {
    const [testIsOver, setTestIsOver] = useState(false)
    const [selectedLang, setSelectedLang] = useState("")
    const [currentNode, setCurrentNode] = useState<ITreeNode>(testTree)
    const resetHandler = () => {
        setSelectedLang("")
        setTestIsOver(false)
        setCurrentNode(testTree)
    }
    return (
        <div className={"max-w-xl w-full"}>
            {!testIsOver
                ? <CurrentQuestion
                    setCurrentNode={setCurrentNode}
                    currentNode={currentNode}
                    setTestIsOver={setTestIsOver}
                    setSelectedLang={setSelectedLang}
                />
                : <Result selectedLang={selectedLang} resetHandler={resetHandler}/>
            }
        </div>
    );
}

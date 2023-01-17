import React, {FC, useEffect, useState} from 'react';
import {CurrentQuestion} from "./CurrentQuestion";
import {testTree} from "../constants/testTree";
import {ITreeNode} from "../types/ITreeNode";
import {Result} from "./Result";


export const Test: FC = () => {
    const [questionAnswerChain, setQuestionAnswerChain] = useState<Array<string>>([])
    const [testIsOver, setTestIsOver] = useState(false)
    const [selectedLang, setSelectedLang] = useState("")
    const [currentNode, setCurrentNode] = useState<ITreeNode>(testTree)
    const resetHandler = () => {
        setSelectedLang("")
        setTestIsOver(false)
        setCurrentNode(testTree)
    }
    useEffect(() => {
        setQuestionAnswerChain([...questionAnswerChain, currentNode.question])
    }, [currentNode])
    return (
        <div className={"max-w-xl w-full"}>
            {!testIsOver
                ? <CurrentQuestion
                    setCurrentNode={setCurrentNode}
                    currentNode={currentNode}
                    setTestIsOver={setTestIsOver}
                    setSelectedLang={setSelectedLang}
                    setQuestionAnswerChain={setQuestionAnswerChain}
                    questionAnswerChain={questionAnswerChain}
                />
                : <>
                    <Result selectedLang={selectedLang} resetHandler={resetHandler}
                            questionAnswerChain={questionAnswerChain} setQuestionAnswerChain={setQuestionAnswerChain}/>
                </>
            }
        </div>
    );
}

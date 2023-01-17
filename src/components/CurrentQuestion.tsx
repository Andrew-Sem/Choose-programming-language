import React, {FC, useState} from 'react';
import {ITreeNode} from "../types/ITreeNode";

interface CurrentQuestionProps{
    setCurrentNode: (arg0:ITreeNode) => void
    currentNode: ITreeNode
    setTestIsOver: (arg0:boolean) => void
    setSelectedLang: (lang: string) => void
    setQuestionAnswerChain: (chain: Array<string>) => void
    questionAnswerChain: Array<string>
}

export const CurrentQuestion: FC<CurrentQuestionProps> = ({setCurrentNode, currentNode, setTestIsOver, setSelectedLang, setQuestionAnswerChain, questionAnswerChain}) => {
    const setNextQuestionHandler = (answer: "yes" | "no") => {
        setQuestionAnswerChain([...questionAnswerChain, answer])
        if(answer === "yes"){
            if(currentNode.left){
                return setCurrentNode(currentNode.left)
            }
            setSelectedLang(currentNode.answerYes)
            return setTestIsOver(true)
        }
        if(currentNode.right){
            return setCurrentNode(currentNode.right)
        }
        setSelectedLang(currentNode.answerNo)
        setTestIsOver(true)
    }

    const {left, right, question} = currentNode
    return (
        <div className={"rounded-lg overflow-hidden flex flex-col justify-between shadow-xl shadow-gray-900/20 w-full"}>
            <div className={"px-4 py-16 text-2xl bg-gradient-to-r from-sky-500 to-blue-600 flex justify-center"}>{question}</div>
            <div className={"flex justify-between cursor-pointer"}>
                <button
                    className={"p-4 w-1/2 flex justify-center bg-green-500 lg:hover:bg-green-600 ease-in duration-100"}
                    onClick={() => setNextQuestionHandler("yes")}
                >
                    Да
                </button>
                <button
                    className={"p-4 w-1/2 flex justify-center bg-pink-500 lg:hover:bg-pink-600 ease-in duration-100"}
                    onClick={() => setNextQuestionHandler("no")}
                >
                    Нет
                </button>
            </div>
        </div>
    );
}

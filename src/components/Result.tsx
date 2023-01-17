import React, {FC, useEffect} from 'react';

interface ResultProps{
    selectedLang: string
    resetHandler: () => void
    setQuestionAnswerChain: (chain: Array<string>) => void
    questionAnswerChain: Array<string>
}

export const Result: FC<ResultProps> = ({ resetHandler, selectedLang, questionAnswerChain, setQuestionAnswerChain}) => {
    useEffect(() => {
        console.log(questionAnswerChain)
    }, [])
    const rerunTest = () => {
        resetHandler()
        setQuestionAnswerChain([])
    }
    return (
        <div className={"flex flex-col items-center w-76 bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-12 rounded-xl"}>
            <div>Поздравляю, подходящий Вам язык: {selectedLang}</div>
            <button
                className={"mt-10 px-6 py-3 bg-slate-900/50 hover:bg-slate-900/60 ease-in duration-100  rounded shadow-lg"}
                onClick={rerunTest}
            >
                Пройти ещё раз
            </button>
        </div>
    );
}

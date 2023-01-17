import {ITreeNode} from "../types/ITreeNode";

export const testTree: ITreeNode = {
    question: "Хотите много зарабатывать?",
    answerYes: "",
    answerNo: "",
    left: {
        question: "Вы тупой?",
        answerYes: "",
        answerNo: "",
        left: {
            question: "Очень?",
            answerYes: "",
            answerNo: "",
            left: {
                question: "Вы насмотрели уроков от Хауди Хо?",
                answerYes: "Python",
                answerNo: "",
                right: {
                    question: "У Вас есть друзья?",
                    answerYes: "",
                    answerNo: "Shell",
                    left: {
                        question: "Они тоже тупые?",
                        answerYes: "",
                        answerNo: "",
                        right: {
                            question: "Вам нравится Windows?",
                            answerYes: "C#",
                            answerNo: "",
                            right: {
                                question: "Ваше имя Алексей?",
                                answerYes: "",
                                answerNo: "",
                                right: {
                                    question: "У Вас есть кредит на айфон?",
                                    answerYes: "Swift",
                                    answerNo: "",
                                    right: {
                                        question: "Вы любите нейросети?",
                                        answerYes: "R",
                                        answerNo: "Elixir"
                                    }
                                },
                                left: {
                                    question: "Хотите делать приложения для всех платформ сразу?",
                                    answerYes: "Dart",
                                    answerNo: "Go"
                                }
                            }
                        },
                        left: {
                            question: "У вас быстрый интернет?",
                            answerYes: "",
                            answerNo: "1C",
                            left: {
                                question: "Вы хотите развиваться?",
                                answerYes: "Typescript",
                                answerNo: "Javascript"
                            }
                        }
                    }
                }
            },
            right: {
                question: "Вы инженер?",
                answerYes: "Matlab",
                answerNo: "Haskell",
            }
        },
        right: {
            question: "Вы плачете по ночам?",
            answerYes: "",
            answerNo: "",
            left: {
                question: "Вам больше 40?",
                answerYes: "Java",
                answerNo: "Kotlin",
            },
            right: {
                question: "А хотите?",
                answerYes: "",
                answerNo: "",
                left: {
                    question: "А если ещё и головой в стенку биться?",
                    answerYes: "Assembler",
                    answerNo: "Fortran",
                },
                right: {
                    question: "Вы знаете что такое open source?",
                    answerYes: "Rust",
                    answerNo: "С/C++",
                },
            },
        },
    },
    right: {
        question: "Вы учитесь в ВПИ?",
        answerYes: "PHP",
        answerNo: "Delphi",
    },
}

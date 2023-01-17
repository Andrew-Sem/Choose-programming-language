export interface ITreeNode{
    question: string
    answerYes: string
    answerNo: string
    left?: ITreeNode | null
    right?: ITreeNode | null
}
import {ITreeNode} from "../../types/ITreeNode";
import {testTree} from "../../constants/testTree";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface TestState {
    currentNode: ITreeNode | null
    selectedLang: string
}

const initialState:TestState = {
    currentNode: testTree,
    selectedLang: "none"
}

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers:{
        setCurrentNode: (state, action:PayloadAction<ITreeNode | null>) => {
            state.currentNode = action.payload
        },
    }
})

export default testSlice.reducer

export const {setCurrentNode} = testSlice.actions
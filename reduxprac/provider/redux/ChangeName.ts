import { createSlice } from '@reduxjs/toolkit'

export const ChangeName = createSlice({
    name: 'ChangeName',
    initialState:{
        name: "Snehal bhai ka brain tanish bhai ka game"
    },
    reducers:{
        SetName (state, action){
            state.name = action.payload;
        }
    }
})

export const { SetName } = ChangeName.actions
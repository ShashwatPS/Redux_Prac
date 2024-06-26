import { createSlice } from '@reduxjs/toolkit'

export const ChangeNumber = createSlice({
    name: 'ChangeNumber',
    initialState:{
        number: 1
    },
    reducers:{
        IncreaseNumber (state, action){
            state.number = state.number + action.payload;
        }
    }
})

export const { IncreaseNumber } = ChangeNumber.actions
import { configureStore } from '@reduxjs/toolkit'
import {ChangeNumber} from "@/provider/redux/ChangeNumber";

export const store = configureStore({
    reducer:{
        'ChangeNumber': ChangeNumber.reducer
    }
})
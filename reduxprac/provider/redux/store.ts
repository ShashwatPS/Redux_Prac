import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {ChangeNumber} from "@/provider/redux/ChangeNumber";
import {ChangeName} from "@/provider/redux/ChangeName";
import {FetchData} from "@/provider/redux/FetchData";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    ChangeNumber: ChangeNumber.reducer,
    ChangeName: ChangeName.reducer,
    FetchData: FetchData.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
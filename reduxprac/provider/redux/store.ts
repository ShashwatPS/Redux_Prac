import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {ChangeNumber} from "@/provider/redux/ChangeNumber";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    ChangeNumber: ChangeNumber.reducer,
    // Add other reducers here if needed
});

export const store = configureStore({
    reducer: rootReducer,
});
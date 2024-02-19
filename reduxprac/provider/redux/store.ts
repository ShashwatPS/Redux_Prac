import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {ChangeNumber} from "@/provider/redux/ChangeNumber";

// Define the type for the root state
export type RootState = ReturnType<typeof rootReducer>;

// Combine reducers
const rootReducer = combineReducers({
    ChangeNumber: ChangeNumber.reducer,
    // Add other reducers here if needed
});

// Create store
export const store = configureStore({
    reducer: rootReducer,
});
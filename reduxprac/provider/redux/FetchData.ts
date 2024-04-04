import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RequestData {
    hobby: string;
}
interface ResponseData {
    id: string;
    firstName: string;
    lastName: string;
    hobby: string;
}

type ResponseDataArray = ResponseData[];
export const fetchData = createAsyncThunk<ResponseDataArray, RequestData>(
    'fetchData/fetch',
    async (requestData, thunkAPI) => {
            const apiUrl = 'http://localhost:4000/users';
            const headers: HeadersInit = {
                'Content-Type': 'application/json'
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            return responseData;
    }
);

export const FetchData = createSlice({
    name: 'FetchData',
    initialState: {
        data: null as ResponseDataArray | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});
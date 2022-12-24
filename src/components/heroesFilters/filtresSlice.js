import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

export const fetchFiltres = createAsyncThunk(
    'filtres/fetchFiltres',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/filters");
    }
);

const filtresSlice = createSlice({
    name: 'filtres',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiltres.pending, state => {state.filtersLoadingStatus = 'loading'})
            .addCase(fetchFiltres.fulfilled, (state, action) => {
                state.filters = action.payload;
                state.filtersLoadingStatus = 'idle';
            })
            .addCase(fetchFiltres.rejected, state => {state.filtersLoadingStatus = 'error'})
            .addDefaultCase(() => {});
    }
});

const {actions, reducer} = filtresSlice;

export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanged
} = actions;
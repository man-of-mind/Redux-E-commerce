import { reducers } from "./reducers/index";
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>

export default store
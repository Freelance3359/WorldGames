import { configureStore } from "@reduxjs/toolkit";
import userReduser from './slices/slices'

export const store = configureStore({
    reducer: {
        user: userReduser
    }
})
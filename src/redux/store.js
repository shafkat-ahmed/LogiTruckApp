import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice';
import userDashboardSlice from './features/userDashboardSlice';

export const store = configureStore({
    reducer : {
        login : loginReducer,
        userDashboard : userDashboardSlice,
    }
});
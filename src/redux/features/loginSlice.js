import AsyncStorage from '@react-native-community/async-storage';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAsync } from '@utility/api';


const initialState = {
    username : null,
    password : null,
    userId   : null,
    loading  : false,
    error    : null,
}

export const login = createAsyncThunk(
    `loginModule/login`,
    async (payload) => {
      // const { email, password } = payload;
      const response = await loginAsync(payload);
      const data = response;
      return data;
    }
  );


export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        fillup : (state) => {
            state.username= "sweetitech@gmail.com",
            state.password= "00000000"
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
        state.loading = false;
        // state.data = action.payload;
        AsyncStorage.setItem("access_token",JSON.stringify(action.payload.data.access_token));
        AsyncStorage.setItem("refresh_token",JSON.stringify(action.payload.data.refresh_token));
        // AsyncStorage.setItem("userSlug",action.payload.userSlug);
        state.userId = action.payload.data.userId;
        },
        [login.rejected]: (state) => {
        state.loading = false;
        },
    }
});

export const {fillup} = loginSlice.actions;
export default loginSlice.reducer;




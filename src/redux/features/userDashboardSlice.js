import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserByIdAsync } from '@utility/api';


const initialState = {
    userInfo : null,
    loading  : false,
    error    : null,
}

export const getUserById = createAsyncThunk(
    `userModule/getUserById`,
    async (payload) => {
      // const { email, password } = payload;
      const response = await getUserByIdAsync(payload);
      const data = response;
      return data;
    }
  );


export const userDashboardSlice = createSlice({
    name:'userDashboard',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getUserById.pending]: (state) => {
            state.loading = true;
        },
        [getUserById.fulfilled]: (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.data;
        },
        [getUserById.rejected]: (state) => {
        state.loading = false;
        },
    }
});

// export const {fillup} = userDashboardSlice.actions;
export default userDashboardSlice.reducer;




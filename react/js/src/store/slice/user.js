import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { getUserInfo } = userSlice.actions;
export default userSlice.reducer;

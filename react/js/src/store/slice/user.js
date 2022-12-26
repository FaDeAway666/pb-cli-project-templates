import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userSignout } from "../../api/user";

export const SIGN_OUT = createAsyncThunk("user/signOut", async (userId) => {
  try {
    const response = await userSignout({ userId })
    return response
  } catch (e) {
    console.log(e, "error")
    return e
  }
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SIGN_OUT.fulfilled, (state, action) => {
      console.log(action.payload, "fill payload")
      state.userInfo = {}
    })
  }
});

export default userSlice.reducer;

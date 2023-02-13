import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  loginState: false,
  isLoading: false,
  users: null,
};
// https://jsonplaceholder.typicode.com/users

// async thunk api
export const getAllUsers = createAsyncThunk(
  "general/getAllUsers",
  async (_, thunkApi) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.counter += 1;
    },
    descrement: (state, action) => {
      console.log(action);
      state.counter = state.counter === 0 ? 0 : state.counter - 1;
    },
    reset: (state, action) => {
      const { resetValue, name } = action.payload;
      console.log("my name is ", name);
      state.counter = resetValue;
    },
    login: (state, action) => {
      state.loginState = true;
    },
    logout: (state, action) => {
      state.loginState = false;
    },
  },
  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.isLoading = true;
      state.users = null;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.users = null;
    },
  },
});

export const { increment, descrement, reset, login, logout } =
  generalSlice.actions;

export default generalSlice.reducer;

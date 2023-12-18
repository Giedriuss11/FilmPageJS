import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    userLog: [],
    name: "",
    toggle: false,
  },
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    setUserData: (state, action) => {
      return {
        ...state,
        userLog: action.payload,
      };
    },
    setName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setData, setName, setToggle, setUserData } = userSlice.actions;
export default userSlice.reducer;

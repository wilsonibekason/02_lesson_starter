import { createSlice } from "@reduxjs/toolkit";

import React from "react";

const initialState = [{ id: "1", name: "wilson ibekason" }];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;

import {
  createSlice,
  createImmutableStateInvariantMiddleware,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
// create an axios instance and import as a base Url
const USER_URL = "https://jsonplaceholder.typicode.com/users";

// const initialState = [{ id: "1", name: "wilson ibekason" }];
const initialState = [];
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USER_URL);
    // return [...(await response).data]
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // addcase adddefaultcase addmatch
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // meta type and payload
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
//TODO:
// add reducers function

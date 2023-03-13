import { createSlice } from "@reduxjs/toolkit";


 const EditSlice = createSlice({
    name: "selectedTodo",
    initialState: null,
    reducers: {
      select: (state, { payload }) => payload.id
    }
  });

  export const { select } = EditSlice.actions;
export default EditSlice.reducer;
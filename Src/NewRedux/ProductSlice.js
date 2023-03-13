import {createSlice} from '@reduxjs/toolkit';

export const Add = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    prepare: ({id, title, des, price, rating}) => ({
      payload: {
        id,
        title,
        des,
        price,
        rating,
      },
    }),
    DeleteNote: (state, {payload: index}) => {
      state.splice(index, 1);
    },
    EditNote: (state, {payload}) => {
      const existingNote = state.find(note => note.id === payload.id);
      if (existingNote) {
        existingNote.title = payload.title;
        existingNote.des = payload.des;
        existingNote.price = payload.price;
        existingNote.rating = payload.rating;
      }
    },
  },
});

export const {addProduct, DeleteNote, EditNote} = Add.actions;


export default Add.reducer;

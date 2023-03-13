import {createSlice} from '@reduxjs/toolkit';
const initialStateValues = {
  coin: 1,
}
const CalculationSlice = createSlice({

  name: 'countTest',
  initialState: initialStateValues,
  reducers: {

    increment: state => {
      console.log("state==",state)
      state.coin  += 1;
      console.log('State', state.coin );
    },
    decrement: state => {
      if ( state.coin>1) {
        state.coin -= 1;
        console.log('State', state.coin );  
      }

    },

    incrementByAmount: (state, action) => {
      state.coin  += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = CalculationSlice.actions;
export default CalculationSlice.reducer;

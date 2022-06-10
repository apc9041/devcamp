import { createSlice } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

export const productReducer = createSlice({
  // ชื่อตัว Reducer
  name: "productReducer",
  // ชื่อตัว ค่าเริ่มต้นของ State
  initialState: {
    firstname: "Steve",
    lastname: "Roger",
    age: 45,
  },
  // ชื่อ Action ใน Reducer
  reducers: {
    changeName: (state, firstname) => {
      state.firstname = firstname.payload;
    },
    changeLastname: (state, lastname) => {
      state.lastname = lastname.payload;
    },
    changeAge: (state, age) => {
      state.age = age.payload;
    }
  },
});
// Export Reducer
export default productReducer.reducer;
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { changeName, changeLastname, changeAge } = productReducer.actions;
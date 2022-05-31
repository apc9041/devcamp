import { createSlice } from '@reduxjs/toolkit'

export const calculateReducer = createSlice({
    // ชื่อตัว Reducer
    name: 'calculate',
    // ชื่อตัว ค่าเริ่มต้นของ State
    initialState: {
        salary: 18000,
        salary2: 25000,
    },
    // ชื่อ Action ใน Reducer
    reducers: {
        increment: state => {
            state.salary += 1000
            state.salary2 += 2000
        },
        decrement: state => {
            state.salary -= 1000
            state.salary2 -= 2000
        },
        setDefault: state => {
            state.salary = 18000
            state.salary2 = 25000
        }
    }
})
// Export Reducer
export default calculateReducer.reducer
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { increment, decrement, setDefault } = calculateReducer.actions


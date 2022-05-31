import { createSlice } from '@reduxjs/toolkit'

export const Workplace = createSlice({
    // ชื่อตัว Reducer
    name: 'workplace',
    // ชื่อตัว ค่าเริ่มต้นของ State
    initialState: {
        workplace: 'firstplace',
    },
    // ชื่อ Action ใน Reducer
    reducers: {
        increment2: state => {
            state.workplace += 'next place'

        },
        decrement2: state => {
            state.workplace -= 'next place'

        },
        setDefault2: state => {
            state.workplace = 'firstplace'

        }
    }
})
// Export Reducer
export default Workplace.reducer
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { increment2, decrement2, setDefault2 } = Workplace.actions
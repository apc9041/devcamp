
import { configureStore } from '@reduxjs/toolkit';
import calculateReducer from './calculateReducer';
import Workplace  from './profile';


const store = configureStore({
    reducer: {
        counter: calculateReducer,
        addworkplace : Workplace,
    }
})

export default store


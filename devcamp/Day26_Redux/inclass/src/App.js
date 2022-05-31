import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setDefault } from './calculateReducer';
import { increment2, decrement2, setDefault2 } from './profile';

function App() {
  // Get ค่า State
  const count = useSelector(state => state.counter);
  const addworkplace = useSelector(state => state.addworkplace) 
  // ใช้เรียก Actions
  const dispatch = useDispatch()

  return (
    <><h1>{count.salary}</h1>
      <input type='button' value="Increase Salary" onClick={() => dispatch(increment())} />
      <input type='button' value="Decreate Salary" onClick={() => dispatch(decrement())} />
      <input type='button' value="Default Salary" onClick={() => dispatch(setDefault())} />
      <br/>
      <h1>{addworkplace.workplace}</h1>
      <input type='button' value="Increase workplace" onClick={() => dispatch(increment2())} />
      <input type='button' value="Decreate workplace" onClick={() => dispatch(decrement2())} />
      <input type='button' value="Default workplace" onClick={() => dispatch(setDefault2())} />
    </>
  );
}

export default App;
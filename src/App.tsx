import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment } from "./redux/features/counter/counterSlice"


function App() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()
  console.log(dispatch)
  return (
   <div>
    <div className="flex space-x-6 justify-center items-center">
      <button  className="px-6 py-2 border-2 border-red-700" onClick={() => dispatch(increment())}>Increment</button>
      <div>{count}</div>
      <button  className="px-6 py-2 border-2 border-green-700" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
   </div>
  )
}

export default App

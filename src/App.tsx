
import { decrement, increment } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"


function App() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()
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

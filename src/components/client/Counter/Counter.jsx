import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../../store/counterSlice";

export default function Counter() {
   const val = useSelector(state=>state.counter.value)
   const dispatch = useDispatch();
   const inc = ()=>{
    dispatch(increment())
   }
   const dec = ()=>{
    dispatch(decrement())
   }
  return (
    <>
    Counter
    <div>
    <button className='btn btn-danger' onClick={dec}>
        -
    </button>
    <input value={val}  type='text' readOnly />
    <button className='btn' onClick={inc}>
        +
    </button>
    </div>
 
    
    </>
  )
}

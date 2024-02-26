// import Image from "next/image";
import { Inter } from "next/font/google";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../ReduxStore/Counter/CounterSlice'


const inter = Inter({ subsets: ["latin"] });


export default function index() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (

<>

<button onClick={() => dispatch(increment())}>+</button>
<h1>{count}</h1>
<button onClick={() => dispatch(decrement())}>-</button>
</>

  );
}
'use client'

import { useSelector,  useDispatch} from 'react-redux'
import { RootState } from '@/provider/redux/store'
import {IncreaseNumber} from "@/provider/redux/ChangeNumber";
export default function Home() {

    const state = useSelector((state: RootState) => state.ChangeNumber.number);
    console.log({state})

    const dispatch = useDispatch();

  return (
    <div>
      <h1>
        This is the home page
      </h1>
        <button onClick={() => dispatch(IncreaseNumber())}>Change Number</button>
        {state}
    </div>
  );
}

'use client'

import { useSelector,  useDispatch} from 'react-redux'
import { RootState } from '@/provider/redux/store'
import {IncreaseNumber} from "@/provider/redux/ChangeNumber";
import {SetName} from "@/provider/redux/ChangeName";
export default function Home() {

    const state = useSelector((state: RootState) => state.ChangeNumber.number);
    console.log({state})
    const stateName = useSelector((state: RootState) => state.ChangeName.name);
    console.log({stateName})

    const dispatch = useDispatch();

  return (
    <div>
      <h1>
        This is the home page
      </h1>
        <button onClick={() => dispatch(IncreaseNumber())}>Change Number</button>
        {state}
        <div>
        <button onClick={()=>dispatch(SetName("Shashwat Singh"))}>Change Name</button>
            <p>{stateName}</p>
        </div>
    </div>
  );
}

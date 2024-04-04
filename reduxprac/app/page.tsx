'use client'

import { useSelector,  useDispatch} from 'react-redux'
import { RootState } from '@/provider/redux/store'
import {IncreaseNumber} from "@/provider/redux/ChangeNumber";
import {SetName} from "@/provider/redux/ChangeName";
import {fetchData} from "@/provider/redux/FetchData";
import {RequestData} from "../provider/redux/FetchData";
import {ThunkDispatch} from "redux-thunk";
export default function Home() {

    const state = useSelector((state: RootState) => state.ChangeNumber.number);
    console.log({state})
    const stateName = useSelector((state: RootState) => state.ChangeName.name);
    console.log({stateName})
    const { data, loading, error } = useSelector((state: RootState) => state.FetchData);
    console.log({data})

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();



  return (
    <div>
      <h1>
        This is the home page
      </h1>
        <button onClick={() => dispatch(IncreaseNumber(2))}>Change Number</button>
        {state}
        <div>
        <button onClick={()=>dispatch(SetName("Shashwat Singh"))}>Change Name</button>
            <p>{stateName}</p>
        </div>
        <div>
            <button onClick={() => dispatch(fetchData({ hobby: "Watching Anime" }))}>Fetch Data</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.firstName} {item.lastName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
}

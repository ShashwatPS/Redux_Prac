'use client'

import { useSelector } from 'react-redux'
import { RootState } from '../provider/redux/store'
export default function Home() {

    const state = useSelector((state: RootState) => state.ChangeNumber.number);
    console.log({state})

  return (
    <div>
      <h1>
        This is the home page
      </h1>
    </div>
  );
}

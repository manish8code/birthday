import React, { useState } from 'react'
import Propose from '../Components/Propose'
import AfterPropose from '../Components/AfterPropose';
const Love3 = () => {
  const [yes,setYes]=useState(false);
  return (
    <div className='' >
           {(!yes) ? <Propose  setYes={setYes} /> : <AfterPropose />}
    </div>
  )
}

export default Love3

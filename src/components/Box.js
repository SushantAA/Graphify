import React, { useState } from "react";

import "../style/Box.css";

import { stringId, coordinate_from_id } from "../logic/conversion_id";

export default function Box({
  key,
  boxarr,
  start_square_vertical,
  start_square_horizonatal,
  end_square_vertical,
  end_square_horizonatal,

  drag,
  setdragmazet,
  setdragmazef,
  aaa,
}) {
  let x = 'Box';
  if(boxarr[4]==1){
    x='Wall';
  }
  else if(boxarr[4]==2){
    x='End';
  }
  else if(boxarr[4]==3){
    x='Start';
  }
  else if(boxarr[4]==5){
    x='Visit';
  }
  else if(boxarr[4]==6){
    x='Min';
  }
  

  
  const [state, setstate] = useState(x);

  // console.log('key = ',key);
  // console.log('boxarr = ',boxarr);

  const makeWall = () => {
      if (drag && state=='Box' ) {
        setstate("Wall");
        console.log("mouse overrrrrrrr");
        aaa(boxarr[6], 1);
      }
  };

  const bc_setdragmazet = () => {
    setdragmazet();
  };

  const bc_setdragmazef = () => {
    setdragmazef();
  };

  return (
    <div
      className={state}
      onMouseDown={bc_setdragmazet}
      onMouseUp={bc_setdragmazef}
      onMouseMove={makeWall}
      onClick={makeWall}
    >
      {/* {    console.log('bbbbbbbbbbbbb')} */}
    </div>
  );
}

import React, { useState , useEffect } from "react";

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
  start_do,
  end_do,
  startControl,
  wallControl,
  endControl,
  aaa,
}) {
  let x = "Box";
  if (boxarr[4] == 1) {
    x = "Wall";
  } else if (boxarr[4] == 2) {
    x = "End";
  } else if (boxarr[4] == 3) {
    x = "Start";
  } else if (boxarr[4] == 5) {
    x = "Visit";
  } else if (boxarr[4] == 6) {
    x = "Min";
  } else if (boxarr[4]== 15){
    x = "AniVisit";
  }else if (boxarr[4]== 16){
    x = "AniMin";
  }
  const [state, setstate] = useState(x);

  // console.log('key = ',key);
  // console.log('boxarr = ',boxarr);

  // useEffect(() => {
  //   setstate(x);
  //   // console.log('change');
  // }, [state]);

  let uu = false;

  const makeWall = () => {
    
    console.log('wallControl = ',wallControl);



    if (drag && state == "Box" && !uu) {
      if(wallControl){
      setstate("Wall");
      console.log("mouse overrrrrrrr");
      aaa(boxarr[6], 1);
      }
      if(startControl){
        // setstate("Start");
        console.log("mouse overrrrrrrr");
        aaa(boxarr[6], 3);
        // setstate("Box");

      }
      if(endControl){
        // setstate("Start");
        console.log("mouse overrrrrrrr");
        aaa(boxarr[6], 2);
        // setstate("Box");

      }
    }else if(drag && state == "Start"){
    if(wallControl){
      uu = true;
      // setstate("Start");
      console.log("mouse overrrrrrrr");
      aaa(boxarr[6], 3);
      setstate("Box");
    }
    
    }
  };

  const bc_setdragmazet = () => {
    if(state=="End"){
      end_do(true);
    }
    if(state=="Start"){
      start_do(true);
    }
    setdragmazet();
  };

  const bc_setdragmazef = () => {
    if(state=="End"){
      end_do(false);
    }
    if(state=="Start"){
      start_do(false);
    }
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

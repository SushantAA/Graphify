import React, { useState, useEffect } from "react";

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
  setDragMazeT,
  setDragMazeF,
  startDo,
  endDo,
  add3,
  add5,
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
  } else if (boxarr[4] == 15) {
    x = "AniVisit";
  } else if (boxarr[4] == 16) {
    x = "AniMin";
  } else if (boxarr[4] == 25) {
    x = "Add5";
  }else if (boxarr[4] == 23) {
    x = "Add3";
  }
  const [state, setstate] = useState(x);

  let uu = false;

  const check = (id) => {
    let [i, j] = stringId(id);
    // a[i][j][4] ;
    if(i==start_square_vertical && j==start_square_horizonatal )  return false;
    if(i==end_square_vertical && j==end_square_horizonatal )  return false;
    return true;
  }


  const makeWall = () => {
    if (drag && state == "Box" && !uu) {
      if (wallControl  && check(boxarr[6]) ){
        setstate("Wall");
        aaa(boxarr[6], 1);
      }
      if (startControl && check(boxarr[6]) ) {
        aaa(boxarr[6], 3);
      }
      if (endControl && check(boxarr[6]) ) {
        aaa(boxarr[6], 2);
      }
      if (add5)  {
        console.log('======= 5');
        setstate("Add5");
        aaa(boxarr[6], 25);
      }
      if (add3)  {
        console.log('======= 3');

        setstate("Add3");
        aaa(boxarr[6], 23);
      }
    } else if (drag && state == "Start") {
      if (wallControl  && check(boxarr[6]) ) {
        uu = true;
        aaa(boxarr[6], 3);
        setstate("Box");
      }
    }
  };

  const bc_setDragMazeT = () => {
    if (state == "End") {
      endDo(true);
    }
    if (state == "Start") {
      startDo(true);
    }
    setDragMazeT();
  };

  const bc_setDragMazeF = () => {
    if (state == "End") {
      endDo(false);
    }
    if (state == "Start") {
      startDo(false);
    }
    setDragMazeF();
  };

  return (
    <div
      className={state}
      onMouseDown={bc_setDragMazeT}
      onMouseUp={bc_setDragMazeF}
      onMouseMove={makeWall}
      onClick={makeWall}
    ></div>
  );
}

import React, { useEffect,useState } from "react";

import { mazeArray } from "../logic/mazeCreation";
import { bfs } from "../logic/algorithms/bfs";

import Box from "./Box";
import BfsButton from "./menubar/BfsButton";

export default function Maze() {
  let start_square_vertical = 1;
  let start_square_horizonatal = 1;
  let end_square_vertical = 9;
  let end_square_horizonatal = 9;

  let start_square_id = "7,7";
  let end_square_id = "9,20";

  // mazeArray[start_square_vertical][start_square_horizonatal][]

  // console.log(mazeArray);
  const [mazeArrayState, mazeArrayStateUpdate] = useState(mazeArray);
  const [drag, setdrag] = useState(false);
  const [ac, setac] = useState('bb');
  const [blood, setblood] = useState(false)

  const stringId = (id) => {
    // console.log('move id ======== ',id);
    let k = 0;
    let j = "";
    for (; k < id.length && id[k] != ","; k++) {
      j = j + id[k];
    }
    let i = "";
    k++;
    for (; k < id.length; k++) {
      i = i + id[k];
    }
    i = parseInt(i);
    j = parseInt(j);
    return [i, j];
  };

  const aaa = (id, blockState) => {
    const a = mazeArrayState;
    let [i, j] = stringId(id);
    // console.log(i,j);
    a[i][j][4] = blockState;
    // console.log('blockState = ',blockState);
    // console.log('a = ');
    // console.log(a);
    mazeArrayStateUpdate(a);
    // console.log('mazeArrayState = ');
    // console.log(mazeArrayState);
  };

  const setdragmazet = () => {
    console.log("mouse downnnnnn");
    setdrag(true);
  };
  const setdragmazef = () => {
    console.log("mouse uppppppp");
    setdrag(false);
  };

  const update_bc = (ss) => {
    mazeArrayStateUpdate(ss);
    let bb = blood;
    bb = !bb;
    setblood(bb);

    if (uu) {
      console.log(1);
      setac('bb');
    } else {
      console.log(2);
      setac('rr');
    }
    uu = !uu;
    console.log('uu=',uu);
    console.log('bb=',bb);
    console.log('ac=',ac);
    console.log('blood=',blood);
    console.log(mazeArrayState);
  };

  let uu = false;

  const bfs_do = () => {
    console.log("heheheeee");
    let sss = mazeArrayState;

    console.log('==================');
    // mazeArrayStateUpdate(
    let [tt, visited_animate] = bfs(
      sss,
      start_square_vertical,
      start_square_horizonatal,
      end_square_vertical,
      end_square_horizonatal,
      10,
      10
    );


    console.log('||||||||||||||||||');

    let rep = setInterval(function () {
      console.log("animai");
      if (visited_animate.length == 0) {
        clearInterval(rep);
        return;
      } else {
        let id = visited_animate[0];
        visited_animate.shift();
        let [j, i] = stringId(id);
        let ss = mazeArrayState;
        ss[i][j][4] = 5;
        // console.log(id);
        update_bc(ss);
      }
    }, 100);


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    // clearInterval(rep);

    //   mazeArrayStateUpdate(tt);
    //   if(ac=='rr'){
    //   setac('bb');
    // }else{
    //     setac('rr');
    //   }
    //   console.log('[[[[[[[[[[');
    //   console.log(tt);
  }

  // /==============================================



  return (
    <div className={ac}>
      <button onClick={bfs_do}>bfs</button>
      {mazeArrayState.map((item) => (
        <div key={item}>
          {item.map((ii) => (
            <Box
              key={ii[7]}
              start_square_vertical={start_square_vertical}
              start_square_horizonatal={start_square_horizonatal}
              end_square_vertical={end_square_vertical}
              end_square_horizonatal={end_square_horizonatal}
              setdragmazet={setdragmazet}
              setdragmazef={setdragmazef}
              aaa={aaa}
              boxarr={ii}
              drag={drag}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// start_square_vertical = 7;
//     let start_square_horizonatal = 7;
//     let end_square_vertical = 9;
//     let end_square_horizonatal

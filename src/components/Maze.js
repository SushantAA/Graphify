import React, { useEffect,useState } from "react";

import { mazeArray } from "../logic/mazeCreation";
import { bfs } from "../logic/algorithms/bfs";
import { dfs } from "../logic/algorithms/dfs";

import Box from "./Box";
import BfsButton from "./menubar/BfsButton";

export default function Maze() {
  let start_square_vertical = 1;
  let start_square_horizonatal = 1;
  let end_square_vertical = 9;
  let end_square_horizonatal = 9;

  let start_square_id = "7,7";
  let end_square_id = "9,20";
  
  const [mazeArrayState, mazeArrayStateUpdate] = useState(mazeArray);
  const [drag, setdrag] = useState(false);
  const [ac, setac] = useState('bb');

  const stringId = (id) => {
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
    a[i][j][4] = blockState;
    mazeArrayStateUpdate(a);
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
    if (uu) {
      console.log(1);
      setac('bb');
    } else {
      console.log(2);
      setac('rr');
    }
    uu = !uu;
  };

  let uu = false;

  const hh = (visited_animate) => {
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
  }

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

    hh(visited_animate);

  }

  const dfs_do = () => {
    console.log("heheheeee");
    let sss = mazeArrayState;

    console.log('==================');
    // mazeArrayStateUpdate(
    let visited_animate = dfs(
      sss,
      start_square_vertical,
      start_square_horizonatal,
      end_square_vertical,
      end_square_horizonatal,
      10,
      10
    );
      hh(visited_animate);
  }

  return (
    <div className={ac}>
      <button onClick={bfs_do}>bfs</button>
      <button onClick={dfs_do}>dfs</button>
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

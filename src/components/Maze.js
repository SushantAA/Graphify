import React, { useEffect, useState } from "react";

import { mazeArray } from "../logic/mazeCreation";
import { bfs } from "../logic/algorithms/bfs";
import { dfs } from "../logic/algorithms/dfs";
import { bfsPath } from "../logic/algorithms/bfsPath";
import { dijkstra } from "../logic/algorithms/dijkstra";
import { astar } from "../logic/algorithms/astar";

import Box from "./Box";
import BfsButton from "./menubar/BfsButton";

export default function Maze() {

  let start_square_id = "7,7";
  let end_square_id = "9,20";

  const [mazeArrayState, mazeArrayStateUpdate] = useState(mazeArray);
  const [drag, setdrag] = useState(false);
  const [ac, setac] = useState("bb");
  const [wallControl, setwallControl] = useState(false);
  const [add3, setadd3] = useState(false);
  const [add5, setadd5] = useState(false);

  const [startControl, setStartControl] = useState(false);
  const [endControl, setEndControl] = useState(false);

  const [start_square_vertical, setstart_square_vertical] = useState(1);
  const [start_square_horizonatal, setstart_square_horizonatal] = useState(1);
  const [end_square_vertical, setend_square_vertical] = useState(1);
  const [end_square_horizonatal, setend_square_horizonatal] = useState(1);

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

  let startIdPrevious = "1,1";

  let blockstatePrevious = 0;

  const aaa = (id, blockState) => {
    const a = mazeArrayState;

    if (startControl) {
      for (let ii = 0; ii < 10; ii++) {
        for (let jj = 0; jj < 10; jj++) {
          if (a[ii][jj][4] == 3) {
            a[ii][jj][4] = 0;
          }
        }
      }
    }

    if (endControl) {
      for (let ii = 0; ii < 10; ii++) {
        for (let jj = 0; jj < 10; jj++) {
          if (a[ii][jj][4] == 2) {
            a[ii][jj][4] = 0;
          }
        }
      }
    }

    let [i, j] = stringId(id);
    a[i][j][4] = blockState;

    if(blockState==25){
      a[i][j][5]+=5;
    }

    if(blockState==23){
      a[i][j][5]+=3;
    }

    if (startControl) {
      setstart_square_vertical(i);
      setstart_square_horizonatal(j);
    }

    if (endControl) {
      setend_square_vertical(i);
      setend_square_horizonatal(j);
    }

    mazeArrayStateUpdate(a);
  };

  const setDragMazeT = () => {
    setdrag(true);
  };
  const setDragMazeF = () => {
    setdrag(false);
  };

  const update_bc = (ss) => {
    mazeArrayStateUpdate(ss);
    if (uu) {
      setac("bb");
    } else {
      setac("rr");
    }
    uu = !uu;
  };

  let uu = false;

  const hh = (visited_animate, min_distance_node_array = null) => {
    let previous = "";

    let rep = setInterval(function () {
      if (visited_animate.length == 0) {
        clearInterval(rep);
        if (min_distance_node_array) {
          mhh(min_distance_node_array);
        }
        return;
      } else {
        let ss = mazeArrayState;

        ss[start_square_vertical][start_square_horizonatal][4] = 2;
        ss[end_square_vertical][end_square_horizonatal][4] = 3;

        if (previous != "") {
          let [j, i] = stringId(previous);
          ss[i][j][4] = 5;
        }

        let id = visited_animate[0];
        visited_animate.shift();
        let [j, i] = stringId(id);
        ss[i][j][4] = 15;
        previous = id;
        update_bc(ss);
      }
    }, 200);

    return rep;
  };

  const mhh = (min_distance_node_array) => {
    let previous = "";
    let rep = setInterval(function () {
      if (min_distance_node_array.length == 0) {
        clearInterval(rep);
        return;
      } else {
        let ss = mazeArrayState;

        
        ss[start_square_vertical][start_square_horizonatal][4] = 2;
        ss[end_square_vertical][end_square_horizonatal][4] = 3;

        if (previous != "") {
          let [j, i] = stringId(previous);
          ss[i][j][4] = 6;
        }

        let id = min_distance_node_array[0];
        min_distance_node_array.shift();
        let [j, i] = stringId(id);
        ss[i][j][4] = 16;
        previous = id;
        update_bc(ss);
      }
    }, 100);

    return rep;
  };

  const jjk = async (fuck) => {
    let sss = mazeArrayState;
    let [visited_animate, min_distance_node_array] = fuck(
      sss,
      start_square_vertical,
      start_square_horizonatal,
      end_square_vertical,
      end_square_horizonatal,
      10,
      10
    );

    min_distance_node_array.reverse();

    hh(visited_animate, min_distance_node_array);
  };

  const cck = (fuck) => {
    let sss = mazeArrayState;

    let [tt, visited_animate] = fuck(
      sss,
      start_square_vertical,
      start_square_horizonatal,
      end_square_vertical,
      end_square_horizonatal,
      10,
      10
    );

    hh(visited_animate);
  };

  const bfsDo = () => {
    cck(bfs);
  };

  const bfsPathDo = async () => {
    jjk(bfsPath);
  };

  const dijkstraDo = async () => {
    jjk(dijkstra);
  };

  const astarDo = async () => {
    jjk(astar);
  };

  const dfsDo = () => {
    // jjk(dfs);

    let sss = mazeArrayState;
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
  };

  const wallDo = () => {
    setwallControl(!wallControl);
  };

  const add3Do = () => {
    setadd3(!add3);
  };

  const add5Do = () => {
    setadd5(!add5);
  };

  const startDo = (stateChange) => {
    setStartControl(stateChange);
  };

  const endDo = (stateChange) => {
    setEndControl(stateChange);
  };

  return (
    <div className={ac}>
      <button onClick={bfsDo}>bfs</button>
      <button onClick={bfsPathDo}>bfsPath</button>
      <button onClick={dijkstraDo}>dijkstra</button>
      <button onClick={astarDo}>astar</button>
      <button onClick={dfsDo}>dfs</button>
      <button onClick={wallDo}>wall</button>
      <button onClick={add3Do}>add3</button>
      <button onClick={add5Do}>add5</button>
      {mazeArrayState.map((item) => (
        <div key={item}>
          {item.map((ii) => (
            <Box
              key={ii[7]}
              start_square_vertical={start_square_vertical}
              start_square_horizonatal={start_square_horizonatal}
              end_square_vertical={end_square_vertical}
              end_square_horizonatal={end_square_horizonatal}
              setDragMazeT={setDragMazeT}
              setDragMazeF={setDragMazeF}
              startDo={startDo}
              endDo={endDo}
              wallControl={wallControl}
              add3={add3}
              add5={add5}
              startControl={startControl}
              endControl={endControl}
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

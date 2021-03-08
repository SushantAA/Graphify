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
  // let start_square_vertical = 1;
  // let start_square_horizonatal = 1;
  // let end_square_vertical = 9;
  // let end_square_horizonatal = 9;

  let start_square_id = "7,7";
  let end_square_id = "9,20";

  const [mazeArrayState, mazeArrayStateUpdate] = useState(mazeArray);
  const [drag, setdrag] = useState(false);
  const [ac, setac] = useState("bb");
  const [wallControl, setwallControl] = useState(false)

  const [startControl, setStartControl] = useState(false)
  const [endControl, setEndControl] = useState(false)

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
    
    if(startControl){
      for(let ii =0;ii<10;ii++){
        for(let jj =0;jj<10;jj++){
          if(a[ii][jj][4]==3){
            a[ii][jj][4] =0;
          }
        }
      }
    }


    if(endControl){
      for(let ii =0;ii<10;ii++){
        for(let jj =0;jj<10;jj++){
          if(a[ii][jj][4]==2){
            a[ii][jj][4] =0;
          }
        }
      }
    }

    console.log('endControl = ',endControl,'   startControl = ',startControl);

    

    let [i, j] = stringId(id);
    a[i][j][4] = blockState;

    if(startControl){
      setstart_square_vertical(i);
      setstart_square_horizonatal(j);
    }


    if(endControl){
      setend_square_vertical(i);
      setend_square_horizonatal(j);
    }

    console.log('end_square_vertical = ',end_square_vertical,' end_square_horizonatal = ',end_square_horizonatal);
    console.log('start_square_vertical = ',start_square_vertical,' start_square_horizonatal = ',start_square_horizonatal);

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
      setac("bb");
    } else {
      console.log(2);
      setac("rr");
    }
    uu = !uu;
  };

  let uu = false;

  const hh =  (visited_animate, min_distance_node_array = null) => {
    let rep =  setInterval(function () {
      console.log("animai");
      if (visited_animate.length == 0) {
          clearInterval(rep);
        if(min_distance_node_array){
          mhh(min_distance_node_array);
        }
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


    return rep;
  };

  const mhh =  (min_distance_node_array) => {
    let rep =  setInterval(function () {
      console.log("animai");
      if (min_distance_node_array.length == 0) {
        clearInterval(rep);
        return;
      } else {
        let id = min_distance_node_array[0];
        min_distance_node_array.shift();
        let [j, i] = stringId(id);
        let ss = mazeArrayState;
        ss[i][j][4] = 6;
        // console.log(id);
        update_bc(ss);
      }
    }, 100);

    return rep;
  };

  const jjk = async (fuck) => {

    console.log('=========== bfs path before call ===================');
    console.log('end_square_vertical = ',end_square_vertical,' end_square_horizonatal = ',end_square_horizonatal);
    console.log('start_square_vertical = ',start_square_vertical,' start_square_horizonatal = ',start_square_horizonatal);
  

    console.log("heheheeee");
    let sss = mazeArrayState;

    console.log("==================");
    // mazeArrayStateUpdate(
    let [visited_animate, min_distance_node_array] = fuck(
      sss,
      start_square_vertical,
      start_square_horizonatal,
      end_square_vertical,
      end_square_horizonatal,
      10,
      10
    );

    console.log("visited_animate", visited_animate);
    console.log("min_distance_node_array = ", min_distance_node_array);

    hh(visited_animate, min_distance_node_array);
  };

  const cck = (fuck) => {
    console.log("heheheeee");
    let sss = mazeArrayState;

    console.log("==================");
    // mazeArrayStateUpdate(
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

  const bfs_do = () => {
    cck(bfs);
  };

  const bfs_path_do = async () => {



    jjk(bfsPath);
  };

  const dijkstra_do = async () => {
    jjk(dijkstra);
  };

  const astar_do = async () => {
    jjk(astar);
  };

  const dfs_do = () => {
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

  const wall_do = () => {
    setwallControl(!wallControl);
  }

  const start_do = (x) => {
    setStartControl(x);
  }

  const end_do = (x) => {
    setEndControl(x);
  }

  return (
    <div className={ac}>
      <button onClick={bfs_do}>bfs</button>
      <button onClick={bfs_path_do}>bfsPath</button>
      <button onClick={dijkstra_do}>dijkstra</button>
      <button onClick={astar_do}>astar</button>
      <button onClick={dfs_do}>dfs</button>
      <button onClick={wall_do}>wall</button>
      {/* <button onClick={start_do}>start</button>
      <button onClick={end_do}>end</button> */}



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
              start_do={start_do}
              end_do={end_do}
              wallControl={wallControl}
              startControl={startControl}
              endControl = {endControl}
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

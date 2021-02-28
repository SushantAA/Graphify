import React , {useState} from 'react'

import {mazeArray} from '../logic/mazeCreation'
import {bfs} from '../logic/algorithms/bfs'

import Box from './Box'
import BfsButton from './menubar/BfsButton'


export default function Maze() {

    let start_square_vertical = 1;
    let start_square_horizonatal = 1;
    let end_square_vertical = 9;
    let end_square_horizonatal = 9;
    
    let start_square_id = '7,7';
    let end_square_id = '9,20';

    // mazeArray[start_square_vertical][start_square_horizonatal][]

    // console.log(mazeArray);
    const [mazeArrayState,mazeArrayStateUpdate] = useState(mazeArray);
    const [drag, setdrag] = useState(false)
    const [ac, setac] = useState('bb')

    const stringId = (id) =>{
        // console.log('move id ======== ',id);
        let k=0;
        let j = "";
        for(;k<id.length && id[k]!=',';k++){
            j =j + id[k];
        }
        let i="";
        k++;
        for(;k<id.length ;k++){
            i =i + id[k];
        }
        i = parseInt(i);
        j = parseInt(j);
        return [i,j];
   }

   const aaa =(id,blockState) =>{
        const a = mazeArrayState;
        let [i,j] = stringId(id);
        // console.log(i,j);
        a[i][j][4] = blockState;
        // console.log('blockState = ',blockState);
        // console.log('a = ');
        // console.log(a);
        mazeArrayStateUpdate(a);
        // console.log('mazeArrayState = ');
        // console.log(mazeArrayState);
   }

   const setdragmazet = () =>{
       console.log('mouse downnnnnn');
       setdrag(true);
   }
   const setdragmazef = () =>{
    console.log('mouse uppppppp');
    setdrag(false);
 }

 const bfs_do = () => {
   console.log('heheheeee')
    // mazeArrayStateUpdate(
   const tt =  bfs (
       mazeArrayState,
        start_square_vertical,
        start_square_horizonatal,
         end_square_vertical,
       end_square_horizonatal,
         10,
         10 
      );

      mazeArrayStateUpdate(tt);
      if(ac=='rr'){
      setac('bb');}else{
        setac('rr');
      }
      console.log('[[[[[[[[[[');
      console.log(tt);
    // );
 }

   return (
        <div className={ac}>
            <button onClick={bfs_do} >
                bfs
            </button>
            {
                mazeArrayState.map( (item) =>(
                        <div key={item} >
                        {
                            item.map( (ii) =>(
                                <Box  key={ii[7]} 
                                start_square_vertical={start_square_vertical}
                                start_square_horizonatal={start_square_horizonatal}
                                end_square_vertical={end_square_vertical}
                                end_square_horizonatal={end_square_horizonatal}
                                
                                setdragmazet={setdragmazet} setdragmazef={setdragmazef}  aaa={aaa}  boxarr={ii} drag={drag} />      
                            ))
                        }
                        </div>
                ))
            }
        </div>
    )
}


// start_square_vertical = 7;
//     let start_square_horizonatal = 7;
//     let end_square_vertical = 9;
//     let end_square_horizonatal
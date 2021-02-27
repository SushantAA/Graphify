import React , {useState} from 'react'

import {mazeArray} from '../logic/mazeCreation'

import Box from './Box'

export default function Maze() {
    // console.log(mazeArray);
   const [mazeArrayState,mazeArrayStateUpdate] = useState(mazeArray);
    const [drag, setdrag] = useState(false)
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

   return (
        <div>
            {
                mazeArrayState.map( (item) =>(
                        <div key={item} >
                        {
                            item.map( (ii) =>(
                                <Box  key={ii[7]}  setdragmazet={setdragmazet} setdragmazef={setdragmazef}  aaa={aaa}  boxarr={ii} drag={drag} />      
                            ))
                        }
                        </div>
                ))
            }
        </div>
    )
}

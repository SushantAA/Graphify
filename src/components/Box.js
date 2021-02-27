import React,{useState} from 'react'

import '../style/Box.css'

export default function Box({key,boxarr,drag,setdragmazet,setdragmazef,aaa}) {
   
    const [state, setstate] = useState(boxarr[4])

    // console.log('key = ',key);
    // console.log('boxarr = ',boxarr);


    const makeWall = () =>{
       if(drag){
        setstate('Wall');
        console.log('mouse overrrrrrrr');
        aaa(boxarr[6],'Wall');
       }
    }

    const bc_setdragmazet = () => {
        setdragmazet();
    }

    const bc_setdragmazef = () => {
        setdragmazef();
    }

    return (
        <div className={state} onMouseDown={bc_setdragmazet} onMouseUp={bc_setdragmazef} onMouseMove={makeWall}  onClick={makeWall} >
            {/* {    console.log('bbbbbbbbbbbbb')} */}
        </div>
    )
}

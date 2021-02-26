import React from 'react'

import '../style/Box.css'

export default function Box({key,boxarr,aaa}) {
    console.log('key = ',key);
    console.log('boxarr = ',boxarr);


    const makeWall = () =>{
        boxarr[4] = 'Wall'
        aaa(boxarr[6],'Wall');
    }

    console.log('box arr [4] = ',boxarr[4]);

    return (
        <div className={boxarr[4]}  onClick={makeWall} >
            <p>{boxarr[4]}</p>
        </div>
    )
}

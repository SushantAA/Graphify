import React from 'react'

import {mazeArray} from '../logic/mazeCreation'

import Box from './Box'

export default function Maze() {
    console.log(mazeArray);
    return (
        <div>
            {mazeArray.map( (item) =>(
                    item.map( (i) =>(
                        <Box/>
                    ))
            ))}
        </div>
    )
}

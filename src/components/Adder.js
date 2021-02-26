import React from 'react'

export default function Adder({id,value = 1,add = 1,update_adder}) {
    
    const add_f =() =>{
        update_adder(id,value+add);
    }
    
    return (
        <div>
            <h3>{value}</h3>
            <button onClick={add_f} >{add}</button>
        </div>
    )
}

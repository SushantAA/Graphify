import React,{useState} from 'react'

import Adder from './Adder'
import '../App.css'
export default function TryAdder() {

    let all_adder = [
        {id:1,value:5,add:3},
        {id:2,value:15,add:2},
        {id:3,value:6,add:4},
        {id:4,value:8,add:7},
        {id:5,value:9,add:11}
    ];

    const[items,setItems] = useState(all_adder);

    const update_adder = (ida,newadd)=>{
        const newItems = items.map(i => {
            if(i.id===ida){
                return {...i,value:newadd}
            }
            return i;
        });
        console.log('ida = ',ida);
        console.log(newItems);
        console.log('===============');
        setItems(newItems);
    }

    return (
        <div>
            {items.map( (item) =>(
                // <li>
                <div className='adder_div'>
                <Adder key={item.id} update_adder={update_adder} {...item} />
                </div>
            ))}
        </div>
    )
}

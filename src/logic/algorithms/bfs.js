// alert('bfs new');

let make_id = (j,i) =>{
    let id = j.toString() + ',' + i.toString();
    return id;
}

let coordinate_from_id = (id) =>{
    let j="",i="";
    // console.log('move id ===== ',id);
    console.log("id =" ,typeof(id))
    let k=0;
    for(;k<id.length && id[k]!=',';k++)  j =j + id[k];
    k++;
    for(;k<id.length ;k++)       i =i + id[k];
    i = parseInt(i);
    j = parseInt(j);
    return [j,i];
}

let bfs_new = () =>{
    let h = new Map();

    let id = make_id(start_square_vertical,start_square_horizonatal);
    // h.set(id,true);

    let q = [id];

    while(q.length!=0){
        let f = q[0];
        console.log(f);
        q.shift();

        let x = coordinate_from_id(f);
        let  j = x[0] ,i = x[1] ;

        console.log('j = ',j ,' , i = ',i)
        visited_animate.push(f);

        if(j==end_square_vertical && i==end_square_horizonatal){
            console.log('bfs finished');
            return;
        }


        console.log('h.has = ' ,h.has(f));
        console.log('vertical_height   = ',vertical_height);
        console.log('horizontal_width  = ',horizontal_width)
        // j -> veritcal    |   i->horizontal
        if(j>0 )                     {let tid =make_id(j-1,i);  if(h.has(tid)===false && maze_array[j-1][i][4]!=1){ console.log('tid has = ',h.has(tid));  q.push(tid);    h.set(tid,true);   } }
        if(i>0 )                     {let tid =make_id(j,i-1);  if(h.has(tid)===false && maze_array[j][i-1][4]!=1){ console.log('tid has = ',h.has(tid));  q.push(tid);    h.set(tid,true);   } }
        if(j<vertical_height-1 )     {let tid =make_id(j+1,i);  if(h.has(tid)===false && maze_array[j+1][i][4]!=1){ console.log('tid has = ',h.has(tid)); q.push(tid);    h.set(tid,true);   } }
        if(i<horizontal_width-1 )    {let tid =make_id(j,i+1);  if(h.has(tid)===false && maze_array[j][i+1][4]!=1){ console.log('tid has = ',h.has(tid)); q.push(tid);    h.set(tid,true);   } }
        console.log('q size = ',q.length);
    }
}

document.querySelector('#bfs_new').addEventListener('click',function(){
    bfs_new();
});


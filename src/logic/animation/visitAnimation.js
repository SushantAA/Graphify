let make_id = (j, i) => {
    let id = j.toString() + "," + i.toString();
    return id;
  };


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

  let coordinate_from_id = (id) => {
    let j = "",
      i = "";
    // console.log('move id ===== ',id);
    console.log("id =", typeof id);
    let k = 0;
    for (; k < id.length && id[k] != ","; k++) j = j + id[k];
    k++;
    for (; k < id.length; k++) i = i + id[k];
    i = parseInt(i);
    j = parseInt(j);
    return [j, i];
  };

let visited_node_animation_conplete = false;

let visited_node_animation_function =(visited_animate,maze_array)=>{
    console.log(visited_animate);
    let i=0;
    let f = false;
    let rep = setInterval(function(){
        if(visited_animate.length==0)   break;
    },50);

}
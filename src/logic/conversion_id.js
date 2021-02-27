const stringId = (id) => {
  // console.log('move id ======== ',id);
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

module.exports={stringId,coordinate_from_id}

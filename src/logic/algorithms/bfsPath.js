

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

let min_distance_node_array = [];
let visited_animate = [];

let find_min_distance = (arr, distance) => {
  let n = arr.length;
  let d = 100000;
  let a;
  for (let i = 0; i < n; i++) {
    console.log(
      "i = ",
      i,
      " , arr[i] = ",
      arr[i],
      " , distance = ",
      distance.get(arr[i])
    );
    if (d > distance.get(arr[i])) {
      d = distance.get(arr[i]);
      a = i;
    }
  }
  console.log("a = ", a);
  let l = arr[a];
  arr.splice(a, 1);
  return l;
};

let make_id = (j, i) => {
    let id = j.toString() + "," + i.toString();
    return id;
  };
  

const bfsPath = (
  maze_array,
  start_square_vertical,
  start_square_horizonatal,
  end_square_vertical,
  end_square_horizonatal,
  vertical_height,
  horizontal_width
) => {
  let distance = new Map();
  let parent = new Map();
  // let arr = [];

  let id = make_id(start_square_vertical, start_square_horizonatal);
  // h.set(id,true);
  console.log("start id = ", id);
  let arr = [id];
  distance.set(id, 0);
  parent.set(id, "e");

  console.log('++++++++++++');

  while (arr.length != 0) {
    console.log("-=-=-=-=-=-=-=-=-=-=\n");
    let f = find_min_distance(arr, distance);
    id = f;
    console.log('id = ',id);
    console.log('00000000000000000');
    let x = coordinate_from_id(f);
    let j = x[0],
      i = x[1];
    // j ->vertical , i->horizontal
    let d = distance.get(id);
    console.log("j = ", j, " , i = ", i);
    visited_animate.push(f);

    if (j > 0) {
      let tid = make_id(j - 1, i);
      if (!distance.has(tid) && maze_array[j - 1][i][4] != 1) {
        distance.set(tid, d + 1);
        parent.set(tid, id);
        arr.push(tid);
      } else {
        if (d + 1 < distance.get(tid) && maze_array[j - 1][i][4] != 1) {
          distance.delete(tid);
          distance.set(tid, d + 1);
          parent.delete(tid);
          parent.set(tid, id);
          arr.push(tid);
        }
      }
    }
    if (i > 0) {
      let tid = make_id(j, i - 1);
      if (!distance.has(tid) && maze_array[j][i - 1][4] != 1) {
        distance.set(tid, d + 1);
        parent.set(tid, id);
        arr.push(tid);
      } else {
        if (d + 1 < distance.get(tid) && maze_array[j][i - 1][4] != 1) {
          distance.delete(tid);
          distance.set(tid, d + 1);
          parent.delete(tid);
          parent.set(tid, id);
          arr.push(tid);
        }
      }
    }
    if (j < vertical_height - 1) {
      let tid = make_id(j + 1, i);
      if (!distance.has(tid) && maze_array[j + 1][i][4] != 1) {
        distance.set(tid, d + 1);
        parent.set(tid, id);
        arr.push(tid);
      } else {
        if (d + 1 < distance.get(tid) && maze_array[j + 1][i][4] != 1) {
          distance.delete(tid);
          distance.set(tid, d + 1);
          parent.delete(tid);
          parent.set(tid, id);
          arr.push(tid);
        }
      }
    }
    if (i < horizontal_width - 1) {
      let tid = make_id(j, i + 1);
      if (!distance.has(tid) && maze_array[j][i + 1][4] != 1) {
        distance.set(tid, d + 1);
        parent.set(tid, id);
        arr.push(tid);
      } else {
        if (d + 1 < distance.get(tid) && maze_array[j][i + 1][4] != 1) {
          distance.delete(tid);
          distance.set(tid, d + 1);
          parent.delete(tid);
          parent.set(tid, id);
          arr.push(tid);
        }
      }
    }

    if (j == end_square_vertical && i == end_square_horizonatal) {
      console.log("bfsPath finished");
      break;
    }

    console.log("visited id= ", id);
    console.log("arr = ", arr);
  }

  let tid = make_id(end_square_vertical, end_square_horizonatal);
  console.log("final  tid = ", tid);
  let end_square_id = make_id(end_square_vertical, end_square_horizonatal);
  min_distance_node_array.push(end_square_id);
  while(parent.get(tid)!='e'){
      let f = parent.get(tid);
     console.log("node id = ",f);
      tid = f;

      min_distance_node_array.push(f);
  }

  return [visited_animate, min_distance_node_array];
};

module.exports = { bfsPath };

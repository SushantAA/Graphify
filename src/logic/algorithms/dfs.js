let shortest_distance = 100000;

let dfs_helper_complete = false;

let make_id = (j, i) => {
    let id = j.toString() + "," + i.toString();
    return id;
  };


let visited_animate = [];

let start_square_id = "1,1";
let end_square_id = "9,9";


const end_square_vertical = 9;
const end_square_horizonatal = 9;

let visited = new Map();

let    vertical_height = 10;
let    horizontal_width = 10;

const dfs_helper = (
    maze_array,
    start_vertical,
    start_horizontal
    ) => {

        if(start_vertical==end_square_vertical && start_horizontal==end_square_horizonatal){ 
            dfs_helper_complete = true;
            return;
        
        }

  if (dfs_helper_complete) return;
   let id =make_id(start_vertical,start_horizontal);     
  if(visited.has(id))   return;
        let j = start_vertical,i = start_horizontal;
  visited_animate.push(id);
  visited.set(id,true);

  if (i > 0 && maze_array[j][i - 1][4] != 1) {
    dfs_helper(maze_array,j, i - 1);
  }
  if (dfs_helper_complete) return;
  if (j > 0 && maze_array[j - 1][i][4] != 1) {
    dfs_helper(maze_array,j - 1, i);
  }
  if (dfs_helper_complete) return;
  if (i < horizontal_width - 1 && maze_array[j][i + 1][4] != 1) {
    dfs_helper(maze_array,j, i + 1);
  }
  if (dfs_helper_complete) return;
  if (j < vertical_height - 1 && maze_array[j + 1][i][4] != 1) {
    dfs_helper(maze_array,j + 1, i);
  }
  if (dfs_helper_complete) return;
};

// document.querySelector("#dfs_helper").addEventListener("click", function () {
//   let rere = new Map();
//   console.log("dfs_helper start");
//   shortest_distance = 100000;
//   dfs_helper_complete = false;
//   dfs_helper(start_square_vertical, start_square_horizonatal, 0, rere);
// });

const dfs = (
  maze_array,
  start_vertical,
  start_horizontal,
  end_square_vertical,
  end_square_horizonatal,
  vertical_height,
  horizontal_width) =>{

    console.log('maze_arr=',maze_array)

    let visited = new Map();
  console.log("dfs_helper start");
  shortest_distance = 100000;
  dfs_helper_complete = false;

    dfs_helper(
      maze_array,
      start_vertical,
      start_horizontal);

      return visited_animate;
}

module.exports = {dfs};
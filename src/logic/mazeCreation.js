let mazeArray = new Array(10);
for(let i=0;i<10;i++){
    let mazeHorizontalArray = new Array(10);
    mazeArray[i] = mazeHorizontalArray;
}

let mazeArray_first_fill = () =>{
    for(let j=0;j<10;j++){
        for(let i=0;i<10;i++){
            let neighbour_list_array = new Array(6);
            for(let k=0;k<5;k++){
                neighbour_list_array[k] = 0;
            }
            neighbour_list_array[5] = 1;
            mazeArray[j][i] = neighbour_list_array;
            // 0 ->up
            // 1 ->right
            // 2 ->down
            // 3 ->left
            // 4 -> 1 ->  wall , 2->end , 3->start , 4 -> weighted
            // 5 -> distance , initial =1
        }
    }
    console.log(mazeArray);
    for(let j=1;j<10;j++){
        for(let i=0;i<10;i++){
            mazeArray[j][i][0]=1;
            mazeArray[j-1][i][2]=1;
        }
    }
    for(let j=0;j<10;j++){
        for(let i=1;i<10;i++){
            mazeArray[j][i][3]=1;
            mazeArray[j][i-1][1]=1;
        }
    }
}

mazeArray_first_fill();

module.exports = {mazeArray};
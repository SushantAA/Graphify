import React from "react";

const BOARD = [];
for (let i = 0; i < BOARD_ROW; i++) {
  BOARD[i] = [];
  for (let j = 0; j < BOARD_COL; j++) {
    BOARD[i][j] = {
      color: INITIAL_COLOR,
      visit: false,
    };
  }
}

export default function Maze2() {
  return (
    <div>
      {BOARD.map((row, ridx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="board__row" key={ridx}>
          {row.map((col, cidx) => (
            <Item ridx={ridx} cidx={cidx} key={KEYS[ridx][cidx]} />
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}

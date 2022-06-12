import React from 'react';

function History({ history, moveTo, currentMove }) {
  return (
    <div>
      <ul>
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                style={{
                  fontWeight: move === currentMove ? 'bold' : 'normal',
                }}
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? `Go to game start` : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;

import React from "react";

export function Stars({ stars }) {
  return (
    <>
      {stars.map((starId) => (
        <div className="star" key={starId}></div>
      ))}
    </>
  );
}

export function PlayAgain({ onClick, gameStatus }) {
  return (
    <div>
      <h2
        className="text-base font-bold"
        style={{ color: gameStatus === "won" ? "green" : "red" }}
      >
        {gameStatus === "won" ? "You Won" : "Game Over"}
      </h2>
      <button
        className="bg-gray-200 border-black border p-1 text-center"
        onClick={onClick}
      >
        Play Again
      </button>
    </div>
  );
}

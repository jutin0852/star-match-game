"use client";
import React from "react";
import PlayNumber from "./PlayNumber";
import { PlayAgain, Stars } from "./Stars";
import { useStarMatch } from "./useStarMatch";

export default function App({ handlePlayAgain }) {
  const {numberStatus, gameStatus ,randomStars,secondsLeft ,handleNumberClick ,utils} = useStarMatch();
  
  return (
    <div className="flex flex-col justify-center">
      <p className="text-center my-8 ">
        Pick one or more numbers that sum to the number of stars
      </p>
      <div className="flex justify-center items-center flex-wrap p-4">
        {/* stars */}
        <div className="border flex gap-4 flex-wrap p-6 justify-center h-[230px] w-[240px]">
          {gameStatus === "active" ? (
            <Stars stars={randomStars} />
          ) : (
            <PlayAgain onClick={handlePlayAgain} gameStatus={gameStatus} />
          )}
        </div>

        {/* numbers */}
        <div className="border flex gap-4 flex-wrap p-6 justify-center w-[240px]">
          {utils.range(1, 9).map((num) => (
            <PlayNumber
              key={num}
              num={num}
              handleNumberClick={handleNumberClick}
              numberStatus={numberStatus(num)}
            />
          ))}
        </div>
      </div>
      <p className="text-center mt-3">Time Remaining: {secondsLeft}</p>
    </div>
  );
}


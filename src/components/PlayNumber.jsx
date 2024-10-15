import React from "react";

export default function PlayNumber({ num, handleNumberClick, numberStatus }) {
  return (
    <button
      className=" px-4 py-2 bg-gray-100 border border-gray-400 font-bold text-2xl"
      key={num}
      onClick={() => handleNumberClick(num,numberStatus)}
      style={{ backgroundColor: colors[numberStatus] }}
    >
      {num}
    </button>
  );
}

const colors = {
  wrong: "red",
  candidate: "deepskyblue",
  available: "lightgrey",
  used: "lightgreen",
};
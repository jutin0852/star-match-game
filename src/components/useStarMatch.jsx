import { useState,useEffect } from "react";

export const useStarMatch = () => {
  const [stars, setStars] = useState(8);
  const [availableNum, setAvaliableNum] = useState(utils.range(1, 9));
  const [candidateNum, setCandidateNum] = useState([]);
  const candidateIsWrong = utils.sum(candidateNum) > stars;
  const randomStars = utils.range(1, stars);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const gameStatus =
    availableNum.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  const handleNumberClick = (num, numberStatus) => {
    let newCandidateNum =
      numberStatus === "available" && secondsLeft > 0
        ? [...candidateNum, num]
        : candidateNum.filter((n) => n !== num);

    if (utils.sum(newCandidateNum) !== stars) {
      setCandidateNum(newCandidateNum);
    } else {
      let newAvailableNum = availableNum.filter(
        (n) => !newCandidateNum.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNum, 9));
      setAvaliableNum(newAvailableNum);
      setCandidateNum([]);
    }
  };
     const numberStatus = (num) => {
       if (!availableNum.includes(num)) {
         return "used";
       }
       if (candidateNum.includes(num)) {
         return candidateIsWrong ? "wrong" : "candidate";
       } else {
         return "available";
       }
     };

     useEffect(() => {
       if (secondsLeft > 0 && availableNum.length !== 0) {
         const timeId = setTimeout(() => {
           setSecondsLeft(secondsLeft - 1);
         }, 1000);
         return () => {
           clearTimeout(timeId);
         };
       }
     });


  return { gameStatus ,randomStars,secondsLeft,utils,numberStatus,handleNumberClick,utils };
};


const utils = {
  sum: (arr) => arr.reduce((acc, cur) => acc + cur, 0),
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};
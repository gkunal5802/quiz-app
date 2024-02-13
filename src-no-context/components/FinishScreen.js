import React from "react";

export default function FinishScreen({
  dispatch,
  highscore,
  points,
  maxPossiblePoints,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage > 0 && percentage < 50) emoji = "😕";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        points ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

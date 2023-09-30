import React from "react";

export default function NextButton({ index, numQuestions, dispatch, answer }) {
  if (answer === null) return null;

  if (index !== numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "finished" })}
        className="btn btn-ui"
      >
        finish
      </button>
    );
}

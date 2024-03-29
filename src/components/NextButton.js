import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { index, answer, questions, dispatch } = useQuiz();
  const numQuestions = questions.length;

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

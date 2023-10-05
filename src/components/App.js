import { useQuiz } from "../contexts/QuizContext.js";
import Error from "./Error.js";
import FinishScreen from "./FinishScreen.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Loader from "./Loader.js";
import Main from "./Main.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import Question from "./Question.js";
import StartScreen from "./StartScreen.js";
import Timer from "./Timer.js";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

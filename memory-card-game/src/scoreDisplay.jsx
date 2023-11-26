import { useScore } from "./scoreContext";
import codec from './assets/codec.ttf';



export const ScoreDisplay = () => {
    const { score, setScore, highScore, setHighScore } = useScore();

    if (score === 0 && highScore === 0) {
        return (
            <>
                <div className="score-display">
                    <h2>Score: {score}</h2>
                    <h2>High Score: {highScore}</h2>
                    <h1>Click on a card to start</h1>
                    <h2>Don't click on the same card twice!</h2>
                    <h1>Good luck!</h1>
                    <h1 className="animated-emoji">👾</h1>
                    <h1>made by mk-nlp</h1>
                </div>
            </>
        );
    }

    if (score === 0)
        return (
            <>
                <div className="score-display">
                    <h2>Score: {score}</h2>
                    <h2>High Score: {highScore}</h2>
                    <h2>Click on a card to restart</h2>
                    <h1 className="animated-emoji">👾</h1>
                    <h1>made by mk-nlp</h1>
                </div>
            </>
        );

    return (
    <>
      <div className="score-display">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
        <h1 className="animated-emoji">👾</h1>
                    <h1>made by mk-nlp</h1>
      </div>
    </>
  );
};
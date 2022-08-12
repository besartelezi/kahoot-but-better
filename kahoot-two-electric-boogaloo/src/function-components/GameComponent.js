import UseGetQuiz from "../helpers/UseGetQuiz";
const url = "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple";

function GameComponent() {
    UseGetQuiz(url)
}

export default GameComponent;
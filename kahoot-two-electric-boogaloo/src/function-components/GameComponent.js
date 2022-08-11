import getQuestions from "../helpers/getQuestions";

const url = "https://opentdb.com/api.php?amount=10";

function GameComponent() {
    getQuestions(url);
}
export default GameComponent;
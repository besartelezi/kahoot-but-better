// eslint-disable-next-line
import React, { useEffect, useState } from "react";
let questionAmount = 10;

const UseGetQuiz = (url) => {
        const [quiz, setQuiz] = useState([]);
        const [question, setQuestions] = useState("");

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const response = await fetch(url);
                                const quiz = await response.json();
                                setQuiz(quiz);
                                console.log("The quizzy quiz is: ", quiz)

                                //for loop that will adapt, depending on the amount of questions the user has chosen
                                for (let i = 0; i < questionAmount; i++) {
                                        setQuestions(quiz.results[i].question);
                                        console.log("The question is: ", quiz.results[i].question)
                                }
                                
                        } catch (error) {
                                console.log("Oopsie Woopsie, somewing went wong when fwetcwhing wur dwata >:3", error);
                        }

                }
                fetchData().then(response => console.log("its working"));
        }, []);
}
export default UseGetQuiz;
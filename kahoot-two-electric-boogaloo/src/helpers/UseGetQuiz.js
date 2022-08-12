import React, { useEffect, useState } from "react";

const UseGetQuiz = (url) => {
        const [setQuiz] = useState("");

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const response = await fetch(url);
                                const json = await response.json();
                                console.log(json);
                                setQuiz(json);
                        } catch (error) {
                                console.log("error", error);
                        }
                };
                fetchData().then(r => console.log(r));
        }, []);
};

export default UseGetQuiz;
async function getQuestions (url) {
        let res = await fetch(url)
        return await res.json();
}

export default getQuestions;
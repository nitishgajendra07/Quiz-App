type Question = {
    id: number,
    question: string,
    option1: string
    option2: string
    option3: string
    option4: string

};

type Questions= Question[]

type Answer= {
    ans:number,
};

type Answers=Answer[]

window.addEventListener("load", async (e: Event) => {
    e.preventDefault();
    console.log("Entered appOption1");
    await main();
});

async function main() {
    let questions: Question[] = await fetchQuestions();
    console.log(questions);

    let answers: Answer[] = await fetchAnswers();
    console.log(answers);
}

async function fetchQuestions(): Promise<Question[]> {
    return await fetch("./option1Questions.json")
        .then((response) => {
            return response.json();
        });
}

async function fetchAnswers(): Promise<Answer[]> {
    return await fetch("./option1Answers.json")
        .then((response) => {
            return response.json();
        });
}







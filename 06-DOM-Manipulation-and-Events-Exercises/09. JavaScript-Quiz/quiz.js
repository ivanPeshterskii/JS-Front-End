document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let correctAnswers = 0;
    const questions = {
        'Question #1:': 'onclick',
        'Question #2:': 'JSON.stringify()',
        'Question #3:': 'A programming API for HTML and XML documents',
        'Question #4:': 'Browser Object Model',
    };

    document.querySelectorAll('.quiz-answer')
        .forEach(button => button.addEventListener('click', answerButtonClickHandler))

    function answerButtonClickHandler(e) {
        const clickedButton = e.currentTarget;

        // Get question number
        const questionSection = clickedButton.closest('.question');
        const questionHeading = questionSection.querySelector('h2 span').textContent;

        // Get answer text
        const selectedAnswer = clickedButton.textContent;

        // Validate result
        if (questions[questionHeading] === selectedAnswer) {
            correctAnswers++;
        }

        // show next question if any
        questionSection.classList.add('hidden');
        const nextElement = questionSection.nextElementSibling;

        if (nextElement.classList.contains('question')) {
            nextElement.classList.remove('hidden');
        } else {
            finishQuiz();
        }
    }

    function finishQuiz() {
        const resultElement = document.getElementById('results');

        let resultText = '';

        if (correctAnswers === Object.keys(questions).length) {
            resultText = 'You are recognized as top JavaScript fan!';
        } else if (correctAnswers === 1) {
            resultText = 'You have 1 right answer';
        } else {
            resultText = `You have ${correctAnswers} right answers`;
        }

        resultElement.textContent = resultText;
    }
}
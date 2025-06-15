document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-answer').addEventListener('click', () => checkAnswer());
    function checkAnswer() {
        const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
        const correctAnswer = "4";
        const feedbackDiv = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = 'Correct! Well done!';
            feedbackDiv.style.color = 'green';
            feedbackDiv.style.display = 'block';
        } else {
            feedbackDiv.textContent = 'Incorrect. Please try again.';
            feedbackDiv.style.color = 'red';
            feedbackDiv.style.display = 'block';
        }
        const answer = document.querySelectorAll.getElementsByName('quiz');
        console.log(answer);
    }
});
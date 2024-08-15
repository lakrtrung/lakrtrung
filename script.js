function submitQuiz() {
    const answers = {
        q1: "Hà Nội",
        q2: "Nguyễn Du"
    };
    let score = 0;
    
    const form = document.getElementById('quiz-form');
    const userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value
    };

    if (userAnswers.q1 === answers.q1) score++;
    if (userAnswers.q2 === answers.q2) score++;

    document.getElementById('result').innerText = `Bạn đã trả lời đúng ${score}/${Object.keys(answers).length} câu.`;
}
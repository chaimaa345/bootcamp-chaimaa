let questions = [];
let currentIndex = 0;
let score = 0;

async function loadQuestions() {
  const res = await fetch('/api/questions');
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById('question').innerText = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt.option_text;
    btn.onclick = () => checkAnswer(q.id, opt.id);
    optionsDiv.appendChild(btn);
  });
}

async function checkAnswer(questionId, optionId) {
  const res = await fetch('/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId, optionId })
  });
  const result = await res.json();
  document.getElementById('feedback').innerText = result.correct ? 'Correct!' : 'Wrong!';
  if (result.correct) score++;
  document.getElementById('score').innerText = `Score: ${score}/${questions.length}`;
}

document.getElementById('nextBtn').onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    document.getElementById('feedback').innerText = '';
    showQuestion();
  } else {
    document.getElementById('quiz-container').innerHTML = `<h2>Final Score: ${score}/${questions.length}</h2>`;
  }
};

loadQuestions();

import React from 'react';
import questions from  './questions.json'
import './main.css'
const generateNumber = arr => Math.floor((Math.random() * arr.length)) + 1

function App() {
  const [question, setQuestion] = React.useState('')

  const randomQuestionHandler = () => {
    const newIndex = generateNumber(questions)
    setQuestion(questions[newIndex])
  }

  const clearHandler = () => setQuestion('')

  return (
    <div className="App">
      <div class="main-box"><header className="App-header">
      <h1>Newlywed Game</h1>
      </header>
      <main>
      <div className='random-question'>
      {question}
      </div>
      <button onClick={randomQuestionHandler}>Generate</button>
      <button onClick={clearHandler}>Clear</button>
      </main></div>
    </div>
  );
}

export default App;

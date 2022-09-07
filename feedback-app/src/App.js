import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import './index.css'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App

import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'context item no 1',
      rating: 9,
    },
    {
      id: 2,
      text: 'context item no 2',
      rating: 8,
    },
    {
      id: 3,
      text: 'context item no 3',
      rating: 7,
    },
  ])

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    const updatedFeedback = feedback.concat(newFeedback)
    setFeedback(updatedFeedback)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

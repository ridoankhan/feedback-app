import { v4 as uuidv4 } from 'uuid'
import React, { createContext, useState } from 'react'

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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Add a new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    const updatedFeedback = feedback.concat(newFeedback)
    setFeedback(updatedFeedback)
  }

  // Delete a feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    )
  }

  // Edit a feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        updateFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

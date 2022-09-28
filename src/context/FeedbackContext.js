// import { v4 as uuidv4 } from 'uuid'
import React, { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=asc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // Add a new feedback
  const addFeedback = async (newFeedback) => {
    // newFeedback.id = uuidv4()
    // const updatedFeedback = feedback.concat(newFeedback)

    const response = await fetch('/feedback', {
      method: 'POST',
      body: JSON.stringify(newFeedback),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback
  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updateItem),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        isLoading,
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

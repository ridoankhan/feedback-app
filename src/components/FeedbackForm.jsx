import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState()
  const [rating, setRating] = useState(10)
  const [btnIsDisabled, setBtnIsDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  )

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnIsDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    let value = e.target.value
    if (value === '') {
      setBtnIsDisabled(true)
      setMessage(null)
    } else if (value !== '' && value.trim().length <= 10) {
      setBtnIsDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnIsDisabled(false)
      setMessage(null)
    }

    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='write your review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' version='secondary' isDisabled={btnIsDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className='message'>{message}</div>}
      {/* <div className='message'>{message}</div> */}
    </Card>
  )
}

export default FeedbackForm

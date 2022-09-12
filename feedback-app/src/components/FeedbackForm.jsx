import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState()
  const [rating, setRating] = useState(10)
  const [btnIsDisabled, setBtnIsDisabled] = useState(true)
  const [message, setMessage] = useState('')

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
      handleAdd(newFeedback)

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
      <div className='message'>{message}</div>
    </Card>
  )
}

export default FeedbackForm

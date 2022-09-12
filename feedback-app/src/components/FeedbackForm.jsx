import { React, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState()

  const handleTextChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you like to rate your service with us?</h2>
        <div className='input-group'>
          <input
            type='text'
            placeholder='write your review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm

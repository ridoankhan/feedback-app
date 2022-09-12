import React from 'react'

function FeedbackStats({ feedback }) {
  // Calculate average ratings
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating / feedback.length
  }, 0)

  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  )
}

export default FeedbackStats

import { React } from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback found</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        )
      })}
    </div>
  )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf({
//     id: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//   }),
// }

export default FeedbackList

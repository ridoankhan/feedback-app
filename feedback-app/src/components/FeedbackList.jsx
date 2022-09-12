import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback found</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
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

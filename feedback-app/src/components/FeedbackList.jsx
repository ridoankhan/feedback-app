import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ handleDelete }) {
  const { feedback, deleteFeedback } = useContext(FeedbackContext)
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
                handleDelete={deleteFeedback}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList

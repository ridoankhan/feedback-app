/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  text: PropTypes.string,
}

export default FeedbackItem

'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onAddReview = (event) => {
  event.preventDefault()
  console.log(event)
  $('#message').text('New review added!')
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.addReview(formData)
    .then(ui.addReviewSuccess)
    .catch(ui.addReviewFailure)
}

const addHandlers = () => {
  // $('#getReviews').on('click', onGetReviews)
  $('#addReviews').on('submit', onAddReview)
}

module.exports = {
  addHandlers
}

'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onDeleteReview = (event) => {
  event.preventDefault()
  const reviewId = $(event.target).closest('button').data('id')
  api.deleteReview(reviewId)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure)
  $('#message').html('Your review has been deleted!')
}

const onAddReview = (event) => {
  event.preventDefault()
  $('#message').text('New review added!')
  const form = event.target
  const formData = getFormFields(form)
  api.addReview(formData)
    .then(ui.addReviewSuccess)
    .catch(ui.addReviewFailure)
}

const addHandlers = () => {
  $('.content').on('click', '.delete-review', onDeleteReview)
  $('#addReviews').on('submit', onAddReview)
}

module.exports = {
  addHandlers
}

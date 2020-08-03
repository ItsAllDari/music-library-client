'use strict'

const showSongsTemplate = require('../templates/song-listing.handlebars')

// const deleteReviewSuccess = () => {
//   $('.content').empty()
// }
//
// const deleteReviewFailure = () => {
//   $('form').trigger('reset')
//   $('#message').text('Could not delete review')
//   $('#message').show().removeClass().addClass('failure')
// }

const addReviewSuccess = (data) => {
  $('.form').trigger('reset')
  const showSongsHtml = showSongsTemplate({ reviews: data.reviews })
  $('.content').empty(showSongsHtml)
  $('#clearSongs').hide()
  $('#getSongs').show()
}

const addReviewFailure = () => {
  $('form').trigger('reset')
  $('.content').empty()
  $('#message').text('Could not add review, please try again!')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  // deleteReviewSuccess,
  // deleteReviewFailure,
  addReviewSuccess,
  addReviewFailure
}

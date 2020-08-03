'use strict'

// const onSignInSuccess = require('../auth/ui')
const showSongsTemplate = require('../templates/song-listing.handlebars')

const getReviewSuccess = (data) => {
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  const showReviewsHtml = showSongsTemplate({ reviews: data.songs.reviews })
  $('.content').append(showSongsHtml)
  $('.content').append(showReviewsHtml)
}

const getReviewFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Could not display reviews')
}

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
  getReviewSuccess,
  getReviewFailure,
  addReviewSuccess,
  addReviewFailure
}

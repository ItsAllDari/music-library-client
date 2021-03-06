'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const songEvents = require('./songs/events')
const reviewEvents = require('./reviews/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#getSongs').hide()
  $('.hide').hide()
  $('#sign-out').hide()
  $('#addSongs').hide()
  $('#updateSongs').hide()
  $('#clearSongs').hide()
  $('#addReviews').hide()
  $('#addReview').hide()
  songEvents.addHandlers()
  reviewEvents.addHandlers()
})

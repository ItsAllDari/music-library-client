'use strict'
const store = require('./../store')

const newSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('You have successfully created your account!')
  $('#message').show().removeClass().addClass('success')
}
const newFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed!')
  $('#message').show().removeClass().addClass('failure')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text("You've signed in! Be sure to check out the song catalog")
  $('#message').show().removeClass().addClass('success')
  store.user = data.user
  $('.hide').show()
  $('#sign-out').show()
  $('.show').hide()
  $('#getSongs').show()
  $('#addSongs').show()
  $('h1').hide()
}
const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in failed. Email or password is incorrect.')
  $('#message').show().removeClass().addClass('failed')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text("You've signed out successfully! See you soon")
  $('#message').show().removeClass().addClass('success')
  store.user = null
  $('.hide').hide()
  $('.show').show()
  $('.box').hide()
  $('#getSongs').hide()
  $('#updateSongs').hide()
  $('#addSongs').hide()
  $('#clearSongs').hide()
  $('h1').show()
  $('#addReview').hide()
  $('#addReviews').hide()
}
const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign out failed')
  $('#message').show().removeClass().addClass('failed')
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Your password has been updated')
  $('#message').show().removeClass().addClass('success')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Password change failed')
  $('#message').show().removeClass().addClass('failed')
}

module.exports = {
  newSuccess: newSuccess,
  newFailure: newFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure
}

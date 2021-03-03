'use strict'
// Requires in the api declarations
const api = require('./api')
const ui = require('./ui')
// Grabs the form data
const getFormFields = require('../../../lib/get-form-fields.js')

// Sign up function that pushes the data to api and returns a success message
// to the user
const onSignUp = function (event) {
  // Methods that tells system that the default action should not be taken as normal
  // In this case the default action would be to refresh the page upon clicking
  event.preventDefault()
  // Form field being the event target
  const form = event.target
  const data = getFormFields(form)

  // Upon success a sign up success message will appear
  // If sign up fails then a failure message will pop up
  api.newUser(data)
    .then(ui.newSuccess)
    .catch(ui.newFailure)
}

// Sign in function that pushes input data to API and returns success message
const onSignIn = function (event) {
  // Methods that tells system that the default action should not be taken as normal
  // In this case the default action would be to refresh the page upon clicking
  event.preventDefault()
  // Form field being the event target
  const form = event.target
  const data = getFormFields(form)

  // Upon success a sign in success message will appear
  // If sign in fails then a failure message will pop up
  api.userSignIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// Sign out function that removes data from API and returns success message
const onSignOut = function (event) {
  // Methods that tells system that the default action should not be taken as normal
  // In this case the default action would be to refresh the page upon clicking
  event.preventDefault()
  // Upon success a sign out success message will appear
  // If sign out fails then a failure message will pop up
  api.userSignOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  // Hides the sign out button upon successful sign out
  $('#sign-out').hide()
}

// Change password event that returns a success message
const onChangePassword = function (event) {
  // Methods that tells system that the default action should not be taken as normal
  // In this case the default action would be to refresh the page upon clicking
  event.preventDefault()
  // Form field being the event target
  const form = event.target
  const data = getFormFields(form)

  // Upon success a change password success message will appear
  // If changing password fails then a failure message will pop up
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Exports the modules for use in the project
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword
}

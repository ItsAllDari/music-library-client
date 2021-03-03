// Uses strict mode to elimate errors
'use strict'
// Requires in the modules/funcitons that will be used in the API
const config = require('./../config')
const store = require('./../store')

// Creates a declaration for signing up a new user using an asynchronous POST
// request and AJAX call to push JSON data
const newUser = function (formData) {
  return $.ajax({
    // Server location
    url: config.apiUrl + '/sign-up',
    // Type of HTTP request that sends data to server
    method: 'POST',
    // Will take the data that was inputted by the user upon sign up
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password_confirmation
      }
    }
  })
}

// Creates a declaration for signing in a user using an asynchronous POST
// request and AJAX call to push JSON data
const userSignIn = function (data) {
  return $.ajax({
    // Server location
    url: config.apiUrl + '/sign-in',
    // Type of HTTP request that sends data to server
    method: 'POST',
    // Takes the data that was inputted to sign in the user
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

// Creates a declaration for signing out a user using an asynchronous DELETE
// request and AJAX call to remove JSON data
const userSignOut = function () {
  return $.ajax({
    // Server location
    url: config.apiUrl + '/sign-out',
    // Type of HTTP request that deletes the specified resource
    method: 'DELETE',
    // An object of additional key/value pairs to send along with the request
    headers: {
      // Authorization request header contains the credentials to authenticate
      // the user with the server. Stores token that keeps autentication more secure.
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Creates a declaration for changing a user's password using an asynchronous PATCH
// request and AJAX call to update JSON data
const changePassword = function (formData) {
  return $.ajax({
    // HTTP request that updates the password data
    method: 'PATCH',
    // Server location
    url: config.apiUrl + '/change-password',
    // An object of additional key/value pairs to send along with the request
    headers: {
      // Authorization request header contains the credentials to authenticate
      // the user with the server. Stores token that keeps autentication more secure.
      Authorization: 'Token token=' + store.user.token
    },
    // Takes old password data and replaces it with the new password input
    data: {
      passwords: {
        old: formData.passwords.old,
        new: formData.passwords.new
      }
    }
  })
}

// Exports the modules for use in the project
module.exports = {
  newUser: newUser,
  userSignIn: userSignIn,
  userSignOut: userSignOut,
  changePassword: changePassword
}

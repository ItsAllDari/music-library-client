'use strict'

// const onSignInSuccess = require('../auth/ui')
const showSongsTemplate = require('../templates/song-listing.handlebars')

const getSongSuccess = (data) => {
  console.log(data)
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').append(showSongsHtml)
  $('#updateSongs').show()
  $('#clearSongs').show()
  $('#sign-out').hide()
  $('.hide').hide()
}

const getSongFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Could not display your library')
  $('#message').show().removeClass().addClass('failure')
}

const addSongSuccess = (data) => {
  console.log(addSongSuccess)
  $('form').trigger('reset')
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').empty(showSongsHtml)
  $('#clearSongs').hide()
  $('#getSongs').show()
}

const addSongFailure = () => {
  $('form').trigger('reset')
  $('.content').empty()
  $('#message').text('Could not add song to your library, try again!')
  $('#message').show().removeClass().addClass('failure')
}

const deleteSongSuccess = () => {
  $('.content').empty()
}

const deleteSongFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Could not delete this song, try again!')
  $('#message').show().removeClass().addClass('failure')
}

const updateSongSuccess = (data) => {
  $('form').trigger('reset')
  $('.content').empty()
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').empty(showSongsHtml)
  $('#clearSongs').hide()
  $('#getSongs').show()
}

const updateSongFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Could not update this song, try again!')
  $('#message').show().removeClass().addClass('failure')
}

const clearSongs = () => {
  $('.content').empty()
  $('#message').text('You have closed your music library')
  $('#updateSongs').hide()
  $('#sign-out').show()
  $('.hide').show()
}

const clearSongFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Could not clear songs')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  getSongSuccess,
  addSongSuccess,
  updateSongSuccess,
  getSongFailure,
  addSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
  updateSongFailure,
  clearSongs,
  clearSongFailure
}

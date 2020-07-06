'use strict'

// const onSignInSuccess = require('../auth/ui')
const showSongsTemplate = require('../templates/song-listing.handlebars')

const getSongSuccess = (data) => {
  console.log(data)
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').append(showSongsHtml)
  $('#updateSongs').show()
  $('#clearSongs').show()
}

// const getSongFailure = () => {
//   $('form').trigger('reset')
//   $('#message').text('Could not display your library')
//   $('#message').show().removeClass().addClass('failure')
// }

const addSongSuccess = (data) => {
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').append(showSongsHtml)
}

// const addSongFailure = () => {
//   $('form').trigger('reset')
//   $('#message').text('Could not add song to your library, try again!')
//   $('#message').show().removeClass().addClass('failure')
// }

const deleteSongSuccess = () => {
  $('.content').empty()
}
// const deleteSongFailure = () => {
//   $('form').trigger('reset')
//   $('#message').text('Could not delete this song, try again!')
//   $('#message').show().removeClass().addClass('failure')
// }

const updateSongSuccess = (data) => {
  console.log(data)
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').detach(showSongsHtml)
}

const updateSongFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Could not update this song, try again!')
  $('#message').show().removeClass().addClass('failure')
}

const clearSongs = () => {
  $('.content').empty()
  $('#message').text('You have closed your music library')
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
  // getSongFailure,
  // addSongFailure,
  deleteSongSuccess,
  updateSongFailure,
  clearSongs,
  clearSongFailure
}

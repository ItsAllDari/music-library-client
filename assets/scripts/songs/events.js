'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetSongs = (event) => {
  event.preventDefault()
  api.getSongs()
    .then(ui.getSongSuccess)
    .catch(ui.getSongFailure)
  $('#getSongs').hide()
  $('#message').text('Here are the songs currently within your music library')
}

const onAddSongs = (event) => {
  event.preventDefault()
  $('#message').text('New song added!')
  const form = event.target
  const formData = getFormFields(form)
  api.addSongs(formData)
    .then(ui.addSongSuccess)
    .catch(ui.failure)
}

const onDeleteSongs = (event) => {
  event.preventDefault()
  const songId = $(event.target).closest('section').data('container-id')
  api.deleteSongs(songId)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailure)
  $('#message').html('Your song has been deleted!')
}

const onUpdateSongs = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateSongs(formData)
    .then(ui.updateSongSuccess)
    .catch(ui.updateSongFailure)
  $('#message').text('The song has been successfully updated')
}

const onClearSongs = (event) => {
  event.preventDefault()
  ui.clearSongs()
  $('#clearSongs').hide()
  $('#getSongs').show()
}

const addHandlers = () => {
  $('#getSongs').on('click', onGetSongs)
  $('#addSongs').on('submit', onAddSongs)
  $('.content').on('click', '.delete-song', onDeleteSongs)
  $('#updateSongs').on('submit', onUpdateSongs)
  $('#clearSongs').on('click', onClearSongs)
}

module.exports = {
  addHandlers
}

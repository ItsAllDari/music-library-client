'use strict'
const store = require('../store')
const config = require('../config')

const getSongs = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/songs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      song: {
        owner: store.user.id
      }
    }
  })
}

const addSongs = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      song: {
        title: formData.song.title,
        album: formData.song.album,
        artist: formData.song.artist
      }
    }
  })
}

const deleteSongs = function (songId) {
  return $.ajax({
    url: config.apiUrl + '/songs/' + songId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateSongs = function (data) {
  return $.ajax({
    url: config.apiUrl + '/songs/' + data.song.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      song: {
        _id: data.song.id,
        title: data.song.title,
        album: data.song.album,
        artist: data.song.artist
      }
    }
  })
}

module.exports = {
  getSongs,
  addSongs,
  deleteSongs,
  updateSongs
}

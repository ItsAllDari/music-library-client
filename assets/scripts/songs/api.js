'use strict'
const store = require('../store')
const config = require('../config')

const getSongs = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/songs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      song: {
        owner: store.user.id
      },
      reviews: {
        owner: store.user.id
      }
    }
  })
}

const addSongs = (formData) => {
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

const deleteSongs = (songId) => {
  return $.ajax({
    url: config.apiUrl + '/songs/' + songId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateSongs = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/songs/' + formData.song.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      song: {
        _id: formData.song.id,
        title: formData.song.title,
        album: formData.song.album,
        artist: formData.song.artist
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

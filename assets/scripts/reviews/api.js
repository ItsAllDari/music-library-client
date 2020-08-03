'use strict'
const store = require('../store')
const config = require('../config')

// const deleteReview = (songId, reviewId) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + '/songs/' + songId + '/reviews' + reviewId,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

const addReview = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/songs/' + formData.song.id + '/reviews',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      review: {
        note: formData.review.note,
        rating: formData.review.rating
      }
    }
  })
}

module.exports = {
  // deleteReview,
  addReview
}

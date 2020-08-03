'use strict'
const store = require('../store')
const config = require('../config')

// const getReviews = (formData) => {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/songs/' + formData.song.id + '/reviews',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       review: {
//         owner: store.user.id
//       }
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
  // getReviews,
  addReview
}

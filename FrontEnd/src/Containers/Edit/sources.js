/**
 *
 * Name: Edit sources
 * Date: 2018-05-10 19:52:15
 * Description: edit article
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import http from '_fetch'

export function request(params) {
  return http
    .get(`request?${params}`)
    .then((response) => {
      const result = response
      return result
    })
    .catch((error) => {throw error})
}
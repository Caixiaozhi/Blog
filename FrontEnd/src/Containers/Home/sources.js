/**
 *
 * Name: Home sources
 * Date: 2018-06-04 16:28:04
 * Description: This is a container component
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
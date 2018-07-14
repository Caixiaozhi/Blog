/**
 *
 * Name: Blog sources
 * Date: 2018-07-07 16:17:58
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
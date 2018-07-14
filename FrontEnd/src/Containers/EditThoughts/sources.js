/**
 *
 * Name: EditThoughts sources
 * Date: 2018-07-07 16:42:00
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import http from '_fetch'

export function publishThoughts({
  content,
  coverFile,
}) {
  const formData = new FormData()
  formData.append('cover', coverFile)
  formData.append('content', content)
  return http.post('thoughts', formData).then((response) => {
    const result = response
    return result
  }).catch((error) => {
    throw(error)
  })
}
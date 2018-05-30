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

export function saveArticle({
  content,
  title,
  tags,
  author,
}) {
  return http
    .post(`savetmp`, {
      content,
      title,
      tags,
      author,
    })
    .then((response) => {
      const result = response
      return result
    })
    .catch((error) => {throw error})
}


export function publishArticle({
  title,
  author,
  content,
  tags,
}){
  console.log('1324351454',tags)
  return http.post('article', {
    content,
    title,
    tags,
    author,
  }).then((response) => {
    const result = response
    return result
  })
  .catch((error) => {throw error})
}
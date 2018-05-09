/**
 *
 * Name: LoginPage sources
 * Date: 2018-01-29 20:40:38
 * Description: This is a container component
 * Author: wymhuster
 * Organization: ELWG
 *
 */
import Cookies from 'js-cookie';
import http from '_fetch'

export function getAuthorInfo({
  password,
  email,
}) {
  return http
    .post(`/login`, {
      password,
      email,
    })
    .then((response) => {
      return response
    })
    .catch((error) => {throw error})
}
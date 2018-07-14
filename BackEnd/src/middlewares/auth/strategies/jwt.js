import _ from 'lodash'

import {
  Strategy as JwtStrategy,
  ExtractJwt
} from 'passport-jwt'

import { authConfig } from 'config'
import { getRowById } from 'app/modules/admin/retrieve'

const jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('BJWT')

const options = {
  jwtFromRequest,
  secretOrKey: authConfig.jwtSecret,
  passReqtoCallback: true,
}

export default new JwtStrategy(options, async (request, jwtPayload, done) => {
  try {
    const { id } = jwtPayload
    const idInDB = await getRowById(id)
    if (!_isEmpty(idInDB)) {
      done(null, {...jwtPayload})
    } else {
      done(null, false)
    }
  } catch (err) {
    done(err)
  } 
})
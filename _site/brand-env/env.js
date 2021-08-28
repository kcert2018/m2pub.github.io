/* eslint-disable camelcase */

// console.log('process.env = ', process.env)
const name = 'm2'
const Name = 'M2'
const NAME = 'M2'

const URL_BASE = process.env.VUE_APP_HOME_BASE_URL

const JWT_EXPIRATION_MINUTES = 120
const JWT_REFRESH_DAYS = 14

const k8s_config = ' '

const url_base = process.env.VUE_APP_HOME_BASE_URL

const base_password = 'ehsqjfwk9414$'

const jwt_secret = 'clftlqwhxhzms'
const jwt_expiration_minutes = 120
const jwt_refresh_days = 14

const googleClientId = '685233820054-i2tqk7i11rf6ukd6dfb4h3j5samonh5u.apps.googleusercontent.com'
const facebookClientId = '235260614825830'
const twitterClientId = 'Bdaj9kxqsVnjJ5sWOHUrCZQoh'
const githubClientId = 'd2e3ae22f55454195279'
const githubClientId_dev = '7206d96acc025f59dbff'

export default {
  // BRAND
  name,
  Name,
  NAME,

  URL_BASE,

  JWT_EXPIRATION_MINUTES,
  JWT_REFRESH_DAYS,

  k8s_config,

  url_base,

  base_password,

  // JWT
  jwt_secret,
  jwt_expiration_minutes,
  jwt_refresh_days,

  // SNS login
  googleClientId,
  facebookClientId,
  twitterClientId,
  githubClientId,
  githubClientId_dev
}

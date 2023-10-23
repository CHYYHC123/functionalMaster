import { request } from '@/utils'

export default {
  getUser: () => request.get('/users/user/info'),
  refreshToken: () => request.post('/users/auth/refreshToken'),
}

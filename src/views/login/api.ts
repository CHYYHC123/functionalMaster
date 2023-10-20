import { request } from '@/utils'
import type { RequestConfig } from '~/types/axios'

export default {
  login: (data = {}) => {
    return request.post('users/auth/login', data, { noNeedToken: true } as RequestConfig)
  },
}

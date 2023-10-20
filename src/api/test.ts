import { request } from '@/utils'

export function findUsers() {
  return request.get('users/auth/test');
}
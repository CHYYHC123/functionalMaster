import { request } from '@/utils'

export function findUsers() {
  return request.get('api/users/test');
}
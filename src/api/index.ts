import request from '@/lib/request/index'

export default function () {
  return request<any>({
    method: 'post',
    url: '/login',
  })
}

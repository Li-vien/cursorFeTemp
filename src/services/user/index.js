import request from '../request'

// GET 请求示例
export function getList(params) {
  return request({
    url: '/example/list',
    method: 'get',
    params
  })
}

// POST 请求示例
export function create(data) {
  return request({
    url: '/example/create',
    method: 'post',
    data
  })
}

// PUT 请求示例
export function update({ id, data }) {
  return request({
    url: `/example/${id}`,
    method: 'put',
    data
  })
}

// DELETE 请求示例
export function remove(id) {
  return request({
    url: `/example/${id}`,
    method: 'delete'
  })
}

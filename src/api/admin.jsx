import axios from 'axios'
// https://ecom2024-api-phi.vercel.app/api/admin/orders

export const getOrdersAdmin = async (token) => {
  // code body
  return axios.get('https://ecom2024-api-phi.vercel.app/api/admin/orders',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}
export const changeOrderStatus = async (token, orderId, orderStatus) => {
  // code body
  return axios.put('https://ecom2024-api-phi.vercel.app/api/admin/order-status',
    { 
      orderId, 
      orderStatus 
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}

export const getListAllUsers = async (token) => {
  // code body
  return axios.get('https://ecom2024-api-phi.vercel.app/api/users',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}
export const changeUsersStatus = async (token,value) => {
  // code body
  return axios.post('https://ecom2024-api-phi.vercel.app/api/change-status',
    value,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}
export const changeUsersRole = async (token,value) => {
  // code body
  return axios.post('https://ecom2024-api-phi.vercel.app/api/change-role',
    value,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}
export const loginConfig = (username,password) => ({
  url: 'login',
  method: 'PUT',
  data: {
    username,
    password
  }
})


export const signupConfig = (username,password) => ({
    url: 'user',
    method: 'POST',
    data: {
      username,
      password
    }
  })
  
  
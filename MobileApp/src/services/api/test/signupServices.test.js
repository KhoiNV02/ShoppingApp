import {signupConfig} from '../signupServices';

describe('signupConfig', () => {
  it('should return correct config for signup', () => {
    const username = 'exampleUser';
    const password = 'examplePassword';
    const expectedConfig = {
      url: 'user',
      method: 'POST',
      data: {
        username,
        password,
      },
    };

    expect(signupConfig(username, password)).toEqual(expectedConfig);
  });
});

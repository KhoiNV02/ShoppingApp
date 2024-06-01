import {loginConfig} from '../loginServices';

describe('Service Configurations', () => {
  describe('loginConfig', () => {
    it('should return correct config for logging in with username and password', () => {
      const username = 'testuser';
      const password = 'testpassword';
      const expectedConfig = {
        url: 'login',
        method: 'PUT',
        data: {
          username,
          password,
        },
      };

      expect(loginConfig(username, password)).toEqual(expectedConfig);
    });

    it('should handle empty username and password', () => {
      const username = '';
      const password = '';
      const expectedConfig = {
        url: 'login',
        method: 'PUT',
        data: {
          username,
          password,
        },
      };

      expect(loginConfig(username, password)).toEqual(expectedConfig);
    });

    it('should handle undefined username and password', () => {
      const username = undefined;
      const password = undefined;
      const expectedConfig = {
        url: 'login',
        method: 'PUT',
        data: {
          username,
          password,
        },
      };

      expect(loginConfig(username, password)).toEqual(expectedConfig);
    });
  });
});

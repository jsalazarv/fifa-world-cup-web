import { BaseService } from './BaseService.js';

export class AuthService extends BaseService {
  path = 'auth';

  async signup(payload) {
    return this.client.post('/signup', payload);
  }
}

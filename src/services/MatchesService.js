import { BaseService } from './BaseService.js';

export class MatchesService extends BaseService {
  async getMatches() {
    return this.client.get('/matches');
  }
}

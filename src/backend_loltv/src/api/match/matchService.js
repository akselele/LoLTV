export default class matchService {
  constructor({
    matchRepository,
  }) {
    this.matchRepository = matchRepository;
  }
  
  async getMsiGames() {
    return this.matchRepository.getMsiMatches();
  }
}

export default class matchService {
  constructor({
    matchRepository,
  }) {
    this.matchRepository = matchRepository;
  }

  getMsiGames() {
    return this.matchRepository.getMsiGames();
  }

  getGameById(id) {
    return this.matchRepository.getGameById(id);
  }

  getShortGameById(id) {
    return this.matchRepository.getShortGameById(id);
  }
}

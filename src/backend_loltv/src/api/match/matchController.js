export default class matchController {
  constructor({ matchService }) {
    this.matchService = matchService;
  }

  async getMsiGames(req, res) {
    try {
      const matches = await this.matchService.getMsiGames();
      res.status(200).json({ matches });
    } catch (err) {
      console.error(err);
      res.status(400).json({ errMessage: err.message });
    }
  }
}

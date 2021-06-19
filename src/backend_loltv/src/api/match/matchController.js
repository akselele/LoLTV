export default class matchController {
  constructor({ matchService }) {
    this.matchService = matchService;
  }

  // async getUpcomingMatches(req, res) {
  //   try {
  //     const matches = await this.matchService.getUpcomingMatches();
  //     res.status(200).json({ matches });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(400).json({ errMessage: err.message });
  //   }
  // }

  // async getGames(req, res) {
  //   try {
  //     const matches = await this.matchService.getGames();
  //     res.status(200).json({ matches });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(400).json({ errMessage: err.message });
  //   }
  // }
}

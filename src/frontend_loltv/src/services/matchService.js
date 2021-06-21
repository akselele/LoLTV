export async function getMsiGames(ctx) {
  try {
    const response = ctx.$axios.get('localhost:5500/api/matches/msi')
    console.log('here');
    return response.data;
  } catch (err) {
    return null;
  }
}

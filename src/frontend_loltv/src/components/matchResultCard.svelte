<script>
  export let id;
  export let team1;
  export let team2;
  export let winner;
  export let kills_t1;
  export let kills_t2;
  export let league;
  export let year;
  export let date;
  export let matchUrl;

  $: loser = team1 != winner ? team1 : team2;
  $: winnerScore = team1 == winner ? kills_t1 : kills_t2;
  $: loserScore = team1 != winner ? kills_t1 : kills_t2;
</script>

<main>
  <div class="results">
    <div class="eventName"><a href={matchUrl}>{league} {year}</a></div>
    <div class="teambox">
      <div class="teamrows">
        <div class="teamrow">{winner}</div>
        <div class="teamrow">{loser}</div>
      </div>
      <div class="scores">
        <div class="winnerScore">{winnerScore}</div>
        <div class="loserScore">{loserScore}</div>
      </div>
    </div>
  </div>
</main>

<style>
  .teambox .teamrows {
    flex: 1 1 auto;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  /* .results {
    max-height: 57.3333px;
    max-width: 145px;
  } */

  .teambox {
    display: flex;
  }

  .scores {
    flex: 0 0 auto;
    text-align: right;
  }

  .eventName {
    
  }

  .winnerScore {
    color: green;
  }

  .loserScore {
    color: red;
  }
</style>

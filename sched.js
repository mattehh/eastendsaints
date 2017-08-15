function round_robin(teams, weeks) {
  let count = teams.length;
  let sets = weeks / (count - 1);
  let half = count / 2
  for (turn = 1; turn <= weeks; turn++) {
    let pairings = [];
    for (i = 0; i < half; i++) {
      pairings.push([teams[i], teams[count - i - 1]]);
    }
    teams.splice(1,0,teams.pop());
    console.log(pairings[0].sort() + ' - ' + pairings[1].sort() + ' - ' + pairings[2].sort() + '   #  Week ' + turn);
  }
}

round_robin(['a', 'b', 'c', 'd', 'e', 'f'], 15);
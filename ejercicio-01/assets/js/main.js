const countVotes = (votes) => {
  //Inicializamos contadores para cada persona
    let votesPerCandidate = {};
    votes.forEach((item)=>{
        votesPerCandidate[item.candidate] = (votesPerCandidate[item.candidate] || 0) + 1;
    })
    console.log(votesPerCandidate);
    return votesPerCandidate;
};

const showResults = (votesPerCandidate) => {
    alert("Resultado de la votacion =>")
    for (const candidate in votesPerCandidate) {
      alert(`${candidate}: ${votesPerCandidate[candidate]} votos`);
    }
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    
    showResults(countVotes(votes));
}

main();

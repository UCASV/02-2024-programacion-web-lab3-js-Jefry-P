//funcion para contar votos, recibe votos y los agrupa por cantidad
const countVotes = (votes) => {
    let votesPerCandidate = {};
    //por cada item del arreglo votos verifica en nuestro nuevo objeto si el candidato existe y a su vez lleva la sumatoria de sus votos.
    votes.forEach((item)=>{
        votesPerCandidate[item.candidate] = (votesPerCandidate[item.candidate] || 0) + 1;
    })
    //retornamos objeto
    return votesPerCandidate;
};
//funcion para mostrar los resultados
const showResults = (votesPerCandidate) => {
    alert("Resultado de la votacion =>")
    //iteramos sobre nuestro objeto
    for (const candidate in votesPerCandidate) {
        //damos el formato que queremos a nuestra respuesta
      alert(`${candidate}: ${votesPerCandidate[candidate]} votos`);
    }
}

const main = () => {
    //arreglo de votos
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    //ejecucion en cadena
    showResults(countVotes(votes));
}

main();

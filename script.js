const element = document.getElementById("cliccami");
element.addEventListener('click', 
    function() {
        // NOME
        const nome = document.getElementById("nome").value;
        document.getElementById('nomeBiglietto').innerHTML = nome;
        console.log( "Il nome è " + nome);
        
        // ETA'
        const eta = document.getElementById("eta").value;
        console.log("L'età è: " + eta)

        // PREZZO
        if (eta == 1)
        {
            const prezzo = parseFloat((document.getElementById("distanza").value * 0.21) * 0.80).toFixed(2);
            console.log("Sconto minorenne del 20%")
            console.log("Il prezzo è " + prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }
        else if (eta == 2) 
        {
            const prezzo = parseFloat(document.getElementById("distanza").value * 0.21).toFixed(2);
            console.log("Nessuno sconto")
            console.log("Il prezzo è " + prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }
        else if (eta == 3)
        {
            const prezzo = parseFloat((document.getElementById("distanza").value * 0.21) * 0.60).toFixed(2);
            console.log("Sconto over 65 del 40%")
            console.log("Il prezzo è " + prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }
});




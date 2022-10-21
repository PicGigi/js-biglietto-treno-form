const element = document.getElementById("cliccami");
element.addEventListener('click', 
    function() {
        // NOME
        const nome = document.querySelector('[name=nome]').value;
        document.getElementById('nome').innerHTML = nome;
        console.log( "Il nome è " + nome);
        
        // ETA'
        const eta = document.querySelector('[name=eta]').value;
        console.log("L'età è: " + eta)

        // PREZZO
        if (età = 1)
        {
            const prezzo = parseFloat((document.querySelector('[name=distanza]').value * 0.21) * 0.80).toFixed(2);
            console.log("Sconto minorenne del 20%")
            console.log("Il prezzo è " + prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }

        else if (età = 2) 
        {
            const prezzo = parseFloat(document.querySelector('[name=distanza]').value * 0.21).toFixed(2);
            console.log("Nessuno sconto")
            console.log("Il prezzo è " + prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }

        else if (età = 3)
        {
            const prezzo = parseFloat((document.querySelector('[name=distanza]').value * 0.21) * 0.60).toFixed(2);
            console.log("Sconto over 65 del 40%")
            console.log("Il prezzo è " + prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }
});




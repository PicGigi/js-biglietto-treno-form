const nome = document.querySelector('[name=nome]').value;

const prezzo = parseFloat(document.querySelector('[name=distanza]').value * 0.21);

const element = document.getElementById("cliccami");
element.addEventListener('click', 
    function() {
        const nome = document.querySelector('[name=nome]').value;
        document.getElementById('nome').innerHTML = nome;
        console.log( "Il nome è " + nome);
        
        if (document.querySelector('[name=età]').value = 0)
        {
            const prezzo = parseFloat((document.querySelector('[name=distanza]').value * 0.21) * 0.80).toFixed(2);
            console.log("sconto minorenne")
            console.log(prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }
        else if (document.querySelector('[name=età]').value = 1) 
        {
            console.log("nessuno sconto")
            console.log(prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }
        else if (document.querySelector('[name=età]').value = 2)
        {
            const prezzo = parseFloat((document.querySelector('[name=distanza]').value * 0.21) * 0.60).toFixed(2);
            console.log("sconto over 65")
            console.log(prezzo);
            document.getElementById('prezzo').innerHTML = prezzo;
        }
});




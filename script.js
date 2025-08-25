function associazione() {
    let messaggio = 'Sei sicuro di voler entrare a far parte della nostra associazione? Non puoi tornare indietro.';
    if (confirm(messaggio)) alert('Sei entrato con successo nella nostra associazione! Sono 72€ + IVA.');
    else alert('Ci dispiace che tu non ci voglia vendere la tua anima.');
}

function linksButton() {
    var x = document.getElementById('links');
    if (x.style.display === 'block') x.style.display = 'none'
    else x.style.display = 'block';
}
// Pas het script aan volgens de richtlijnen
let palet = new Array('wit','blauw','groen','rood','zwart');
document.write('<br />palet is nu: ' + palet);

let nieuwekleur = prompt('Nieuwe kleur');

// Stop de nieuwekleur ACHTERAAN in de palet array
palet.push(nieuwekleur);
document.write('<br />palet is nu: ' + palet);

// Stop de nieuwekleur VOORAAN in de palet array
let nieuwekleur2 = prompt('Typ een nieuwe kleur in:');
palet.unshift(nieuwekleur2);
document.write('<br />palet is nu: ' + palet);

palet.sort(); // Op alphabetische volgorde
document.write('<br />palet is nu: ' + palet);

// Pas het script aan volgens de richtlijnen
let palet = new Array('wit','blauw','groen','rood','zwart');
document.write('<br />palet is nu: ' + palet);

let nieuwekleur = prompt('paars');

// Stop de nieuwekleur ACHTERAAN in de palet array
palet.push(nieuwekleur);
document.write('<br />palet is nu: ' + palet);

// Stop de nieuwekleur VOORAAN in de palet array
let nieuwekleur = prompt( 'Typ een nieuwe kleur in:');
palet.unshift(nieuwekleur);
document.write('<br />palet is nu: ' + palet);

plaet.sort();
document.write('<br />palet is nu: ' + palet);

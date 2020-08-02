//ler a pagina do insta

//pegar os comentarios / arrobas
const fakeAtSign = [
    '@neymar',
    '@harrystyles',
    '@louist91',
    '@niallhoran',
    '@mileycyrus',
    '@beyonce',
    '@badgalriri',
    '@taylorswift',
    '@aliciakeys',
    '@ritaora',
    '@beyonce',
    '@therealcarlospena',
    '@sivathewanted',
    '@louist91',
    '@birdspotting',
    '@manugavassi',
    '@pitty',
    '@micheltelo',
    '@lucaslucco',
    '@claudialeitte',
    '@emmawatson'
]

//contar arrobas repetidas

function count(atsing){
    const count = {};
    atsing.forEach(atsing => { count[atsing] = ( count[atsing] || 0) +1 });
    return count;
}
//console.log(count(fakeAtSign));

//ordenar

function sort(counted) {
    const entries = Object.entries(counted);
    //console.log(entries);
    const sorted = entries.sort((a,b) => b[1] - a[1]);
    console.log(sorted);
}

sort(count(fakeAtSign));
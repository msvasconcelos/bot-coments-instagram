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
console.log(count(fakeAtSign));
//ordenar

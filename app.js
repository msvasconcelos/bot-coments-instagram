const puppeteer = require('puppeteer');

//ler a pagina do insta

async function start() {

    async function loadMore(page, selector) {
        const moreButton = await page.$(selector);
        if(moreButton){
            console.log("More")
            await moreButton.click();
            await page.waitFor(selector, {timeout: 3000}).catch(() => { console.log("timeout") });
            await loadMore(page, selector)
        }
    }

    //pegar os comentarios / arrobas

async function getComments(page, selector) {
    const comments = await page.$$eval(selector, links => links.map(link => link.innerText))
    return comments ;
}

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/p/CChMVvQgYKK/');

    await loadMore(page, '.dCJp8');
    const atsing = await getComments(page, '.C4VMK span a');
    const counted = count(atsing);
    const sorted = sort(counted); 
    sorted.forEach(arroba => { console.log(arroba) })
    
    await browser.close();
}



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
    return sorted
}

//sort(count(fakeAtSign));
start();
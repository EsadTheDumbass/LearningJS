const button = document.querySelector('button');
const span = document.querySelector('span');
const body = document.querySelector('body');
const quotes = ['"We grow fearless when we do the things we fear.', '"Impossible is just an opinion."', '"Very inspirational quote by me for me and is me."'];

function quote() {
    const quoteIndex= parseInt(Math.random() * quotes.length);
    span.textContent = quotes[quoteIndex];
    console.log('working');
}

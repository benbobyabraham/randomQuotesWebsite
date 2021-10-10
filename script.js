const quoteText = document.getElementById('quote-text'),
      quoteTags = document.getElementById('quote-tags'),
      quoteAuthor = document.getElementById('quote-author'),
      getQuoteBtn = document.getElementById('get-quote');

function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.content;
        quoteTags.textContent = data.tags;
        quoteAuthor.textContent = `-- ${data.author}`;
      });
}

randomQuote();
getQuoteBtn.addEventListener('click', () =>{
    randomQuote();
});
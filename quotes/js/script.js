/*
https://youtu.be/Kp3HGwlXwCk?t=2169 - how to display quotes
https://youtu.be/LoziivfAAjE - how to use cheerio to scrape html
https://www.youtube.com/watch?v=j588XXF4f2Y&list=PLYxzS__5yYQmDD-0A0Jvy27lUnrGIsq9o - how to use 'requirejs'. To use 'require' in a browser.
*/

require.config({
    "packages": ["request", "cheerio"]
});
require(['request', 'cheerio'],
    function (request, cheerio) {
        const quoteBtn = document.querySelector('.displayQuoteBtn');
        const quoteAuthor = document.querySelector('.author');
        const quote = document.querySelector('#quote');

        quoteBtn.addEventListener('click', addQuote);




        const quotes_link = "https://www.goodreads.com/author/quotes/61876.Giordano_Bruno"
        const quotes = [];
        request(quotes_link, (error, response, html) => {
            if(!error && response.statusCode == 200) {
                // $ - something similar to JQuery
                const $ = cheerio.load(html);
                const quote = $('.quoteText');
                //.split(`- Giordano Bruno`)
                // console.log(quote.toArray().text());

                
                quotes.each(function(i, elem) {
                    quotes[i] = $(this).text();
                });
            }
        })


        function addQuote() {
            let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
            quote.innerHTML = quotes[randomQuoteIndex]['quote'];
            quoteAuthor.innerHTML = quotes[randomQuoteIndex]['name'];
        }
    }
)
// const request = require('request');
// const cheerio = require('cheerio');
// import request from 'request';
// import cheerio from 'cheerio'



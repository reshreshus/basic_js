// resource - https://www.youtube.com/watch?v=LoziivfAAjE
const request = require('request');
const cheerio = require('cheerio');

const quotes_link = "https://www.goodreads.com/author/quotes/61876.Giordano_Bruno"

request(quotes_link, (error, response, html) => {
    if(!error && response.statusCode == 200) {
        // $ - something similar to JQuery
        const $ = cheerio.load(html);
        const quote = $('.quoteText');
        //.split(`- Giordano Bruno`)
        // console.log(quote.toArray().text());

        const quotes = [];
        quotes.each(function(i, elem) {
            quotes[i] = $(this).text();
        });
    }
})
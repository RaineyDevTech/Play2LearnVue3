let interval;
const quotes = ["\"Wonderful like i can't be believing!!\"",
    "\"Best thing ever!\"", "\"Where has this been all my life?\""
];
const names = ["-Joe Schmo", "-John Doe", "-Frank Furter"];

//function to toggle quote on home page
function toggleQuote() {


    quotes.forEach(function(item) {
        let i = 0;

        interval = setInterval(function() {

            document.getElementById("quote-text").innerHTML = quotes[i];
            console.log(quotes[i]);
            document.getElementById("author").innerHTML = names[i];
            console.log(names[i]);
            i++;

            if (i === 3) { i = 0 };


        }, 5000);
    });


}



window.addEventListener('load', toggleQuote());
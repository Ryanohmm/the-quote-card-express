"use strict"
async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}



/*
const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "Dammit, Miles, I'm Not Gonna Lose You Too!",
        author: "Peter Parker",
    },

    {
        quote: "I Promise To Do Everything In My Power To Protect This City!",
        author: "Miles Morales",
    },

    {
        quote: "Be Greater, Be Yourself.",
        author: "Miles Morales",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000); */
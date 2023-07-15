var quotes=[{caption:"“Be yourself; everyone else is already taken.”",author:"― Oscar Wilde"},
{caption:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",author:"― Marilyn Monroe"},
{caption:"“A room without books is like a body without a soul.”",author:"― Marcus Tullius Cicero"},
{caption:"“So many books, so little time.”",author:"― Frank Zappa"},
{caption:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",author:"― William W. Purkey"},
{caption:"“You only live once, but if you do it right, once is enough.”",author:"― Mae West"},
{caption:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",author:"― Dr. Seuss"},
{caption:"“In three words I can sum up everything I've learned about life: it goes on.”",author:"― Robert Frost"},
{caption:"“If you tell the truth, you don't have to remember anything.”",author:"― Mahatma Gandhi"},
{caption:"“Be the change that you wish to see in the world.”",author:"― Mark Twain"},
]



var box;
var button= document.getElementById("btn");
var quote=document.getElementById("quote");

var lastQuoteIndex = -1;

function getRandomIndex() {
  var randomIndex = Math.floor(Math.random() * quotes.length);

  // If the random index is the same as the last one, generate a new one
  while (randomIndex === lastQuoteIndex) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }

  // Update the last quote index
  lastQuoteIndex = randomIndex;

  return randomIndex;
}

button.onclick = function() {
  var randomIndex = getRandomIndex();
  box = `<p class="my-3 text-center">${quotes[randomIndex].caption}</p>
         <p class="my-3">${quotes[randomIndex].author}</p>`;
  quote.innerHTML = box;
};
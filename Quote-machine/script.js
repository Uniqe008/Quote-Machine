var quotes = [
  {
    quote: "“Be yourself, everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  { quote: "“So many books, so little time.”", author: "Frank Zappa" },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    author: "William W. Purkey",
  },
  {
    quote: "“The only way to do great work is to love what you do.”",
    author: "Steve Jobs",
  },
  {
    quote:
      "“In the end, it's not the years in your life that count. It's the life in your years.”",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    author: "Winston Churchill",
  },
  {
    quote: "“Life is what happens when you're busy making other plans.”",
    author: "John Lennon",
  },
  {
    quote:
      "“The only thing necessary for the triumph of evil is for good men to do nothing.”",
    author: "Edmund Burke",
  },
];

function displayRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  document.getElementById("text").innerHTML = randomQuote.quote;
  document.getElementById("author").innerHTML = "-" + randomQuote.author;
}

document.getElementById("new-quote").onclick = displayRandomQuote;

// Display a random quote when the page first loads
displayRandomQuote();

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

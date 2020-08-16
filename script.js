const quoteArr = [
  {
    quote: "What can men do against such reckless hate?",
    author: "King Theodin (LOTR)",
    color: "rgb(159, 217, 228)"
  },
  {
    quote: "Maybe I'm born with it, or maybe it's Maybelline.",
    author: "Maybelline",
    color: "rgb(188, 159, 228)"
  },
  {
    quote: "Revelry in the dark.",
    author: "Tokoyami (My Hero Acadamia)",
    color: "rgb(103, 103, 103)"
  },
  {
    quote: "I eat a chip.",
    author: "NOT Light Yagami (Death Note)",
    color: "rgb(238, 180, 84)"
  },
  {
    quote: "Worse things have happened. I think we're gonna be fine.",
    author: "Tony Stark (Iron Man)",
    color: "rgb(63, 62, 126)"
  },
  {
    quote: "Just like the astronauts eat!",
    author: "Spongebob",
    color: "rgb(242, 170, 170)"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium cursus nibh, non accumsan metus ultrices sit amet. Mauris vitae consectetur nisi. Aenean vitae lorem imperdiet, sollicitudin neque accumsan, vehicula tortor.",
    author: "Fake News",
    color: "red"
  }
]


const fetchQuote = () => {
const num = Math.floor(Math.random() * quoteArr.length);
  
  let currentObj = quoteArr[num];
   
  document.querySelector('#text').innerHTML = currentObj.quote;
  document.querySelector('#author').innerHTML = '- ' + currentObj.author;
  document.querySelector('#container').style.backgroundColor = currentObj.color;
 const btnClass = document.querySelectorAll('.btn');
  btnClass.forEach(el => {
    el.style.backgroundColor = currentObj.color;
  });
  const textClass = document.querySelectorAll('p');
  textClass.forEach(el => {
    el.style.color = currentObj.color
  })
  
  
  const twitterURL = () => {
    const hashParam = "?hashtags=quotes"
  const textParam = "&text=";
    const urlParam = '&url=tjonesdev.github.io'
  const quoteParam = '"' + currentObj.quote.replace(/\s/g, '%20') + '"%20';
  const authorParam = currentObj.author.replace(/\s/g, '%20');
    const URL = hashParam + textParam + quoteParam + authorParam + urlParam;
    return URL;
} 
 
  return currentObj, twitterURL();
}
document.querySelector('#tweet-quote').href = document.querySelector('#tweet-quote').href + fetchQuote();
console.log(fetchQuote());
window.addEventListener('load', fetchQuote);

document.querySelector('#new-quote').addEventListener('click', fetchQuote);

// variables

let btn = document.querySelector("#btn-newQuote");
let quot = document.querySelector('.quote');
let person = document.querySelector('.person');

//quotes
const quotes = [{quote: '"The best way to find yourself is to lose yourself in the service of others."', person:'Mahatma Gandhi'},
{quote: '"If you want to live a happy life, tie it to a goal, not a people or things."', person:'Albert Einstein'},
{quote: '"At his best, man is the noblest of all animals; separated from law and justice he is the worst"', person:'Arisotle'},
{quote: '"Your time is limited, so dont wast it living someone else`s life."', person:'Steve Jobs'},
{quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."', person:'Benjamin Franklin'}, 
{quote: '"t does not matter how slowly you go as long as you do not stop."', person:'Confucius'},
{quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck."', person:'Dalai Lama'},
{quote: '"The journey of a thousand miles begins with one step."', person:'Lao Tzu'},
{quote: '"I cannot stop, because I am almost there."', person:'Monday Stephen'}, 
{quote: '"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."', person:'Abraham Lincoln'}];


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quot.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
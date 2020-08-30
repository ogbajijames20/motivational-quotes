let myButton=document.getElementById("btn");
let body=document.getElementById("main");
let displayRan=document.getElementById("display");
const quote=document.getElementById("quote");
const author=document.getElementById("author");

myButton.addEventListener("click", changeQuote);
function changeQuote() {
let randomQuote= [
    {
        quote:"A reader lives a thousand lives before he dies. The man who never reads lives only one.",
        author:"George R.R. Martin"
    },
    {
        quote:"Never stop learning because life never stops teaching",
        author:"Unknown"
    },
    {
        quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"Education is the most powerful weapon you can use to change the world",
        author:"Nelson Mandela"
    },
    {
        quote:"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
        author:"Brian Herbert"
    },
    {
        quote:"You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win",
        author:"Zig Ziglar"
    },
    {
        quote:"Talent wins games, but teamwork wins championships.",
        author:"Michael Jordan"
    },
    {
        quote:"A winner is a dreamer who never gives up",
        author:"Nelson Mandela"
    },
    {
        quote:"The secret of your future is hidden in your daily routine.",
        author:"Mke Murdock"
    },
    {
        quote:"Losers quit when they fail. Winners fail until they succeed.",
        author:"Robert Kiyosaki"
    },
    {
        quote:"It is never too late to be what you might have been.",
        author:"George Eliot"
    },
    {
        quote:"Don’t stop when you are tired. Stop when you are done",
        author:"Unknown"
    },
    {
        quote:"Don’t tell people about your dreams. Show them your dreams.",
        author:"Unknown"
    },
    {
        quote:"I’m not a product of my circumstances. I am a product of my decisions.",
        author:"Steven Covey"
    },
    {
        quote:"Don’t tell people about your dreams. Show them your dreams.",
        author:"Unknown"
    },
    {
        quote:"Revenge is a powerful motivator",
        author:"Marcus Luttrell"
    },
    {
        quote:"Make your fear of losing your greatest motivator.",
        author:"Unknown"
    },
    {
        quote:"You will never always be motivated, so you must learn to be disciplined",
        author:"Unknown"
    },
    {
        quote:"A champion is afraid of losing. Everyone else is afraid of winning",
        author:"Billie Jean King"
    },
    {
        quote:"Your only limit is your mind",
        author:"Unknown"
    },
    {
        quote:"Your mind is powerful. When you fill it with positive thoughts your whole world will change.",
        author:"Unknown"
    },
    {
        quote:"The difference between who you are and who you want to be is what you do",
        author:"Unknown"
    },
    {
        quote:"The greatest weapon against stress is the ability to choose one thought over another",
        author:"William James"
    },
    {
        quote:"It takes nothing to join the crowd. It takes everything to stand alone.",
        author:"Hans F. Hansen"
    },
    {
        quote:"Stop being afraid of what can go wrong and start being positive about what can go right.",
        author:"Unknown"
    },
    {
        quote:"If it doesn’t challenge you, it doesn’t change you",
        author:"Fred DeVito"
    },
    {
        quote:"A dream doesn’t become reality through magic; it takes sweat, determination and hard work",
        author:"Colin Powell"
    },
    {
        quote:"The best thing you can do is MASTER the chaos in you. You are not thrown into the fire, you ARE the fire.",
        author:"Mama Indigo"
    },
    {
        quote:"Flowers grow back even after the harshest winters. You will too.",
        author:"Jennae Cecilia"
    },
    {
        quote:"Be strong enough to let go and wise enough to wait for what you deserve",
        author:"Unknown"
    },
    {
        quote:"It’s okay to be a glowstick: Sometimes we have to break before we shine",
        author:"Jadah Sellner"
    },
    {
        quote:"Still, I rise",
        author:"Maya Angelou"
    },
    {
        quote:"Time is what we want most and what we use worst.",
        author:"William Penn"
    },
    {
        quote:"Time is money",
        author:"Benjamin Franklin"
    },
    {
        quote:"Better three hours too soon than a minute too late.",
        author:"Williams Shakespeare"
    },
    {
        quote:"Punctuality is not just limited to arriving at a place at right time, it is also about taking actions at right time",
        author:"Amit Kalantri"
    },
    {
        quote:"Time always exposes what you mean to someone",
        author:"Unknown"
    },
    {
        quote:"You can’t let your failures define you. You have to let your failures teach you.",
        author:"Barack Obama"
    },
    {
        quote:"Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
        author:"Bill Gates"
    },
    {
        quote:"Stop being afraid of what could go wrong, and start being excited about what could go right",
        author:"Tony Robbins"
    }
];
let num= Math.floor(Math.random()*randomQuote.length);
let myQuote=randomQuote[num];
console.log(myQuote);
quote.innerText=myQuote.quote;
author.innerText=myQuote.author;
}
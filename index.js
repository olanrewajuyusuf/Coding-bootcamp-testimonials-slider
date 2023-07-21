let quote = document.querySelector("blockquote");
let title = document.querySelector(".name-tag strong");
let work = document.querySelector(".name-tag p");
let links = document.querySelectorAll("a");
let quotes = [
    "If you want to lay the best foundation possible I'd recommed taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in a job of my dreams and so excited about the future."
]

console.log(quotes[1]);
links.forEach(link =>{
    quote.innerHTML = `" ${quotes[1]} "`;
    title.innerHTML = "Tanya Sinclair";
    work.innerHTML = "UX Engineer";
    link.onclick = ()=>{
        if(link.hash === "#image-1"){
            quote.innerHTML = `" ${quotes[1]} "`;
            title.innerHTML = "Tanya Sinclair";
            work.innerHTML = "UX Engineer";
        } else {
            quote.innerHTML = `" ${quotes[0]} "`;
            title.innerHTML = "John Tarkpor";
            work.innerHTML = "Junior Front-end Developer";
        }
    }
})
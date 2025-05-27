let newJoke=document.querySelector("#btn1");
let copyJoke=document.querySelector("#btn2");
let joke=document.querySelector("p");
const url="https://official-joke-api.appspot.com/random_joke";

const getJoke=async()=>{
    let response=await fetch(url);
    let obj=await response.json();
    let setup=obj.setup;
    let punchline=obj.punchline;
    joke.innerText=setup+" "+punchline;
};
getJoke();

newJoke.addEventListener("click",()=>{
    getJoke();
});

copyJoke.addEventListener("click",()=>{
    navigator.clipboard.writeText(joke.innerText);
    alert("Copied the text: " + joke.innerText);
});
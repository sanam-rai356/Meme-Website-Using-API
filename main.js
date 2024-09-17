let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = "https://meme-api.com/gimme";

let subreddits= ["catmemes","wholesomemes","dogmemes","me_irl"];

let getMeme = async()=>{
    //choose a random subreddit from the subreddit array
    let randomsubreddit = subreddits[Math.floor(Math.random()*subreddits.length)]
    let response = await fetch(`https://meme-api.com/gimme/${randomsubreddit}`);
    let data = await response.json();
    meme.src = data.url;
    title.innerHTML = data.title;
}

getMemeBtn.addEventListener("click", getMeme);


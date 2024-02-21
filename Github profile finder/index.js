const img = document.querySelector("#profile");
const Username = document.querySelector("#name");
const bio=document.querySelector("#bio");
const followers=document.querySelector("#followers");
const following=document.querySelector("#following");
const Repos=document.querySelector("#repo");
const  details=document.querySelector(".card");


function gitHubreq() {
    const userName = document.querySelector("#username");
    
    const ApiUrl = `https://api.github.com/users/${userName.value}`;
    console.log(ApiUrl)

  
        details.style.display="flex"
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", ApiUrl);
    xhr.onreadystatechange = function () {
    //   console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(data.avatar_url);
        img.src = `${data.avatar_url}`;
        Username.innerHTML = `${data.name}`;
        bio.innerHTML = `${data.bio}`;
        followers.innerHTML = `${data.followers}`;
        following.innerHTML = `${data.following}`;
        Repos.innerHTML = `${data.public_repos}`;
        bio.innerHTML = `${data.bio}`;
  
      }
    };
    xhr.send();
}
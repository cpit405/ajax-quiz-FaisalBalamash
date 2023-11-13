const getReposButton = document.getElementById("get-repos");
const reposList = document.getElementById("repos-list");

getReposButton.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  /* Send an HTTP GET request to the GitHub /users/{username}/repos end point and 
    display the list of repositories in the <ul> element provided in the HTML code.
    */
  // Example: https://api.github.com/users/facebook/repos
  const url = `https://api.github.com/users/${username}/repos`;
  const ulElement = document.getElementById("repos-list");
  // Fetch and display the list of repositories as li elements inside the ul element.
  const reponse = await fetch(url);
  const data = await reponse.json;
  ulElement.innerHTML = "";
  //iterate to all list and display the full_name
  data.forEach((repo) => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');

    //create an element with a link to repo.html.url
    aElement.href = repo.html_url;
    aElement.target = "_blank";
    liElement.appendChild(aElement);
    
    liElement.innerText = repo.full_name;
    ulElement.appendChild(liElement);
});
});

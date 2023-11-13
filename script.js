const getReposButton = document.getElementById("get-repos");

getReposButton.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}/repos`;
  const ulElement = document.getElementById("repos-list");

    const response = await fetch(url);
    const data = await response.json();

    ulElement.innerHTML = ""; 

    data.forEach((repo) => {
      const liElement = document.createElement('li');
      const aElement = document.createElement('a');

      aElement.innerText = repo.full_name;
      aElement.href = repo.html_url;
      aElement.target = "_blank";

      liElement.appendChild(aElement);
      ulElement.appendChild(liElement);
    });
});

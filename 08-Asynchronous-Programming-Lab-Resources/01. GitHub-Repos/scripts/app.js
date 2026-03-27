async function loadRepos() {
   const resultElement = document.getElementById('res');

   let result = await fetch('https://api.github.com/users/testnakov/repos');
   const data = await result.text();

   resultElement.textContent = data;
}
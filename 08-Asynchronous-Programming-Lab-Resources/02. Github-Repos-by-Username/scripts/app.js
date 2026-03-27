async function loadRepos() {
	const inputUsername = document.getElementById('username').value.trim();
	const responseElement = document.getElementById('repos'); 

	const res = await fetch(`https://api.github.com/users/${inputUsername}/repos`);
	const data = await res.json();

	responseElement.innerHTML = '';

	for(let dataObject of data) {
		const listItem = document.createElement('li');
		const aElement = document.createElement('a');

		aElement.textContent = dataObject.full_name;
		aElement.href = dataObject.html_url;

		listItem.appendChild(aElement);
		responseElement.appendChild(listItem);
	}

	// data.forEach(dataObject => {
	// 	const listItem = document.createElement('li');
	// 	const aElement = document.createElement('a');

	// 	aElement.textContent = dataObject.full_name;
	// 	aElement.href = dataObject.html_url;

	// 	listItem.appendChild(aElement);
	// 	responseElement.appendChild(listItem);
	// });
}
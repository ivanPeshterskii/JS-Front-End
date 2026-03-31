const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles';

const mainElement = document.getElementById('main');

fetchArticles();
createBaseArticleElement();

async function fetchArticles() {
    const response = await fetch(`${baseUrl}/list`);
    const result = await response.json();
    const articles = Object.values(result);

    const articleElements = articles.map(createArticleElement);

    mainElement.append(...articleElements);
}

function createArticleElement(article) {
    const articleElement = createBaseArticleElement();

    articleElement.querySelector('.title').textContent = article.title;

    // Add show more click handler
    const showMoreButton = articleElement.querySelector('.button');
    showMoreButton.id = article._id;
    showMoreButton.addEventListener('click', showMoreButtonClickHandler)

    return articleElement;
}

function createBaseArticleElement() {
    const baseArticleElement = document.createElement('div');

    baseArticleElement.classList.add('accordion');

    baseArticleElement.innerHTML = `
        <div class="head">
            <span class="title"></span>
            <button class="button">More</button>
        </div>
        <div class="extra">
            <p></p>
        </div>
    `;


    return baseArticleElement;
}

async function showMoreButtonClickHandler(e) {
    const button = e.currentTarget;
    const articleId = button.id;
    const articleElement = button.closest('.accordion');
    const hiddenElement = articleElement.querySelector('.extra');

    // Collapse button if needed
    if (button.textContent === 'LESS') {
        hiddenElement.style.display = 'none';
        button.textContent = 'MORE';

        return;
    }

    // Create request for specific article
    const response = await fetch(`${baseUrl}/details/${articleId}`);
    const article = await response.json();

    // Add detailed content to hidden area
    hiddenElement.querySelector('p').textContent = article.content;

    // Show hidden area
    hiddenElement.style.display = 'block';

    // Change button text
    button.textContent = 'LESS';
}

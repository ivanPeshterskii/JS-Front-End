const baseUrl = 'http://localhost:3030/jsonstore';

function attachEvents() {
    const selectElement = document.getElementById('posts');
    const loadBlogsButton = document.getElementById('btnLoadPosts');
    const viewBlogButton = document.getElementById('btnViewPost');

    loadBlogsButton.addEventListener('click', async (e) => {
        // Make a request
        const response = await fetch(`${baseUrl}/blog/posts`);
        const result = await response.json();

        // Transform the result
        const blogs = Object.values(result);

        // Create select options
        const optionElements = blogs.map(blog => createOption(blog.id, blog.title));

        // Clear select before attach
        selectElement.innerHTML = '';

        // Attach options to select
        selectElement.append(...optionElements);
    });

    viewBlogButton.addEventListener('click', async (e) => {
        // Get selected blog id 
        const selectedPostId = selectElement.value;

        // Get posts request
        const response = await fetch(`${baseUrl}/blog/posts/${selectedPostId}`);
        const post = await response.json();

        // populate details data
        const postTitleElement = document.getElementById('post-title');
        const postBodyElement = document.getElementById('post-body');

        postTitleElement.textContent = post.title;
        postBodyElement.textContent = post.body;

        // Get comments 
        const commentsResponse = await fetch(`${baseUrl}/blog/comments`);
        const commentsResult = await commentsResponse.json();
        const allComments = Object.values(commentsResult);

        // Filter comments for selected post
        const postComments = allComments.filter(comment => comment.postId === selectedPostId);

        // Create li comment elements
        const commentLiElements = postComments.map(postComment => createLiElement(postComment.id, postComment.text));

        // Get comments ul element container
        const commentUlElement = document.getElementById('post-comments');

        // Attach comment li elements to ul element container
        commentUlElement.append(...commentLiElements);
    });
}

function createOption(key, title) {
    const optionElement = document.createElement('option');

    optionElement.value = key;
    optionElement.textContent = title;

    return optionElement;
}

function createLiElement(id, title) {
    const liElement = document.createElement('li');

    liElement.id = id;
    liElement.textContent = title;

    return liElement;
}

attachEvents();

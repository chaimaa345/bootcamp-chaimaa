// fetch-data.js
const axios = require('axios');

async function fetchAndDisplayPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    posts.forEach(post => {
      console.log(`Title: ${post.title}`);
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
}

// Export the function to use in app.js
module.exports = fetchAndDisplayPosts;

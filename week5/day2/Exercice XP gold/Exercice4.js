const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const responses = await Promise.all(
      urls.map(async url => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      })
    );

    const [users, posts, albums] = responses;
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
    
  } catch (error) {
    console.log("ooooooops", error.message);
  }
};

getData();



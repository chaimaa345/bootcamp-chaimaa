import axios from 'axios';

export default async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log("📦 Data fetched:");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Error fetching data:", error.message);
  }
}


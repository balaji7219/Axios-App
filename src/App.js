import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      
    });
  }, []);

  if (!post) return null;

  return (
    <div className="App">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
export default App;



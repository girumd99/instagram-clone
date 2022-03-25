import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {

  const [posts, setPosts] = useState ([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Hello, This is an instagram clone built using React.js</h1>
        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption}
            imageUrl={post.imageURL} 
            />
          ))
        }
         
    </div>
  );
}

export default App;
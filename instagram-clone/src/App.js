import './App.css';
import Post from './post';
function App() {
  return (
    <div className="App">
      
      <div className="app__header">
        <img
      className= "app__headerImage"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyUXT8IpVkv4h6j9lSirVqC0bfJRhObw2q-WjJGzB_0hGXNbrVmsH8bQChHZWWz1fOH4&usqp=CAU"
      alt=" "  

        />

      </div>
      <h1> This is my new instagram website</h1>
      <Post />
    </div>
  );
}

export default App;

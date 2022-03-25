import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db,auth } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import ImageUpload from './ImageUpload';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] =useState(getModalStyle);

  const [posts, setPosts] = useState ([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
       
      }
      else {
        setUser(null);
      }
    })
  }, [user, username]);
  
  useEffect(() => {

    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
     setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
const signUp = (event) => {
event.preventDefault();
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((authUser) => {
    return authUser.user.updateProfile({
      displayName: username
    })
  })
  .catch((error) =>
    alert(error.message));
    setOpen(false);
}
  const signIn = (event) => {
    event.preventDefault();
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => alert(error.message));
  setOpenSignIn(false);
  }  
return (
    <div className="app">
      <ImageUpload />
      
       <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
         <div style={modalStyle} className={classes.paper}>
           <form className="app__signup">
           <center>
         <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        
          />
          </center>
          <Input
          placeholder='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <Input
        placeholder='email'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <Input
        placeholder='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit' onClick={signUp}>Sign Up</Button>
        </form>
        
    </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
         <div style={modalStyle} className={classes.paper}>
           <form className="app__signup">
           <center>
         <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        
          />
          </center>
          
        <Input
        placeholder='email'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <Input
        placeholder='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit' onClick={signIn}>Sign In</Button>
        </form>
        
    </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>

      ): (
        <div className="app__loginContainer">
        <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
        <Button onClick={() => setOpen(true)}>Sign Up</Button>
        </div>
      )} 
      

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
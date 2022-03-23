import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar";

function post() {
  return (
    <div className='post'>
        <div className='post__header'>
        <Avatar 
        className='post__avatar'
        alt='girumd99'
        src=''
        />
        <h3>userName</h3>
        </div>
        <img
            className="post__img" 
            src="https://reactjs.org/logo-og.png"
        />
        <h5 className='post__txt'><strong>name </strong>new post</h5>
    </div>
  )
}

export default post
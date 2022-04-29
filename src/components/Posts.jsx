import React from 'react';
import Post from './Post';

export  function Posts({ posts }){
      return (
        <>
        {
         posts.map(post => <Post post={post} key={post.id}/>)
        }
        </>
      );
  
  }



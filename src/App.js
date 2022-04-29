import React from  "react";
import { useSelector } from 'react-redux';
import './App.css';
import Form from  './components/Form';
import {Posts} from './components/Posts';

function App() {
const posts = useSelector(state => state.postsList.posts);


  return (
    <div className="main">
    <div className="caption">Posts list</div>
    <Form/>
    <div className="list-posts">
    <Posts posts={posts}/>
    </div>
    </div>
      
  );
}

export default App;

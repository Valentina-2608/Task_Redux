import React from 'react';
import {Card, CardActionArea, CardContent, Typography, CardActions, Button, TextField} from '@mui/material';
import { useDispatch } from 'react-redux';
import {deletePost} from '../store/actions/action';
import {editPost}   from '../store/actions/action';
import {useState} from 'react';

export default function Post ({ post }){
const dispatch = useDispatch();
const [edit, setEdit] = useState(false);
const [value, setValue] = useState('');

const deleteOnePost = (id) => {
    dispatch(deletePost(id))
}

const editOnePost = (post) => {
      const savedPost = {
         title:value,
         id: post.id
      }
      dispatch(editPost(savedPost));
      setEdit(false);
}

  return (
    <Card variant="outlined" style = {{width: 500, margin:20}}>
     <CardActionArea>
      <CardContent>{
          edit ? (
            <>
            <TextField 
              label="Edit post"
              value={value}
              onChange={event => setValue(event.target.value)}
              />
              <Button onClick = {() => editOnePost(post) }   variant="outlined" style={{width:100, padding:5}}>Save</Button>
              <Button onClick={() => setEdit(false)} variant="outlined" style={{width:100, padding:5}}>Cancel</Button>
            </>
              
          ) : (
            <>
            <Typography variant="h4">
              {post.title}
             </Typography>
    
               <Typography variant="h5">
               {post.description}
               </Typography>
            </>
            
          )
        }
         
      </CardContent>
     </CardActionArea>
     <CardActions>
     <Button onClick={() => {setEdit(true); setValue(post.title)}} variant="outlined" style={{width:100, padding:5}}>Edit</Button>
     <Button onClick={() => deleteOnePost(post.id)} variant="outlined" style={{width:100, padding:5}}>Delete</Button>
     </CardActions>
    </Card>


)


}
      
  


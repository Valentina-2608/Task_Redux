import React from 'react';
import {Button, TextField, Box} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addPost} from '../store/actions/action';

  export default function Form(){
    const dispatch = useDispatch();
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const addNewPost = (event) => {
       event.preventDefault();
       if (!value1 && !value2) return;
       const newPost = {
         title: value1,
         description: value2,
         id: Date.now().toString()
       }

       dispatch(addPost(newPost))
       setValue1('');
       setValue2('');
    }
    
      return (
          <form className="form" noValidate autoComplete='off'>
          <Box m={2} pt={3}>
          <TextField
            fullWidth
            label="Post title"
            id="title"
            style = {{width: 300}}
            variant="standard"
            onChange={event => setValue1(event.target.value)}
          />
          </Box>
          <Box m={2} pt={3}>
          <TextField
            fullWidth
            label="Description title"
            id="description"
            multiline
            rows={1}
            style={{width:700}}
            variant="standard"
            onChange={event => setValue2(event.target.value)}
          />
          </Box>
          <Box m={2} pt={3}>
          <Button onClick={addNewPost} variant="contained" color="primary" style={{width:150}}>Add post </Button>
          </Box>
          </form>
      );
  
  };


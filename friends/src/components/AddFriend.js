import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriend = ({getData}) => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err.response));
    getData();
  }

  const handleChange = event => {
    setNewFriend({ ...newFriend, [event.target.name]: event.target.value })
    console.log(newFriend)
  }

  return (
    <div className='add-friend-form'>
      <form onSubmit={handleSubmit}>
        <h2>Add a Friend</h2>
        <input 
          type='text'
          name='name'
          placeholder='name'
          onChange={handleChange}
          value={newFriend.name}
        />
        <input
          type='text'
          name='age'
          placeholder='age'
          onChange={handleChange}
          value={newFriend.age}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={handleChange}
          value={newFriend.email}
        />
        <button type='submit'>Add Friend</button>
      </form>
    </div>
  )
}

export default AddFriend;
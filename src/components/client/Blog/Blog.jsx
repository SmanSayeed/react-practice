import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Blog.css';
import { createPost, deletePost } from '../../../store/postSlice';

const Blog = () => {
  const [input, setInput] = useState({
    title: '',
    content: '',
    status: 'Active', // assuming 'Active' is the default status
  });

  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(createPost(input)); // assuming createPostAction is the action creator
  };

  return (
    <>
      <div>
        
        <form className='blogform' onSubmit={handleSubmit}>
          <input
            placeholder='title'
            value={input.title}
            type='text'
            onChange={handleInputChange}
            name='title'
          />
          <input
            placeholder='content'
            value={input.content}
            type='text'
            onChange={handleInputChange}
            name='content'
          />
          <select
            value={input.status}
            onChange={handleInputChange}
            name='status'
          >
            <option value='Active'>Active</option>
            <option value='Inactive'>Inactive</option>
          </select>
          <button type='submit'>
            Create
          </button>
        </form>
      </div>

      <div className='blogposts'>
        {posts.map((p,i) => (
          <React.Fragment key={i}>
            <div className='postscard'>
              <button className='btn btn-danger' onClick={()=>dispatch(deletePost(p.id))}>X</button>
              <h3>{p.title}</h3>
              <p>{p.content} </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Blog;

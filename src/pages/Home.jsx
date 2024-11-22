import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <section className="section">
      <h1 className="title has-text-white has-text-centered">Home</h1> 
      <div className="container"> 
        <PostList /> 
      </div> 
    </section>
  );
};

export default Home;
